const express = require('express');
const cors = require('cors');

/* `const router = express.Router();` is creating a new router object using the `express.Router()`
method. This router object allows you to define routes for your application. */
const router = express.Router();

/* `const {test}= require('../controllers/authController')` is importing the `test` function from the
`authController.js` file located in the `../controllers` directory. This allows the `test` function
to be used in the current file. */
const { test, registerUser, loginUser, getProfile, logoutUser, getUsers } = require('../controllers/authController')

/* The `router.use()` function is used to add middleware to the router object. In this case, it is adding the `cors` middleware to the router. */
router.use(
    cors({
        credentials: true,
        origin: "https://mern-job-portal.netlify.app",
    })
)

router.get('/', test) //test function -> authController.js 
router.get('/users', getUsers); //for user testcase
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.post('/logout', logoutUser);
module.exports = router;


