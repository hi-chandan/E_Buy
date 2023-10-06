import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { ProductdetailsReducer, gitProduct } from "./reducers/productReducer";
import {
  updateReducer,
  // userLoader,
  // userLogout,
  userReducer,
  // userRegister,
} from "./reducers/userReducer";

const reducer = {
  product: gitProduct.reducer,
  productDetail: ProductdetailsReducer.reducer,
  // userRegister: userRegister.reducer,
  user: userReducer.reducer,
  profile: updateReducer.reducer,
  // userLoader: userLoader.reducer,
  // userLogout: userLogout.reducer,
};

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
