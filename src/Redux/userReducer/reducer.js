import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./action.types";

const initialState = {
  loading: false,
  error: false,
  isAuth: false,
};

export const Reducer = (state = initialState, { type }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: false, isAuth: false };
    }
    case LOGIN_SUCCESS: {
      return { ...state, loading: false, error: false, isAuth: true };
    }
    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    default: {
      return state;
    }
  }
};
