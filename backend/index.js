const path = require("path");
const http = require("http");
const fs = require("fs");
// const hostname = "127.0.0.1";

const indexFile = path.join(__dirname, "./public/index.html");

const server = http.createServer((req, res) => {
  fs.readFile(indexFile, (err, data) => {
    if (err) {
      console.error("Error reading HTML file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("server started");
});
