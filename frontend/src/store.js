import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { ProductdetailsReducer, gitProduct } from "./reducers/productReducer";
import { userLoader, userReducer, userRegister } from "./reducers/userReducer";

const reducer = {
  product: gitProduct.reducer,
  productDetail: ProductdetailsReducer.reducer,
  user: userReducer.reducer,
  userRegister: userRegister.reducer,
  userLoader: userLoader.reducer,
};

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
