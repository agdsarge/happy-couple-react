import React, { Component } from 'react'
import {connect} from 'react-redux'
import RegisterContainer from '../Register/RegisterContainer'
import LoginContainer from '../Login/LoginContainer'
import Loading from '../../Components/Loading'
import { NavLink } from 'react-router-dom'
import './SignIn.css'

class SignIn extends Component {
    render() {
        if (this.props.loading) return <Loading />

        return (
            <div className='signIn'>
                <div className='header'>
                    <span className='loginLink'><NavLink to='/login' > LOGIN </NavLink></span>
                    <span className='registerLink'><NavLink to='/register' > REGISTER </NavLink></span>    
                </div>
                {this.props.logIn ? <LoginContainer/> : <RegisterContainer/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: !!state.auth.token,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps)(SignIn)