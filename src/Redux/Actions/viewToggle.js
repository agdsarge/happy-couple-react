import {VIEW_TOGGLE} from './type.js'

function viewToggleChange(e) {
    return {
        type: VIEW_TOGGLE,
        payload: e.target.parentElement.name
    }
}

export {viewToggleChange}