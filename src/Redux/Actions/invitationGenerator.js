import {CHANGE_INVITATION_STYLE, CHANGE_INVITATION_TONE, CHANGE_LINE_STYLE, CHANGE_LINE_TEXT, POPOVER_OPEN, POPOVER_CLOSE } from './type'

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

function popoverOpen(e, int) {
    console.log("OPEN FUNC", int)
    return {
        type: POPOVER_OPEN,
        payload: {
            anchorEl: e.currentTarget,
            open: true,
            lineNumber: int,
        }
    }
}

function popoverClose(e) {
    return {
        type: POPOVER_CLOSE
    }
}


function fetchDBInvitation(wedID) {
    return (dispatch) => {

    }
}

export {changeInvitationTone, changeInvitationStyle, changeLineStyle, changeLineText, fetchDBInvitation, popoverOpen, popoverClose}