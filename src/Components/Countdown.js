import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeddingDate } from '../Redux/Actions/weddingDetails'

import {API_ROOT} from '../Constants';

class Countdown extends Component {
    componentDidMount() {
        this.props.getWeddingDate()
    }
    render() {
        
        function countTheDays(date) {
            let today = Date.parse(new Date())
            let millisecondsLeft= (Date.parse(date) - today)
            return Math.floor(millisecondsLeft / (1000 * 60 * 60 * 24))
        }  

        return (     
            <div>
                <p>{countTheDays(this.props.weddingDate)} days to go!</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
        weddingDate: state.weddingDetails.date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeddingDate: () => {
            dispatch(getWeddingDate())
        }
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown)