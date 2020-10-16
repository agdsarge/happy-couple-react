import { 
    CHANGE_INVITATION_TONE, CHANGE_INVITATION_STYLE, CHANGE_LINE_TEXT, 
    CHANGE_LINE_STYLE, POPEDIT_CLOSE, POPEDIT_OPEN,
    CHANGE_LINE_FONT_SIZE, UPDATE_STYLE_FROM_FETCH, UPDATE_LINE_FROM_FETCH, POST_OR_PATCH
} from '../Actions/type.js'

const defaultStyle = {
    fontSize: "20px",
    color: "#222222",
    fontFamily: "EnglandHand",
    textAlign: 'center'
}

const initialState = {
    post: true,
    tone: 'Traditional',
    allOptions: {
        color: {Black: '#222222', Gold: '#FCC200', Red: '#C41E3A'},
        fontFamily: {Script: 'EnglandHand', "Sans Serif": "SourceSansPro", Serif: "LibreBaskerville"},
        textAlign: {Left: 'left', Center: 'center', Right: 'right'}
    },
    style: {
        ...defaultStyle,
        backgroundColor: "ivory",
        WebkitFontSmoothing: 'antialiased',
        whiteSpace: 'pre-wrap',
        float: 'right',
        width: '400px',
        paddingLeft: '10px',
        paddingRight: '10px'
        
    },
    popEdit: {
        lineNumber: null,
        open: false
    },
    editor: [
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
        {text: "", lineStyle: {...defaultStyle} },
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
            return {...oldState, editor: 
                        {...oldState.editor, [action.lineNumber]: 
                            {...oldState.editor[action.lineNumber], lineStyle: 
                                {...oldState.editor[action.lineNumber].lineStyle,
                                    ...action.payload}}}}
        case CHANGE_LINE_FONT_SIZE:
            let oldSize = oldState.editor[action.lineNumber].lineStyle.fontSize // '20px'
            let oldInt = parseInt(oldSize) // 20
            let newSize = (Math.max(10, Math.min(oldInt + action.payload, 80))) + 'px' // '21px' or '19px'. Value is clamped between [10, 80]
            return {...oldState, editor: 
                        {...oldState.editor, [action.lineNumber]: 
                            {...oldState.editor[action.lineNumber], lineStyle: 
                                {...oldState.editor[action.lineNumber].lineStyle, 
                                    fontSize: newSize}}}}        
        case CHANGE_LINE_TEXT:
            return {...oldState, editor: {...oldState.editor, [action.lineNumber]: {...oldState.editor[action.lineNumber], text: action.payload}}}
        //POP EDITOR FOR STYLE CHANGE
        case POPEDIT_OPEN:
            return {...oldState, popEdit: {lineNumber: action.payload, open: true}}
        case POPEDIT_CLOSE:
            return {...oldState, popEdit: {...initialState.popEdit}}
        //FETCH PROCESS
        case POST_OR_PATCH:
            return {...oldState, post: action.payload}
        case UPDATE_STYLE_FROM_FETCH:
            return {...oldState, style: {...oldState.style, ...action.payload}}
        case UPDATE_LINE_FROM_FETCH:
            return {...oldState, editor: {...oldState.editor, [action.lineNumber]: {...action.payload}}}
        default:
            return {...oldState}
    }
}

export default reducer