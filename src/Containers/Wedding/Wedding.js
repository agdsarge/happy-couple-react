import React, { Component } from 'react'

import {connect} from 'react-redux'

import {getTodoList} from '../../Redux/Actions/todo'

import Countdown from '../../Components/Countdown'

import Toggle from '../../Components/Toggle'
import ListView from '../ListView/ListView.js'
import IconView from '../IconView/IconView.js'

class Wedding extends Component {

    componentDidMount(){
        this.props.getTodos(this.props.routeProps.match.params.id)
    }

    selectView() {
        if (this.props.viewToggle.iconView) {
            return <IconView wedding_id={this.props.routeProps.match.params.id}/>
        } else {
            return <ListView wedding_id={this.props.routeProps.match.params.id}/>
        }
    }

    render() {
        return (
            <div>
                < Countdown />
                < Toggle />
                {this.selectView()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        viewToggle: state.viewControl.viewToggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: (id) => {dispatch(getTodoList(id))},
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Wedding);