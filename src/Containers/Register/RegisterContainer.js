import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {registerFormChange, registerFormCleanup, registerFormSubmit} from '../../Redux/Actions/register'

import Loading from '../../Components/Loading'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';



class RegisterContainer extends Component {
    
    render() {
        if (this.props.isLogged) {
            return < Redirect to='/home' />
        }

        if (this.props.loading) {
            return < Loading />
        }

        return (
            <div> 

                <form onSubmit={(e) => this.props.handleSubmit(e, this.props.form)}>
                    <TextField 
                        required
                        name='first_name'
                        id='first_name'
                        label='first_name'
                        value={this.props.first_name}
                        onChange={this.props.handleChange}
                    />
                    <br />
                    <TextField 
                        required
                        name='last_name'
                        id='last_name'
                        label='last_name'
                        value={this.props.last_name}
                        onChange={this.props.handleChange}
                    />
                    <br />
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
                        name='gender'
                        id='gender'
                        label='gender'
                        value={this.props.gender}
                        onChange={this.props.handleChange}
                    />
                    <br />
                    <TextField 
                        required
                        type='password'
                        name='password'
                        id='password'
                        label='password'
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                    <br /> <br />
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                    >
                        Submit!
                    </Button>

                </form>           
            </div>
        )
    }
 }

const mapStateToProps = (state) => {
    return {
        form: state.register,
        first_name: state.register.first_name,
        last_name: state.register.last_name,
        email: state.register.email,
        gender: state.register.gender,
        password: state.register.password,
        isLogged: !!state.auth.token,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: e => dispatch(registerFormChange(e)),
        handleSubmit: (e, form) => dispatch(registerFormSubmit(e, form)),
        handleCleanup: e => dispatch(registerFormCleanup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)    