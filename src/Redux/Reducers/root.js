import { combineReducers } from 'redux';

import login from './login.js'
import auth from './auth.js'
import register from './register.js'
import wizard from './wizard.js'
// import setWedding details from './weddingdetails.js'

export default combineReducers({
    login, auth, register, wizard
    //next reducer here in comma-separated object
})
