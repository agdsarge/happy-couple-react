import {
    CHANGE_INVITATION_STYLE, CHANGE_INVITATION_TONE, CHANGE_LINE_STYLE, 
    CHANGE_LINE_TEXT, POPEDIT_OPEN, POPEDIT_CLOSE, CHANGE_LINE_FONT_SIZE, 
    UPDATE_STYLE_FROM_FETCH, 
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

function changeLineStyle(e, attr, lineNum) {
    return {
        type: CHANGE_LINE_STYLE,
        lineNumber: lineNum,
        attr: attr,
        payload: {
            [attr]: e.target.value
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
        fetch(`${API_ROOT}/weddings/${wedID}/invitation`, {
            method: 'GET',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(d => {
            if (!d.error) {
                console.log("FRIDAY MORNING", d)
                let {style_align, style_background_color, style_color, styled_lines} = d
                const styleObj = {
                    textAlign: style_align,
                    backgroundColor: style_background_color,
                    color: style_color
                }
                dispatch(updateStyleFromFetch(styleObj))

                for (let line of styled_lines) {
                    const lineObj = {
                        text: line.text,
                        lineStyle: {
                            fontFamily: line.fontFamily,
                            fontSize: line.fontSize,
                            color: line.color,
                            textAlign: line.textAlign
                        }
                    }
                    dispatch(updateLineFromFetch(line.line_number, lineObj))
                }
                dispatch(postOrPatch(false))
            }
        })
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
        .then()
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
        .then()
    }
}

export {changeInvitationTone, changeInvitationStyle, changeLineStyle, changeLineText, fetchInvitation, popEditOpen, popEditClose, changeLineFontSize, submitInvitation, patchInvitation}