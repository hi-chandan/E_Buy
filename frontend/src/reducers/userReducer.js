import { createSlice } from "@reduxjs/toolkit";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_RESET,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

const initialState = {
  user: [],
  loading: false,
  isAuthenticated: false,
  error: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LOGIN_REQUEST, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(LOGIN_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(LOGIN_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });

    builder.addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    });
  },
});
export const userRegister = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(REGISTER_USER_REQUEST, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(REGISTER_USER_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(REGISTER_USER_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });

    builder.addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    });
  },
});

export const userLoader = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LOAD_USER_REQUEST, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(LOAD_USER_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(LOAD_USER_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });

    builder.addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    });
  },
});

export const userLogout = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LOGOUT_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    });
    builder.addCase(LOGOUT_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    });
  },
});
