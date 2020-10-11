import React, { Component } from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux'
import {rsvpCleanup, rsvpEmailSubmit, rsvpSubmit, rsvpEmailChange, rsvpChange} from '../../Redux/Actions/rsvp'
class RSVP extends Component {
    componentWillUnmount(){
        this.props.cleanup()
    }


    renderReplyForm(){
        return (
            <div className='WeddingPresentation-RSVP-Reply'>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Will you be attending the wedding?</FormLabel>
                        <RadioGroup aria-label="rsvp" name="rsvpchoice" value={this.props.value} onChange={this.props.handleRsvpChange}>
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                </FormControl>
                { (this.props.value === "")
                ? < Button disabled variant="contained" color="primary">Submit</Button>
                : < Button onClick={() => this.props.handleRsvpSubmit(this.props.w_id, this.props.value)} variant="contained" color="primary">Submit</Button>
                 }
        </div>)
    }

    renderIsAttending(){
        return (
            <div>
                <p>Thank you for confirming your attendance! </p>
                <p> the wedding is on "date" </p> 
                <p> Please feel free to check out the photo gallery and <a href={`http://www.${this.props.registry}`}>registry</a></p>
            </div>)
    }
    renderIsNotAttending(){
        return (
            <div>
                <p>Sorry, to see that you cannot make the wedding. </p>
                <p> Please feel free to check out the photo gallery!</p>
            </div>)
    }
    renderError(){
        return (
            <div>
                <p>Error! Sorry, there seems to have been a problem with your request. </p>
            </div>)
    }

    renderRequestForm(){
        return (<div className='WeddingPresentation-RSVP-Request'>
            <label>Please enter your email: </label>
            <input name='email' value={this.props.email} onChange={this.props.handleChange} ></input>
            { (this.props.email === "")
                ? < Button disabled variant="contained" color="primary">RSVP</Button>
                : < Button onClick={() => this.props.handleEmailSubmit(this.props.w_id, this.props.email)} variant="contained" color="primary">RSVP</Button>
            }
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
                        (this.props.isAttending === 0) ? 
                        this.renderError() :
                        (this.props.isAttending === 1) ? 
                        this.renderReplyForm() :
                        (this.props.isAttending === 2) ? 
                        this.renderIsAttending() :
                        this.renderIsNotAttending() }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registry: state.weddingPresentation.wedding.registry_link,
        value: state.rsvp.rsvpchoice,
        email: state.rsvp.email,
        isAttending: state.rsvp.attending_status,
        w_id: state.weddingPresentation.wedding.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRsvpSubmit: (id, attending_status) => {dispatch(rsvpSubmit(id, attending_status))},
        handleEmailSubmit: (id, email) => {dispatch(rsvpEmailSubmit(id, email))},
        handleRsvpChange: (e) => {dispatch(rsvpChange(e))},
        handleChange: (e) => {dispatch(rsvpEmailChange(e))},
        cleanup: () => {dispatch(rsvpCleanup())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RSVP);