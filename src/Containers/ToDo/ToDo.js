import React, { Component } from 'react'

import './ToDo.css'

import {connect} from 'react-redux'
import {todoFilter, todoCleanup, todoSubmit, todoChange, addTodo} from '../../Redux/Actions/todo'

import ToDoItem from './ToDoItem'

class ToDo extends Component {

    componentWillUnmount(){
        this.props.handleSubmit(this.props.todoList, this.props.wedding_id);
        this.props.cleanup();
    }


render() {
    let filteredArray = this.props.todoList.filter( todo => todo.isCompleted );
        return (
            <div>
            <div>
                <form onSubmit={(e) => this.props.handleAddTodo(e, this.props.newTodo)}>
                    <label>New Task:</label>
                    <input name='newTodo' onChange={ (e) => this.props.handleChange(e) } value={this.props.newTodo}></input>
                    <button type='Submit'>Add</button>
                </form>
            </div>
            <button onClick={this.props.filter}>Filter</button>
                <div className='ToDo-wrapper'>
                {this.props.isFiltered ? 
                filteredArray.map(todo => < ToDoItem key={todo.id} info={todo} /> ) :
                this.props.todoList.map( todo => < ToDoItem key={todo.id} info={todo} /> ) 
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
        newTodo: state.todo.newTodo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter: () => {dispatch(todoFilter())},
        cleanup: () => {dispatch(todoCleanup())},
        handleChange: (e) => {dispatch(todoChange(e))},
        handleAddTodo: (e, todo) => {dispatch(addTodo(e, todo))},
        handleSubmit: (list, id) => {dispatch(todoSubmit(list, id))},
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);