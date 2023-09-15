import { useContext } from "react";
import { UserContext } from "../context/userContext";


const JobPortal = () => {
    const { user } = useContext(UserContext)


    console.log(user);

    return (
        <div>
            <h4>Welcome!! <span style={{ color: 'green' }}> {user.name} </span>  To your Job Portal</h4>
        </div>
    );
};

export default JobPortal;