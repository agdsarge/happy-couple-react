import {GUEST_FORM_CLEANUP, GUEST_FORM_CHANGE, GUEST_FORM_SUBMIT} from './type.js'
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

export {guestFormCleanup, guestFormChange, guestFormSubmit}