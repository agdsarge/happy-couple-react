import React, { Component } from 'react';
import { connect } from 'react-redux';

class Countdown extends Component {

    countTheDays(date) {
        if (date)  {
            let today = Date.parse(new Date())
            let millisecondsLeft= (Date.parse(date) - today)
            let daysLeft =  Math.ceil(millisecondsLeft / (1000 * 60 * 60 * 24))
           
            if (daysLeft > -1) {
                switch (daysLeft) {
                    case 0:
                        return <p>{'Today is the wedding day!'}</p>
                    case 1:
                        return <p>{'Tomorrow is the wedding day!'}</p>
                    case 7:
                        return <p>{'One week until the wedding!'}</p>
                    default:
                        return <p>{`${daysLeft} days until the wedding!`}</p>
                }
            } else {
                return <p>{`The wedding was ${-1 * daysLeft} days ago!`}</p>
            }
            
        } else {
            return null
        }  
    }  

    render() { 
        return (
            <div className='countdown'>
                {this.countTheDays(this.props.weddingDate)}
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