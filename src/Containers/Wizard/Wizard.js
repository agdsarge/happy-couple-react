import React, { Component } from "react";

import { connect } from "react-redux";

import {
  wizardCleanup,
  wizardPageChange,
  wizardSubmit,
} from "../../Redux/Actions/wizard";

import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

import "./Wizard.css";

class Wizard extends Component {
  componentWillUnmount() {
    this.props.handleCleanup();
  }

  render() {
    return (
      <div className="Wizard">
        <form>
          {this.props.page === 1
            ? < PageOne />
            : this.props.page === 2
            ? < PageTwo />
            : < PageThree /> }
        </form>
        <div className="Wizard-control-panel">
          {this.props.page > 1 ? (
            <div
              className="wiz-directional-button"
              onClick={() => {
                this.props.handleChangePage(-1);
              }}
            >
              Prev
            </div>
          ) : (
            <div> </div>
          )}
          {this.props.page === this.props.pageCount ? (
            <div
              className="wiz-submit-button"
              onClick={(e) => this.props.handleSubmit(e, this.props.form)}
            >
              Submit
            </div>
          ) : (
            <div> </div>
          )}
          {this.props.page < this.props.pageCount ? (
            <div
              className="wiz-directional-button"
              onClick={() => {
                this.props.handleChangePage(1);
              }}
            >
              Next
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.wizard.page,
    pageCount: state.wizard.totalPages,
    form: state.wizard.createWedding
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangePage: (value) => {
      dispatch(wizardPageChange(value));
    },
    handleSubmit: (e, form) => {dispatch(wizardSubmit(e, form))},
    handleCleanup: () => {
      dispatch(wizardCleanup());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
