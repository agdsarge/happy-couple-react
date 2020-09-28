import {GUEST_FORM_CLEANUP, GUEST_FORM_CHANGE} from './type.js'

function guestFormCleanup(e) {
    return {
        type: GUEST_FORM_CLEANUP
    }
}

function guestFormChange(e) {
    return {
        type: GUEST_FORM_CHANGE,
        payload: {
            
            [e.target.name]: [e.target.value]
        }
    }
}

export {guestFormCleanup}