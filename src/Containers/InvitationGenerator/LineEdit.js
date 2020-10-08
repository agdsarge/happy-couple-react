import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLineStyle } from '../../Redux/Actions/invitationGenerator';
import Button from '@material-ui/core/Button';


class LineEdit extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='lineEdit'>
                <Button onClick={(e) => this.props.handleIncreaseFont(e, this.props.lineNum)}>+</Button>
                <Button>-</Button>
                <select>
                    <option>Script</option>
                    <option>Sans Serif</option>
                    <option>Serif</option>
                </select>
                <select>
                    <option>Black</option>
                    <option>Gold</option>
                    <option>Red</option>
                    <option>Custom</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lineNum: state.invitationGenerator.popover.lineNumber,
        editor: state.invitationGenerator.editor,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncreaseFont: (e, lineNum) => {dispatch(changeLineStyle(e, lineNum))},
        handleDecreaseFont: (e, lineNum) => {dispatch(changeLineStyle(e, lineNum))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineEdit)
