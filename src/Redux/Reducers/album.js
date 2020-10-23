import { CLEANUP_ALBUM, ALBUM_FORM_CHANGE, ALBUM_SUBMIT, LOAD_ALBUMS } from '../Actions/type';

const initialState = {
    albumName: '',
    isBio: false,
    albumList: []
}

const reducer = (oldState = initialState, action) => {
    switch(action.type) {
        case CLEANUP_ALBUM:
            return initialState
        case LOAD_ALBUMS:
            return {...oldState, albumList: [...action.payload]}
        case ALBUM_FORM_CHANGE:
            return {...oldState, ...action.payload}
        case ALBUM_SUBMIT:
            return initialState
        default:
            return oldState;
    }
}

export default reducer;