const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res
    .json({
      message: "hello is from backend",
    })
    .status(200);
});

app.get("/about", (req, res) => {
  res.send("this is the about page").status(200);
});

app.get("/contact", (req, res) => {
  res.json({ message: "this is the contact page" }).status(200);
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
