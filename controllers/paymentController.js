const catchAsyncErrors = require("../middleware/catchAsyncError");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config.env" });
}

const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.Publishable_key });
});
