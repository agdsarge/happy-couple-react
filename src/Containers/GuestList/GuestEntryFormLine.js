import React, { Component } from 'react';
import {connect} from 'react-redux';
import { guestFormChange } from '../../Redux/Actions/guestList';
import {WEDDING_ROLES} from '../../Constants'
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';

const dict = {
    firstName: 'first name',
    lastName: 'last name',
    email: 'email',
    role: 'role'
}

const guestFormStyle={width: 120, display: "inline-flex", flexDirection: 'column', margin:'10px'}

class GuestEntryFormLine extends Component {

    fourFields() {
        const guest = `guest${this.props.num}`
        let specificGuest = this.props.form[guest]
        const fieldNames = ['firstName', 'lastName', 'email', 'role']
        return fieldNames.map(n => {
            let commonProps = {
                key: `${guest}${n}`,
                onChange: (e) => this.props.handleChange(e, guest, n),
                style: guestFormStyle,
                placeholder: dict[n]
            }
            if (n === 'role') {
                return (
                    <Autocomplete
                        {...commonProps}
                        options={WEDDING_ROLES}
                        renderInput={(params) => 
                            <TextField {...params} value={specificGuest[n]} />}
                    />  
                )
            } else {
                return ( <TextField {...commonProps} value={specificGuest[n]} /> )
            }
        })    
    }

    render() {
        return (
            <div className='guestEntryFormLine'>
                <span>{this.props.num + 1}.</span>
                {this.fourFields()}         
            </div>
        )
    }
}

const mapStateToProps = (state) => {  
    return {
        form: state.guestList.guestForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e, whichGuest, attr) => dispatch(guestFormChange(e, whichGuest, attr))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestEntryFormLine)