import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// IMAGE UPLOAD AND HOSTING API KEY OR API URL
const api_key = import.meta.env.VITE_API_KEY
const api_url = `${import.meta.env.VITE_API_URL}?key=${api_key}`
const UpdateItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const navigate = useNavigate()
    const { id } = useParams()
    console.log("useParams id", id);
    const { data: menu = {}, isLoading, refetch } = useQuery({
        queryKey: ["updateMenu"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/menu/${id}`)
            return data
        }
    })
    const { name, recipe, category, price, _id } = menu
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
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
            const menuData = await axiosSecure.patch(`/menu/${_id}`, menuItems)
            console.log(menuData.data);
            if (menuData.data.modifiedCount > 0) {
                refetch()
                reset()
                navigate("/dashboard/manageItems")
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title:`${name} is update to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div>
            <SectionTitle heading={"Update Items"} subHeading={"Update Info"} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                        </label>
                        <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Category Name*</span>
                                </div>
                                <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
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
                                <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="Recipe Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                            <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea w-full textarea-bordered" placeholder="Recipe Details"></textarea>
                        </label>
                        <div>
                            <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" />
                        </div>
                        <button className="btn bg-[#d1a054] text-white">Update Item Recipe <FaUtensils /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;