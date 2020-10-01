import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getWeddingDate } from '../Redux/Actions/weddingDetails'

class Countdown extends Component {

    render() {
        
        function countTheDays(date) {
            if (date)  {
                let today = Date.parse(new Date())
                let millisecondsLeft= (Date.parse(date) - today)
                let daysLeft =  Math.ceil(millisecondsLeft / (1000 * 60 * 60 * 24))
                let mesg
                if (daysLeft > -1) {
                    switch (daysLeft) {
                        case 0:
                            mesg =  'Today is the wedding day!'
                            break;
                        case 1:
                            mesg =  'Tomorrow is the wedding day!'
                            break;
                        case 7:
                            mesg =  '1 week until the wedding!'
                            break;
                        default:
                            mesg =  `${daysLeft} days until the wedding!`
                    }
                } else {
                    mesg = `The wedding was ${daysLeft} days ago!`
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
        weddingDate: state.weddingDetails.wedding_date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown)