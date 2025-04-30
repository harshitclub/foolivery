const express = require("express");
const dotenv = require("dotenv");
const globalRouter = require("./routes/globalRoutes");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(globalRouter);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
