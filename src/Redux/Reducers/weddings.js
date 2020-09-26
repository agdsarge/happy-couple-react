import { LOGIN_SUCCESS } from '../Actions/type'

const initialState = {
    weddingList: []
}

const reducer = (oldState = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {weddingList: [...action.payload.weddingList]}
        default:
            return oldState;
    }
}

export default reducer;