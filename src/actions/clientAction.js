import axios from "axios";

import { ADD_CLIENT, GET_CLIENTS } from "./types";

//Add Clients
export const addClient = clientData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/client/addClient", clientData)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADD_CLIENT,
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

// Get Clients
export const getAllClients = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/bill/getallclients")
    .then(res => {
      console.log("in action:" + res.data);
      dispatch({
        type: GET_CLIENTS,
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
