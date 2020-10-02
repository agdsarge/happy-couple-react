import {GUEST_FORM_CLEANUP, GUEST_FORM_CHANGE, POPULATE_GUEST_LIST, INCREMENT_PAGE, DECREMENT_PAGE, REVERSE_ORDER, NEW_SELECTOR, CHANGE_NUM_ENTRY} from './type.js'
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
    console.log(form)
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
        .then( data => {
            dispatch(fetchGuestList(weddingID))
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
    changeNumEntry, delGuest,
}