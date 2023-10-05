import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "./cookies";

const PrivateRoutes = () => {
    const token = getCookie("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
