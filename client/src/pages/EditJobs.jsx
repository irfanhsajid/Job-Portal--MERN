import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './register.module.css';

const EditJobs = () => {

    const [data, setData] = useState({
        category: '',
        positions: {
            role1: '',
            role2: '',
            role3: '',
            role4: '',
            role5: '',
            role6: '',
        },
    });

    const { _id } = useParams()

    useEffect(() => {

        axios.get('/getJob/' + _id)
            .then(response => {
                // console.log(response.data);
                setData(response.data)
            })
            .catch(error => console.log(error));
    }, [])

    // console.log(data);

    const navigate = useNavigate();

    const updateJob = async (e) => {
        e.preventDefault();
        const { category, positions } = data;
        try {
            const response = await axios.put('/updateJob/' + _id, {
                category,
                positions,
            })
            if (response.status === 200) {
                toast.success('Job Updated Successfully')
                console.log(response);
                setData({});
                navigate('/viewjobs')

            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        console.log({ category }, { positions });
        await console.log("Update Job Works fine!");
    }


    return (

        <div className={styles.container}>
            <h1 style={{ textAlign: 'center' }}>Update Job Category Name and Job Position Role</h1>
            <form action="" className={styles.form} onSubmit={updateJob} >
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={data.category}
                    id="category"
                    placeholder="Insert Job Category"
                    onChange={(e) => setData({ ...data, category: e.target.value })}
                />
                <label>Job Title/Role 1:</label>
                <input
                    type="text"
                    name="role1"
                    value={data.positions?.role1}
                    id="category"
                    placeholder="i e : Sales Manager"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role1: e.target.value } })}
                />
                <label>Job Title/Role 2:</label>
                <input
                    type="text"
                    name="role2"
                    value={data.positions?.role2}
                    id="category"
                    placeholder="i e : Digital Marketer"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role2: e.target.value } })}
                />
                <label>Job Title/Role 3:</label>
                <input
                    type="text"
                    name="role3"
                    value={data.positions?.role3}
                    id="category"
                    placeholder="i e : General Manager"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role3: e.target.value } })}
                />
                <label>Job Title/Role 4:</label>
                <input
                    type="text"
                    name="role4"
                    value={data.positions?.role4}
                    id="category"
                    placeholder="i e : Digital Marketer"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role4: e.target.value } })}
                />
                <label>Job Title/Role 5:</label>
                <input
                    type="text"
                    name="role5"
                    value={data.positions?.role5}
                    id="category"
                    placeholder="i e : Digital Marketer"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role5: e.target.value } })}
                />
                <label>Job Title/Role 6:</label>
                <input
                    type="text"
                    name="role6"
                    value={data.positions?.role6}
                    id="category"
                    placeholder="i e : Digital Marketer"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role6: e.target.value } })}
                />
                <button type='submit'>Update Jobs</button>
            </form>
        </div>
    );
};

export default EditJobs;
