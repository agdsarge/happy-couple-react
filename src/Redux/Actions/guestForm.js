import {GUEST_FORM_CLEANUP, GUEST_FORM_CHANGE} from './type.js'

function guestFormCleanup(e) {
    return {
        type: GUEST_FORM_CLEANUP
    }
}

function guestFormChange(e) {
    let [key, guestName] = e.currentTarget.name.split('|')
    return {
        type: GUEST_FORM_CHANGE,
        guest: [guestName],
        payload: { 
                [key]: [e.target.value]            
        }
    }
}

export {guestFormCleanup, guestFormChange}