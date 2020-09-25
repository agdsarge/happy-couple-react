import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Splash.css'

class Splash extends Component {
    render() {
        return (
            <div className='splash-div'>
                <h1> Happy Couple</h1>
                <h2> a site for wedding plans</h2>
                <h3><NavLink to='/login' > Sign in</NavLink> or <NavLink to='/register' >Register</NavLink></h3>
            </div>
        )
    }
}

export default Splash