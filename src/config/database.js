const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://amitkumar2k00:CMvgJZ6xgmosQPJt@namestenode.cello.mongodb.net/DevTinder"
    );
};

module.exports = connectDB;
