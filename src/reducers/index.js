import {
    combineReducers
} from 'redux'
import authReducer from './authReducer';
import errorReducer from './errorReducer'
import billReducer from './billReducer'
import clientReducer from './clientReducer'

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    bill: billReducer,
    client: clientReducer
})