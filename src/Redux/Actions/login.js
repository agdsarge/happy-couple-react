import { LOGIN_FORM_CHANGE, LOGIN_FORM_SUBMIT, LOGIN_FORM_CLEANUP, POST_LOGIN, LOGIN_SUCCESS } from './type.js'
import {HEADERS, API_ROOT} from '../../constants'
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
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            headers: HEADERS
            body: JSON.stringify({
                username: form.username,
                password: form.password
                        })
        })
        .then( r => r.json() )
        .then( user => {
            if (user.token !== undefined) {
                localStorage.setItem('token', user.token)
                localStorage.setItem('first_name', user.first_name)
            }
            dispatch(loginSuccess(user))
            dispatch(loginFormCleanup())
        })
        // error handle with catch()
    }
}


export { loginFormCleanup, loginFormChange, loginFormSubmit, loginSuccess }
