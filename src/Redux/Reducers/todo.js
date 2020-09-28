import {TODO_FILTER, TODO_TOGGLE, TODO_CLEANUP, TOGGLE_TODO_MENU, TODO_SUBMIT, TODO_SUCCESS, TODO_CHANGE, ADD_TODO, TODO_LIST_SUCCESS} from '../Actions/type';

let initialState = {
    isFiltered: false,
    isOpen: false,
    newTodo: "",
    todoList: []
}

const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case TODO_CLEANUP:
            return initialState;
        case TODO_TOGGLE:
            let newArray = oldState.todoList.map( todo => (todo.todo_name === action.payload.todo_name) ? {...todo, ...action.payload} : todo)
            return {...oldState, todoList: [...newArray]};
        case TODO_FILTER:
            return {...oldState, isFiltered: !oldState.isFiltered}
        case TOGGLE_TODO_MENU:
            return {...oldState, isOpen: !oldState.isOpen}
        case TODO_CHANGE:
            return {...oldState, ...action.payload};
        case ADD_TODO:
            return {...oldState, newTodo: "", todoList: [...oldState.todoList, action.payload]};
        case TODO_SUBMIT:
            return initialState;
        case TODO_SUCCESS:
            return {...oldState, todoList: action.payload}
        case TODO_LIST_SUCCESS:
            return {...oldState, todoList: action.payload}
        default: 
            return oldState;
    }
}

export default reducer;