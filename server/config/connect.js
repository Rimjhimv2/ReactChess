// const mongoose = require('mongoose');
// require('dotenv').config();

// const dbConnector = async () => {
//     await mongoose.connect(process.env.MONGO_URL)
//         .then(() => console.log('MongoDB connected'))
//         .catch((err) => {
//             console.log(err);
//         });
// };

// module.exports = dbConnector;


const mongoose = require("mongoose");

const dbConnector = async () => {
  try {
    console.log(process.env.MONGO_URL); // sirf testing ke liye

    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Mongo Error:", err);
  }
};

module.exports = dbConnector;