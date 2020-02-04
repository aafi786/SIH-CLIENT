import {
    GET_ERRORS,
    SET_CURRENT_USER
} from './types';
import axios from 'axios';

//Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/auth/register', userData)
        .then(res => {
            console.log(res.data)
            history.push('/login')
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login - Get User Token
export const loginUser = (userData) => dispatch => {
    axios
        .post('/auth/login', userData)
        .then(res => {
            //save to local Storage
            const {
                token
            } = res.data;
            localStorage.setItem('jwtToken', token);
            //set token to Auth header
            setAuthToken(token);
            //Decode token to get userData
            const decoded = jwt_decode(token);
            //set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

//set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//log out 
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}