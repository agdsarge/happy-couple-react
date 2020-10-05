import {GET_WEDDING_VIEW, WEDDING_CLEANUP, CHANGE_VIEW} from '../Actions/type'

const initialState = {
    view: "1",
    wedding: {},
    theme: {}
}

const reducer = (oldState = initialState, action) => {
    switch(action.type) {
        case GET_WEDDING_VIEW:
            return {...oldState, wedding: action.wedding, theme: action.theme}
        case WEDDING_CLEANUP: 
            return initialState;
        case CHANGE_VIEW:
            return {...oldState, view: action.payload}
        default:
            return oldState
    }
}

export default reducer;