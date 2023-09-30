import { useContext } from "react";
import { UserContext } from "../context/userContext";

const JobPortal = () => {
    const user = useContext(UserContext);
    //const token = getCookie('token');
    console.log(user);
    if (!user) {
        return <div>Loading...</div>
    }
    // console.log(token);
    return (
        <div>
            <h4>Welcome!! <span style={{ color: 'green' }}> {user?.name} </span>  To your Job Portal</h4>
        </div>
    );
};

export default JobPortal;