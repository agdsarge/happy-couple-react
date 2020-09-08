import {REGISTER_FORM_SUBMIT, REGISTER_FORM_CHANGE, REGISTER_FORM_CLEANUP, REGISTER_SUCCESS, REGISTER_FAILURE} from '../Actions/type'

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    password: ''
}

function reducer(oldState = initialState, action) { 
    switch (action.type) {
        case REGISTER_FORM_CHANGE: 
            return {...oldState, ...action.payload}
        case REGISTER_FORM_CLEANUP: 
            return initialState
        case REGISTER_FORM_SUBMIT:
            return {} // handle this ?
        default:
            return oldState
    }
}

export default reducer