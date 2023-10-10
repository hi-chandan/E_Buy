const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const catchAsyncError = require("../middleware/catchAsyncError");

// Create new order

exports.newOrder = catchAsyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });
  if (!order) {
    res.status(201).json({
      success: false,
      message: "order is not placed",
    });
  }

  res.status(201).json({
    success: true,
    order,
  });
});

// get single Order

exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    return res.status(201).json({
      success: false,
      message: "please order the product",
    });
  }
  res.status(200).json({
    success: true,
    order,
  });
});

//get logged in user order

exports.myOrder = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

// Get All Order --Admin

exports.getAllOrder = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find();
  let totoalAmount = 0;
  orders.forEach((order) => {
    totoalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totoalAmount,
    orders,
  });
});

//update order status -- Admin

exports.updateOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404).json({
      success: false,
      message: "order not found",
    });
  }
  if (order.orderStatus === "Delivered") {
    return next(
      res.status(404).json({
        success: true,
        message: "you have already delevered this order",
      })
    );
  }

  order.orderItems.forEach(async (o) => {
    await updateStock(o.product, o.quantity);
  });

  order.orderStatus = req.body.status;

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.Stock -= quantity;
  await product.save({ validateBeforeSave: false });
}

// delete Order --Admin

exports.deleteOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(500).json({
      success: false,
      message: "the order is not valid",
    });
  }

  await Order.findByIdAndDelete(order);

  res.status(200).json({
    success: true,
    message: "order is deleted",
  });
});
