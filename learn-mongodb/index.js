const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/learn-mongodb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.use(express.json());
// Enable all CORS requests
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
