const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");


// Handle Auth Middleware for all GET, POST, .... requests
app.use("/admin", adminAuth);

app.get("/admin/getAllData",(req, res) => {
    res.send("All Data sent");
    // Note: We do not write admin Auth logic inside it, becouse If we write inside it, then we need to write auth logic for each and every route. thats why we need middlewares.
    // logic to fetch all data from DB
    // ____________
    res.send("All data sent")
});

app.get("/admin/deleteUser",(req, res) => {
    res.send("deleted a User");
});

app.get("/user", userAuth, (req, res) => {   // 1st it goes to userAuth middleware, and authenticate the user then sends the data.
    res.send("User data sends");
}) 

app.listen(3000, () => {
    console.log("server is sucessfully listning on port 3000 .. ");
});



/*
We covered:
    - middlewares 
    - route handlers
    - next()
    - different ways of writting auth
    - Why do we need middlewares 
    - write a dummy auth middleware for admin 
    - write a dummy auth middleware for all user routes except /user/logic
*/

