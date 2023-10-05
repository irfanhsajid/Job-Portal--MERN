
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';


const Dashboard = () => {
  const { user } = useContext(UserContext)

  // useEffect(() => {
  //   // Fetch user profile data when the component mounts
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await axios.get('/profile');
  //       const userData = response.data;
  //       setUser(userData);
  //     } catch (error) {
  //       console.error('Error fetching user profile:', error);
  //     }
  //   };
  //   // Call the function to fetch user profile
  //   if (!user) {
  //     fetchUserProfile();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  // console.log(user);

  const buttonStyle = {
    color: 'black',
    // backgroundColor: '#182F59',
    padding: '15px 30px',
    borderRadius: '10px',
    width: '200px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '10px'
  }


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>

      {user && (<h1>Assalamu Alaikum *,* <br />  <span style={{ color: '#5BBC2E', fontSize: '20px' }}> {user?.name} </span>  </h1>)}

      <h3>Welcome to TechForing`s Job Portal! </h3>

      <Link to='/viewjobs'><button style={{ ...buttonStyle, background: '#00C1FF' }}> View Jobs</button></Link>
      <Link to='/createjobs'><button style={{ ...buttonStyle, background: ' #3AF173' }}>Create Jobs</button></Link>
      <Link to='/managejobs'><button style={{ ...buttonStyle, background: '#D14471' }} >Edit Jobs</button></Link>
    </div>
  );
};

export default Dashboard;