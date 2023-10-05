import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';

const CreateJob = () => {
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

    //get the jobs from the backend 

    const navigate = useNavigate();
    const createJobs = async (event) => {
        event.preventDefault();
        const { category, positions } = data;
        try {
            const response = await axios.post('/createJobs', {
                category,
                positions,
            })
            if (response.status === 200) {
                toast.success('Jobs Created Successfully')
                setData({});
                navigate('/viewjobs');
                console.log(response);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className={styles.container}>
            <form action="" className={styles.form} onSubmit={createJobs}>
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={data.category}
                    id="category"
                    placeholder="Insert Job Category"
                    required="true"
                    onChange={(e) => setData({ ...data, category: e.target.value })}
                />
                <label>Job Title/Role 1:</label>
                <input
                    type="text"
                    name="role1"
                    value={data.positions?.role1}
                    id="category"
                    placeholder="i e : Sales Manager"
                    required="true"
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
                    placeholder="i e : Sales Executive Manager"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role3: e.target.value } })}
                />
                <label>Job Title/Role 4:</label>
                <input
                    type="text"
                    name="role4"
                    value={data.positions?.role4}
                    id="category"
                    placeholder="i e : Social Media Marketer"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role4: e.target.value } })}
                />
                <label>Job Title/Role 5:</label>
                <input
                    type="text"
                    name="role5"
                    value={data.positions?.role5}
                    id="category"
                    placeholder="i e : Business Analyst"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role5: e.target.value } })}
                />
                <label>Job Title/Role 6:</label>
                <input
                    type="text"
                    name="role6"
                    value={data.positions?.role6}
                    id="category"
                    placeholder="i e : General Manager"
                    onChange={(e) => setData({ ...data, positions: { ...data.positions, role6: e.target.value } })}
                />
                <button type='submit'>Create Job</button>
            </form>
        </div>
    );
};

export default CreateJob;
