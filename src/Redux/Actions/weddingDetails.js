import {WEDDING_DATE} from './type.js'
import {HEADERS, API_ROOT} from '../../Constants';

function weddingDate() {
    console.log('now in weddingDate')
    // fetch(`${API_ROOT}/date`, {
    //     headers: HEADERS
    // })
    // .then(res => res.json())
    // .then(console.log("WEDDING DETAILS, DAVIS"))
    return {type: "BLAH"}
}

export {weddingDate}