const app = require("./app");
const cloudinary = require("cloudinary");
const connection = require("./config/dbconn");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config.env" });
}
// connection to database
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
