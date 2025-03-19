const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");


app.post("/signup",async(req, res) => {
    // creating a userObj (& I wanted to save this data to DB)
    const userObj = {
        firstName : "Ketan",
        lastName : "Raj",
        emailId : "rajketan99@gmail.com",
        password : "Ketan@123",
    }

    // creating new instance of User model (i.e we're creating a new user with these data)
    const user = new User(userObj);

    try{
        // saving data to DB
        await user.save();
        res.send("User added successfully");
    } catch(err){
        res.status(400).send("Error saving the user:" + err.message);
    }
})

connectDB().then(() => {
    console.log("Database connection enstablished ...");
    // 1st DB connection made then start listening to the API calls
    app.listen(3000, () => {
        console.log("server is sucessfully listning on port 3000 .. ");
    });
}).catch(err => {
    console.log("Database cannot be connection ...")
})
