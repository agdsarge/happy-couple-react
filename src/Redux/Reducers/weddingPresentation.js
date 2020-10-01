import {GET_WEDDING_VIEW, WEDDING_CLEANUP} from '../Actions/type'

const initialState = {
    wedding: {}
}

const reducer = (oldState = initialState, action) => {
    switch(action.type) {
        case GET_WEDDING_VIEW:
            return {wedding: action.payload}
        case WEDDING_CLEANUP: 
            return initialState;
        default:
            return oldState
    }
}

export default reducer;