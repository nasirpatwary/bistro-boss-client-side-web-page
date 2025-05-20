require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("./src/middleware/logger");
const port = process.env.PROT || 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// middleware
const optionsCors = {
  origin: [
    "http://localhost:5173",
    "https://test-project-68e91.web.app",
    "https://test-server-project-jet.vercel.app",
  ], // frontend origin
  credentials: true, // if you're using cookies or auth headers
};
app.use(cors(optionsCors));
app.use(logger);
app.use(express.json());
app.use(cookieParser());

// token verify
const verifiToken = async (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) return res.status(401).send({ message: "Token missing" });

  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
    if (err) return res.status(403).send({ message: "Token invalid" });
    req.user = decoded; // attach decoded info to req
    console.log("verifiToken ---->", req.user.email);
    next();
  });
};
const adminVerify = async (req, res, next) => {
  const email = req.user.email;
  const query = { email: email };
  const user = await userCollection.findOne(query);
  const isExist = user?.role === "admin";
  if (!isExist) return res.status(403).send({ message: "forbidden access" });
  next();
};
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.qhtx1li.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const db = client.db("test-project");
const userCollection = db.collection("users");
const productCollection = db.collection("products");
const testimonialCollection = db.collection("testimonial");
const ourMemberCollection = db.collection("members");
const carCollection = db.collection("cars");
const paymentCollection = db.collection("payments");

async function run() {
  try {
    // post jwt ----> json web token login jwt
    const isProd = process.env.NODE_ENV === "production";
    app.post("/login", async (req, res) => {
      const email = req.body;
      const token = jwt.sign(email, process.env.JWT_SECRET_TOKEN, {
        expiresIn: "365d",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: isProd, // true only in production
        sameSite: isProd ? "none" : "strict", // none for dev, strict for prod
        maxAge: 60 * 60 * 1000,
      });
      res.send({ message: "Logged in! JWT set in cookie." });
    });
    // get jwt ----> json web token logout jwt
    app.get("/logout", async (req, res) => {
      try {
        res.clearCookie("token", {
          httpOnly: true,
          secure: isProd,
          sameSite: isProd ? "none" : "strict",
        });
        res.send({ message: "Logged out! JWT clear in cookie" });
      } catch (err) {
        res.status(500).send(err);
      }
    });
    // MONGODB COLLECTION
    // ourMemberCollection testimonials start
    app.get("/members", async (req, res) => {
      const result = await ourMemberCollection.find().toArray();
      res.send(result);
    });
    app.get("/testimonials", async (req, res) => {
      const result = await testimonialCollection.find().toArray();
      res.send(result);
    });
    // ourMemberCollection testimonials start
    // userCollection start
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user?.email };
      const isExist = await userCollection.findOne(query);
      if (isExist)
        return res.send({ message: "User Already Exist", insertedId: null });
      const result = await userCollection.insertOne();
      res.send(result);
    });
    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    app.patch("/update-profile/:email", verifiToken, async (req, res) => {
      const user = req.body;
      const email = req.params?.email;
      const query = { email: email };
      if (req.params.email !== req.user.email)
        return res.status(403).send({ message: "forbidden access" });
      const updateDoc = {
        $set: {
          name: user?.name,
          image: user?.image,
        },
      };
      const result = await userCollection.updateOne(query, updateDoc);
      res.send(result);
    });
    app.patch(
      "/update-admin/:id",
      verifiToken,
      adminVerify,
      async (req, res) => {
        const { id } = req.params;
        const query = { _id: new ObjectId(id) };
        const updateRole = {
          $set: { role: "admin" },
        };
        const result = await userCollection.updateOne(query, updateRole);
        res.send(result);
      }
    );
    app.get("/admin-user/:email", verifiToken, async (req, res) => {
      const email = req.params?.email;
      if (req.params?.email !== req.user?.email) {
        res.status(403).send({ message: "forbidden access" });
      }
      const query = { email: email };
      const user = await userCollection.findOne(query);
      let admin = false;
      if (user) {
        admin = user?.role === "admin";
      }
      res.send({ admin });
    });
    app.delete("/delete-user/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
    // userCollection end
    // productCollection start
    app.post("/products", verifiToken, async (req, res) => {
      const products = req.body;
      const result = await productCollection.insertOne(products);
      res.send(result);
    });
    app.get("/products", async (req, res) => {
      const result = await productCollection
        .find()
        .sort({ price: 1 })
        .toArray();
      res.send(result);
    });
    // productCollection end
    // carCollection start
    app.post("/add-car", async (req, res) => {
      const products = req.body;
      const result = await carCollection.insertOne(products);
      res.send(result);
    });
    app.get("/cars", async (req, res) => {
      const { email } = req.query;
      const query = { email: email };
      const result = await carCollection.find(query).toArray();
      res.send(result);
    });
    app.patch("/update-cars/:id", async (req, res) => {
      const data = req.body;
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          name: data.name,
          image: data.image,
          service: data.service,
          price: data.price,
          date: data.date,
        },
      };
      console.log(updateDoc);
      const result = await carCollection.updateOne(query, updateDoc);
      res.send(result);
    });
    app.delete("/delete-car/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await carCollection.deleteOne(query);
      res.send(result);
    });
    // carCollection end
    // payment intent start
    app.post("/create-payment-intent", async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });
      res.send({ clientSecret: paymentIntent.client_secret });
    });
    // payment intent end
    // payment add to data base start
    app.post("/payments", async (req, res) => {
      const payment = req.body;
      const payResult = await paymentCollection.insertOne(payment);
      const query = {
        _id: {
          $in: payment.carIds.map((id) => new ObjectId(id)),
        },
      };
      const clearResult = await carCollection.deleteMany(query);
      res.send({ payResult, clearResult });
    });
    app.get("/pay-history/:email", verifiToken, async (req, res) => {
      const query = { email: req.params.email };
      if (req.params.email !== req.user.email) {
        return res.status(403).send({ message: "forbidden access" });
      }
      const result = await paymentCollection.find(query).toArray();
      res.send(result);
    });
    // payment add to data base end
    // dashboard show data and aggregate start
    app.get("/admin-stats", verifiToken, adminVerify, async (req, res) => {
      const users = await userCollection.estimatedDocumentCount();
      const products = await productCollection.estimatedDocumentCount();
      const payments = await paymentCollection.estimatedDocumentCount();
      const result = await paymentCollection
        .aggregate([
          {
            $group: {
              _id: null,
              totalPrice: { $sum: "$price" },
            },
          },
        ])
        .toArray();
      const revenue = result.length > 0 ? result[0].totalPrice : 0;
      res.send({ users, products, payments, revenue });
    });
    app.get("/chart-stats", verifiToken, adminVerify, async (req, res) => {
      const result = await paymentCollection.aggregate([
       {
        $unwind: "$productIds"
       },
       {
        $set: {
          productIds: {$toObjectId: "$productIds"}
        }
       },
       {
        $lookup:{
          from: "products",
          localField: "productIds",
          foreignField: "_id",
          as: "productItems"
        }
       },
       {
        $unwind: "$productItems"
       },
       {
        $group:{
          _id: "$productItems.category",
          quantity: {$sum: 1},
          revenue: {$sum: "$productItems.price"}
        }
       },
       {
        $project:{
          _id: 0,
          category: "$_id",
          quantity: "$quantity",
          revenue: "$revenue"
        }
       }
      ]).toArray()
      console.log(result);
      res.send(result)
    })
    // dashboard show data and aggregate end

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
