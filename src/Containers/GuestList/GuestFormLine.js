import React, { Component } from 'react';
import {connect} from 'react-redux';
import { guestFormChange } from '../../Redux/Actions/guestForm';

// import TextField from "@material-ui/core/TextField";

class GuestFormLine extends Component {

    allWeddingRoles() {
        let roles = [ 
            'Guest',
            'Best Man',            'Bridesmaid',
            'Father of the Bride', 'Father of the Groom',
            'Flower Girl',         'Groomsman',
            'Hattabin',            'Koumbara',
            'Koumbaro',            'Lector',
            'Maid of Honor',       'Mother of the Bride',
            'Mother of the Groom', 'Officiant',
            'Ring Bearer',         'Shusha Vim',
            'Usher',               'Vrati Mi',
             // thanks, theknot.com
        ] 
        return roles.map(r => <option>{r}</option>)
    }

    render() {
        let specificGuest = this.props.form[this.props.guest]
        return (
            <div>
                <span>{this.props.ind}. </span>
                <label for="firstName"> First: </label>
                <input type="text" id="firstName" name='firstName' 
                    value={specificGuest.firstName} 
                    onChange={(e) => this.props.handleChange(e, this.props.guest)} 
                />
                <label for="lastName"> Last: </label>
                <input type="text" id="lname" name='lastName'  
                    value={specificGuest.lastName} 
                    onChange={(e) => this.props.handleChange(e, this.props.guest)} 
                />
                <label for="email"> email: </label>
                <input type="text" id="email" name='email'  
                    value={specificGuest.email} 
                    onChange={(e) => this.props.handleChange(e, this.props.guest)} 
                />
                <label for="role"> role: </label>
                <input type="text" id='role' list="weddingRoles" name='role'  
                    value={specificGuest.role} 
                    onChange={(e) => this.props.handleChange(e, this.props.guest)} 
                />
                    <datalist id="weddingRoles">
                        {this.allWeddingRoles()}
                    </datalist>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        
    return {
        form: state.guestForm
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e, whichGuest) => dispatch(guestFormChange(e, whichGuest))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestFormLine)