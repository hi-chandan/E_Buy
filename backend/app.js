const express = require("express");
const app = express();
const cookiParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
app.use(express.json());
app.use(cookiParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(fileUpload());
// Route Import

const product = require("./routes/productRouter");
const user = require("./routes/userRouter");
const order = require("./routes/orderRouter");
app.use("/api/v1", user);
app.use("/api/v1/", product);
app.use("/api/v1", order);

module.exports = app;
