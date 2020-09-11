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
            let daysLeft =  Math.ceil(millisecondsLeft / (1000 * 60 * 60 * 24))
            switch (daysLeft) {
                case 0:
                    return 'Today is the wedding day!'
                case 1:
                    return 'Tomorrow is the wedding day!'
                case 7:
                    return '1 week until the wedding!'
                default:
                    return `${daysLeft} days until the wedding!`
            }
        }  
        // should probably make this grammatical.
        // could do fun things like 1 week to go.
        return (     
            <div>
                <p>{countTheDays(this.props.weddingDate)}</p>
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