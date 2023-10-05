import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';
const Register = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault();

        //input value distructuring 
        const { name, email, password } = data;
        try {
            // Send user data to the server
            const { data } = await axios.post('/register', {
                name,
                email,
                password,
            });

            //if there is any error from the server side then it will cover the errrors and else it will set the input field empty and show a success message!
            if (data.error) {
                toast.error(data.error)
            }
            else {
                setData({})
                toast.success('Registration Succesful, Welcome!')
                navigate('/login')
            }
        } catch (error) {
            // Handle network errors or unexpected issues
            console.log(error);
        }

    };

    return (
        <div className={styles.container}>
            <h1 style={{ textAlign: 'center' }}>Register First To Explore Features</h1>
            <form action="
            " className={styles.form} onSubmit={registerUser}>
                <label>Name:</label>
                <input className={styles.input} type="text" name="name" value={data.name} id="" placeholder="Insert your name..." onChange={(e) => setData({ ...data, name: e.target.value })} />

                <label>Email:</label>
                <input className={styles.input} type="email" name="email" value={data.email} id="" placeholder="Your E-mail..." onChange={(e) => setData({ ...data, email: e.target.value })} required />

                <label>Password:</label>
                <input className={styles.input} type="password" id="" value={data.password} placeholder="Password..." onChange={(e) => setData({ ...data, password: e.target.value })} required />
                <button type='submit'>Register</button>

            </form>
        </div>
    );
};

export default Register;