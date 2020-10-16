import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInvitationTone, changeLineText, popEditOpen, popEditClose, submitInvitation, fetchInvitation, patchInvitation} from '../../Redux/Actions/invitationGenerator';
import {SMALL_BUTTON} from '../../Constants/index';
import './InvitationGenerator.css';
import {Button, TextField} from '@material-ui/core';
import LineEdit from './LineEdit';


// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// const dates = [
//     null, 'first', 'second', 'third', 'fourth', 
//     'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 
//     'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 
//     'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 
//     'twentieth', 'twenty-first', 'twenty-second', 'twenty-third', 'twenty-fourth', 
//     'twenty-fifth', 'twenty-sixth', 'twenty-seventh', 'twenty-eighth', 'twenty-ninth', 
//     'thirtieth', 'thirty-first'
// ]

// const invitations = {
//     trad: "Mr. and Mrs. Lastname\nrequest the honor of your presence\nat the marriage of their daughter\nFIRSTNAME_BRIDE\nto\nFIRSTNAME_GROOM\nat\nWEDDING_LOCATION\non\nWEDDING_DATE.\nThe favor of a reply is requested.\n\n\nSLUG",
//     contemp: "FIRSTNAME_BRIDE\nand\nFIRSTNAME_GROOM\ninvite you to the\ncelebration of their wedding!\nWEDDING_DATE\nat\nWEDDING_LOCATION.\nCome ready to dine and dance the night away!\nPlease RSVP!\n\n\nSLUG",
//     fun: "You're invited! Join us on\nWEDDING_DATE\nat\nWEDDING to celebrate FIRSTNAME_BRIDE\nand\nFIRSTNAME_GROOM\nas they begin a new life together!\nSee you there!\n\n\nSLUG",
//     manners: "The honour of your presence\nis requested at the marriave of FIRSTNAME_BRIDE\nto\nFIRSTNAME_GROOM\non WEDDING_DATE\nWEDDING_LOCATION\nand at a reception following the ceremeony\nRECEPTION_VENUE.\nPlease respond\n\n\nSLUG"
// }

// TODO:
// have a way to write a default invitation
// 'print' the preview. (open in a new tab and open the print dialogue)

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

class InvitationGenerator extends Component {
    componentDidMount() {
        this.props.handleFetch(this.props.weddingID)
    }

    formLines(ary) {
        return ary.map(int => {
            if (this.props.popEdit.lineNumber === int) {
                return ( <LineEdit key={int} />)
            } else {
                return (    
                    <div key={int}>
                        <TextField 
                            style={{marginLeft: '20px', marginRight: '20px', width: '300px'}}
                            value={this.props.editor[int].text} 
                            onChange={(e) => this.props.handleLineTextChange(e, int)}
                        />
                        <Button variant='contained' color='primary' size='small' onClick={(e) => this.props.handlePopEditOpen(int) }>edit font</Button>                    
                    </div>
                )
            }
        })
    }

    previewLines(ary) {
        return ary.map(int => {
            if (this.props.editor[int].text) {
                return (
                <div key={int} className={`line${int}`}
                    style={{...this.props.inviteStyle, ...this.props.editor[int].lineStyle}}
                >
                    {this.props.editor[int].text}
                </div>)
            } else {
                return (<div key={int} >{' '}</div>)
            }
        })
    }

    render() {
        return (
            <div className='invitationGenerator'>
                <p>Invitations are your personal way to get people to come to the wedding.</p>
                <p>How you address it is up to you, but here are three options.</p>
                <p>You can customize this as you see fit!</p>

                <select name='style' id='style' value={this.props.inviteTone} onChange={(e) => this.props.handleToneChange(e)}>
                    <option></option>
                    <option>Traditional</option>
                    <option>Contemporary</option>
                    <option>Fun</option>
                </select>
                <div className='container'>
                    <div className='invitationForm' style={{float: 'left', width: '480px'}}>
                        {this.formLines(arr)}
                        {this.props.post ? 
                            <Button {...SMALL_BUTTON}
                                onClick={(e) => this.props.handleSubmit(e, this.props.inviteStyle, this.props.editor, this.props.weddingID)}
                            >
                                submit
                            </Button>
                                :
                            <Button {...SMALL_BUTTON}
                                onClick={(e) => this.props.handlePatch(e, this.props.inviteStyle, this.props.editor, this.props.weddingID)}
                            >
                                edit
                            </Button>
                        }    
                    </div>
                    
                    <div className="invitationPreview" style={this.props.inviteStyle}>
                        {this.previewLines(arr)}
                    </div>
                </div>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weddingID: state.weddingDetails.id,
        weddingDate: state.weddingDetails.wedding_date,
        inviteTone: state.invitationGenerator.tone,
        inviteStyle: state.invitationGenerator.style,
        editor: state.invitationGenerator.editor,
        popEdit: state.invitationGenerator.popEdit,
        post: state.invitationGenerator.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFetch: (wedID) => {dispatch(fetchInvitation(wedID))},
        handleToneChange: (e) => {dispatch(changeInvitationTone(e))},
        handleLineTextChange: (e, lineNum) => {dispatch(changeLineText(e, lineNum))},
        handlePopEditClose: () => {dispatch(popEditClose())},
        handlePopEditOpen: (lineNum) => {dispatch(popEditOpen(lineNum))},
        handleSubmit: (e, style, ed, id) => {dispatch(submitInvitation(e, style, ed, id))},
        handlePatch: (e, style, ed, id) => {dispatch(patchInvitation(e, style, ed, id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitationGenerator)