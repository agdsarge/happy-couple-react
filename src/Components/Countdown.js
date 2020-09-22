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
            if (date)  {
                let today = Date.parse(new Date())
                let millisecondsLeft= (Date.parse(date) - today)
                let daysLeft =  Math.ceil(millisecondsLeft / (1000 * 60 * 60 * 24))
                let mesg
                switch (daysLeft) {
                    case 0:
                        mesg =  'Today is the wedding day!'
                    case 1:
                        mesg =  'Tomorrow is the wedding day!'
                    case 7:
                        mesg =  '1 week until the wedding!'
                    default:
                        mesg =  `${daysLeft} days until the wedding!`
                }
                return <p> {mesg} </p>
            } else {
                return null
            }  
        }  
        
        return (
            <div>
                {countTheDays(this.props.weddingDate)}
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