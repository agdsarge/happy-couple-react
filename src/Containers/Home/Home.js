import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import Countdown from '../../Components/Countdown'
import Wizard from '../Wizard/Wizard'
import ToDo from '../ToDo/ToDo'

class Home extends Component {
    render() {
        return (

            <div>
                < Navbar />
                <p>Hello Couple</p>
                < Countdown />
                < Wizard />

                < ToDo />

            </div>
        )
    }
}

export default Home;