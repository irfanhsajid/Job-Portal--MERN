
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';


const Dashboard = () => {
  const { user, logout, setUser } = useContext(UserContext)
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/profile');
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    // Call the function to fetch user profile
    if (!user) {
      fetchUserProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleLogout = async () => {
    logout();
    navigate('/');
  }
  const buttonStyle = {
    backgroundColor: 'tomato',
    padding: '15px 30px',
    borderRadius: '10px',
    width: '150px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '10px'

  }

  return (
    <div>
      <h1>Assalamu Alaikum *,*</h1>
      <br />
      {user && (<h4>{user?.name}</h4>)}
      <Link to='/jobportal'><button style={buttonStyle}>Job Portal</button></Link>

      <button style={buttonStyle} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;