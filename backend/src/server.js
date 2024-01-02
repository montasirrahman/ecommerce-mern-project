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
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
app.use(morgan("dev"));
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware
const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    next();
  } else {
    res.status(401).json({
      message: "Please login first!",
    });
  }
};

/// API URL //

// TEST
app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api is working fine!",
  });
});

// api user profile
app.get("/api/user", isLoggedIn, (req, res) => {
  res.status(200).send({
    message: "user profile is working fine!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
