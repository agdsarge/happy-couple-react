import {SELECT_CARD, VIEW_TOGGLE} from './type.js'

function selectActiveCard(val) {
    return {
        type: SELECT_CARD,
        payload: val
    }
}

function viewToggleChange(e) {
    return {
        type: VIEW_TOGGLE,
        payload: e.target.parentElement.name
    }
}


export {selectActiveCard, viewToggleChange}