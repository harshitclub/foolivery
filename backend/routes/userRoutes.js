const express = require("express");
const {
  signup,
  login,
  updateUser,
  changePassword,
  getProfile,
  addDeliveryAddress,
  updateDeliveryAddress,
  deleteDeliveryAddress,
  addToWishlist,
  removeFromWishlist,
  logout,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/auth");

// configuring user routes
// hello
const userRouter = express.Router();

// user routes
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/profile", protect, getProfile);
userRouter.patch("/update", protect, updateUser);
userRouter.patch("/change-password", protect, changePassword);
userRouter.post("/add-delivery-address", protect, addDeliveryAddress);
userRouter.patch(
  "/update-delivery-address/:addressId",
  protect,
  updateDeliveryAddress
);
userRouter.delete(
  "/delete-delivery-address/:addressId",
  protect,
  deleteDeliveryAddress
);
userRouter.post("/add-to-wishlist", protect, addToWishlist);
userRouter.delete("/remove-from-wishlist", protect, removeFromWishlist);

module.exports = userRouter;
