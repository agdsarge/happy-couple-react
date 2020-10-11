import { INVITE_NOT_FOUND, RSVP_CLEANUP, RSVP_EMAIL_CHANGE, RSVP_CHANGE, RSVP_MENU, RSVP_ERROR} from '../Actions/type.js'

const initialState = {
    rsvpchoice: "",
    email: "",
    attending_status: undefined,
    invite_id: undefined
}

const reducer = (oldState = initialState, action) => {
    switch(action.type) {
        case RSVP_EMAIL_CHANGE: 
            return {...oldState, ...action.payload};
        case RSVP_CHANGE: 
            return {...oldState, ...action.payload};
        case RSVP_CLEANUP: 
            return initialState;
        case RSVP_MENU:
            return {...oldState, attending_status: action.user_wedding.attending_status, invite_id: action.user_wedding.id}
        case INVITE_NOT_FOUND:
            return {...oldState, attending_status: null}
        case RSVP_ERROR:
            return {...oldState, attending_status: 0}
        default:
            return oldState
    }
}

export default reducer;