import {REGISTER_FORM_CHANGE, REGISTER_FORM_CLEANUP, REGISTER_FORM_SUBMIT, REGISTER_SUCCESS, REGISTER_FAILURE} from './type.js'
import {HEADERS, API_ROOT} from '../../Constants'

function registerFormChange(e) {
    return {
        type: REGISTER_FORM_CHANGE,
        payload: {
            [e.target.name]: e.target.value
        }   
    }
}

function registerFormCleanup() {
    return {
        type: REGISTER_FORM_CLEANUP,
    }
}

function registerSuccess(user) {
    return {
        type: REGISTER_SUCCESS,
        payload: user
    }
}

function registerFailure(err) {
    return {
        type: REGISTER_FAILURE,
        payload: err
    }
    
}

function registerFormSubmit(e, form) {
    return (dispatch) => {
        e.preventDefault()
        fetch(`${API_ROOT}/register`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                first_name: form.first_name,
                last_name: form.last_name,
                email: form.email,
                password: form.password,
                gender: form.gender
            })
        })
        .then(res => res.json())
        .then(user => {
            if (user.token !== undefined) {
                localStorage.setItem('token', user.token)
                localStorage.setItem('first_name', user.first_name)
            }
            dispatch(registerSuccess(user))
            dispatch(registerFormCleanup())
        })
        //.catch()
        
    }
}


export {registerFormChange, registerFormCleanup, registerFormSubmit}