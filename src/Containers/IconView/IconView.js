import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {selectActiveCard} from '../../Redux/Actions/selectActiveCard'

import Wizard from '../Wizard/Wizard'
import ToDo from '../ToDo/ToDo'

class IconView extends Component {
    activeCard() {
        if (this.props.selectCard.wizard) return <Wizard />
        if (this.props.selectCard.todo) return <ToDo />
    }


    render() {
        return (
            <div className='iconView'>
                <div className='activeComponentSpace'> {this.activeCard()}</div>
                <div style={{width: '40%'}}>
                    {/* HEY ENRIQUE, HOW DO WE MAKE CARDS BE SIDE-BY-SIDE??? */}
                    <Card variant='outlined' onClick={e => this.props.handleClick('wizard')} >
                        <CardContent>
                            <h3>WIZARD CARD</h3>
                            <p>Basic details about the wedding!</p>
                            <p>This is a good first step!</p>
                        </CardContent> 
                    </Card>
                    <Card variant='outlined'  onClick={e => this.props.handleClick('todo')} >
                        <CardContent>
                            <h3>TODO CARD</h3>
                            <p>Here's a list of all the stuff to do!</p>
                            <p>One thing at a time!</p>
                        </CardContent> 
                    </Card>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectCard: state.selectCard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (e) => dispatch(selectActiveCard(e))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IconView)