const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

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

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
