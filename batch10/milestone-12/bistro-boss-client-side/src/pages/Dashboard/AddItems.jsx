import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";


// IMAGE UPLOAD AND HOSTING API KEY OR API URL
const api_key = import.meta.env.VITE_API_KEY
const api_url = `${import.meta.env.VITE_API_URL}?key=${api_key}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        // image upload and save database
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(api_url, imageFile, {
            headers: { "content-type": "multipart/form-data" }
        })
        if (res.data.success) {
           const menuItems = {
            name: data.name,
            recipe: data.recipe,
            category: data.category,
            price: parseFloat(data.price),
            image: res.data.data.display_url
           }
        const menuData = await axiosSecure.post("/menu", menuItems)
        console.log(menuData.data);
        if (menuData.data.insertedId) {
            reset()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
        }
    }
    return (
        <div>
            <SectionTitle heading={"ADD AN ITEM"} subHeading={"What's new?"} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                        </label>
                        <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Category Name*</span>
                                </div>
                                <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
                                    <option value="default" disabled >Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input {...register("price", { required: true })} type="number" placeholder="Recipe Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                            <textarea {...register("recipe", { required: true })} className="textarea w-full textarea-bordered" placeholder="Recipe Details"></textarea>
                        </label>
                        <div>
                            <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" />
                        </div>
                        <button className="btn bg-[#d1a054] text-white">AddItem <FaUtensils /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;