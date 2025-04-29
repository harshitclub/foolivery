const fs = require("fs");
const os = require("os");
const http = require("http");
const path = require("path");
const url = require("url");
const crypto = require("crypto");

const server = http.createServer((req, res) => {
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("server started");
});
