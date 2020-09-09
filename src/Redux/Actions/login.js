import { LOGIN_FORM_CHANGE, LOGIN_FORM_SUBMIT, LOGIN_FORM_CLEANUP, POST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './type.js'
import {HEADERS, API_ROOT} from '../../Constants'
function loginFormCleanup() {
    return {
        type: LOGIN_FORM_CLEANUP
    }
}

function loginFormChange(e){
    return {
        type: LOGIN_FORM_CHANGE,
        payload: {[e.target.name]: e.target.value}
    }
}

function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

function loginFailure(err) {
    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}

function fetchLogin(){
    return {
        type: POST_LOGIN,
        payload: {loading: true}
    }
}

function loginFormSubmit(e, form) {
    return (dispatch) => {
        e.preventDefault()
        dispatch(fetchLogin())
        fetch(`${API_ROOT}/login`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                email: form.email,
                password: form.password
            })
        })
        .then( r => r.json())
        .then( data => {
            if (data.error) {
                dispatch(loginFailure(data.message))
            } else {
                if (data.token !== undefined) {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('first_name', data.first_name)
                }
                dispatch(loginSuccess(data))
                dispatch(loginFormCleanup())
            }       
        })
        .catch((err) => {
            console.log(err)
            // dispatch(loginFailure(err))
        })
        // error handle with catch()
    }
}


export { loginFormCleanup, loginFormChange, loginFormSubmit, loginSuccess, loginFailure }
