import React, { Component } from 'react';
import './ListView.css';

import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core/';

import ToDo from '../ToDo/ToDo';
import GuestContainer from '../GuestList/GuestContainer';
import InvitationGenerator from '../InvitationGenerator/InvitationGenerator';
import PhotoTest from '../PhotoTest/PhotoTest';
import Album from '../Album/Album';

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
                <Accordion >
                    <AccordionSummary>
                        <h2>Photo Albums</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Album/>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary>
                        <h2>Photo upload!</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PhotoTest/>
                    </AccordionDetails>
                </Accordion>
            </div>
           
        )
    }
}
