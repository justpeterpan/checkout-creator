const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const schema = new mongoose.Schema({
  body: {
    type: Object,
  },
  headline: {
    type: Object,
  },
  "text--muted": {
    type: Object,
  },
  "supr-btn--primary": {
    type: Object,
  },
  "supr-btn--secondary": {
    type: Object,
  },
  icon: {
    type: Object,
  },
});

const Config = mongoose.model("Config", schema);

mongoose.connect("mongodb://mongo:27017/creatorConfigDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.post("/config", async (req, res) => {
  const config = new Config(req.body);

  try {
    await config.save();
    res.status(201).send(config);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/", (req, res) => {
  return res.send("Hello");
});

app.post("/css", (req, res) => {
  let body = "";
  filePath = __dirname + "/styles.css";

  req.on("data", (data) => {
    body += data;
    body = body.replace(/"/g, "");
  });

  req.on("end", () => {
    fs.appendFile(filePath, body, () => {
      res.end();
    });
  });
});

app.listen(3000, function() {
  console.log("Working on port 3000");
});
