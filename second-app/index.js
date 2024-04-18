const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("This is second app server home router ");
});
app.get("/profile", (req, res) => {
  res.send("This is second app server profile router");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
