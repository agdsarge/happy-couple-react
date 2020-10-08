import React, { Component } from 'react'

import {connect} from 'react-redux'
import {changeView} from '../../Redux/Actions/weddingPresentation'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class NavigationMenu extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                <Tabs centered aria-label="simple tabs example">
                    <Tab onClick={()=>this.props.handleChange("1")} label="Home"  />
                    <Tab onClick={()=>this.props.handleChange("2")} label="Accommodations"  />
                    <Tab onClick={()=>this.props.handleChange("3")} label="RSVP" />
                    <Tab onClick={()=>this.props.handleChange("4")} label="Wedding Party"  />
                    <Tab onClick={()=>this.props.handleChange("5")} label="Photos"  />
                    <Tab onClick={()=>this.props.handleChange("6")} label="Registry" />
                </Tabs>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view: state.weddingPresentation.view
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => {dispatch(changeView(value))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);