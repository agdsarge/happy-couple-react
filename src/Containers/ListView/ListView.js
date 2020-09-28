import React, { Component } from 'react'

import ToDo from '../ToDo/ToDo'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
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
            </div>
        )
    }
}
