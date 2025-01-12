import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if (loading) {
        return <LoadingSpinner />
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRouter;