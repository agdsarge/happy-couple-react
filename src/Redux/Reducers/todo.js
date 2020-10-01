import {TODO_FILTER, TODO_TOGGLE, TODO_CLEANUP, TOGGLE_TODO_MENU, TODO_SUBMIT, TODO_SUCCESS, TODO_CHANGE, ADD_TODO, TODO_LIST_SUCCESS, TOGGLE_EDIT, EDIT_TODO_NAME, POST_TODO_CHANGE, DELETE_TODO} from '../Actions/type';

let initialState = {
    isFiltered: false,
    isOpen: false,
    newTodo: "",
    todoList: [],
    editObj: {},
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
        case TOGGLE_EDIT:
            let temp = {...oldState.editObj};
            temp[action.id].isEditing = !temp[action.id].isEditing;
            return {...oldState, editObj: temp}
        case EDIT_TODO_NAME:
            // key: {editName: "", isEditing: bool}
            let change = {[action.id]: {isEditing: true, ...action.payload}};
            let newChangeObj = {...oldState.editObj, ...change};
            return {...oldState, editObj: newChangeObj};
        case POST_TODO_CHANGE:
            let updatedObj = {...oldState.editObj}
            updatedObj[action.id] = {editName: action.payload.todo_name, isEditing: false}
            let modifiedList = oldState.todoList.map( todo => (todo.id === action.id) ? action.payload : todo )
            console.log(updatedObj, modifiedList)
            return {...oldState, todoList: modifiedList, editObj: updatedObj}
        case DELETE_TODO:
            let deleteObj = {...oldState.editObj};
            delete deleteObj[action.id];
            let filteredList = oldState.todoList.filter( todo => todo.id !== action.id)
            return {...oldState, todoList: filteredList, editObj: deleteObj}
        case TODO_CHANGE:
            return {...oldState, ...action.payload};
        case ADD_TODO:
            return {...oldState, newTodo: "", todoList: [...oldState.todoList, action.payload]};
        case TODO_SUBMIT:
            return initialState;
        case TODO_SUCCESS:
            return {...oldState, todoList: action.payload}
        case TODO_LIST_SUCCESS:
            let initialEditObj = {}
            action.payload.forEach ( todo => {
                initialEditObj[todo.id] = {editName: todo.todo_name, isEditing: false}
            })
            return {...oldState, todoList: action.payload, editObj: initialEditObj}
        default: 
            return oldState;
    }
}

export default reducer;