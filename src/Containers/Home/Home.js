import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Countdown from '../../Components/Countdown'
import Wizard from '../Wizard/Wizard'
import ToDo from '../ToDo/ToDo'
import Toggle from '../../Components/Toggle'
import ListView from '../ListView/ListView.js'
import IconView from '../IconView/IconView.js'


class Home extends Component {

    selectView() {
        if (this.props.viewToggle.iconView) {
            return <IconView />
        } else {
            return <ListView />
        }
        
    }

    render() {
        return (

            <div>
                < Navbar />
                <p>Hello Couple</p>
                <Toggle />
                {this.selectView()}
                <NavLink to='/guesttest'>GUEST LIST TEST</NavLink>
                < Countdown />
                < Wizard />

                < ToDo />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        viewToggle: state.viewToggle
    }
    
}

export default connect(mapStateToProps)(Home);