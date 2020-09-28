import React, { Component } from 'react';
import {connect} from 'react-redux';
import { guestFormChange } from '../../Redux/Actions/guestForm';

// import TextField from "@material-ui/core/TextField";

class GuestFormLine extends Component {
    componentDidMount() {
        console.log("DAVIS SARGEANT", this.props)
    }

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
        let frankenName = `|`
        return (
            <div>
                <span>{this.props.ind}. </span>
                <label for="firstName"> First: </label>
                <input type="text" id="firstName" name={`firstName|${this.props.guest}`} value={specificGuest.firstName} onChange={this.props.handleChange} />
                <label for="lastName"> Last: </label>
                <input type="text" id="lname" name={`lastName|${this.props.guest}`}  value={specificGuest.lastName } onChange={this.props.handleChange} />
                <label for="email"> email: </label>
                <input type="text" id="email" name={`email|${this.props.guest}`}  value={specificGuest.email} onChange={this.props.handleChange} />
                <label for="role"> role: </label>
                <input type="text" id='role' list="weddingRoles" name={`role|${this.props.guest}`}  value={specificGuest.role} onChange={this.props.handleChange} />
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
        handleChange: (e) => dispatch(guestFormChange(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestFormLine)