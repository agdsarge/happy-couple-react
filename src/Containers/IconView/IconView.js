import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {selectActiveCard} from '../../Redux/Actions/selectActiveCard'

class IconView extends Component {
    render() {
        return (
            <div className='iconView'>
                <div>ACTIVE SPACE</div>
                <div style={{width: '40%'}}>
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

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (e) => dispatch(selectActiveCard(e))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IconView)