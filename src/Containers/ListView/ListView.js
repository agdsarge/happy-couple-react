import React, { Component } from 'react'
import Wizard from '../Wizard/Wizard'
import ToDo from '../ToDo/ToDo'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
export default class ListView extends Component {
    render() {
        return (
            <div className='ListViewAccordion'>
                <Accordion>
                    <AccordionSummary>
                        <h2>Wizard</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Wizard />
                    </AccordionDetails>
                </Accordion>
                <Accordion TransitionProps={{ unmountOnExit: true }}>
                    <AccordionSummary>
                        <h2>ToDo</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToDo />
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}
