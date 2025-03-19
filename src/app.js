const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());  // included middleware to all the routes 

app.post("/signup",async(req, res) => {
    console.log(req.body);

    // creating new instance of User model (i.e we're creating a new user with these data)
    const user = new User(req.body);

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
