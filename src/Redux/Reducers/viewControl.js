import {VIEW_TOGGLE, SELECT_CARD} from '../Actions/type.js'

const initialState = {
    viewToggle: {
        listView: true,
        iconView: false
    },

    iconCardSelection: {
        guestList: false,
        todo: false,
        invitationGenerator: false
    }
}

const falseViewToggle = {
    listView: false,
    iconView: false
}

const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case VIEW_TOGGLE:
            return {...oldState, viewToggle: {...falseViewToggle, [action.payload]: true}}
        case SELECT_CARD: 
            return {...oldState, iconCardSelection: {...initialState.iconCardSelection, [action.payload]: true}}
        default:
            return {...oldState}
    }
}

export default reducer