
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import styles from './login.module.css';

const Login = () => {
   //navigate after successful login
   const navigate = useNavigate();

   const [data,setData] = useState({
    email: '',
    password: '',
   })
    const loginUser = async (event)=>{
        //console.log("button clicked")
        event.preventDefault();
        
         //destructuring data 
         const {email,password} = data
         try {
            const {data} = await axios.post('/login',{
                email,
                password,
            })

            //setting up the validation and error message
            if(data.error){
                toast.error(data.error);
            }
            //if everything works fine
            else{
               
                console.log(data._id); 
                //console.log(data.token); //undefined

                setData({});
               // toast.success("Login Successful!")
               navigate('/dashboard')
                console.log("login success")
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
                onChange={(e)=>setData({...data, email:e.target.value})} />
                <label>Password:</label>
                <input type="password" id="password"  value={data.password} 
                placeholder="Password here..."
                onChange={(e)=>setData({...data, password:e.target.value})} />
               <button type='submit'>login</button>

            </form>
        </div>
    );
};

export default Login;