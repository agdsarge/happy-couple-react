import { 
    CHANGE_INVITATION_TONE, CHANGE_INVITATION_STYLE, CHANGE_LINE_TEXT, 
    CHANGE_LINE_STYLE, POPOVER_CLOSE, POPOVER_OPEN
} from '../Actions/type.js'

const initialState = {
    tone: 'Traditional',
    style: {
        backgroundColor: "ivory",
        color: "222222",
        WebkitFontSmoothing: 'antialiased',
        whiteSpace: 'pre-wrap',
        float: 'right',
        width: '400px',
    },
    popover: {
        lineNumber: null,
        anchorEl: null,
        open: false
    },
    editor: [
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            }, 
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
        {
            text: "",
            lineStyle: {
                fontFamily: "EnglandHand",
                fontSize: "20px",
                color: "222222"
            },
        },
    ]
}

const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case CHANGE_INVITATION_TONE:
            return {...oldState, tone: action.payload}
        case CHANGE_INVITATION_STYLE:
            return {...oldState, style: {...oldState.style, ...action.payload}}
        case CHANGE_LINE_STYLE:
            return {...oldState, editor: {...oldState.editor, [action.lineNumber]: {...oldState.editor[action.lineNumber], ...action.payload}}}
        case CHANGE_LINE_TEXT:
            return {...oldState, editor: {...oldState.editor, [action.lineNumber]: {...oldState.editor[action.lineNumber], text: action.payload}}}
        case POPOVER_OPEN: 
            return {...oldState, popover: {...action.payload}}
        case POPOVER_CLOSE:
            return {...oldState, popover: {anchorEl: null, open: false, lineNumber: null}}
        default:
            return {...oldState}
    }
}

export default reducer