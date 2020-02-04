import axios from "axios";

import {
  ADD_BILL,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_BILLS,
  GET_BILL,
  BILL_LOADING,
  DELETE_BILL
} from "./types";

// Add Bills
export const addBill = billData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/bill/savebill", billData)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADD_BILL,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Bills
export const getAllBills = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/bill/getallbill")
    .then(res => {
      console.log("in action:" + res.data);
      dispatch({
        type: GET_BILLS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_BILLS,
        payload: null
      })
    );
};

// Get Posts
export const getBillsByDate = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/bill/getbillbydate")
    .then(res =>
      dispatch({
        type: GET_BILLS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BILLS,
        payload: null
      })
    );
};

// Get Posts
export const getBillByID = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/bill/getbillbyid")
    .then(res =>
      dispatch({
        type: GET_BILL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BILL,
        payload: null
      })
    );
};

// // Get Post
// export const getPost = id => dispatch => {
//     dispatch(setPostLoading());
//     axios
//         .get(`/api/posts/${id}`)
//         .then(res =>
//             dispatch({
//                 type: GET_POST,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_POST,
//                 payload: null
//             })
//         );
// };

// // Delete Post
// export const deletePost = id => dispatch => {
//     axios
//         .delete(`/api/posts/${id}`)
//         .then(res =>
//             dispatch({
//                 type: DELETE_POST,
//                 payload: id
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         );
// };

// Set loading state
export const setPostLoading = () => {
  return {
    type: BILL_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
