const express = require("express");

const app = express();

// handling request
// Handling different request in different way 

app.use("/hello",(req, res) => {
    res.send("Hello there!! ");
});

app.use("/test",(req, res) => {
    res.send("Hello from the test!! ");
});

app.use("/",(req, res) => {
    res.send("Nameste from the Dashboard!! ");
});


// server running on port 3000
app.listen(3000, () => {
    console.log("server is sucessfully listning on port 3000 .. ");
});


/*
Steps performed :
    - Installed express
    - create a server
    - Listen to port 3000
    - write request handlers for /test, /hello
    - Installed nodemon and update script inside package.json 

*/
