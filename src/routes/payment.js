const express = require("express");
const { userAuth } = require("../middlewares/auth");
const paymentRouter = express.Router();
const razorpayInstance = require("../utils/razorpay");
const Payment = require("../models/payments");
const { memberShipAmount } = require("../utils/constants");

paymentRouter.post("/payment/create", userAuth, async(req, res) => {
    try{

        const { memberShipType } = req.body;
        const { firstName, lastName, emailId } = req.user;

        const order = await razorpayInstance.orders.create({
            "amount": memberShipAmount[memberShipType] * 100,
            "currency": "INR",
            "receipt": "receipt#1",
            "partial_payment": false,
            "notes": {
              firstName,
              lastName,
              emailId,
              "membershipType " : memberShipType,
            },
          });

          // save it to my DB
          console.log(order);
          const payment = new Payment({
            userId : req.user._id,
            orderId : order.id,
            status : order.status,
            amount : order.amount,
            currency : order.currency,
            receipt : order.receipt,
            notes : order.notes,
          });

          const savePayment = await payment.save();


          // Return back my order details to frontend
          res.json({ ...savePayment.toJSON(), keyId : process.env.RAZORPAY_KEY_ID });



    } catch(err){
        return res.status(500).json({msg : err.message});
    }
})

module.exports = paymentRouter;