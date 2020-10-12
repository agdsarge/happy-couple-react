import {
    CHANGE_INVITATION_STYLE, CHANGE_INVITATION_TONE, CHANGE_LINE_STYLE, 
    CHANGE_LINE_TEXT, POPEDIT_OPEN, POPEDIT_CLOSE, CHANGE_LINE_FONT_SIZE, 
    CHANGE_LINE_TYPEFACE, CHANGE_LINE_TYPE_COLOR
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


function fetchDBInvitation(wedID) {
    return (dispatch) => {

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

export {changeInvitationTone, changeInvitationStyle, changeLineStyle, changeLineText, fetchDBInvitation, popEditOpen, popEditClose, changeLineFontSize, changeFontFamily, changeLineColor, submitInvitation}