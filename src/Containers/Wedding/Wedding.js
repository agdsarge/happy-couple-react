import React, { Component } from 'react'

import {connect} from 'react-redux'

import {NavLink} from 'react-router-dom'

import Countdown from '../../Components/Countdown'

import Toggle from '../../Components/Toggle'
import ListView from '../ListView/ListView.js'
import IconView from '../IconView/IconView.js'

class Wedding extends Component {

    selectView() {
        if (this.props.viewToggle.iconView) {
            return <IconView wedding_id={this.props.routeProps.match.params.id}/>
        } else {
            return <ListView wedding_id={this.props.routeProps.match.params.id}/>
        }
        
    }

    render() {
        return (
            <div>
                < Countdown />
                < Toggle />
                <NavLink to='/guesttest'>GUEST LIST TEST</NavLink>
                {this.selectView()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        viewToggle: state.viewToggle
    }
    
}

export default connect(mapStateToProps)(Wedding);