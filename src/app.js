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

// Get user by EmailId 
app.get("/users", async (req, res) => {
    const userEmail = req.body.emailId;

    try{
        const users = await User.find({emailId : userEmail});
        if(users.length === 0){
            res.status(404).send("User not found");
        } else{
            res.send(users);
        }
    } catch(err){
        res.status(400).send("Something went wrong!");
    }
})

// Delete user api [1st we get user by id & delete it]
app.delete("/users", async(req, res) => {
    const userId = req.body._id; // read id
    // console.log(req.body);
    try{
        const users = await User.findByIdAndDelete({userId});
        res.send("User deleted successfully!");
    } catch(err){
        res.status(400).send("Something went wrong!");
    }
});


// update data of the user
app.patch("/users", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        const users = await User.findByIdAndUpdate({_id : userId}, data);
        res.send("User updated successfully");
    } catch(err){
        res.status(400).send("Something went wrong!");
    }
})


// Feed API - GET/feed - get all the users from the database
app.get("/feed", async (req, res) => {
    try{
        const users = await User.find({}); // passing empty filter, it will give us all the documents from the collections 
        res.send(users);

    } catch(err){
        res.status(400).send("Something went wrong!");
    }

});


connectDB().then(() => {
    console.log("Database connection enstablished ...");
    // 1st DB connection made then start listening to the API calls
    app.listen(3000, () => {
        console.log("server is sucessfully listning on port 3000 .. ");
    });
}).catch(err => {
    console.log("Database cannot be connection ...")
})
