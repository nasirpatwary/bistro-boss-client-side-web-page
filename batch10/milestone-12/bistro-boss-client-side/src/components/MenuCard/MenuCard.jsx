import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../../hooks/useCart";
const MenuCard = ({ item }) => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [, , , refetch] = useCart()
  const { name, image, recipe, price, _id, category } = item
  const handleAddTooCart = async () => {
    if (user && user?.email) {
      const cartIems = {
        email: user.email,
        menuId: _id,
        name,
        image,
        recipe,
        price,
        category
      }
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_SCRETE_URL}/carts`, cartIems)
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-ceter",
            icon: "success",
            title: `${name} added to your cart!`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch cart to update the cart items count
          refetch()
        }
      } catch (error) {
        console.log(error);
      }

    }
    else {
      Swal.fire({
        title: "You are not logged In?",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
        }
      })
    }
  }
  return (
    <div className="card rounded-none bg-base-100 border hover-zoom-container shadow-xl">
      <img
        src={image}
        alt="Shoes"
        className="hover-zoom-image" />
      <p className="bg-black text-white absolute right-4 px-2 top-4">${price}</p>
      <div className="card-body bg-[#f3f3f3] items-center text-center">
        <h2 className="card-title">Caeser {name}</h2>
        <p title={recipe}>{recipe?.length > 80 ? recipe.slice(0, 80) : recipe}</p>
        <div className="card-actions">
          <button onClick={handleAddTooCart} className="btn btn-outline duration-700 bg-[#e8e8e8] border-b-2 border-0 uppercase border-[#BB8506] text-[#BB8506] px-5 hover:text-[#BB8506]">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;