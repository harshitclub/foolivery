const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./utils/db");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();
// this is middleware to handle json data
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use(userRouter);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port: ${PORT}`);
});
