import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const getProduct =
  ({ keyword = "" }) =>
  async (dispatch) => {
    console.log("keyowrd.. ation", keyword);
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      const link = `/api/v1/products/?keyword=${keyword}`;
      console.log("link..", link);
      const { data } = await axios.get(link);
      console.log("data..", data);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        product: data,
      });
    } catch (err) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        product: err.response.data.message,
      });
    }
  };
export const getproductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      product: data.product,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      product: err.response.data.message,
    });
  }
};

export const ClearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
