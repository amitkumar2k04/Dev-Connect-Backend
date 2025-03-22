const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      maxLength: 50,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        // adding custom validator checks
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoUrl: {
        type: String,
        default: "https://www.vhv.rs/viewpic/ihmxhJ_dummy-image-of-user-hd-png-download/#",
        validate: {
            validator: function (value) {
                // Using regular expression (regex) to ensure only valid image URLs are allowed:
                return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/.test(value);
            },
            message: "Invalid image URL! Must be a valid link ending with .png, .jpg, .jpeg, .gif, or .svg."
        }
    },
    about: {
      type: String,
      default: "This is a default about the user!.",
    },
    skills: {
      type: [String],
      validate(value) {
        if (value.length > 20) {
          // Ensures a maximum of 20 skills
          throw new Error("You cannot have more than 20 skills.");
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
