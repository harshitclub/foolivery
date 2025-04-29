const fs = require("fs");

fs.writeFile("./text.txt", "my name is harshit", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Written Successfully");
  }
});

fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});
