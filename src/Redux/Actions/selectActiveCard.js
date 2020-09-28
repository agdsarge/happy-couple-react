import {SELECT_CARD} from './type.js'

function selectActiveCard(val) {
    return {
        type: SELECT_CARD,
        payload: val
    }
}

export {selectActiveCard}