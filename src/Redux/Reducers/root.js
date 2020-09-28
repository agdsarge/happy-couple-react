import { combineReducers } from 'redux';

import login from './login.js'
import auth from './auth.js'
import register from './register.js'
import weddingDetails from './weddingDetails.js'
import weddings from './weddings.js'
import wizard from './wizard.js'
import todo from './todo.js'
import viewToggle from './viewToggle.js'
import selectCard from './selectCard.js'
import guestForm from './guestForm.js'
// import setWedding details from './weddingdetails.js'

export default combineReducers({
    login, auth, register, weddingDetails, wizard, todo, viewToggle, selectCard, weddings, guestForm
    //next reducer here in comma-separated object
})
