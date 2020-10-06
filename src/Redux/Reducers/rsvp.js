import { INVITE_NOT_FOUND, RSVP_CLEANUP, RSVP_EMAIL_CHANGE, RSVP_MENU} from '../Actions/type.js'

const initialState = {
    email: "",
    attending_status: 1
}

const reducer = (oldState = initialState, action) => {
    switch(action.type) {
        case INVITE_NOT_FOUND:
            return {...oldState, wedding: action.wedding, theme: action.theme}
        case RSVP_EMAIL_CHANGE: 
            return {...oldState, ...action.payload};
        case RSVP_CLEANUP: 
            return initialState;
        case RSVP_MENU:
            return {...oldState, view: action.payload}
        default:
            return oldState
    }
}

export default reducer;