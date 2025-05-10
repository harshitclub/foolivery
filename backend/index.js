const express = require("express"); // express is a framework of node.js
const dotenv = require("dotenv"); // loads environment variables from process
const userRouter = require("./routes/userRoutes");
const connectDB = require("./utils/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config(); // config the dotenv module
app.use(cookieParser()); // parses the cookies between backend & frontend
app.use(express.json()); // handles the json data that comes from frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
); // cors - cross origin resource sharing || used to sharing data between frontend & backend via some rules.

const PORT = process.env.PORT || 5000;

app.use(userRouter); // user routes
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port: ${PORT}`);
}); // listening and starting server
