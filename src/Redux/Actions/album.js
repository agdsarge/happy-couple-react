import { CLEANUP_ALBUM, ALBUM_FORM_CHANGE, ALBUM_SUBMIT, LOAD_ALBUMS } from './type';
import {API_ROOT, HEADERS} from '../../Constants/index';


function cleanupAlbum() {
    return {
        type: CLEANUP_ALBUM
    }
}

function albumFormChange(e) {
    return {
        type: ALBUM_FORM_CHANGE,
        payload: {[e.target.name]: e.target.value}
    }
}

function albumFormSuccess(d){
    console.log(d)
    return {
        type: 'nothing'
    }
}
function albumFormFailure(){
    
}

function albumSubmit(e, w_id, form){
    e.preventDefault();
    console.log(w_id, form)
    return (dispatch) => {
        fetch(`${API_ROOT}/albums`, {
            method:'POST',
            headers: {
                ...HEADERS,
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({w_id: w_id, new_album: form})
        })
        .then(r => r.json())
        .then(d => {
            dispatch(albumFormSuccess(d))
        })
    }
}

function albumsLoadSuccess(d){
    return {
        type: LOAD_ALBUMS,
        payload: d.albums
    }
}

function fetchAlbums(w_id){
    return (dispatch) => {
        fetch(`${API_ROOT}/weddings/${w_id}/albums`, {
            method: 'GET',
            headers: {
                ...HEADERS,
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(d => {
            dispatch(albumsLoadSuccess(d))
        })
    }
}

export {cleanupAlbum, albumFormChange, albumSubmit, fetchAlbums}