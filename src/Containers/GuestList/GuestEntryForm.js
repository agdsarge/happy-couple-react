import React, { Component } from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button';
import GuestEntryFormLine from './GuestEntryFormLine'
import { guestFormSubmit } from '../../Redux/Actions/guestList';
// import TextField from "@material-ui/core/TextField";

class GuestEntryForm extends Component {
    
    render() {
        const weddingRoles = [ 
            'Guest',
            'Best Man',             'Bridesmaid',       'Father of the Bride', 
            'Father of the Groom',  'Flower Girl',      'Groomsman',
            'Hattabin',             'Koumbara',         'Koumbaro',
            'Lector',               'Maid of Honor',    'Mother of the Bride',
            'Mother of the Groom',  'Officiant',        'Ring Bearer',
            'Shusha Vim',           'Usher',            'Vrati Mi',
            // thanks, theknot.com
        ].map(r => <option key={r}>{r}</option>) 
        
        return (
            <div className='GuestListForm'>
                <Button variant='contained' color='primary'> Import xls!</Button>
                <br />
                <form onSubmit={(e) => this.props.handleSubmit(e, this.props.form, this.props.weddingID)}>
                    <GuestEntryFormLine key={0} guest='guest0' ind={1} roles={weddingRoles}/>
                    <GuestEntryFormLine key={1} guest='guest1' ind={2} roles={weddingRoles}/>
                    <GuestEntryFormLine key={2} guest='guest2' ind={3} roles={weddingRoles}/>
                    <GuestEntryFormLine key={3} guest='guest3' ind={4} roles={weddingRoles}/>
                    <GuestEntryFormLine key={4} guest='guest4' ind={5} roles={weddingRoles}/>
                    <input type="submit" value="Submit" />
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