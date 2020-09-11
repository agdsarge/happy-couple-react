import {SET_DATE} from './type.js'
import {HEADERS, API_ROOT} from '../../Constants';

function weddingDate(date) {
    return {
        type: SET_DATE,
        payload: date
    }
}

function getWeddingDate() {
    // console.log('now in weddingDate')
    return dispatch => {
        fetch(`${API_ROOT}/date`, {
            headers: HEADERS
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch(weddingDate(data.weddingDate))
        })
    }
}

export {getWeddingDate, weddingDate}