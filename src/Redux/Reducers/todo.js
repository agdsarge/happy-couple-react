import {TODO_FILTER, TODO_TOGGLE, TODO_CLEANUP, TOGGLE_TODO_MENU, TODO_SUBMIT} from '../Actions/type';

let initialState = {
    isFiltered: false,
    isOpen: false,
    todoList: [{task: "Guest List", isCompleted: false},
                {task: "Upload Photos for Gallery", isCompleted: false},
                {task: "Info for Reception", isCompleted: true},
                {task: "Finish Bio", isCompleted: false},
                {task: "Create Invitation", isCompleted: false}]
}

const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case TODO_CLEANUP:
            return initialState;
        case TODO_TOGGLE:
            let newArray = oldState.todoList.map( todo => (todo.task === action.payload.task) ? action.payload : todo)
            return {...oldState, todoList: [...newArray]};
        case TODO_FILTER:
            return {...oldState, isFiltered: !oldState.isFiltered}
        case TOGGLE_TODO_MENU:
            return {...oldState, isOpen: !oldState.isOpen}
        case TODO_SUBMIT:
            return initialState;
        default: 
            return oldState;
    }
}

export default reducer;