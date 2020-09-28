import {GUEST_FORM_CHANGE, GUEST_FORM_CLEANUP} from '../Actions/type.js'

const initialState = {
    guest0: {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        admin: null 
    },
    guest1: {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        admin: null
    },
    guest2: {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        admin: null
    },
    guest3: {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        admin: null
    },
    guest4: {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        admin: null
    }
}

const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case GUEST_FORM_CHANGE:
            return {...oldState, ...action.payload}
        case GUEST_FORM_CLEANUP:
            return initialState
        default:
            return oldState
    }
}

export default reducer