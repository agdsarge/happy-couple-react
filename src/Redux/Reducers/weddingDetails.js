import {SET_DATE, LOGOUT} from '../Actions/type'


const initialState = {
    date: null
}

function reducer (oldState= initialState, action) {
    switch (action.type) {
        case SET_DATE:
            return {...oldState, date: action.payload}
        case LOGOUT:
            return initialState
        default:
            return oldState
    }
}

export default reducer