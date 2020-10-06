import React, { Component } from 'react'

import {connect} from 'react-redux'
import {rsvpCleanup, rsvpEmailChange} from '../../Redux/Actions/rsvp'
class RSVP extends Component {
    componentWillUnmount(){
        this.props.cleanup()
    }

    renderRequestForm(){
        return (<div>
            <label>Please enter your email: </label>
            <input name='email' value={this.props.email} onChange={this.props.handleChange} ></input>
            <button>RSVP</button>
        </div>)
    }
    
    renderNotFound(){
        return (
        <div>
            <p>Sorry, we could not find your invitation to this wedding!</p>
        </div>)
    }

    render() {
        return (
            <div className='WeddingPresentation-RSVP'>
                
                    { (this.props.isAttending === undefined) ? 
                        this.renderRequestForm() :
                        (this.props.isAttending === null) ? 
                        this.renderNotFound() :
                        <div> hi</div>
                    }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.rsvp.email,
        isAttending: state.rsvp.attending_status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => {dispatch(rsvpEmailChange(e))},
        cleanup: () => {dispatch(rsvpCleanup())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RSVP);