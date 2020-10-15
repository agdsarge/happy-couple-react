import {NEW_IMAGE_TO_STORE, CLEAR_IMAGE_STORE} from './type.js';
import {API_ROOT, HEADERS} from '../../Constants/index';

function newImageToStore(e) {
    return {
        type: NEW_IMAGE_TO_STORE,
        payload: e.target.files
    }
}

function clearImageStore() {
    return {
        type: CLEAR_IMAGE_STORE
    }
}

function postImagesToDB(photo) {
    //
    return (dispatch) => {
        const formData = new FormData();
        formData.append('file', photo)

        fetch(`${API_ROOT}/photos`, {
            method: 'POST',
            headers: {
          
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


export {newImageToStore, clearImageStore, postImagesToDB}