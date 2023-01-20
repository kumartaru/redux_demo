import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./UserTypes";
import axios from "axios";
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//Thunk
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch(fetchUserSuccess(res.data));
    } catch (e) {
      dispatch(fetchUserFailure(e.message));
    }
  };
};
