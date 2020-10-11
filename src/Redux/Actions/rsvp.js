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

function rsvpFailure(){
    return {
        type: INVITE_NOT_FOUND,
    }
}

function rsvpSuccess(data){
    return {
        type: RSVP_MENU,
        wedding: data.wedding
    }
}

function rsvpSubmit(id, attending_status){
    return (dispatch) => {
        fetch(`${API_ROOT}/userweddings/${id}/rsvp`, {
            method: 'POST',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({attending_status: attending_status})
        })
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                dispatch(getInviteSuccess(data))
            } else {
                dispatch(rsvpFailure())
            }
        })
        
    }
}

function inviteNotFound(){
    return {
        type: INVITE_NOT_FOUND
    }
}

function getInviteSuccess(data){
    return {
        type: RSVP_MENU,
        user_wedding: data.uw
    }
}

function rsvpEmailSubmit(id, email){
    return (dispatch) => {
        fetch(`${API_ROOT}/weddings/${id}/attending`, {
            method: 'POST',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({email: email})
        })
        .then(r => r.json())
        .then(data => {
            if (data.found) {
                dispatch(getInviteSuccess(data))
            } else {
                dispatch(inviteNotFound())
            }
        })
        
    }
}


export { rsvpCleanup, rsvpChange, rsvpEmailChange, rsvpSubmit, rsvpEmailSubmit}