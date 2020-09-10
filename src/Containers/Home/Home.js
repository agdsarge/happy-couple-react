import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import Countdown from '../../Components/Countdown'

class Home extends Component {
    render() {
        return (

            <div>
                < Navbar />
                <p>Hello Couple</p>
                <Countdown />
            </div>
        )
    }
}

export default Home;