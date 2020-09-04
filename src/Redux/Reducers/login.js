import { LOGIN_FORM_CHANGE, LOGIN_FORM_CLEANUP, LOGIN_FORM_SUBMIT } from '../Actions/type'

const initialState = {
    email: '',
    password: ''
}

const reducer = ( oldState = initialState, action ) => {
    switch(action.type) {
        case LOGIN_FORM_CHANGE:
            return {}
        case LOGIN_FORM_SUBMIT:
            return {}
        case LOGIN_FORM_CLEANUP:
            return initialState
        default:
            return oldState;
    }
}

export default reducer;