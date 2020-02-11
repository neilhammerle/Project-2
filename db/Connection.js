const mongoose = require("mongoose");

const URI = "mongodb+srv://neilhammerle:calcount@cluster-vong7.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected');
}

module.exports = connectDB;