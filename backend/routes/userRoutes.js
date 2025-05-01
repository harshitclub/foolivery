const express = require("express");
const {
  signup,
  login,
  profile,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

// configuring user routes
// hello
const userRouter = express.Router();

// user routes
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/profile", profile);
userRouter.patch("/update", updateUser);
userRouter.delete("/delete", deleteUser);

module.exports = userRouter;
