const homeFunc = (req, res) => {
  res
    .json({
      message: "hello is from backend",
    })
    .status(200);
};

module.exports = { homeFunc };
