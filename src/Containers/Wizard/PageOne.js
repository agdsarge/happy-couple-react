import React, { Component } from 'react'

import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuItem from "@material-ui/core/MenuItem";

import { wizardFormChange } from "../../Redux/Actions/wizard";

class PageOne extends Component {
    render() {
        let formType = 'general'
        return (
            <div className="Wizard-Page">
              <Container>
                <CssBaseline />
                  <TextField
                    id="datetime-local"
                    label="Wedding Date"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    name="weddingDate"
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                    InputLabelProps={{
                        shrink: true,
                      }}
                      />
                  <br />
                  <br />
                  <div className='wiz-section-title'>Couple</div>
                  <TextField required name="partnerOne"
                    id="wiz-email1"
                    label="Enter Partner 1 Email"
                    value={this.props.partnerOne}
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                  />
                  <br />
                  <TextField
                    required name="partnerTwo"
                    id="wiz-email2"
                    label="Enter Partner 2 Email"
                    value={this.props.partnerTwo}
                    onChange={(e) => this.props.handleChangeForm(e, formType)}
                  />
                  <br />
                  <br />
                  Wedding Theme
                  <TextField id="select" name='theme' 
                  label="Choose Wedding Theme" value={this.props.theme} 
                  onChange={(e) => this.props.handleChangeForm(e, formType)} select>
                      <MenuItem value="1">Sunset</MenuItem>
                      <MenuItem value="2">Classic</MenuItem>
                      <MenuItem value="3">Elegant</MenuItem>
                  </TextField>
                  <br />
                  Font Family
                  <TextField id="select" name='fontFamily' 
                  label="Choose a Font" value={this.props.fontFamily} 
                  onChange={(e) => this.props.handleChangeForm(e, formType)} select>
                      <MenuItem value="1">Serif</MenuItem>
                      <MenuItem value="2">Sans Serif</MenuItem>
                      <MenuItem value="3">Times New Roman</MenuItem>
                  </TextField>
              <br />
              <br />
              <TextField
                required name="slug"
                id="wiz-slug"
                label="Enter your personal site url"
                value={this.props.slug}
                onChange={(e) => this.props.handleChangeForm(e, formType)}
              />
              <br />
              <TextField
                required name="registryLink"
                id="wiz-registry"
                label="Enter the registry URL"
                value={this.props.registry}
                onChange={(e) => this.props.handleChangeForm(e, formType)}
              />
              
              </Container>
            </div>
          );
    }
}

const mapStateToProps = (state) => {
    return {
      weddingDate: state.wizard.createWedding.general.weddingDate,
      partnerOne: state.wizard.createWedding.general.partnerOne,
      partnerTwo: state.wizard.createWedding.general.partnerTwo,
      theme: state.wizard.createWedding.general.theme,
      fontFamily: state.wizard.createWedding.general.fontFamily,
      slug: state.wizard.createWedding.general.slug,
      registry: state.wizard.createWedding.general.registryLink
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      handleChangeForm: (e, formType) => {dispatch(wizardFormChange(e, formType))}
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);