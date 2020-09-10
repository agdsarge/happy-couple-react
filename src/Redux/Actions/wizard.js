import {WIZARD_FORM_CHANGE, WIZARD_PAGE_CHANGE, WIZARD_CLEANUP, WIZARD_SUBMIT, WIZARD_SUCCESS, WIZARD_FAILURE} from './type.js'

import {HEADERS, API_ROOT} from '../../Constants'

function wizardPageChange(e) {
    return {
        type: WIZARD_PAGE_CHANGE,
        payload: {
            [e.target.name]: e.target.value
        }   
    }
}

function wizardFormChange(e) {
    return {
        type: WIZARD_FORM_CHANGE,
        payload: {
            [e.target.name]: e.target.value
        }   
    }
}

function wizardCleanup() {
    return {
        type: WIZARD_CLEANUP,
    }
}

function wizardSuccess(user) {
    return {
        type: WIZARD_SUCCESS,
        payload: user
    }
}

function wizardFailure(err) {
    return {
        type: WIZARD_FAILURE,
        payload: err
    }
    
}

function wizardSubmit(e, form) {
    return (dispatch) => {
        e.preventDefault()
        fetch(`${API_ROOT}/setup`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(user => {
            if (user.token !== undefined) {
                localStorage.setItem('token', user.token)
                localStorage.setItem('first_name', user.first_name)
            }
            dispatch(wizardSuccess(user))
            dispatch(wizardCleanup())
        })
        //.catch()
        
    }
}


export {wizardCleanup, wizardFormChange, wizardPageChange, wizardSubmit, wizardSuccess, wizardFailure}