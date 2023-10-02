// const express = require("express")
const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
dotenv.config({ path: "./config.env" });

// connection to database
const connection = require("./config/dbconn");
connection();
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
const server = app.listen(process.env.port, () => {
  console.log(`server is wroking on  ${process.env.port}`);
});

// unchandled promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message} `);
  console.log("Shutting down the server due to Unhandled Promise");

  server.close(() => {
    process.exit(1);
  });
});
