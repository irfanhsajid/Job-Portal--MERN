import 'boxicons';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";


const Navbar = () => {

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#182F59',
    padding: '20px',
    alignItems: 'center',
    width: '100%',

  };

  const buttonStyle = {
    color: 'whitesmoke',
    backgroundColor: '#5BBC2E',
    padding: '.3rem .6rem',
    borderRadius: '5px',
    width: '7rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    cursor: 'pointer',
    marginRight: '10px'
  };


  const { user, logout } = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/');
  }

  //console.log(user);

  return (
    <div>
      <nav style={navStyle} >
        <Link style={linkStyle} to='/'> <span
          style={{
            fontWeight: 'bold',
            fontSize: '1.25rem',
            '@media (max-width:700px)': {
              fontSize: '.7rem',
              color: 'red'
            }
          }}>TechForing </span> </Link>
        {
          !user && (
            <div>
              <Link style={linkStyle} to='/login'>
                <button style={{ ...buttonStyle, backgroundColor: 'transparent', border: '.4px solid white', marginRight: '-20px' }} >SIGN IN</button>
              </Link>
              <Link style={linkStyle} to='/register'>
                <button style={buttonStyle}>SIGN UP</button>
              </Link>
            </div>
          )
        }

        {
          user && (<Link style={linkStyle} to='/dashboard'> Dashboard {` : @  ${user?.name}`} </Link>)

        }

        {
          user && (<button style={{
            ...buttonStyle, marginRight: '4%'
          }} onClick={handleLogout}>Logout</button>)
        }
      </nav>
    </div>
  );
};

export default Navbar;