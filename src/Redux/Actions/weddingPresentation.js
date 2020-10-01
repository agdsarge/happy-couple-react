import { GET_WEDDING_VIEW, WEDDING_CLEANUP} from './type.js'

import {HEADERS, API_ROOT} from '../../Constants'

function weddingCleanup(){
    return {
        type: WEDDING_CLEANUP
    }
}

function getWeddingSuccess(wedding){
    return {
        type: GET_WEDDING_VIEW,
        payload: wedding
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
            dispatch(getWeddingSuccess(data.wedding))
        })
    }
}

export {getWeddingView, weddingCleanup}