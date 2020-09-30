import {BACK_TO_MENU, SET_WEDDING_DETAILS} from './type.js'
// import {HEADERS, API_ROOT} from '../../Constants';

function setWeddingDetails(obj) {
    return {
        type: SET_WEDDING_DETAILS,
        payload: {...obj.wedding}
    }
}

function backToMenu() {
    return {
        type: BACK_TO_MENU
    }
}

export {setWeddingDetails, backToMenu}