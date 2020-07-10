const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

app.use(cors());

app.post("/", function(req, res) {
  let body = "";
  filePath = __dirname + "/styles.css";

  req.on("data", (data) => {
    body += data;
    body = body.replace(/"/g, "");
  });

  req.on("end", function() {
    fs.appendFile(filePath, body, () => {
      res.end();
    });
  });
});

app.listen(4000, function() {
  console.log("Working on port 3000");
});
