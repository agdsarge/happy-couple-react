import { GET_WEDDING_VIEW, WEDDING_CLEANUP, CHANGE_VIEW} from './type.js'

import {HEADERS, API_ROOT} from '../../Constants'

function weddingCleanup(){
    return {
        type: WEDDING_CLEANUP
    }
}

function changeView(value){
    
    return {
        type: CHANGE_VIEW,
        payload: value
    }
}

function getWeddingSuccess(data){
    return {
        type: GET_WEDDING_VIEW,
        wedding: data.wedding,
        theme: data.theme
    }
}

function getWeddingView(slug){
    return (dispatch) => {
        fetch(`${API_ROOT}/weddings/${slug}`, {
            method: 'GET',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(data => {
            dispatch(getWeddingSuccess(data))
        })
    }
}

export {getWeddingView, weddingCleanup, changeView}