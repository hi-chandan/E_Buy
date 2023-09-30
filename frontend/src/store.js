import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { ProductdetailsReducer, gitProduct } from "./reducers/productReducer";

const reducer = {
  product: gitProduct.reducer,
  productDetail: ProductdetailsReducer.reducer,
};
const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
