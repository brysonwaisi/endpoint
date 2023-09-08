const express = require("express");
const moment = require("moment");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  const date = moment();
  const currentDay = date.format("dddd");

  const utcTime = date.toISOString().slice(0, -5) + "Z";

  try {
    if (!slack_name || !track) {
      console.log("Input your slack_name and track");

      return res.sendStatus(400);
    }

    const status = 200;

    const result = {
      slack_name,
      current_day: currentDay,
      utc_time: utcTime,
      track,
      github_file_url:
        "https://github.com/brysonwaisi/endpoint/blob/main/app.js",
      github_repo_url: "https://github.com/brysonwaisi/endpoint",
      status_code: status,
    };

    res.json(result);
    res.status(200);
  } catch (error) {
    res.status(400);
    console.log(error);
    throw new Error(error.message);
  }
});

app.listen(PORT, console.log(`server is running on port ${PORT}`));
