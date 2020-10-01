import React, { Component } from 'react'

import './ToDo.css'

import { Checkbox } from '@material-ui/core';

import {connect} from 'react-redux'
import {todoToggle, toggleEditing, editTodoName, postTodoChange, deleteTodo} from '../../Redux/Actions/todo'
 
class ToDoItem extends Component {
    render() {
        return (
            <div className='ToDo-list-item'>
                < Checkbox checked={this.props.info.isCompleted} onChange={() => this.props.toggle(this.props.info)}/>
                {this.props.editHash[this.props.info.id].isEditing ? 
                    <input name='editName' value={this.props.editHash[this.props.info.id].editName} 
                            onChange={(e) => this.props.handleChange(e, this.props.info)}></input> : 
                    <p className='ToDo-item-text'>{this.props.info.todo_name}</p> }
                <div className='ToDo-list-item-menu'>
                    <p onClick={() => this.props.handleEdit(this.props.info)}>
                        { this.props.editHash[this.props.info.id].isEditing ?
                     'Cancel' : 'Edit' }</p> 
                    { this.props.editHash[this.props.info.id].isEditing ? 
                        <p onClick={(e)=>this.props.handleSubmit(e, this.props.info.id, this.props.editHash[this.props.info.id].editName)}>Submit</p> :
                        <p onClick={()=>this.props.handleDelete(this.props.info.id)}>Delete</p> 
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todo.todoList,
        isFiltered: state.todo.isFiltered,
        editHash: state.todo.editObj,
        isEditable: state.todo.isEditing,
        editName: state.todo.editName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (todo) => {dispatch(todoToggle(todo))},
        handleEdit: (todo)=> {dispatch(toggleEditing(todo))},
        handleChange: (e, todo)=> {dispatch(editTodoName(e, todo))},
        handleSubmit: (e, id, todoText) => {dispatch(postTodoChange(e, id, todoText))},
        handleDelete: (id) => {dispatch(deleteTodo(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);