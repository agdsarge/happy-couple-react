import {NEW_IMAGE_TO_STORE, CLEAR_IMAGE_STORE} from '../Actions/type'

const initialState = {
    images: []
}

function reducer(oldState=initialState, action) {
    switch(action.type) {
        case NEW_IMAGE_TO_STORE:
            const newImageArr = oldState.images
            newImageArr.push(action.payload[0])
            debugger
            return {...oldState, images: newImageArr}
        case CLEAR_IMAGE_STORE:
            return {...initialState}
        default:
            return {...oldState}
    }
}

export default reducer