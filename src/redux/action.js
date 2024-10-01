
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../constant/constant";
import api from "./utils";

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST,
  });
  
  export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
  });
  
  export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
  });
  

  export const fetchUsers = () => {
    return async (dispatch) => {
      dispatch(fetchUsersRequest());  // Dispatching loading state
      try {
        const response = await api.get();
        console.log("sasa",response)
        dispatch(fetchUsersSuccess(response.data));  // Dispatch success if the request is successful
      } catch (error) {
        dispatch(fetchUsersFailure(error.message));  // Dispatch failure in case of error
      }
    };
  };