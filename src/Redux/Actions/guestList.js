import {GUEST_FORM_CLEANUP, GUEST_FORM_CHANGE, POPULATE_GUEST_LIST} from './type.js'
import {HEADERS, API_ROOT} from '../../Constants'

function guestFormCleanup() {
    return {
        type: GUEST_FORM_CLEANUP
    }
}

function guestFormChange(e, specificGuest) {
    return {
        type: GUEST_FORM_CHANGE,
        guest: specificGuest,
        payload: { 
            [e.target.name]: e.target.value
        }
    }
}

function guestFormSubmit(e, form, weddingID) {
    return (dispatch) => {
        e.preventDefault()
        for (let row in form) {
            // remove empty rows of the form
            if (!(form[row].firstName || form[row].lastName )) {
                delete form[row]
            }
        }
        let submission = {"weddingID": weddingID, "guestList": form }
        fetch(`${API_ROOT}/add_guests`, {
            method: 'POST',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(submission)
        })
        .then(res => res.json())
        .then(
            dispatch(guestFormCleanup())
        )        
    }
}

function fetchGuestList(id) {
    return (dispatch) => {
        fetch(`${API_ROOT}/weddings/${id}/guests`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(d => dispatch(populateGuestList(d.list)))
    }
}

function populateGuestList(arr) {
    return {
        type: POPULATE_GUEST_LIST,
        payload: arr
    }
}

export {guestFormCleanup, guestFormChange, guestFormSubmit, fetchGuestList, populateGuestList}