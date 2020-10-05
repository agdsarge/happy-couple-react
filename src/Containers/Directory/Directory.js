import React, { Component } from 'react'

import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'

import WeddingPresentation from '../WeddingPresentation/WeddingPresentation';


class Directory extends Component {
    render() {
        return (

            <div>
                <Switch>
                    <Route exact path='/wedding/:slug' render={ (props) => < WeddingPresentation routeProps={props} /> } />
                </Switch>
            </div>
        )
    }
}

export default connect()(Directory);