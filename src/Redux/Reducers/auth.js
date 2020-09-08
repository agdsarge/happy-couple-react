import { LOGIN_SUCCESS, LOGIN_FAILURE, POST_LOGIN, LOGOUT } from '../Actions/type'

const initialState = {
    token: null,
    first_name: null,
    error: null,
    loading: false,
}

const reducer = ( oldState = initialState, action ) => {
    switch(action.type) {
        case POST_LOGIN:
            return {...oldState, loading: true}
        case LOGIN_SUCCESS:
            return {...oldState, token: action.payload.token, first_name: action.payload.first_name, loading: false}
        case LOGIN_FAILURE:
            return {...oldState, loading: false, error: action.payload.error}
        case LOGOUT:
            return {...initialState}
        default:
            return oldState;
    }
}

export default reducer;
