import {TODO_CLEANUP, TODO_FILTER, TODO_TOGGLE, TOGGLE_TODO_MENU, TODO_SUBMIT, TODO_SUCCESS} from './type'
import {HEADERS, API_ROOT} from '../../Constants'

function todoCleanup(){
    return {
        type: TODO_CLEANUP
    }
}

function todoSuccess(){
    return {
        type: TODO_SUBMIT
    }
}

function todoSubmit(form){
    console.log('hello')
    return (dispatch) => {
        fetch(`${API_ROOT}/todos`, {
            method: 'POST',
            headers: {
                ...HEADERS, 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(form)
        })
        .then(r => r.json())
        .then(data => {           
            dispatch(todoSuccess())
            dispatch(todoCleanup())
        })
    }
}

function todoToggle(todo){
    return {
        type: TODO_TOGGLE,
        payload: {task: todo.task, isCompleted: !todo.isCompleted}
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

export {todoCleanup, todoToggle, todoFilter, todoSubmit, toggleTodoMenu}