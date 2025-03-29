const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB().then(() => {
    console.log("Database connection enstablished ...");
    // 1st DB connection made then start listening to the API calls
    app.listen(5000, () => {
        console.log("server is sucessfully listning on port 5000 .. ");
    });
}).catch(err => {
    console.log("Database cannot be connection ...")
})
