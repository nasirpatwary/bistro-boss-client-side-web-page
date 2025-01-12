import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
const MyCartTable = ({ item, index }) => {
    const axiosSecure = useAxios()
    const [, , , refetch] = useCart()
    const { image, name, price, _id } = item || {}
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, delete it!`
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/cart-delete/${id}`)
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap">{name}</td>
            <td className="text-orange-600">${price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="border rounded text-red-500 py-2 px-2.5"><RiDeleteBin6Line size={20} /></button>
            </th>
        </tr>
    );
};

export default MyCartTable;