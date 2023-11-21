const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/users.js");
const connection = require("./database/Connection.js");

app.use(express.json());
app.use(cors());

//  routes
// Register
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, regNo } = req.body;
    const user = new User({ name, email, password, regNo });
    await user.save();
    res.status(200).json({ message: "Sign Up Successful" });
  } catch (error) {
    // Duplicate key error (email is not unique)
    return res.status(200).json({
      message: "User with this email or registration number already exists",
    });
    //console.error(error);
    //return res.status(200).json({ message: "Internal Server Error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ regNo: req.body.regNo });
    if (!user) {
      return res.status(200).json({ message: "Please Sign Up First" });
    }

    if (req.body.password !== user.password) {
      return res.status(200).json({ message: "Password is Not Correct" });
    }

    return res.status(200).json({ message: "Login Successfull", user: user });
  } catch (error) {
    return res
      .status(200)
      .json({ message: "Some Error Occured", message: error.message });
  }
});
// Get user by ID
app.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Some error occurred", error: error.message });
  }
});

app.get("/", async (req, res) => {
  try {
    const allUserData = await User.find();
    return res.status(200).json(allUserData);
  } catch (error) {
    return res
      .status(200)
      .json({ message: "Some Error Occured", message: error.message });
  }
  //res.json({ message: "Hello, Backend is working fine" });
});

app.listen(5000, () => {
  console.log("Server started at port: http://localhost:5000");
  const url =
    "mongodb+srv://admin:admin123@cluster0.43ogvok.mongodb.net/?retryWrites=true&w=majority";
  connection(url);
});
