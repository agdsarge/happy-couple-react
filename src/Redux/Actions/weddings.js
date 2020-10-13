import {TOGGLE_WEDDING_MENU} from './type'

function toggleWeddingMenu(value){
    return {
        type: TOGGLE_WEDDING_MENU,
        payload: value
    }
}

export {toggleWeddingMenu}