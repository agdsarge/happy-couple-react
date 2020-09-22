
import {WIZARD_FORM_CHANGE, WIZARD_PAGE_CHANGE, WIZARD_CLEANUP, WIZARD_SUBMIT, WIZARD_SUCCESS, WIZARD_FAILURE} from './type.js'

import {HEADERS, API_ROOT} from '../../Constants'

function wizardPageChange(changeValue) {
    return {
        type: WIZARD_PAGE_CHANGE,
        payload: changeValue   
    }
}

function wizardFormChange(e, some_key) {
    return {
        type: WIZARD_FORM_CHANGE,
        key: some_key,
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
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
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
