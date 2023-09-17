
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
    //navigate after successful login
    const navigate = useNavigate();

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
            console.log(response);
            // console.log(response.data.token);

            //setting up the validation and error message
            if (!response.data.token) {
                toast.error("Emaill Password Not Matched!");
            }
            //if everything works fine
            else {
                //console.log(response.data.user._id, '<<<<'); 
                //console.log(data.token); //
                setData({});
                Cookies.set('token', response.data.token, { expires: 10 })
                console.log(response.data.token);
                navigate('/dashboard')
                toast.success("Login Successful!")
                // console.log("login success")
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={styles.container}>
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