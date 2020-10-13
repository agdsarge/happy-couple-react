import { LOGIN_SUCCESS, TOGGLE_WEDDING_MENU } from '../Actions/type'

const initialState = {
    weddingList: [],
    showUpcoming: true
}

const reducer = (oldState = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...oldState, weddingList: [...action.payload.weddingList]}
        case TOGGLE_WEDDING_MENU:
            return {...oldState, showUpcoming: action.payload === 1}
        default:
            return oldState;
    }
}

export default reducer;