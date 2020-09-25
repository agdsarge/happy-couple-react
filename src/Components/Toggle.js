import React, { Component } from 'react'
import {connect} from 'react-redux'
import {viewToggleChange} from '../Redux/Actions/viewToggle.js'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class Toggle extends Component {
    render() {
        return (
            <div>
                
                <ButtonGroup  color="primary" aria-label="outlined primary button group">
                    <Button onClick={e => this.props.handleClick(e)} name='listView' > list</Button> 
                    <Button onClick={e => this.props.handleClick(e)} name='iconView' > icon </Button>
                </ButtonGroup>
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
        handleClick: e => dispatch(viewToggleChange(e))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)