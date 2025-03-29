const express = require("express");
const { userAuth } = require("../middlewares/auth");
const connectionRequestModel = require("../models/connectionRequest");
const userRouter = express.Router();

// Get all the pending connection request received for loggedInUser
userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  const loggedInUser = req.user;
  try {
    // making GET call from DB & get all the connection request of the loggedInUser
    const connectionRequest = await connectionRequestModel.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", ["firstName", "lastName", "photoUrl", "age", "gender", "about", "skills"]);  // pupulate data from connectionRequestModel collection
    res.json({
      message: "Data fetched successfully",
      data: connectionRequest,
    });
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

module.exports = userRouter;
