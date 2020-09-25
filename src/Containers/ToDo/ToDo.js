import React, { Component } from 'react'

import './ToDo.css'

import {connect} from 'react-redux'
import {todoFilter, todoCleanup, todoSubmit, toggleTodoMenu} from '../../Redux/Actions/todo'

import ToDoItem from './ToDoItem'

class ToDo extends Component {

    componentWillUnmount(){
        this.props.handleSubmit(this.props.todoList);
        this.props.cleanup();
    }


render() {
    let filteredArray = this.props.todoList.filter( todo => todo.isCompleted );
        return (
            <div>
            <button onClick={this.props.filter}>Filter</button>
                <div className='ToDo-wrapper'>
                {this.props.isFiltered ? 
                filteredArray.map(todo => < ToDoItem info={todo} /> ) :
                this.props.todoList.map( todo => < ToDoItem info={todo} /> ) 
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
      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter: () => {dispatch(todoFilter())},
        cleanup: () => {dispatch(todoCleanup())},
        handleSubmit: (list) => {dispatch(todoSubmit(list))},
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);