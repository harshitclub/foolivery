const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./utils/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Origin",
      "Accept",
      "X-Requested-With",
    ],
  })
);

const PORT = process.env.PORT || 5000;

app.use(userRouter);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port: ${PORT}`);
});
