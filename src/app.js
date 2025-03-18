const express = require("express");

const app = express();


app.use(
    "/user",
[(req, res, next) => {
    console.log("Handling the route user 1");
    //res.send("1st response");
    next();
}, 
(req, res, next) => {
    console.log("Handling the route user 2");
    //res.send("2nd response");
    next();
}, 
(req, res, next) => {
    console.log("Handling the route user 3");
    //res.send("3rd response");
    next();
}, 
(req, res) => {
    console.log("Handling the route user 4");
    res.send("4th response");
}])

app.listen(3000, () => {
    console.log("server is sucessfully listning on port 3000 .. ");
});
