import React, { Component } from 'react'

import {connect} from 'react-redux'

class Registry extends Component {
    render() {
        return (
            <div>
                Registry
            </div>
        )
    }
}
export default connect()(Registry);