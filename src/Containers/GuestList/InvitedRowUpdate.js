import React, { Component } from 'react'
import {connect} from 'react-redux';
import {delGuest, editGuest, saveEdit, changeGuestInfo} from '../../Redux/Actions/guestList'
import {WEDDING_ROLES, SMALL_BUTTON} from '../../Constants/index';
import {Button, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

class InvitedRowUpdate extends Component {
    fourFields() {
        const fieldNames = ['first_name', 'last_name', 'email', 'role']
        return fieldNames.map(n=> {
            let commonProps = {
                key: n,
                onChange: (e) => this.props.handleChange(e, n)
            }
            if (n === 'role') {
                return (
                    <td>
                        <Autocomplete 
                            {...commonProps}
                            options={WEDDING_ROLES} 
                            renderInput={(params) => <TextField {...params} value={this.props.editor[n]}></TextField>}
                        />
                    </td>
                )
            } else {
                return(
                    <td>
                        <TextField {...commonProps} value={this.props.editor[n]} /> 
                    </td>
                )
            }
        })
    }

    render() {
        
        return (
            <tr className='invitedRowUpdate'>
                {this.fourFields()}
                <td><Button {...SMALL_BUTTON} onClick={(e) => this.props.saveEdit(e, this.props.editor)}>SAVE</Button></td>
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
        handleChange: (e, attr) => {dispatch(changeGuestInfo(e, attr))},
        saveEdit: (e, guest) => {dispatch(saveEdit(e, guest))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitedRowUpdate)

// <tr>
//                 <td><input type='text' name='first_name'
//                     value={this.props.editor.first_name}
//                     onChange={(e) => this.props.handleChange(e)}   
//                 /></td>
//                 <td><input type='text' name='last_name'
//                     value={this.props.editor.last_name}
//                     onChange={(e) => this.props.handleChange(e)}
//                 /></td>
//                 <td><input type='text' name='email'
//                     value={this.props.editor.email}
//                     onChange={(e) => this.props.handleChange(e)}    
//                 /></td>
//                 <td>
//                     <label htmlFor="role"></label>
//                     <input type='text' list="weddingRoles" name='role' 
//                         value={this.props.editor.role} 
//                         onChange={(e) => this.props.handleChange(e)}    
//                     />
//                         <datalist id="weddingRoles">
//                             {weddingRoles}
//                         </datalist>    
//                 </td>
//                 <td><Button {...SMALL_BUTTON} onClick={(e) => this.props.saveEdit(e, this.props.editor)}>SAVE</Button></td>
//             </tr>