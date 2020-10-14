import { combineReducers } from 'redux';

import login from './login.js';
import auth from './auth.js';
import register from './register.js';
import weddingDetails from './weddingDetails.js';
import weddings from './weddings.js';
import wizard from './wizard.js';
import todo from './todo.js';
import guestList from './guestList.js';
import weddingPresentation from './weddingPresentation.js';
import invitationGenerator from './invitationGenerator.js';
import rsvp from './rsvp.js';
import viewControl from './viewControl.js';

export default combineReducers({
    login, auth, register, weddingDetails, wizard, 
    todo, viewControl, rsvp, weddings, guestList, 
    weddingPresentation, invitationGenerator,
    
})
