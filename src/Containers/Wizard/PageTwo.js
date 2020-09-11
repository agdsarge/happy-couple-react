import React, { Component } from 'react'

import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import { wizardFormChange } from "../../Redux/Actions/wizard";


class PageTwo extends Component {
    render() {
      let formType = "ceremony" 
        return (
            <div className="Wizard-Page">
              <Container>
                <CssBaseline />
                <br />
                  <div className='wiz-section-title'>Ceremony</div>
                  <TextField required name="venueName"
                    id="wiz-rec-venueName"
                    label="Enter the Venue's Name"
                    value={this.props.venueName}
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                  />
                  <br />
                  <TextField required name="venueStreet"
                    id="wiz-rec-venueStreet"
                    label="Enter the Venue's Street Address"
                    value={this.props.venueStreet}
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                  />
                  <br />
                  <TextField required name="venueCity"
                    id="wiz-rec-venueCity"
                    label="Enter the Venue's City"
                    value={this.props.venueCity}
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                  />
                  <br />
                  <TextField required name="venueState"
                    id="wiz-rec-venueState"
                    label="Enter the Venue's State"
                    value={this.props.venueState}
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                  />
                  <br />
                  <TextField required name="venueCountry"
                    id="wiz-rec-venueCountry"
                    label="Enter the Venue's Country"
                    value={this.props.venueCountry}
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                  />
                  <br />
                  <TextField required name="venueZipCode"
                    id="wiz-rec-venueZipCode"
                    label="Enter the Venue's Zip Code"
                    value={this.props.venueZipCode}
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                  />
                  
                  <br />
                  <br />
              </Container>
            </div>
          );
    }
}

const mapStateToProps = (state) => {
  return {
    venueName: state.wizard.createWedding.ceremony.venueName, 
    venueStreet: state.wizard.createWedding.ceremony.venueStreet, 
    venueCity: state.wizard.createWedding.ceremony.venueCity, 
    venueState: state.wizard.createWedding.ceremony.venueState, 
    venueCountry: state.wizard.createWedding.ceremony.venueCountry, 
    venueZipCode: state.wizard.createWedding.ceremony.venueZipCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeForm: (e, formType) => {dispatch(wizardFormChange(e, formType))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);