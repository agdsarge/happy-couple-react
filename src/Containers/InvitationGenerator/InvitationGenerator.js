import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInvitationStyle } from '../../Redux/Actions/invitationGenerator';
import './InvitationGenerator.css';

const dayDict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const tradInvite = "Mr. and Mrs. Lastname\n request the honor of your presence\n at the marriage of their daughter\nFIRSTNAME_BRIDE\nto\nFIRSTNAME_GROOM\nat\nWEDDING_LOCATION\non\nWEDDING_DATE.\nThe favor of a reply is requested.\n\n\nSLUG"

class InvitationGenerator extends Component {

    componentDidMount() {

    }

    render() {
        let dateObj = new Date(this.props.weddingDate)
        let dayOfWeek = dayDict[dateObj.getDay()]

        return (
            <div className='invitationGenerator'>
                <h2>Welcome to the Invitation Generator!</h2>
                <p>Invitations are your personal way to get people to come to the wedding.</p>
                <p>How you address it is up to you, but here are three options.</p>
                <p>You can customize this as you see fit!</p>

                <select name='style' id='style' value={this.props.inviteStyle} onChange={(e) => this.props.handleStyleChange(e)}>
                    <option>Traditional</option>
                    <option>Contemporary</option>
                    <option>Fun!</option>
                </select>
                <div>
                    THE WEDDING WILL BE ON A {dayOfWeek}
                    <div style={{whiteSpace: 'pre-wrap'}}>
                        {(this.props.inviteStyle === 'Traditional') ? tradInvite : null}
                    </div>
                    
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weddingDate: state.weddingDetails.wedding_date,
        inviteStyle: state.invitationGenerator.style
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleStyleChange: (e) => {dispatch(changeInvitationStyle(e))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitationGenerator)
