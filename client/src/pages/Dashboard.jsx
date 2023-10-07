
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';


const Dashboard = () => {
  const { user } = useContext(UserContext)

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
    <div data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="300"
      style={{ textAlign: 'center', marginTop: '50px' }}>

      {user && (<h1>Assalamu Alaikum <span style={{ color: '#C12048' }}>*,*</span> <br />  <span style={{ color: '#5BBC2E', fontSize: '20px' }}> Mr. {user?.name} </span>  </h1>)}

      <h3>Welcome to <span style={{ color: 'red' }}> TechForing`s  </span> Job Portal! </h3>

      <Link to='/viewjobs'><button style={{ ...buttonStyle, background: '#00C1FF' }}> View Jobs</button></Link>
      <Link to='/createjobs'><button style={{ ...buttonStyle, background: ' #3AF173' }}>Create Jobs</button></Link>
      <Link to='/managejobs'><button style={{ ...buttonStyle, background: '#D14471' }} >Manage Jobs</button></Link>
    </div>
  );
};

export default Dashboard;