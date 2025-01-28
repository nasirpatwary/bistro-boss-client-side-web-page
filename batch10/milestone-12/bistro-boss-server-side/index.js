const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const cors = require("cors")
const jwt = require('jsonwebtoken');
require("dotenv").config()
const stripe = require('stripe')(process.env.SECRETE_KEY_PK_LOADSTRIPE)
const port = process.env.PROT || 5000

// middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.BOSS_NAME}:${process.env.BOSS_PASS}@cluster0.qhtx1li.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// token verify middleware
const verifyToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "unauthorized access" })
  }
  const token = req.headers.authorization.split(" ")[1]
  jwt.verify(token, process.env.ACCESS_SECRETE_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" })
    }
    req.decoded = decoded;
    next()
  })
}
const verifyAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  const query = { email: email }
  const user = await userCollection.findOne(query)
  const isAdmin = user?.role === "admin"
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" })
  }
  next()
}
const db = client.db("bistro-boss")
const menuCollection = db.collection("menu");
const reviewCollection = db.collection("reviews");
const cartCollection = db.collection("carts");
const userCollection = db.collection("users");
const paymentCollection = db.collection("payments");

async function run() {
  try {
    // jwt post 
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_SECRETE_TOKEN, { expiresIn: "1h" })
      res.send({ token })
    })

    // userscollection
    app.post("/users", async (req, res) => {
      const users = req.body
      const query = { email: users?.email }
      const existEmail = await userCollection.findOne(query)
      if (existEmail) {
        return res.send({ message: "user already exists", insertedId: null })
      }
      const result = await userCollection.insertOne(users)
      res.send(result)
    })
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollection.find().toArray()
      res.send(result)
    })
    app.get("/user/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      if (email !== req.decoded.email) {
        res.status(403).send({ message: "forbidden access" })
      }
      const query = { email: email }
      const user = await userCollection.findOne(query)
      let admin = false
      if (user) {
        admin = user?.role === "admin"
      }
      res.send({ admin })
    })
    app.delete("/user/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })
    app.patch("/user/admin/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const updateDoc = {
        $set: {
          role: "admin"
        }
      }
      const result = await userCollection.updateOne(filter, updateDoc)
      res.send(result)
    })
    // menucollection
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray()
      res.send(result)
    })
    app.get("/menu/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await menuCollection.findOne(query)
      res.send(result)
    })
    app.post("/menu", verifyToken, verifyAdmin, async (req, res) => {
      const menuItem = req.body;
      const result = await menuCollection.insertOne(menuItem)
      res.send(result)
    })
    app.delete("/menu/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await menuCollection.deleteOne(query)
      res.send(result)
    })
    app.patch("/menu/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const item = req.body
      const filter = { _id: new ObjectId(id) }
      const updateDoc = {
        $set: {
          name: item.name,
          category: item.category,
          price: item.price,
          recipe: item.recipe,
          image: item.image,
        }
      }
      const result = await menuCollection.updateOne(filter, updateDoc)
      res.send(result)
    })
    // reviewcollection
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray()
      res.send(result)
    })
    // cartcollection
    app.get("/cart", async (req, res) => {
      const email = req.query.email;
      const query = { email: email }
      const result = await cartCollection.find(query).toArray()
      res.send(result)
    })
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem)
      res.send(result)
    })
    app.delete("/cart-delete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await cartCollection.deleteOne(query)
      res.send(result)
    })
    // create-payment-intent
    app.post('/create-payment-intent', async (req, res) => {
      const { price } = req.body;
        const amount = parseInt(price * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
      });

      res.send({
        clientSecret: paymentIntent.client_secret
      })
    });
    app.get("/payment/shistory/:email",verifyToken, async (req, res) => {
      const query = {email: req.params.email};
      if (req.params.email !== req.decoded.email) {
        return res.status(403).send({message: "forbidden access"})
      }
      const result = await paymentCollection.find(query).toArray()
      res.send(result)
    })
    app.post('/payments', async (req, res) => {
      const payment = req.body;
      const paymentResult = await paymentCollection.insertOne(payment);
      //  carefully delete each item from the cart
      console.log('payment info', payment);
      const query = {
        _id: {
          $in: payment.cartIds.map(id => new ObjectId(id))
        }
      };
      const deleteResult = await cartCollection.deleteMany(query);
      res.send({ paymentResult, deleteResult });
    })
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Bistro Boss Server Side!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})