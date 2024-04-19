const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "John", email: "one@one.com" },
  { id: 2, name: "Jane", email: "two@two.com" },
  { id: 3, name: "Jim", email: "three@three.com" },
];

app.get("/", (req, res) => {
  res.send("User Management Server Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
