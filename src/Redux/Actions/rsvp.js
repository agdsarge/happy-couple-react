import { INVITE_NOT_FOUND, RSVP_CLEANUP, RSVP_MENU, RSVP_EMAIL_CHANGE, RSVP_CHANGE, RSVP_EMAIL_SUBMIT, RSVP_SUBMIT} from './type.js'

import {HEADERS, API_ROOT} from '../../Constants'

function rsvpCleanup(){
    return {
        type: RSVP_CLEANUP
    }
}

function rsvpEmailChange(e){
    return {
        type: RSVP_EMAIL_CHANGE,
        payload: {[e.target.name]: e.target.value}
    }
}

function rsvpChange(e){
    return {
        type: RSVP_CHANGE,
        payload: {[e.target.name]: e.target.value}
    }
}


function rsvpSubmit(slug, choice){
    return (dispatch) => {
 fetch(`${API_ROOT}/weddings/${slug}/rsvp`, {
            method: 'POST',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(data => {
            if (data.isInvited) {
                dispatch(getInviteSuccess(data))
            } else {
                dispatch(inviteNotFound(data))
            }
        })
        
    }
}

function inviteNotFound(data){
    return {
        type: INVITE_NOT_FOUND,
        wedding: data.wedding
    }
}

function getInviteSuccess(data){
    return {
        type: RSVP_MENU,
    }
}

function rsvpEmailSubmit(slug, email){
    return (dispatch) => {
        fetch(`${API_ROOT}/weddings/${slug}/rsvp`, {
            method: 'POST',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(data => {
            if (data.isInvited) {
                dispatch(getInviteSuccess(data))
            } else {
                dispatch(inviteNotFound(data))
            }
        })
        
    }
}


export { rsvpCleanup, rsvpChange, rsvpEmailChange, rsvpSubmit, rsvpEmailSubmit}