import {TODO_CLEANUP, TODO_FILTER, TODO_TOGGLE, TOGGLE_TODO_MENU, TODO_SUBMIT, TODO_SUCCESS, ADD_TODO, TODO_CHANGE, TODO_LIST_SUCCESS} from './type'
import {HEADERS, API_ROOT} from '../../Constants'

function todoCleanup(){
    return {
        type: TODO_CLEANUP
    }
}

function todoListSuccess(data){
    return {
        type: TODO_LIST_SUCCESS,
        payload: data.list
    }
}

function getTodoList(w_id){
    return (dispatch) => {
        fetch(`${API_ROOT}/weddings/${w_id}/todos`, {
            method: 'GET',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(data => {              
            dispatch(todoListSuccess(data))
        })
    }
}

function todoSuccess(data){
    return {
        type: TODO_SUCCESS,
        payload: data.list
    }
}

function todoChange(e){
    return {
        type: TODO_CHANGE,
        payload: {[e.target.name]: e.target.value}
    }
}

function addTodo(e, todo){
    e.preventDefault();
    console.log(todo)
    return {
        type: ADD_TODO,
        payload: {"todo_name": todo, "isCompleted": false}
    }
}

function todoSubmit(form, w_id){
    console.log('hello')
    return (dispatch) => {
        fetch(`${API_ROOT}/todos`, {
            method: 'POST',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({todoList: form, wedding_id: w_id})
        })
        .then(r => r.json())
        .then(data => {         
            dispatch(todoSuccess(data))  
        })
    }
}

function todoToggle(todo){
    return {
        type: TODO_TOGGLE,
        payload: {todo_name: todo.todo_name, isCompleted: !todo.isCompleted}
    }
}

function toggleTodoMenu(){
    return {
        type: TOGGLE_TODO_MENU
    }
}



function todoFilter(){
    return {
        type: TODO_FILTER
    }
}

export {todoCleanup, todoToggle, todoFilter, todoSubmit, toggleTodoMenu, addTodo, todoChange, getTodoList}