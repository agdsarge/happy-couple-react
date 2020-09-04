import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline';
import {loginFormCleanup, loginFormChange, loginFormSubmit } from '../../Redux/Actions/login'
import {connect} from 'react-redux'

import './LoginContainer.css'

class LoginContainer extends Component {

    componentWillUnmount() {
        this.props.handleCleanup()
    }

    render() {
        // what we want is a box in the middle
        // in the box 'header' there are two tabs. the active one is login
        // the inactive tab is register. clicking it is a link to the register form
        // inside the box are two text fields, email and password
        // there is also a submit button
        return (
            <div className='LoginContainer'>

                <p>login form 0.1</p>
                <Container >
                    <CssBaseline />
                    <form onSubmit={this.props.handleSubmit}>
                        <TextField
                            required
                            name='email'
                            id='email'
                            label='email'
                            value={this.props.email}
                            onChange={this.props.handleChange}
                        />
                        <br />
                        <TextField
                            required
                            name='password'
                            id='password'
                            label='password'
                            type='password'
                            value={this.props.password}
                            onChange={this.props.handleChange}
                        />
                        <br />
                        <br />
                        <Button
                            type='submit'
                            color='primary'
                            variant='contained'
                        >
                        Submit!
                        </Button>
                    </form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        password: state.login.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: e => {dispatch(loginFormChange(e))},
        handleSubmit: e => {dispatch(loginFormSubmit(e))},
        handleCleanup: () => {dispatch(loginFormCleanup())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
