import React, { Component } from 'react'
import {connect} from 'react-redux'
import {delGuest} from '../../Redux/Actions/guestList'
import './Guest.css'
import Button from '@material-ui/core/Button';
class InvitedRow extends Component {
    render() {
        let {id, first_name, last_name, email, role} = this.props.guest
        return (
            <tr>
                <td className='invitedGuestInfo'>{first_name} </td>
                <td className='invitedGuestInfo'>{last_name}</td>
                <td className='invitedGuestInfo'>{email}</td>
                <td className='invitedGuestInfo'>{role}</td>
                <td><Button variant="contained" color='primary'>EDIT</Button></td>
                <td><Button variant="contained" color='secondary' onClick={(e) => this.props.handleDelete(this.props.wedID, id)}>DELETE</Button></td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        wedID: state.weddingDetails.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (wedID, guestID) => {dispatch(delGuest(wedID, guestID))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitedRow)