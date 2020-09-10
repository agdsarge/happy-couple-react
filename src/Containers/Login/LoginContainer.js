import React, { Component } from "react";

import Loading from '../../Components/Loading'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Redirect } from "react-router-dom";

import {
  loginFormCleanup,
  loginFormChange,
  loginFormSubmit,
} from "../../Redux/Actions/login";
import { connect } from "react-redux";

import "./LoginContainer.css";

class LoginContainer extends Component {
  componentWillUnmount() {
    this.props.handleCleanup();
  }

  render() {
      // if we are authenticated in state, lets redirct to home
      if (this.props.isLogged) {
        return < Redirect to='/home' />
      }
      if (this.props.loading) {
        return < Loading />
      }
    // what we want is a box in the middle
    // in the box 'header' there are two tabs. the active one is login
    // the inactive tab is register. clicking it is a link to the register form
    // inside the box are two text fields, email and password
    // there is also a submit button'
    return (
      <div className="LoginContainer">
        <p>login form 0.1</p>
        <div className="LoginErrorContainer">
          {this.props.error ? (
            <p style={{ color: "red" }}>{this.props.error}</p>
          ) : null}
        </div>
        <Container>
          <CssBaseline />
          <form onSubmit={(e) => this.props.handleSubmit(e, this.props.form)}>
            <TextField
              required
              name="email"
              id="email"
              label="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
            <br />
            <TextField
              required
              name="password"
              id="password"
              label="password"
              type="password"
              value={this.props.password}
              onChange={this.props.handleChange}
            />
            <br />
            <br />
            <Button type="submit" color="primary" variant="contained">
              Submit!
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.login,
    email: state.login.email,
    password: state.login.password,
    error: state.login.error,
    isLogged: !!state.auth.token,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      dispatch(loginFormChange(e));
    },
    handleSubmit: (e, form) => {
      dispatch(loginFormSubmit(e, form));
    },
    handleCleanup: () => {
      dispatch(loginFormCleanup());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
