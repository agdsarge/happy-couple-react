import {LOGOUT, SET_WEDDING_DETAILS, BACK_TO_MENU} from '../Actions/type'


const initialState = {}

function reducer (oldState= initialState, action) {
    switch (action.type) {
        case SET_WEDDING_DETAILS:
            return action.payload
        case BACK_TO_MENU:
            return initialState
        case LOGOUT:
            return initialState
        default:
            return oldState
    }
}

export default reducer