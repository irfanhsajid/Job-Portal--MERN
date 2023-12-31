
import axios from 'axios';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/login.module.css';
import { UserContext } from '../context/userContext';
import { setCookie } from '../utils/cookies';

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
            }

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="300"
            className={styles.container}>
            <h1 style={{ textAlign: 'center', fontSize: '1.3rem', marginTop: '20px' }}>
                Assalamu Alaikum <span style={{ color: '#C12048' }}>*,*</span>
            </h1>
            <h1 style={{ textAlign: 'center', fontSize: '1.3rem', marginTop: '20px' }}> Please, Sign In to Acess Our Job Portal</h1>
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