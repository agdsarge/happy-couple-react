import { LOGIN_FORM_CHANGE, LOGIN_FORM_CLEANUP, LOGIN_FORM_SUBMIT, LOGIN_FAILURE } from '../Actions/type'

const initialState = {
    email: '',
    password: '',
    error: null
}

const reducer = ( oldState = initialState, action ) => {
    switch(action.type) {
        case LOGIN_FORM_CHANGE:
            return {...oldState, ...action.payload}
        case LOGIN_FORM_SUBMIT:
            return {}
        case LOGIN_FORM_CLEANUP:
            return initialState
        case LOGIN_FAILURE:
            return {...oldState, error: action.payload}
        default:
            return oldState;
    }
}

export default reducer;
