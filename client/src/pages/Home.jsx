import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Home = () => {
    const { user } = useContext(UserContext);
    if (!user) return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Welcome To TechForing!</h1>
        </div>
    );
};

export default Home;