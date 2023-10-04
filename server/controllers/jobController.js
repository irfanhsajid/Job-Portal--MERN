const JobsModel = require('../models/job');

const jobtest = (req, res) => {
    res.send('job category is working');
}
//create Jobs
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

//view  all Jobs 
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


const deleteJobs = async (req, res) => {
    try {
        const _id = req.params._id;
        const isFound = await JobsModel.findOne({ _id });
        if (!isFound) {
            return res.status(404).send({ message: "No item found!" })
        }
        const deletejobs = await JobsModel.deleteOne({ _id });
        if (!deletejobs) {
            return res.status(404).send({ message: "Failed to delete!" })
        }
        const newJobs = await JobsModel.find({});
        res.send(newJobs);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//update job functionality
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


// const updateJob = async (req, res) => {
//     try {
//         // find id
//         const _id = req.params._id;
//         const { category, positions } = req.body;
//         // find job details
//         const job = await JobsModel.find({ _id });
//         if (!job) {
//             return res.status(404).send({ message: "No item found!" })
//         }

//         // update
//         const updateJob = await JobsModel.updateOne({ _id }, { category, positions })
//         if (!updateJob) {
//             return res.status(404).send({ message: "Something went wrong while updating!" })
//         }

//         // get all jobs with updated one
//         const newJobs = await JobsModel.find({});

//         res.status(200).send({
//             message: "Update successfully!",
//             jobs: newJobs
//         })

//     } catch (error) {

//     }
// }

module.exports = {
    jobtest,
    createJobs,
    viewJobs,
    deleteJobs,
    getJob,
    updateJob,
};
