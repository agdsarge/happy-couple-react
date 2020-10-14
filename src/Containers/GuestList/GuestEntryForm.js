import React, { Component } from 'react'
import {connect} from 'react-redux'

import {SMALL_BUTTON} from '../../Constants/index';

import Button from '@material-ui/core/Button';
import GuestEntryFormLine from './GuestEntryFormLine'
import { guestFormSubmit } from '../../Redux/Actions/guestList';

class GuestEntryForm extends Component {
    
    formLines() {
        return [0, 1, 2, 3, 4].map(int => 
            <GuestEntryFormLine 
                key={int}
                num={int} 
            />)
    }

    render() {  
        return (
            <div className='GuestListForm'>
                {/* <Button variant='contained' color='primary'> Import xls!</Button> */}
                <br />
                <form onSubmit={(e) => this.props.handleSubmit(e, this.props.form, this.props.weddingID)}>
                    {this.formLines()}
                    <input type='submit' id='guest-list-form-submit' hidden/>
                    <label htmlFor='guest-list-form-submit'>
                        <Button {...SMALL_BUTTON} onClick={(e) => this.props.handleSubmit(e, this.props.form, this.props.weddingID)}>
                            Submit
                        </Button>
                    </label>
                </form> 
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