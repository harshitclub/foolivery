const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    phone: {
      type: String, // Storing as string to handle potential formatting and leading zeros
      required: [true, "Phone number is required"],
      trim: true,
      // You might want to add a regex for basic phone number validation
      // match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      message: "Password must be at least 6 characters long.",
    },
    address: {
      type: String,
      trim: true,
      default: null,
    },
    deliveryAddresses: [
      {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        postalCode: { type: String, trim: true },
        country: { type: String, trim: true, default: "India" }, // Assuming primary market is India
        isDefault: { type: Boolean, default: false },
        label: { type: String, trim: true }, // e.g., "Home", "Office"
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order", // Assuming you have an 'Order' model
      },
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem", // Assuming you have a 'FoodItem' model
      },
    ],
    paymentMethods: [
      {
        type: String, // e.g., "Credit Card", "Debit Card", "UPI"
        details: mongoose.Schema.Types.Mixed, // Store specific payment details (could be another schema)
        isDefault: { type: Boolean, default: false },
      },
    ],
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["customer", "admin", "restaurant"], // Added potential roles
      default: "customer",
    },
    profilePicture: {
      type: String, // Store URL or path to the profile picture
      default: null,
    },
    preferences: {
      dietaryRestrictions: [String], // e.g., ["Vegetarian", "Vegan", "Gluten-Free"]
      cuisinePreferences: [String], // e.g., ["Italian", "Indian", "Chinese"]
      allergies: [String], // e.g., ["Peanuts", "Dairy"]
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple null values
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    lastLogin: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema); // Changed model name to 'User'

module.exports = User;
