const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/users.js");
const connection = require("./database/Connection.js");

app.use(express.json());
app.use(cors());

//  routes
// Register
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, regNo, dayORhostel } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      regNo,
      dayORhostel,
    });
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

    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordCheck) {
      return res.status(200).json({ message: "Password is Not Correct" });
    }

    return res.status(200).json({ message: "Login Successful", user: user });
  } catch (error) {
    return res
      .status(200)
      .json({ message: "Some Error Occurred", message: error.message });
  }
});

// url: /profile/:id

app.get("/", async (req, res) => {
  try {
    const allUserData = await User.find();
    return res.status(200).json(allUserData);
  } catch (error) {
    return res
      .status(200)
      .json({ message: "Some Error Occurred", message: error.message });
  }
  //res.json({ message: "Hello, Backend is working fine" });
});

app.listen(5000, () => {
  console.log("Server started at port: http://localhost:5000");
  const url =
    "mongodb+srv://admin:admin123@cluster0.43ogvok.mongodb.net/?retryWrites=true&w=majority";
  connection(url);
});
