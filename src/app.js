const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const {validateSignUpData} = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

app.use(express.json());  // included middleware to all the routes 
app.use(cookieParser());

app.post("/signup",async(req, res) => {
    console.log(req.body);
    // Step 1 : validate your data 
    try{
        validateSignUpData(req);
       // console.log(req.body);
    } catch (err){
        res.status(400).send("Error : " + err.message);
    }
    // step 2 : Encrypt the password
    const {firstName, lastName, emailId, password} = req.body; // extracting the data out
    const passwordHash = await bcrypt.hash(password, 10);
    // console.log(passwordHash);
    // Step 3: Store the data in DB - creating new instance of User model (i.e we're creating a new user with these data)
    const user = new User({
        firstName, 
        lastName, 
        emailId,
        password : passwordHash,
    });

    try{
        // saving data to DB
        await user.save();
        res.send("User added successfully");
    } catch(err){
        res.status(400).send("Error saving the user:" + err.message);
    }
})

// Creating Login API
app.post("/login", async (req, res) => {
    try{
        const {emailId, password} = req.body;

        const user = await User.findOne({emailId : emailId});
        if(!user){
            throw new Error("Invalid credentials");
        }

        const isPasswordValid = bcrypt.compare(password, user.password);
        if(isPasswordValid) {
            // ===========================================
            // Create a JWT token 
            const token = await jwt.sign({_id : user._id}, "DEV@Tinder$790");
            // Add the token to cookie and send the response back to the user
            res.cookie("token", token);
            // ===========================================
            res.send("Login Successful");
        } else {
            throw new Error("Invalid credentials");
        }

    } catch(err){
        res.status(400).send("Error:" + err.message);
    }
})

// get user profile 
app.get("/profile", userAuth, async(req, res) => {
    try{
        const user = req.user;

        res.send(user);
    }catch(err){
        res.status(400).send("Something went wrong!");
    }
});

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
app.patch("/users/:userId", async (req, res) => {
    const userId = req.params?.userId;
    const data = req.body;
    try{
        // allowed updates 
        const ALLOWED_UPDATES = [
            "photoUrl", 
            "about", 
            "gender",
            "age", 
            "skills"
        ];
        const isUpdateAllowed = Object.keys(data).every((k) => 
            ALLOWED_UPDATES.includes(k)
        );
        if(!isUpdateAllowed){
            throw new Error("Update are not allowed");
        }
        
        const users = await User.findByIdAndUpdate({_id : userId}, data,{
            runValidators : true,
        });
        res.send("User updated successfully");
    } catch(err){
        res.status(400).send("Update Failed!" + err.message);
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
