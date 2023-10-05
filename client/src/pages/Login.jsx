
import axios from 'axios';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { setCookie } from '../utils/cookies';
import styles from './login.module.css';

const Login = () => {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);


    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const loginUser = async (event) => {
        //console.log("button clicked")
        event.preventDefault();

        //destructuring data 
        const { email, password } = data
        try {
            const response = await axios.post('/login', {
                email,
                password,
            })
            console.log(response.data);

            //setting up the validation and error message
            if (!response.data.token) {
                toast.error(response.data.error);
            }

            //if everything works fine
            else {
                setData({});
                setCookie('token', response.data.token)
                //   console.log(response.data.token);
                setUser(response.data.user);
                navigate('/viewJobs')
                toast.success("Login Successful!")
                //window.location.reload();
                // console.log("login success")
            }

        } catch (error) {
            console.log(error)
        }

    }
    // if (isLoading) {
    //     return <div>Loading...</div>
    // }

    return (
        <div className={styles.container}>
            <h1 style={{ textAlign: 'center' }}>Login to Acess Your Job Portal</h1>
            <form action="
            " className={styles.form} onSubmit={loginUser}>
                <label>Email:</label>
                <input type="email" name="email" value={data.email} id="email"
                    placeholder="Your E-mail Here..."
                    onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>Password:</label>
                <input type="password" id="password" value={data.password}
                    placeholder="Password here..."
                    onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>login</button>

            </form>
        </div>
    );
};

export default Login;