import {GUEST_FORM_CHANGE, GUEST_FORM_CLEANUP, POPULATE_GUEST_LIST, WIPE_GUEST_LIST} from '../Actions/type.js'

const initialState = {
    guestForm: {
        guest0: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        },
        guest1: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        },
        guest2: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        },
        guest3: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        },
        guest4: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        }
    },
    guestList: []
}

const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case GUEST_FORM_CHANGE: 
            return {...oldState, guestForm: {...oldState.guestForm, [action.guest]: {...oldState.guestForm[action.guest], ...action.payload}}}
        case GUEST_FORM_CLEANUP:
            return {...initialState, guestList: oldState.list}
        case POPULATE_GUEST_LIST:
            return {...oldState, guestList: action.payload}
        case WIPE_GUEST_LIST:
            return {...oldState, list: []}
        default:
            return oldState
    }
}

export default reducer