import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLineFontSize, popEditClose, changeLineStyle } from '../../Redux/Actions/invitationGenerator';
import {Button, MenuItem, Select} from '@material-ui/core';
import {SMALL_BUTTON} from '../../Constants/index';

const selectorNames = {
    textAlign: 'Align',
    fontFamily: 'Font',
    color: 'Color'
}

class LineEdit extends Component {

    componentDidMount() {

    }

    styleSelectors() {

        const selectors = []
        for (let category in this.props.allOptions) {
            let items = [<MenuItem key={category + 'default'} value={selectorNames[category]} disabled>{selectorNames[category]}</MenuItem>]
            let interior = this.props.allOptions[category]
            for (let item in interior) {
                let menuItem = 
                    <MenuItem
                        key={item}
                        value={interior[item]}
                    >
                    {item}
                    </MenuItem>
                items.push(menuItem)
            }
            let selector = 
                <Select 
                    key={category} 
                    value={selectorNames[category]} 
                    onChange={(e) => this.props.handleLineStyleChange(e, category, this.props.lineNum)}
                >
                    {items}
                </Select>
            selectors.push(selector)
        }
        return selectors
    }

    render() {
        return (
            <div className='lineEdit'>
                <Button {...SMALL_BUTTON} onClick={(e) => this.props.handleFontChange(this.props.lineNum, -1)}>-</Button>
                {parseInt(this.props.editor[this.props.lineNum].lineStyle.fontSize)}
                <Button {...SMALL_BUTTON} onClick={(e) => this.props.handleFontChange(this.props.lineNum, 1)}>+</Button>
                {this.styleSelectors()}
                <Button {...SMALL_BUTTON} onClick={(e) => this.props.handlePopEditClose()}>edit text</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allOptions: state.invitationGenerator.allOptions,
        lineNum: state.invitationGenerator.popEdit.lineNumber,
        editor: state.invitationGenerator.editor,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFontChange: (lineNum, int) => {dispatch(changeLineFontSize(lineNum, int))},
        handlePopEditClose: () => {dispatch(popEditClose())},
        handleLineStyleChange: (e, attr, lineNum) => {dispatch(changeLineStyle(e, attr, lineNum))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineEdit)