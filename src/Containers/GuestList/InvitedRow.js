import React, { Component } from 'react'
import {connect} from 'react-redux'
import {delGuest, editGuest, saveEdit} from '../../Redux/Actions/guestList'
import './Guest.css'

import InvitedRowRead from './InvitedRowRead';
import InvitedRowUpdate from './InvitedRowUpdate';


class InvitedRow extends Component {

    render() {
        
        return (
            <tbody>
                {this.props.editor.id === this.props.guest.id ?
                    <InvitedRowUpdate guest={this.props.guest} />
                        :
                    <InvitedRowRead guest={this.props.guest} />
                }
           </tbody>   
        )
    }
}
// i could do a <tr></tr> : <tr>/<tr>

const mapStateToProps = (state) => {
    return {
        wedID: state.weddingDetails.id,
        editor: state.guestList.editor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (wedID, guestID) => {dispatch(delGuest(wedID, guestID))},
        handleEdit: (guest) => {dispatch(editGuest(guest))},
        saveEdit: (e, guest) => {dispatch(saveEdit(e, guest))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitedRow)