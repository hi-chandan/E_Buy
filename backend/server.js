// const express = require("express")
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// connection to data basef
const connection = require("./config/dbconn");
connection();

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
