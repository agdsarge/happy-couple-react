import {SET_DATE} from '../Actions/type'


const initialState = {
    date: null
}

function reducer (oldState= initialState, action) {
    switch (action.type) {
        case SET_DATE:
            return {...oldState, date: action.payload}
        default:
            return oldState
    }
}

export default reducer