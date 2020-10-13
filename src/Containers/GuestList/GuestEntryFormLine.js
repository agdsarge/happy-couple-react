import React, { Component } from 'react';
import {connect} from 'react-redux';
import { guestFormChange } from '../../Redux/Actions/guestList';
import {WEDDING_ROLES} from '../../Constants'
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';

const dict = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'email'
}

const guestFormStyle={width: 120, display: "inline-flex", flexDirection: 'column', margin:'10px'}

class GuestEntryFormLine extends Component {

    threeFields() {
        const guest = `guest${this.props.num}`
        let specificGuest = this.props.form[guest]
        const fieldNames = ['firstName', 'lastName', 'email']
        return fieldNames.map(n => 
            <TextField
                key={guest + n}
                placeholder={dict[n]}
                style={guestFormStyle}
                value={specificGuest[n]}
                onChange = {(e) => this.props.handleChange(e, guest, n)}
            />
        )
    }

    render() {
        const guest = `guest${this.props.num}`
        let specificGuest = this.props.form[guest]
        return (
            <div className='guestEntryFormLine'>
                <span>{this.props.num + 1}.</span>
                {this.threeFields()}
                <Autocomplete
                    onChange={(e) => this.props.handleChange(e, guest, 'role')}
                    id={guest + 'Autocomplete'}
                    options={WEDDING_ROLES}
                    getOptionLabel={(option) => option}
                    style={guestFormStyle}
                    renderInput={(params) => <TextField {...params} value={specificGuest.role} placeholder="role" variant="standard" />}
                />   
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
