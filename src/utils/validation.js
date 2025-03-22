// creating a function to validate the signUp data of each and every user who register 
const validator = require("validator");

const validateSignUpData = (req) => {
    const {firstName, lastName, emailId, password} = req.body;
    if(!firstName || !lastName){  // checking F_name, L_Name exist or not 
        throw new Error("Name is not valid");
    } else if (!validator.isEmail(emailId)){
        throw new Error("Email is not valid");
    } else if (!validator.isStrongPassword(password)){
        throw new Error("please enter a strong password");
    }
};

module.exports = {
    validateSignUpData,
};