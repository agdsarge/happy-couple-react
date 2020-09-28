import React, { Component } from 'react';
import {connect} from 'react-redux';
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
            'Usher',               'Vrati Mi'
        ]
        // thanks, theknot.com

        return roles.map(r => <option>{r}</option>)
    }

    render() {
        let specificGuest = this.props.form[this.props.guest]
        return (
            <div>
                <span>{this.props.ind}. </span>
                <label for="fname"> First: </label>
                <input type="text" id="fname" name="fname" value={specificGuest.firstName} />
                <label for="lname"> Last: </label>
                <input type="text" id="lname" name="lname" value={specificGuest.lastName} />
                <label for="email"> email: </label>
                <input type="text" id="email" name="email" value={specificGuest.email} />
                <label for="role"> role: </label>
                <input type="text" id='role' list="weddingRoles" value={specificGuest.role} />
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
        handleChange
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestFormLine)