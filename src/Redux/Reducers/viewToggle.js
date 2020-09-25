import {VIEW_TOGGLE} from '../Actions/type.js'

let initialState = {
    listView: true,
    iconView: false
    // thirdView: false
}

let allFalseState = {
    listView: false,
    iconView: false
    //thirdView: false
}

const reducer = (oldState = initialState, action) => {
    switch(action.type) {
        case VIEW_TOGGLE:
            return {...allFalseState, [action.payload]: true};
        default:
            return oldState;
    }
}

export default reducer