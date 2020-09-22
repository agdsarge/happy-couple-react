import React, { Component } from 'react'

import './ToDo.css'

import {connect} from 'react-redux'
import {todoFilter, todoCleanup, todoSubmit} from '../../Redux/Actions/todo'

import ToDoItem from './ToDoItem'

class ToDo extends Component {

    componentWillUnmount(){

    }
    
    render() {
        let filteredArray = this.props.todoList.filter( todo => todo.isCompleted );
        return (
            <div>
                <h3>To Do's</h3> 
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
        isFiltered: state.todo.isFiltered
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter: () => {dispatch(todoFilter())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);