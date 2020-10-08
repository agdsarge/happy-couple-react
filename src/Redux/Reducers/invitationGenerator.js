import { 
    CHANGE_INVITATION_TONE, CHANGE_INVITATION_STYLE, CHANGE_LINE_TEXT, 
    CHANGE_LINE_STYLE, POPEDIT_CLOSE, POPEDIT_OPEN, CHANGE_LINE_TYPE_COLOR,
    CHANGE_LINE_TYPEFACE, CHANGE_LINE_FONT_SIZE,
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
    popEdit: {
        lineNumber: null,
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
        //LINE STYLE EDITOR
        case CHANGE_LINE_STYLE:
            return {...oldState, editor: {...oldState.editor, [action.lineNumber]: {...oldState.editor[action.lineNumber], ...action.payload}}}
        case CHANGE_LINE_FONT_SIZE:
            let oldSize = oldState.editor[action.lineNumber].lineStyle.fontSize // '20px'
            let oldInt = parseInt(oldSize) // 20
            let newSize = (Math.max(10, Math.min(oldInt + action.payload, 80))) + 'px' // '21px' or '19px'. Value is clamped between [10, 80]
            return {...oldState, editor: 
                        {...oldState.editor, [action.lineNumber]: 
                            {...oldState.editor[action.lineNumber], 
                                lineStyle: {...oldState.editor[action.lineNumber].lineStyle, 
                                    fontSize: newSize}}}}
       
        case CHANGE_LINE_TEXT:
            return {...oldState, editor: {...oldState.editor, [action.lineNumber]: {...oldState.editor[action.lineNumber], text: action.payload}}}
        case POPEDIT_OPEN:
            return {...oldState, popEdit: {lineNumber: action.payload, open: true}}
        case POPEDIT_CLOSE:
            return {...oldState, popEdit: {...initialState.popEdit}}
        default:
            return {...oldState}
    }
}

export default reducer