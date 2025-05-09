const jwt = require("jsonwebtoken");
const User = require("../schema/userSchema");
require("dotenv").config();

const protect = async (req, res, next) => {
  const token = req.cookies.foolivery; // Get token from the 'foolivery' cookie
  if (token) {
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure you have JWT_SECRET in your .env file

      // Get user from token (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Call the next middleware or route handler
    } catch (error) {
      console.error("Authentication error:", error);
      res.clearCookie("foolivery", {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        path: "/",
      }); // Clear invalid cookie
      return res
        .status(401)
        .json({ message: "Not authorized, invalid token." });
    }
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, no token found in cookie." });
  }
};

module.exports = { protect };
