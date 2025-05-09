const User = require("../schema/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// signup controller
const signup = async (req, res) => {
  try {
    // 1. First take the data from the frontend
    const { fullName, email, phone, password } = req.body;

    // 2. Validate the data
    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required!" }); // Changed status code to 400 for bad request
    }

    // Basic email and phone validation (you might want more robust validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const phoneRegex = /^\d{10}$/; // Basic 10-digit phone number validation
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        message: "Invalid phone number format (should be 10 digits).",
      });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long." });
    }

    // 3. Check if the user is already present in the database
    const existingUser = await User.findOne({ email }); // Using shorthand for { email: email }

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists with this email." }); // Changed status code to 409 for conflict
    }

    const existingPhoneUser = await User.findOne({ phone });
    if (existingPhoneUser) {
      return res
        .status(409)
        .json({ message: "User already exists with this phone number." });
    }

    // 4. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Save user to the database
    const newUser = new User({
      fullName,
      email,
      phone,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "Signup successful!",
      success: true,
      data: {
        _id: savedUser._id,
        fullName: savedUser.fullName,
        email: savedUser.email,
        phone: savedUser.phone,
        // Don't send the password hash back
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." }); // Generic error message for production
  }
};

// login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d", // Example: token expires in 30 days
    });

    // Set the JWT as a cookie
    res.cookie("foolivery", token, {
      httpOnly: true,
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });

    return res.status(200).json({
      message: "Login successful!",
      success: true,
      user: { _id: user._id, fullName: user.fullName, email: user.email },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong during login." });
  }
};

const logout = async (req, res) => {
  try {
    // Clear the 'foolivery' cookie by setting its maxAge to 0
    res.cookie("foolivery", "", {
      httpOnly: true,
      path: "/",
      maxAge: 0,
    });

    return res.status(200).json({
      message: "Logout successful!",
      success: true,
    });
  } catch (error) {
    console.error("Error during logout:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong during logout." });
  }
};

// --- Get User Profile ---
const getProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to authenticate

    const user = await User.findById(userId).select("-password"); // Exclude the password field

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({
      message: "Profile retrieved successfully!",
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong while fetching profile." });
  }
};

// --- Update User Information ---
const updateUser = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to authenticate and attach user info to req
    const { fullName, phone, address, deliveryAddresses, preferences } =
      req.body;

    const updatedFields = {};
    if (fullName) updatedFields.fullName = fullName;
    if (phone) updatedFields.phone = phone;
    if (address) updatedFields.address = address;
    if (deliveryAddresses) updatedFields.deliveryAddresses = deliveryAddresses;
    if (preferences) updatedFields.preferences = preferences;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedFields },
      { new: true, runValidators: true } // new: true returns the modified document, runValidators ensures schema validation
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({
      message: "User information updated successfully!",
      success: true,
      data: {
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        phone: updatedUser.phone,
        address: updatedUser.address,
        deliveryAddresses: updatedUser.deliveryAddresses,
        preferences: updatedUser.preferences,
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({
      message: "Something went wrong while updating user information.",
    });
  }
};

// --- Change Password ---
const changePassword = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to authenticate
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      return res
        .status(400)
        .json({ message: "All password fields are required." });
    }

    if (newPassword !== confirmNewPassword) {
      return res
        .status(400)
        .json({ message: "New password and confirm password do not match." });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "New password must be at least 6 characters long." });
    }

    const user = await User.findById(userId).select("+password"); // Explicitly select the password field

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect old password." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return res
      .status(200)
      .json({ message: "Password changed successfully!", success: true });
  } catch (error) {
    console.error("Error changing password:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong while changing password." });
  }
};

// --- Add Delivery Address ---
const addDeliveryAddress = async (req, res) => {
  try {
    const userId = req.user._id;
    const { street, city, state, postalCode, country, label, isDefault } =
      req.body;

    const newAddress = { street, city, state, postalCode, country, label };

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (isDefault) {
      // If setting a new default, unset any existing default address
      await User.updateOne(
        { _id: userId, "deliveryAddresses.isDefault": true },
        { $set: { "deliveryAddresses.$[].isDefault": false } }
      );
      newAddress.isDefault = true;
    } else if (
      !user.deliveryAddresses.some((addr) => addr.isDefault) &&
      user.deliveryAddresses.length === 0
    ) {
      // If no default exists and this is the first address, set it as default
      newAddress.isDefault = true;
    }

    user.deliveryAddresses.push(newAddress);
    await user.save();

    return res.status(201).json({
      message: "Delivery address added successfully!",
      success: true,
      data: user.deliveryAddresses,
    });
  } catch (error) {
    console.error("Error adding delivery address:", error);
    if (
      error.name === "ValidationError" &&
      error.errors["deliveryAddresses.0.street"]
    ) {
      return res
        .status(400)
        .json({ message: "Delivery address details are incomplete." });
    }
    return res
      .status(500)
      .json({ message: "Something went wrong while adding delivery address." });
  }
};

// --- Update Delivery Address ---
const updateDeliveryAddress = async (req, res) => {
  try {
    const userId = req.user._id;
    const addressId = req.params.addressId;
    const { street, city, state, postalCode, country, label, isDefault } =
      req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const addressToUpdate = user.deliveryAddresses.id(addressId);
    if (!addressToUpdate) {
      return res.status(404).json({ message: "Delivery address not found." });
    }

    if (street) addressToUpdate.street = street;
    if (city) addressToUpdate.city = city;
    if (state) addressToUpdate.state = state;
    if (postalCode) addressToUpdate.postalCode = postalCode;
    if (country) addressToUpdate.country = country;
    if (label) addressToUpdate.label = label;

    if (isDefault) {
      // Unset any existing default address for this user
      await User.updateOne(
        { _id: userId, "deliveryAddresses.isDefault": true },
        { $set: { "deliveryAddresses.$[].isDefault": false } }
      );
      addressToUpdate.isDefault = true;
    }

    await user.save();

    return res.status(200).json({
      message: "Delivery address updated successfully!",
      success: true,
      data: user.deliveryAddresses,
    });
  } catch (error) {
    console.error("Error updating delivery address:", error);
    return res.status(500).json({
      message: "Something went wrong while updating delivery address.",
    });
  }
};

// --- Delete Delivery Address ---
const deleteDeliveryAddress = async (req, res) => {
  try {
    const userId = req.user._id;
    const addressId = req.params.addressId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.deliveryAddresses.pull({ _id: addressId }); // Remove the address using pull
    await user.save();

    return res.status(200).json({
      message: "Delivery address deleted successfully!",
      success: true,
      data: user.deliveryAddresses,
    });
  } catch (error) {
    console.error("Error deleting delivery address:", error);
    return res.status(500).json({
      message: "Something went wrong while deleting delivery address.",
    });
  }
};

// --- Add to Wishlist ---
const addToWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const { foodItemId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.wishlist.includes(foodItemId)) {
      return res
        .status(409)
        .json({ message: "Food item already in wishlist." });
    }

    user.wishlist.push(foodItemId);
    await user.save();

    return res.status(200).json({
      message: "Food item added to wishlist!",
      success: true,
      data: user.wishlist,
    });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong while adding to wishlist." });
  }
};

// --- Remove from Wishlist ---
const removeFromWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const { foodItemId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.wishlist = user.wishlist.filter((id) => id.toString() !== foodItemId);
    await user.save();

    return res.status(200).json({
      message: "Food item removed from wishlist!",
      success: true,
      data: user.wishlist,
    });
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong while removing from wishlist." });
  }
};
module.exports = {
  signup,
  login,
  logout,
  updateUser,
  changePassword,
  getProfile,
  addDeliveryAddress,
  updateDeliveryAddress,
  deleteDeliveryAddress,
  addToWishlist,
  removeFromWishlist,
};
