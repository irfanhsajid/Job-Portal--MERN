import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const buttonStyle = {
    // backgroundColor: 'tomato',
    padding: '10px 25px',
    borderRadius: '7px',
    width: '140px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '10px'
}
const divStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    placeItems: 'center',
    border: '1px solid #182F59',
    padding: '.3rem',
    margin: '1rem',
    borderRadius: '8px'

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
            const confirmed = window.confirm("Are You Sure to Delete Entire Category? Rather You can Edit JOB Name And Title!");
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

        <div style={{ margin: "0 auto", background: 'whitesmoke', width: '700px', padding: '10px', marginTop: '100px', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)' }}>
            <h2 style={{ textAlign: 'center' }}>{data.length} Category Of JOBS Available</h2>
            {
                data.length ? data.map(item => {
                    return (
                        <div key={item._id} style={divStyle}>
                            <p style={{ fontWeight: 'bolder', color: '#182F59' }}>{item.category} </p>
                            <Link to={`/editjobs/${item._id}`}><button style={{ ...buttonStyle, background: '#5BBC2E' }}>Edit</button></Link>
                            <button onClick={() => deleteJob(item._id)} style={{ ...buttonStyle, background: '#FF4A84' }}>Delete</button>
                        </div>
                    )
                }) : null
            }
        </div>
    );
};

export default ManageJobs;