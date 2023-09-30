import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

import { createSlice } from "@reduxjs/toolkit";

export const gitProduct = createSlice({
  name: "product",
  initialState: {
    product: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(ALL_PRODUCT_REQUEST, (state) => {
      state.loading = true;
      state.product = [];
    });

    builder.addCase(ALL_PRODUCT_SUCCESS, (state, action) => {
      state.loading = false;
      state.product = action.product;
    });
    builder.addCase(ALL_PRODUCT_FAIL, (state, action) => {
      (state.loading = false), (state.error = action.product);
    });
  },
});

export const ProductdetailsReducer = createSlice({
  name: "productDtail",
  initialState: {
    product: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(PRODUCT_DETAILS_REQUEST, (state) => {
      state.loading = true;
      state;
    });

    builder.addCase(PRODUCT_DETAILS_SUCCESS, (state, action) => {
      state.loading = false;
      state.product = action.product;
    });
    builder.addCase(PRODUCT_DETAILS_FAIL, (state, action) => {
      state.loading = false;
      error.state = action.product;
    });
  },
});
