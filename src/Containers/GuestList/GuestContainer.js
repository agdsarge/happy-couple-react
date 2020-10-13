import React, { Component } from 'react'
import GuestEntryForm from './GuestEntryForm'
import InvitedGuests from './InvitedGuests'
import './Guest.css'

export default class GuestContainer extends Component {
    render() {
        return (
            <div className='guestContainer'>
                <InvitedGuests />
                <hr />
                <GuestEntryForm />
            </div>         
        )
    }
}

