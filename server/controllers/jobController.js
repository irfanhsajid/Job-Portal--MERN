const JobsModel = require('../models/job');

const jobtest = (req, res) => {
    res.send('job category is working');
}

//CREATE Jobs
const createJobs = async (req, res) => {
    try {
        const { category, positions } = req.body;

        const existingCategory = await JobsModel.findOne({ category })
        if (existingCategory) {
            return res
                .status(409)
                .send({ message: "Job with this Category already exists" })
        }
        const jobs = await JobsModel.create({
            category,
            positions,
        });
        console.log(jobs);
        return res.json({
            message: "Something is wrong creating Jobs. Set unique Job Category And Try Again!",
            jobs
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// READ all Jobs 
const viewJobs = async (req, res) => {
    // res.send('View Jobs Route is Working')
    try {
        const jobs = await JobsModel.find();
        res.send(jobs)
        //  console.log(jobs);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//DELETE jobs
const deleteJob = async (req, res) => {
    try {
        const _id = req.params._id;
        const isFound = await JobsModel.findOne({ _id });
        if (!isFound) {
            return res.status(404).send({ message: "No item found!" })
        }
        const deleteJob = await JobsModel.deleteOne({ _id });
        if (!deleteJob) {
            return res.status(404).send({ message: "Failed to delete!" })
        }
        const newJobs = await JobsModel.find({});
        res.send(newJobs);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//UPDATE a job Category 
const getJob = async (req, res) => {
    const _id = req.params._id;
    try {
        const job = await JobsModel.findById({ _id })
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    // .then(job => res.json(job))
    // .catch(error => res.json(error));
}

const updateJob = async (req, res) => {
    const _id = req.params._id;
    const { category, positions } = req.body;
    console.log({ category })
    try {
        const updated = await JobsModel.findByIdAndUpdate(_id, { category, positions }, { new: true });
        res.json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    jobtest,
    createJobs,
    viewJobs,
    deleteJob,
    getJob,
    updateJob,
};
