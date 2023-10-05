import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "./cookies";

const PrivateRoutes = () => {
    // const { user } = useContext(UserContext)


    const token = getCookie("token");
    // const token = user?.token;



    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
