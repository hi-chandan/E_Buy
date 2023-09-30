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
  (keyword = "", currentPage = 1, price = [0, 25000], category) =>
  async (dispatch) => {
    console.log("keyowrd.. ation", keyword);
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      let link = `/api/v1/products/?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
      if (category) {
        link = `/api/v1/products/?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
      }
      const { data } = await axios.get(link);
      console.log("data..", data.perpage);
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
