const express = require('express');
const cors = require('cors');


const router = express.Router();


const { test, registerUser, loginUser, getProfile, logoutUser, getUsers } = require('../controllers/authController')

router.use(
    cors({
        credentials: true,
        // origin: "http://localhost:5173",
        origin: "https://techforing-job-portal.vercel.app",
    })
)

router.get('/', test)
router.get('/users', getUsers); //for user testcase
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.post('/logout', logoutUser);
module.exports = router;


