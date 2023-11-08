const express = require("express");
const app = express();
const cookiParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
app.use(express.json());
app.use(cookiParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(fileUpload());
// Route Import

const product = require("./routes/productRouter");
const user = require("./routes/userRouter");
const order = require("./routes/orderRouter");
const payment = require("./routes/paymentRoute");
app.use("/api/v1", user);
app.use("/api/v1/", product);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});

module.exports = app;
