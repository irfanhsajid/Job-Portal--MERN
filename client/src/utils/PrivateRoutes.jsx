// import { useContext } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../context/userContext";

// const PrivateRoutes = () => {
//   const { user, isLoading } = useContext(UserContext);

//   // Check if the user is authenticated based on the presence of the user object
//   const isAuthenticated = user && user.email;

//   if (isLoading) {
//     // Return a loading indicator or component while data is being fetched
//     return <div>Loading...</div>;
//   }

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoutes;
