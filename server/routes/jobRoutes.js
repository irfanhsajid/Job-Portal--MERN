const express = require('express');

const cors = require('cors');

const router = express.Router();

const { jobtest, createJobs, viewJobs, deleteJob, updateJob, getJob } = require('../controllers/jobController');


router.use(
    cors({
        credentials: true,
        // origin: "http://localhost:5173",
        origin: "https://techforing-job-portal.vercel.app",


    })
)

router.get('/jobtest', jobtest);
router.post('/createJobs', createJobs);
router.get('/viewJobs', viewJobs);
router.delete('/deleteJob/:_id', deleteJob)
router.get('/viewJobs', viewJobs);
router.get('/getJob/:_id', getJob);
router.put('/updateJob/:_id', updateJob)

module.exports = router;