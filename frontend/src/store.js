import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  ProductdetailsReducer,
  gitProduct,
  newReviewReducer,
} from "./reducers/productReducer";
import {
  resetPasswordReducer,
  updateReducer,
  userPassword,
  // userLoader,
  // userLogout,
  userReducer,
  // userRegister,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

const reducer = {
  products: gitProduct,
  productDetail: ProductdetailsReducer.reducer,
  user: userReducer.reducer,
  profile: updateReducer.reducer,
  password: userPassword.reducer,
  forgotpassword: resetPasswordReducer.reducer,
  cart: cartReducer,
  neworder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  newReview: newReviewReducer,

  // userLoader: userLoader.reducer,
  // userLogout: userLogout.reducer,
};

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};
const store = configureStore({
  reducer,
  preloadedState: initialState,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
