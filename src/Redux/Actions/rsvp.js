import { INVITE_NOT_FOUND, RSVP_CLEANUP, RSVP_MENU, RSVP_EMAIL_CHANGE} from './type.js'

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

function getInviteStatus(slug){
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

export {getInviteStatus, rsvpCleanup, rsvpEmailChange}