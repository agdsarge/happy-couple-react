import { editCaption } from '../Actions/photoUpload'
import {CLEAR_IMAGE_STORE, PUSH_PHOTO_TO_STACK, EDIT_CAPTION, SELECT_ALBUM} from '../Actions/type'

const initialState = {
    imageSources: [],
    captions: [],
    albumSelection: null
}

function reducer(oldState=initialState, action) {
    switch(action.type) {
        
        case PUSH_PHOTO_TO_STACK:
            return {imageSources: [...oldState.imageSources, action.payload], captions: [...oldState.captions, '']}
        case EDIT_CAPTION:
            return {...oldState, captions: {...oldState.captions, ...action.payload}}
        case CLEAR_IMAGE_STORE:
            return {...oldState, imageSources: [], captions: []}
        case SELECT_ALBUM:
            return {...oldState, albumSelection: action.payload}
        default:
            return {...oldState}
    }
}

export default reducer