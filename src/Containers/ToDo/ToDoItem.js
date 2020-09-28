import React, { Component } from 'react'

import './ToDo.css'

import { Checkbox } from '@material-ui/core';

import {connect} from 'react-redux'
import {todoToggle} from '../../Redux/Actions/todo'
 
class ToDoItem extends Component {
    render() {
        return (
            <div className='ToDo-list-item'>
                < Checkbox checked={this.props.info.isCompleted} onChange={() => this.props.toggle(this.props.info)}/>
                <p className='ToDo-item-text'>{this.props.info.todo_name}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todo.todoList,
        isFiltered: state.todo.isFiltered
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (todo) => {dispatch(todoToggle(todo))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);