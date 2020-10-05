import React, { Component } from 'react';
import './ListView.css';
import ToDo from '../ToDo/ToDo';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import GuestContainer from '../GuestList/GuestContainer';
import InvitationGenerator from '../InvitationGenerator/InvitationGenerator';

export default class ListView extends Component {
    render() {
        return (
            <div className='ListViewAccordion'>
                <Accordion TransitionProps={{ unmountOnExit: true }}>
                    <AccordionSummary>
                        <h2>ToDo</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToDo wedding_id={this.props.wedding_id}/>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary>
                        <h2>Guest List</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <GuestContainer />
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary>
                        <h2>Invitation Generator</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <InvitationGenerator />
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}
