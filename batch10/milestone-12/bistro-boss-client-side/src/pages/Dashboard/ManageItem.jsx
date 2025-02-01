import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { LiaEditSolid } from "react-icons/lia";
import useMenu from "../../hooks/useMenu";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
const ManageItem = () => {
    const axiosSecure = useAxios()
    const [menu, isLoading, isError, refetch] = useMenu()
    if (isLoading) return <LoadingSpinner />
    if (isError) return console.log(isError);  // isErrorComponent 
    //  spacific item deleted db
    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/menu/${item?._id}`)
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                };
            }
        });
    }
    return (
        <div>
            <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"hurry!"} />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Acction</th>
                                <th>Acction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, i) => <tr key={item?._id}>
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap">
                                    {item.name}
                                </td>
                                <td className="whitespace-nowrap">${item.price}</td>
                                <td><Link to={`/dashboard/updateItem/${item._id}`}><button className="border text-white rounded bg-[#d1a054] py-2 px-2.5"><LiaEditSolid size={20} /> </button></Link></td>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="border rounded bg-red-500 text-white py-2 px-2.5"><RiDeleteBin6Line size={20} /></button>
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;