import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const PrivateAdmin = ({ children }) => {
    const [isAdmin, isLoading] = useAdmin()
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading || isLoading) {
        return <LoadingSpinner />
    }
    if (user && isAdmin) {
        return children
    }
   return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateAdmin;