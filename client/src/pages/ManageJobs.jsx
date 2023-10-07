import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import styles from '../assets/css/register.module.css';

const buttonStyle = {
    // backgroundColor: 'tomato',
    padding: '10px 25px',
    borderRadius: '7px',
    width: '140px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '10px'
}

const ManageJobs = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/viewJobs')
            .then(response => {
                setData(response.data);
            })
    }, [])

    const deleteJob = async (_id) => {
        try {
            const confirmed = window.confirm("Are You Sure to Delete Entire Category?\nRather you can select Edit option and update Jobs eperately. \nPress OK will delete the entire category.");
            if (confirmed) {
                const response = await axios.delete(`/deleteJob/${_id}`);
                if (response.status === 200) {
                    setData(response.data)
                    toast.success("Data Deleted Successfully");
                }
            }
        } catch (error) {
            toast.error("Something is Error!");
        }
    }
    return (

        <div data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="300">
            <Link style={{ textAlign: 'center', display: 'block', width: '20rem', margin: '0 auto', padding: '1rem' }} to='/dashboard'>
                Go Back
            </Link>
            <h1 style={{ textAlign: 'center', fontSize: '1.3rem', marginTop: '10px' }}>Edit Category & Positions Seperately <br /> Or Delete Entire Job Category!</h1>

            <div
                style={{ margin: "0 auto", background: 'whitesmoke', width: '70%', padding: '10px', marginTop: '30px', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)' }}>

                <h2 style={{ textAlign: 'center' }}> <span style={{ color: 'red' }}>
                    ({data.length})</span>  Category Of JOBS Available!</h2>
                {
                    data.length ? data.map(item => {
                        return (
                            <div
                                key={item._id}
                                className={styles.manageJobs_container}
                            >

                                <p style={{ fontWeight: 'bolder', color: '#182F59' }}>{item.category} </p>

                                <Link to={`/editjobs/${item._id}`}><button style={{ ...buttonStyle, background: '#5BBC2E' }}>Edit</button></Link>

                                <button onClick={() => deleteJob(item._id)} style={{ ...buttonStyle, background: '#FF4A84' }}>Delete</button>
                            </div>
                        )
                    }) : null
                }
            </div>
        </div>
    );
};

export default ManageJobs;