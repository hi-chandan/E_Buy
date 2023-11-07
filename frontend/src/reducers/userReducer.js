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
  userlogout: true,
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

    //register user
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

    // loading user
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
    /// log out user
    builder.addCase(LOGOUT_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = null;
      (state.isAuthenticated = false), (state.userlogout = false);
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

// update user

export const updateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
    case UPDATE_USER_REQUEST:
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case UPDATE_PROFILE_FAIL:
    case UPDATE_USER_FAIL:
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_PROFILE_RESET:
    case UPDATE_USER_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_USER_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// export const updateReducer = createSlice({
//   name: "userupdate",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(UPDATE_PROFILE_REQUEST, (state, action) => {
//       state.loading = true;
//     });

//     builder.addCase(UPDATE_PROFILE_SUCCESS, (state, action) => {
//       state.loading = false;
//       state.isUpdated = action.payload;
//       state.user = null;
//     });
//     builder.addCase(UPDATE_PROFILE_FAIL, (state, action) => {
//       state.loading = false;
//       state.error = action.error;
//     });
//     builder.addCase(UPDATE_PROFILE_RESET, (state, action) => {
//       state.isUpdated = false;
//     });

//     builder.addCase(CLEAR_ERRORS, (state) => {
//       state.error = null;
//     });
//   },
// });

export const userPassword = createSlice({
  name: "userupdate",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(UPDATE_PASSWORD_REQUEST, (state, action) => {
      state.loading = true;
    });

    builder.addCase(UPDATE_PASSWORD_SUCCESS, (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
      state.user = null;
    });
    builder.addCase(UPDATE_PASSWORD_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(UPDATE_PASSWORD_RESET, (state, action) => {
      state.isUpdated = false;
    });

    builder.addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    });
  },
});

export const resetPasswordReducer = createSlice({
  name: "userupdate",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(RESET_PASSWORD_REQUEST, (state, action) => {
      state.loading = true;
    });

    builder.addCase(RESET_PASSWORD_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.user = null;
    });
    builder.addCase(RESET_PASSWORD_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // forget password
    builder.addCase(FORGOT_PASSWORD_REQUEST, (state, action) => {
      state.loading = true;
    });

    builder.addCase(FORGOT_PASSWORD_SUCCESS, (state, action) => {
      state.loading = false;
      state.success = action.payload;
      state.user = null;
    });
    builder.addCase(FORGOT_PASSWORD_FAIL, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    });
  },
});

export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
