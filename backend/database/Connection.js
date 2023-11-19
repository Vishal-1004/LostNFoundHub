const mongoose = require("mongoose");

async function Connection(url) {
  try {
    await mongoose.connect(url).then(() => {
      console.log("Connected To DataBase");
    });
  } catch (error) {
    console.log("Connection with DataBase failed", error.message);
  }
}

module.exports = Connection;
