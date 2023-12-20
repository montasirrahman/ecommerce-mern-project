// import express from "express";
// import dotenv from "dotenv";

// const app = express();
// dotenv.config();
// const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });

const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Welcome to the Backend Server!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
