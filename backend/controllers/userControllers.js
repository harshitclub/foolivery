const signup = (req, res) => {
  res.send("signup function");
};
const login = (req, res) => {
  res.send("login function");
};
const profile = (req, res) => {
  res.send("profile function");
};
const updateUser = (req, res) => {
  res.send("update function");
};
const deleteUser = (req, res) => {
  res.send("delete function");
};

module.exports = { signup, login, profile, updateUser, deleteUser };
