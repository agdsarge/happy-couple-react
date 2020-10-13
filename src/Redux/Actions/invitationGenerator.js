import {
    CHANGE_INVITATION_STYLE, CHANGE_INVITATION_TONE, CHANGE_LINE_STYLE, 
    CHANGE_LINE_TEXT, POPEDIT_OPEN, POPEDIT_CLOSE, CHANGE_LINE_FONT_SIZE, 
    CHANGE_LINE_TYPEFACE, CHANGE_LINE_TYPE_COLOR, UPDATE_STYLE_FROM_FETCH, 
    UPDATE_LINE_FROM_FETCH, POST_OR_PATCH
} from './type'

import {API_ROOT, HEADERS} from '../../Constants'


function changeInvitationTone(e) {
    return {
        type: CHANGE_INVITATION_TONE,
        payload: e.target.value
    }
}

function changeInvitationStyle(e) {
    return {
        type: CHANGE_INVITATION_STYLE,
        payload: {
            [e.target.name]: e.target.value
        }
    }
}

function changeLineFontSize(lineNum, delta) {
    return {
        type: CHANGE_LINE_FONT_SIZE,
        lineNumber: lineNum,
        payload: delta
    }
}

function changeLineStyle(e, lineNum) {
    return {
        type: CHANGE_LINE_STYLE,
        lineNumber: lineNum,
        payload: {
            [e.target.name]: e.target.value
        }
    }
}

function changeLineText(e, lineNum) {
    return {
        type: CHANGE_LINE_TEXT,
        lineNumber: lineNum,
        payload: e.target.value
    }
}

function popEditOpen(int) {
    return {
        type: POPEDIT_OPEN,
        payload: int
    }
}

function popEditClose(e) {
    return {
        type: POPEDIT_CLOSE
    }
}

function updateStyleFromFetch(styleObj) {
    return {
        type: UPDATE_STYLE_FROM_FETCH,
        payload: {...styleObj}
    }
}

function updateLineFromFetch(lineNum, lineObj) {
    return {
        type: UPDATE_LINE_FROM_FETCH,
        lineNumber: lineNum,
        payload: {...lineObj}
    }
}

function postOrPatch(bool) {
    return {
        type: POST_OR_PATCH,
        payload: bool
    }
}

function fetchInvitation(wedID) {
    return (dispatch) => {
        console.log("FETCHING INVITATION!!!", `${API_ROOT}/weddings/${wedID}/invitation`)
        fetch(`${API_ROOT}/weddings/${wedID}/invitation`, {
            method: 'GET',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(d => {
            console.log(d.message)
            if (d.invitation) {
                console.log(d.invitation)
                let {style_align, style_background_color, style_color} = d.invitation
                const styleObj = {
                    textAlign: style_align,
                    backgroundColor: style_background_color,
                    color: style_color
                }
                dispatch(updateStyleFromFetch(styleObj))
                for (let i = 0; i < 15; i++) {
                    const lineObj = {
                        text: d.invitation[`line${i}_text`],
                        lineStyle: {
                            fontFamily: d.invitation[`line${i}_font`],
                            fontSize: d.invitation[`line${i}_size`],
                            color: d.invitation[`line${i}_color`],
                            textAlign: d.invitation[`line${i}_align`]
                        }
                    }
                    dispatch(updateLineFromFetch(i, lineObj))
                    dispatch(postOrPatch(false))
                }
            }
        })
    }
}

function changeFontFamily(e, lineNum) {
    return {
        type: CHANGE_LINE_TYPEFACE,
        lineNumber: lineNum,
        payload: e.target.value
    }
}

function changeLineColor(e, lineNum) {
    return {
        type: CHANGE_LINE_TYPE_COLOR,
        lineNumber: lineNum,
        payload: e.target.value
    }
}

function submitInvitation(e, style, editor, wedID) {
    e.preventDefault()
    return (dispatch) => {
        const submission = {
            weddingID: wedID,
            invitationStyle: style,
            lines: editor
        }
        fetch(`${API_ROOT}/invitations/${wedID}`, {
            method: 'POST',
            headers: {
                ...HEADERS,
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(submission)
        })
        .then(res => res.json())
        .then(console.log)
    }
}

function patchInvitation(e, style, editor, wedID) {
    e.preventDefault()
    return (dispatch) => {
        const submission = {
            weddingID: wedID,
            invitationStyle: style,
            lines: editor
        }
        fetch(`${API_ROOT}/invitations/${wedID}`, {
            method: 'PATCH',
            headers: {
                ...HEADERS,
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(submission)
        })
        .then(res => res.json())
        .then(console.log)
    }
}

export {changeInvitationTone, changeInvitationStyle, changeLineStyle, changeLineText, fetchInvitation, popEditOpen, popEditClose, changeLineFontSize, changeFontFamily, changeLineColor, submitInvitation, patchInvitation}