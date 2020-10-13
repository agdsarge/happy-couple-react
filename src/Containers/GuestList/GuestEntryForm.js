import React, { Component } from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button';
import GuestEntryFormLine from './GuestEntryFormLine'
import { guestFormSubmit } from '../../Redux/Actions/guestList';

// import TextField from "@material-ui/core/TextField";

class GuestEntryForm extends Component {
    
    formLines() {
        return [0, 1, 2, 3, 4].map(int => 
            <GuestEntryFormLine 
                key={int}
                num={int} 
                guest={`guest${int}`}
                ind={int + 1} 
            />)
    }

    render() {  
        return (
            <div className='GuestListForm'>
                {/* <Button variant='contained' color='primary'> Import xls!</Button> */}
                <br />
                <form onSubmit={(e) => this.props.handleSubmit(e, this.props.form, this.props.weddingID)}>
                    {this.formLines()}
                </form>
                <Button 
                    variant='contained' 
                    size='small' 
                    color='primary' 
                    onClick={(e) => this.props.handleSubmit(e, this.props.form, this.props.weddingID)}
                >
                    Submit
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.guestList.guestForm,
        weddingID: state.weddingDetails.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (e, form, id) => {dispatch(guestFormSubmit(e, form, id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestEntryForm)