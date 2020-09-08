import { combineReducers } from 'redux';

import login from './login.js'
import auth from './auth.js'
// import setWedding details from './weddingdetails.js'

export default combineReducers({
    login, auth
    //next reducer here in comma-separated object
})
