const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  // Step1: Read the token from the req cookies
  try {
    const cookies = req.cookies;
        // finding the token from cookies
    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }
    // Step2: validate the token
    const decdedObj = await jwt.verify(token, "DEV@Tinder$790");
    const { _id } = decdedObj;
    // Step3: Find the user - (through token checks does the user exists in DB)
        // if ID is present - then find the user from DB
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User does't exist");
    } else {
        req.user = user; // whatever the user data, we got from DB - here we attached to req
      next(); // if token is valid and User is found, then call next() - to move to the next handler
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
};

module.exports = {
  userAuth,
};
