import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";

const AllUsers = () => {
    const axiosSecure = useAxios()
    const {  data: users = [], isPending, error, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async() =>{
            const {data} = await axiosSecure.get("/users")
            return data
        } 
      })
      const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, delete it!`
          }).then(async(result) => {
            if (result.isConfirmed) {
            const {data} = await axiosSecure.delete(`/user/${id}`)
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
      const handleAddmin = async user =>{
        try {
            const {data} = await axiosSecure.patch(`/user/admin/${user?._id}`)
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success(`${user?.name} is an Admin Now`)
            }
            refetch()
        } catch (error) {
            console.log(error);
        }
      }
    return (
        <>
            <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How many??"} />
            <div className="my-10">
                <h2>Total Users: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Acction</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            users.map((user, i) =>  <tr key={user?._id}>
                                <th>{i + 1}</th>
                                <td className="whitespace-nowrap">{user?.name}</td>
                                <td className="whitespace-nowrap">{user?.email}</td>
                                <td>{user?.role ? "Admin" : <button onClick={()=>handleAddmin(user)} className="border rounded py-2 px-2.5"><FaUsers size={20} /></button>}
                                </td>
                               <td><button onClick={()=>handleDelete(user?._id)} className="border rounded text-red-500 py-2 px-2.5"> <RiDeleteBin6Line size={20} /></button></td>
                            </tr>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;