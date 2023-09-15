import 'boxicons';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
const Navbar = () => {
  const {user} = useContext(UserContext);
    const linkStyle = {
        textDecoration: 'none',
        color: 'white', // Set the text color
        margin: '0 10px', // Add some spacing between the links
        padding: '5px 10px', // Add padding to the links
        borderRadius: '5px', // Add rounded corners to the links
        transition: 'background-color 0.3s', // Add a smooth transition for background color
        
      };
      const navStyle = {
        display:'flex',
        justifyContent:'center',
        backgroundColor: '#333c', // Set the background color for the navigation bar
        padding: '20px', // Add some padding to the navigation bar
      };

    return (
        <div>
          { /*The code is creating a navigation bar component using React. */} 
            <nav style={navStyle} >
                 <Link style={linkStyle} to='/'> Home </Link>
                 <Link style={linkStyle} to='/login'> Login </Link>
                 <Link  style={linkStyle} to='/register'> Register</Link>
                 {
                  user && (  <Link  style={linkStyle} to='/dashboard'> Dashboard {` : @  ${user.name}`} </Link>)
                 }
                 
            </nav>
        </div>
    );
};

export default Navbar;