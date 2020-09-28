import React, { Component } from 'react'
import {connect} from 'react-redux'
import './GuestList.css'
import Button from '@material-ui/core/Button';
import GuestFormLine from './GuestFormLine'
// import TextField from "@material-ui/core/TextField";

class GuestList extends Component {
    render() {
        return (
            <div className='GuestListForm'>
                <Button variant='contained' color='primary'> Import xls!</Button>
                <p>Doesn't work yet!</p>
                <br />
                <h3>FORM FOR TYPING IT IN YOURSELF, LIKE A BARBARIAN</h3>
                <form onSubmit={(e) => this.props.handleSubmit(e, this.props.form)}>
                    <GuestFormLine key={0} guest='guest0' ind={1} />
                    <GuestFormLine key={1} guest='guest1' ind={2} />
                    <GuestFormLine key={2} guest='guest2' ind={3} />
                    <GuestFormLine key={3} guest='guest3' ind={4} />
                    <GuestFormLine key={4} guest='guest4' ind={5} />
                    <input type="submit" value="Submit" />
                </form>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.GuestForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: () => {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList)