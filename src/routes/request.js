const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const connectionRequestModel = require("../models/connectionRequest");
const User = require("../models/user");
// sending connection request
requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      // Adding allowed connection request - validation
      const allowedStatus = ["ignored", "interested"];
      if (!allowedStatus.includes(status)) {
        return res
          .status(404)
          .send({ message: "Invalid status type : " + status });
      }

      // Handling if user not present on DB - then for the random userId connection request should not made.
      const toUser = await User.findById(toUserId);  // finding the existing user
      if (!toUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // If there is an existing Connection request [pending from [A to B || B to A]- then not allowed to send connection request once again
      const existingConnectionRequest = await connectionRequestModel.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });
      if (existingConnectionRequest) {
        // if any existing request is present
        return res
          .status(400)
          .send({ message: "Connection request already exists!!" });
      }

      // creating new instance of connectionRequestModel
      const connectionRequest = new connectionRequestModel({
        fromUserId,
        toUserId,
        status,
      });
      const data = await connectionRequest.save();
      res.json({
        message: req.user.firstName + " is " + status + " in " + toUser.firstName,
        data,
      });
    } catch (err) {
      res.status(400).send("ERROR :" + err.message);
    }
  }
);

module.exports = requestRouter;
