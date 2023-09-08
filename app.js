const express = require("express");
const app = express();

function getSlackName(req) {
  return req.query.slack_name || "Unknown";
}

function getCurrentDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  return days[now.getUTCDay()];
}

function getCurrentUtcTime() {
  const now = new Date();
  return now.toISOString();
}

app.get("/api", (req, res) => {
  const slack_name = getSlackName(req);
  const current_day = getCurrentDay();
  const utc_time = getCurrentUtcTime();
  const track = req.query.track || "Unknown";

  const github_file_url = "";

  const github_repo_url = "";

  const response_data = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  res.json(response_data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
