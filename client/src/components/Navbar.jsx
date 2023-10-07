import 'boxicons';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import styles from './navbar.module.css';

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

const Navbar = () => {
  const { user, logout } = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/');
  }

  //console.log(user);
  return (
    <div className={styles.container}>
      <nav className={styles.navStyle} >
        <Link className={styles.linkStyle} to='/'><span
          className={styles.company_name}>TechForing </span> </Link>
        {
          !user && (
            <div className={styles.login_signup_div}>
              <Link className={styles.linkStyle} to='/login'>
                <button style={{ ...buttonStyle, backgroundColor: 'transparent', border: '.4px solid white', marginRight: '-15px' }} >SIGN IN</button>
              </Link>
              <Link className={styles.linkStyle} to='/register'>
                <button style={buttonStyle}>SIGN UP</button>
              </Link>
            </div>
          )
        }

        {
          user && (<Link className={styles.linkStyle} to='/dashboard'> Dashboard {` : @  ${user?.name}`} </Link>)

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
