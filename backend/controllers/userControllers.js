const User = require("../schema/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret_key = process.env.SECRET_KEY;
const secret_key_expiry = process.env.SECRET_KEY_EXPIRY;

// signup controller
const signup = async (req, res) => {
  try {
    // 1. first take the data from frontend
    const { fullName, email, phone, password } = req.body;

    // 2. validate the data
    if (!fullName && !email && !phone && !password) {
      res.status(406).json({ message: "All fields are required!" });
    }

    // 3. check if the user is already present or not in database
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.status(406).json({ message: "User already exists with this email" });
    }

    // 4. hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // 5. save user to the database
    const newUser = new User({
      fullName: fullName,
      email: email,
      phone: phone,
      password: hashPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: "Signup Success",
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      res.status(406).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      res.status(400).json({ message: "Invalid Credentials" });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      secret_key,
      {
        expiresIn: secret_key_expiry,
      }
    );

    res.cookie("foolivery", accessToken, {
      httpOnly: true,
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });
    res.status(200).json({ message: "Login Success", data: user });
  } catch (error) {
    console.log(error);
  }
};

// profile controller
const profile = async (req, res) => {
  try {
    const token = req.cookies.foolivery;
    if (!token) {
      res.status(401).json({ message: "Token not found" });
    }
    const tokenData = jwt.verify(token, secret_key);

    const profile = await User.findById({ _id: tokenData.id });
    if (!profile) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User found", data: profile });
  } catch (error) {
    console.log(error);
  }
};

// update user controller
const updateUser = (req, res) => {
  res.send("update function");
};

// delete user controller
const deleteUser = (req, res) => {
  res.send("delete function");
};

module.exports = { signup, login, profile, updateUser, deleteUser };
