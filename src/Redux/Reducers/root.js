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
import guestList from './guestList.js'
import weddingPresentation from './weddingPresentation.js'
import rsvp from './rsvp.js'

export default combineReducers({
    login, auth, register, weddingDetails, wizard, todo, viewToggle, selectCard, rsvp, weddings, guestList, weddingPresentation
    //next reducer here in comma-separated object
})
