import { CHANGE_INVITATION_STYLE, } from '../Actions/type.js'

const initialState = {
    style: 'Traditional',

}

const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case CHANGE_INVITATION_STYLE:
            return {...oldState, style: action.payload}
        default:
            return {...oldState}
    }
}

export default reducer