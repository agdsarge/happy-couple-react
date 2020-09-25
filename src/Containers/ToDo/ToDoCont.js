import React, { Component } from 'react'

import ToDo from './ToDo';
import './ToDo.css'

import {connect} from 'react-redux'
import { toggleTodoMenu} from '../../Redux/Actions/todo'

class ToDoCont extends Component {
    
    render() {
        return (
            <div>
                <h3>To Do's</h3> 
                <div onClick={this.props.toggleOpen}>Open</div>
                {this.props.isOpen ? < ToDo /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.todo.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOpen: () => {dispatch(toggleTodoMenu())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoCont);