import React, { Component } from 'react';
import {connect} from 'react-redux';
import { guestFormChange } from '../../Redux/Actions/guestList';

// import TextField from "@material-ui/core/TextField";

class GuestEntryFormLine extends Component {

    render() {
        let specificGuest = this.props.form[this.props.guest]
        return (
            <div>
                <span>{this.props.ind}. </span>
                <label htmlFor="firstName"> First: </label>
                <input type="text" id="firstName" name='firstName' 
                    value={specificGuest.firstName} 
                    onChange={(e) => this.props.handleChange(e, this.props.guest)} 
                />
                <label htmlFor="lastName"> Last: </label>
                <input type="text" id="lname" name='lastName'  
                    value={specificGuest.lastName} 
                    onChange={(e) => this.props.handleChange(e, this.props.guest)} 
                />
                <label htmlFor="email"> email: </label>
                <input type="text" id="email" name='email'  
                    value={specificGuest.email} 
                    onChange={(e) => this.props.handleChange(e, this.props.guest)} 
                />
                <label htmlFor="role"> role: </label>
                <input type="text" id='role' list="weddingRoles" name='role'  
                    value={specificGuest.role} 
                    onChange={(e) => this.props.handleChange(e, this.props.guest)} 
                />
                    <datalist id="weddingRoles">
                        {this.props.roles}
                    </datalist>
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
        handleChange: (e, whichGuest) => dispatch(guestFormChange(e, whichGuest))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestEntryFormLine)