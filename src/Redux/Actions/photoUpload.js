import {CLEAR_IMAGE_STORE, PUSH_PHOTO_TO_STACK, EDIT_CAPTION, SELECT_ALBUM, DEFAULT_ALBUM} from './type.js';
import {API_ROOT, HEADERS} from '../../Constants/index';



function clearImageStore() {
    return {
        type: CLEAR_IMAGE_STORE
    }
}

function newPhoto(url) {
    return {
        type: PUSH_PHOTO_TO_STACK,
        payload: url
    }
}

function editCaption(e, index) {
    return {
        type: EDIT_CAPTION,
        payload: {
            [index]: e.target.value
        }
    }
}

function selectAlbum(e) {
    return {
        type: SELECT_ALBUM,
        payload: e.target.val
    }
}

function postImagesToDB(e, photos, captions, albumID) {
    //
    return (dispatch) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('wedding_id', wedID)
        formData.append('album_id', albumID)

        for (let i = 0; i < photos.length; i++) {
            formData.append('images[]', photos[i])
            formData.append('captions[]', captions[i])
        }
        fetch(`${API_ROOT}/photos`, {
            method: 'POST',
            headers: {
                // "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: formData
        })
        .then(res => res.json())
        .then(d => {
            dispatch(clearImageStore())
        })
    }
}


export {clearImageStore, postImagesToDB, newPhoto, editCaption, selectAlbum}