import React, { Component } from 'react'

import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'


import Navbar from '../../Components/Navbar'
import Menu from '../WeddingMenu/WeddingMenu'
import Wizard from '../Wizard/Wizard';
import Wedding from '../Wedding/Wedding';


class Home extends Component {


    render() {
        return (

            <div>
                < Navbar />
                <Switch>
                    <Route exact path='/planner' render={ () => < Menu /> } />
                    <Route path='/planner/new' render={() =>  < Wizard /> } />
                    <Route exact path='/planner/:id' render={ (props) => < Wedding routeProps={props} /> } />

                </Switch>
            
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