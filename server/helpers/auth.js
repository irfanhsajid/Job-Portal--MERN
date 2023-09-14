const bcrypt = require('bcrypt');

// Function to Hash a Password
const hashPassword = async (password) => {
  try {
    // Generate a random salt with 12 rounds (higher the number>ensures more security)
    const salt = await bcrypt.genSalt(12);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
    
  } catch (error) {
    // Handle any errors that occur during hashing
    throw error;
  }
};

// Function to Compare a Password
const comparePassword = async (enteredPassword, hashedPassword) => {
  try {
    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(enteredPassword, hashedPassword);

    return isMatch;
  } catch (error) {
    // Handle any errors that occur during comparison
    throw error;
  }
};

module.exports = {
  hashPassword,
  comparePassword
};
