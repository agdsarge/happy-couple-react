import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import Countdown from '../../Components/Countdown'
import Wizard from '../Wizard/Wizard'
import ToDo from '../ToDo/ToDo'
import Toggle from '../../Components/Toggle'

class Home extends Component {
    render() {
        return (

            <div>
                < Navbar />
                <p>Hello Couple</p>
                <Toggle ></Toggle>
                {/* {this.props.viewToggle ? <ListView /> : <IconView />} */}
                < Countdown />
                < Wizard />

                < ToDo />

            </div>
        )
    }
}

export default Home;