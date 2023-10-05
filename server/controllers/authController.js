const User = require('../models/user');
// const cookieParser = require('cookie-parser');
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
  res.send("Server test is succeed!");
}


//register Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if name was entered
    if (!name) {
      return res.json({
        error: 'Name is required'
      });
    }

    // Check if password is good
    if (!password || password.length < 5) {
      return res.json({
        error: 'Password is required and should be at least 5 characters'
      });
    }

    // Check if email is already in use
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        status: 'error',
        error: 'Email is already used!'
      });
    }
    const hashedPassword = await hashPassword(password);
    // Create a user in the database
    console.log("Hashed Password", hashedPassword);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Send a success response with the user data and pass them to database
    return res.json({
      status: 'success',
      data: user,
    });

  } catch (error) {
    console.log(error);
    // Handle any errors here and send an error response
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Register Endpoint Ends 

//login endpoint Starts
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: 'No User Found'
      })
    }

    //check if password matched
    const match = await comparePassword(password, user.password)

    if (match) {
      jwt.sign({ email: user.email, id: user._id, name: user.name }, //first parameter
        process.env.JWT_SECRET, //second parameter
        {}, //third parameter
        (err, token) => {
          if (err) throw err;
          else res.cookie('token', token).json({ user, token })
        })
    }

    //if not matched
    else return res.json({
      error: 'Password not Matched'
    })

  } catch (error) {
    console.log(error)
  }
};


//get profile info for client side session controlling
const getProfile = (req, res) => {
  const token = req.query.token;
  console.log(token, "<---From Back");
  try {
    if (token) {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      res.json({ user, token })
      console.log({ user, token });
    } else {
      res.json({ message: "Token not found!" });
    }
  } catch (err) {
    console.error('Error verifying token:', err);
    res.json({ message: "Something went wrong!" });
  }
}


//logout the user 
const logoutUser = async (req, res) => {
  res.clearCookie('token')
  res.json({
    message: 'Logout Successfully!'
  })
}

//get all users data 
const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Use await to make it asynchronous
    res.send(users);
    console.log(users);
  } catch (error) {
    res.status(500).send(error.message); // Handle errors appropriately
  }
}


module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  getUsers,
}