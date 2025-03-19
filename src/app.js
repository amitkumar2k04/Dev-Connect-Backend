const express = require("express");
const app = express();

// error handling 
app.get("/getUserData", (req, res) => {
try{
    // Logic to DB call and get user data 

    throw new Error("abusida");
    res.send("User data sent");
} catch(err){
    res.status(500).send("Some error contact support team");
}
});

// error handling 
app.use("/", (err, req, res, next) => {
    if(err){
        // Log your error
        res.status(500).send("Something went wrong");
    }
});

app.listen(3000, () => {
    console.log("server is sucessfully listning on port 3000 .. ");
});
