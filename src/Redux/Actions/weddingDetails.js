import {BACK_TO_MENU, SET_WEDDING_DETAILS} from './type.js'

function setWeddingDetails(obj) {
    return {
        type: SET_WEDDING_DETAILS,
        payload: {...obj.wedding, albums: obj.albums}
    }
}

function backToMenu() {
    return {
        type: BACK_TO_MENU
    }
}

export {setWeddingDetails, backToMenu}