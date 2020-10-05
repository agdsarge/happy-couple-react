import {CHANGE_INVITATION_STYLE } from './type'

function changeInvitationStyle(e) {
    return {
        type: CHANGE_INVITATION_STYLE,
        payload: e.target.value
    }
}

export {changeInvitationStyle}