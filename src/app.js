const express = require("express");

const app = express();


// Exploring some more Advance Routing Concepts 
        //How do we handle dynamic APIs
app.get("/user/:userId/:name/:password",(req, res) => {
    //console.log(req.query);  // reading quary parameters 
    console.log(req.params);  // getting parameters 
    res.send({firstName: "Amit", lastName: "Kumar"})
})

// server running on port 3000
app.listen(3000, () => {
    console.log("server is sucessfully listning on port 3000 .. ");
});
