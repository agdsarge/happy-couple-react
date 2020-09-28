import {SELECT_CARD} from '../Actions/type.js'

let initialState = {
    wizard: false,
    todo: false
}

const reducer = (oldState=initialState, action) => {
    switch(action.type) {
        case SELECT_CARD:
            return {...initialState, [action.payload]: true};
        default:
            return oldState;
    }
}




export default reducer