import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "./action.types";

import axios from "axios";

export const getData = (page) => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  axios
    .get(`https://randomuser.me/api/?page=${page}&results=50`)
    .then((res) => {
      dispatch({ type: DATA_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};
