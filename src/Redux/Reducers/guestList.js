import {
    GUEST_FORM_CHANGE, GUEST_FORM_CLEANUP, POPULATE_GUEST_LIST, 
    WIPE_GUEST_LIST, INCREMENT_PAGE, DECREMENT_PAGE, 
    REVERSE_ORDER, NEW_SELECTOR, CHANGE_NUM_ENTRY,
    EDIT_GUEST, CLEAR_EDITOR, GUEST_INFO_CHANGE

} from '../Actions/type.js'

const initialState = {
    guestForm: {
        guest0: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        },
        guest1: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        },
        guest2: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        },
        guest3: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        },
        guest4: {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        }
    },
    guestList: [],
    paginator: {
        currentPage: 0,
        entriesPerPage: 10,
        sortSelection: {
            idNum: {selected: false, ascending: 1},
            firstName: {selected: false, ascending: 1},
            lastName: {selected: true, ascending: 1},
            email: {selected: false, ascending: 1},
            role: {selected: false, ascending: 1},
        }
    },
    editor: {
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        role: ''
    }
}

function autoCompleteTransformer(obj) {
    let target = Object.values(obj)[0].target
    if (target) {
        return {[Object.keys(obj)[0]]: target.value}
    } else {
        return obj
    }
}

const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case GUEST_FORM_CHANGE:
            action.payload = autoCompleteTransformer(action.payload)
            return {...oldState, guestForm: 
                        {...oldState.guestForm, [action.guest]: 
                            {...oldState.guestForm[action.guest], ...action.payload}}}
        case GUEST_FORM_CLEANUP:
            return {...oldState, guestForm: {...initialState.guestForm}}
            //return {...initialState, guestList: oldState.guestList}
        case POPULATE_GUEST_LIST:
            return {...oldState, guestList: action.payload}
        case WIPE_GUEST_LIST:
            return {...oldState, guestList: []}
        case CLEAR_EDITOR:
            return {...oldState, editor: {...initialState.editor}}
        case EDIT_GUEST:
            action.payload = autoCompleteTransformer(action.payload)
            return {...oldState, editor: action.payload}
        case GUEST_INFO_CHANGE:
            return {...oldState, editor: {...oldState.editor, ...action.payload}}
        //PAGINATOR
        case INCREMENT_PAGE:
            let lastPage = Math.floor(oldState.guestList.length / oldState.paginator.entriesPerPage)
            let maxPage = Math.min(oldState.paginator.currentPage + 1, lastPage)
            return {...oldState, paginator: {...oldState.paginator, currentPage: maxPage}}
        case DECREMENT_PAGE:
            let prevPage = Math.max(0, oldState.paginator.currentPage - 1)
            return {...oldState, paginator: 
                        {...oldState.paginator, currentPage: prevPage}}
        case NEW_SELECTOR:
            return {...oldState, paginator: 
                        {...oldState.paginator, currentPage: 0, sortSelection: 
                            {...initialState.paginator.sortSelection, lastName: 
                                {selected: false, ascending: 1}, [action.payload]: 
                                    {selected: true, ascending: 1}}}}
        case CHANGE_NUM_ENTRY:
            return {...oldState, paginator: 
                        {...oldState.paginator, entriesPerPage: action.payload}}
        case REVERSE_ORDER:
            let sel = oldState.paginator.sortSelection[action.payload].selected
            let newVal = oldState.paginator.sortSelection[action.payload].ascending * -1
            return {...oldState, paginator: 
                        {...oldState.paginator, sortSelection: 
                            {...oldState.paginator.sortSelection, [action.payload]: 
                                {selected: sel, ascending: newVal}}}}
        //
        default:
            return oldState
    }
}

export default reducer