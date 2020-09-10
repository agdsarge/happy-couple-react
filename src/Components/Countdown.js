import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weddingDate } from '../Redux/Actions/weddingDetails'

import {API_ROOT} from '../Constants';

class Countdown extends Component {
    componentDidMount() {
        console.log(this.props.getWeddingDate)
        this.props.getWeddingDate()
    }
    render() {
        return (
            <div>
                <p> this is a countdown </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // id: state.auth.token,
        weddingDate: state.weddingDetails.date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeddingDate: () => {
            dispatch(weddingDate())
        }
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown)