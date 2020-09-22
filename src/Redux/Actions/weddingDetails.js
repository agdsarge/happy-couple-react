import {SET_DATE} from './type.js'
import {HEADERS, API_ROOT} from '../../Constants';

function weddingDate(date) {
    return {
        type: SET_DATE,
        payload: date
    }
}

function getWeddingDate() {
    return dispatch => {
        fetch(`${API_ROOT}/date`, {
            headers: {
                ...HEADERS,
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.weddingDate) {
                dispatch(weddingDate(data.weddingDate))
            }
        })
    }
}

export {getWeddingDate, weddingDate}