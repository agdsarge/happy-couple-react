import React, { Component } from 'react';
import {connect} from 'react-redux';
import {delGuest, editGuest, saveEdit} from '../../Redux/Actions/guestList';
import {SMALL_BUTTON} from '../../Constants/index';
import Button from '@material-ui/core/Button';

class InvitedRowRead extends Component {

    fourCells() {
        let cellNames = [this.props.guest.first_name, this.props.guest.last_name, this.props.guest.email, this.props.guest.role]
        return cellNames.map((n, ind) => <td key={`${n}${ind}`} className='invitedGuestInfo'>{n}</td>)
    }

    render() {
        
        return (
            <tr>
                {this.fourCells()}
                <td><Button {...SMALL_BUTTON} onClick={(e) => this.props.handleEdit(this.props.guest)}>EDIT</Button></td>
                <td><Button {...SMALL_BUTTON} onClick={(e) => this.props.handleDelete(this.props.wedID, this.props.guest.id)}>DELETE</Button></td>
            </tr>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(InvitedRowRead)