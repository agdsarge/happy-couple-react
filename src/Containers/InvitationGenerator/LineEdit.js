import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLineFontSize, popEditClose, changeFontFamily, changeLineColor } from '../../Redux/Actions/invitationGenerator';
import Button from '@material-ui/core/Button';


class LineEdit extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='lineEdit'>
                <Button size='small' variant='contained' color='primary' onClick={(e) => this.props.handleFontChange(this.props.lineNum, -1)}>-</Button>
                {parseInt(this.props.editor[this.props.lineNum].lineStyle.fontSize)}
                <Button size='small' variant='contained' color='primary' onClick={(e) => this.props.handleFontChange(this.props.lineNum, 1)}>+</Button>
                <select onChange={(e) => this.props.handleFontFamilyChange(e, this.props.lineNum)}>
                    <option>Script</option>
                    <option>Sans Serif</option>
                    <option>Serif</option>
                </select>
                <select onChange={(e) => this.props.handleLineColorChange(e, this.props.lineNum)}>
                    <option>Black</option>
                    <option>Gold</option>
                    <option>Red</option>
                    {/* <option>Custom</option> */}
                </select>
                <Button variant='contained' color='primary' size='small' onClick={(e) => this.props.handlePopEditClose()}>edit text</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // lineNum: state.invitationGenerator.popover.lineNumber,
        editor: state.invitationGenerator.editor,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFontChange: (lineNum, int) => {dispatch(changeLineFontSize(lineNum, int))},
        handlePopEditClose: () => {dispatch(popEditClose())},
        handleFontFamilyChange: (e, lineNum) => {dispatch(changeFontFamily(e, lineNum))} ,
        handleLineColorChange: (e, lineNum) => {dispatch(changeLineColor(e, lineNum))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineEdit)
