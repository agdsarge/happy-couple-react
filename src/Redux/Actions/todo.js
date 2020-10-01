import {TODO_CLEANUP, TODO_FILTER, TODO_TOGGLE, TOGGLE_TODO_MENU, TOGGLE_EDIT, TODO_SUCCESS, ADD_TODO, TODO_CHANGE, TODO_LIST_SUCCESS, EDIT_TODO_NAME, POST_TODO_CHANGE, DELETE_TODO} from './type'
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

function editTodoName(e, todo){
    return {
        type: EDIT_TODO_NAME,
        payload: {[e.target.name]: e.target.value},
        id: todo.id
    }
}

function changeSuccess(data){
    console.log(data);
    return{
        type: POST_TODO_CHANGE,
        payload: data,
        id: data.id
    }
}

function postTodoChange(e, id, todo_name){
    return (dispatch) => {
        e.preventDefault();
        fetch(`${API_ROOT}/todos/${id}`, {
            method: 'PATCH',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({t_id: id, new_todo_name: todo_name})
        })
        .then(r => r.json())
        .then(data => {
            dispatch(changeSuccess(data.todo))
        })
    }
}

function deleteSuccess(data){
    return{
        type: DELETE_TODO,
        id: data.id
    }
}

function deleteTodo(id){
    return (dispatch) => {
        fetch(`${API_ROOT}/todos/${id}`, {
            method: 'DELETE',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({t_id: id})
        })
        .then(r => r.json())
        .then(data => {
            dispatch(deleteSuccess(data.todo))
        })
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
            dispatch(todoListSuccess(data))  
        })
    }
}

function toggleEditing(todo){
    return {
        type: TOGGLE_EDIT,
        id: todo.id 
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

export {todoCleanup, todoToggle, todoFilter, todoSubmit, toggleTodoMenu, addTodo, todoChange, getTodoList, toggleEditing, editTodoName, postTodoChange, deleteTodo}