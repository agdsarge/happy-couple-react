import React, { Component } from 'react'
import {connect} from 'react-redux';
import {delGuest, editGuest, saveEdit, changeGuestInfo} from '../../Redux/Actions/guestList'
import Button from '@material-ui/core/Button';

class InvitedRowUpdate extends Component {
    render() {
        const weddingRoles = [ 
            'Guest',
            'Best Man',             'Bridesmaid',       'Father of the Bride', 
            'Father of the Groom',  'Flower Girl',      'Groomsman',
            'Hattabin',             'Koumbara',         'Koumbaro',
            'Lector',               'Maid of Honor',    'Mother of the Bride',
            'Mother of the Groom',  'Officiant',        'Ring Bearer',
            'Shusha Vim',           'Usher',            'Vrati Mi',
            // thanks, theknot.com
        ].map(r => <option key={r}>{r}</option>) 
        return (
            <tr>
                <td><input type='text' name='first_name'
                    value={this.props.editor.first_name}
                    onChange={(e) => this.props.handleChange(e)}   
                /></td>
                <td><input type='text' name='last_name'
                    value={this.props.editor.last_name}
                    onChange={(e) => this.props.handleChange(e)}
                /></td>
                <td><input type='text' name='email'
                    value={this.props.editor.email}
                    onChange={(e) => this.props.handleChange(e)}    
                /></td>
                <td>
                    <label htmlFor="role"></label>
                    <input type='text' list="weddingRoles" name='role' 
                        value={this.props.editor.role} 
                        onChange={(e) => this.props.handleChange(e)}    
                    />
                        <datalist id="weddingRoles">
                            {weddingRoles}
                        </datalist>
                </td>

                <td><Button variant="contained" color='primary' onClick={(e) => this.props.saveEdit(e, this.props.guest)}>SAVE</Button></td>
                
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
        handleChange: (e) => {dispatch(changeGuestInfo(e))},
        saveEdit: (e, guest) => {dispatch(saveEdit(e, guest))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitedRowUpdate)