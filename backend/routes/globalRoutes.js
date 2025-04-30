const express = require("express");
const { homeFunc } = require("../controllers/globalControllers");
const globalRouter = express.Router();

globalRouter.get("/", homeFunc);

module.exports = globalRouter;
