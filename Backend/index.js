require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("Can't connect to DB");
  }

  console.log("Server running at port", process.env.PORT);
});
