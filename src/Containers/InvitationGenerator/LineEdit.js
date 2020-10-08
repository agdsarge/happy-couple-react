import React, { Component } from 'react';
import { connect } from 'react-redux';

class LineEdit extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='lineEdit'>
                HELLO WORLD!
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lineNum: state.invitationGenerator.popover.lineNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineEdit)
