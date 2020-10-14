import {
    GUEST_FORM_CLEANUP, GUEST_FORM_CHANGE, POPULATE_GUEST_LIST, 
    INCREMENT_PAGE, DECREMENT_PAGE, 
    REVERSE_ORDER, NEW_SELECTOR, CHANGE_NUM_ENTRY,
    EDIT_GUEST, CLEAR_EDITOR, GUEST_INFO_CHANGE
} from './type.js'

import {HEADERS, API_ROOT} from '../../Constants'

function guestFormCleanup() {
    return {
        type: GUEST_FORM_CLEANUP
    }
}

function incrementPage() {
    return {
        type: INCREMENT_PAGE
    }
}

function decrementPage() {
    return {
        type: DECREMENT_PAGE
    }
}

function newSelector(str) {
    return {
        type: NEW_SELECTOR,
        payload: str
    }
}

function changeNumEntry(e) {
    return {
        type: CHANGE_NUM_ENTRY,
        payload: e.target.value
    }
}

function reverseOrder(str) {
    return {
        type: REVERSE_ORDER,
        payload: str
    }
}

function editGuest(guest) {
    return {
        type: EDIT_GUEST,
        payload: guest
    }
}

function changeGuestInfo(eventOrValue, attr) {
    return {
        type: GUEST_INFO_CHANGE,
        payload: {
            [attr]: eventOrValue
        }
    }
}

function saveEdit(e, guest) {
    return (dispatch) => {
        e.preventDefault()
        fetch(`${API_ROOT}/guests/${guest.id}`, {
            method: "PATCH",
            headers: {
                ...HEADERS,
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(guest)
        })
        .then(res => res.json())
        .then(d => {
            dispatch(clearEditor())
            dispatch(populateGuestList(d.list))
        })
    }
}

function clearEditor() {
    return {
        type: CLEAR_EDITOR,
    }
}

function guestFormChange(eventOrValue, specificGuest, key) {  
    return {
        type: GUEST_FORM_CHANGE,
        guest: specificGuest,
        payload: { 
            [key]: eventOrValue
        }
    }
}

function guestFormSubmit(e, form, weddingID) {
    e.preventDefault()
    return (dispatch) => {
        
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
        .then( data => {
            dispatch(populateGuestList(data.list))
            dispatch(guestFormCleanup())
            } 
        )        
    }
}

function delGuest(wedID, guestID) {
    return (dispatch) => {
        fetch(`${API_ROOT}/guests/${guestID}`, {
            method: 'DELETE',
            headers: {
                ...HEADERS,
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({wedding: wedID, guest: guestID})
        })
        .then(res => res.json())
        .then(d => dispatch(populateGuestList(d.list)))
    }
}


function fetchGuestList(wedID) {
    return (dispatch) => {
        fetch(`${API_ROOT}/weddings/${wedID}/guests`, {
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

export {
    guestFormCleanup, guestFormChange, guestFormSubmit, 
    fetchGuestList, populateGuestList, incrementPage, 
    decrementPage, reverseOrder, newSelector,
    changeNumEntry, delGuest, editGuest, clearEditor,
    saveEdit, changeGuestInfo
}