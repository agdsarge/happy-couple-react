import React, { Component } from 'react';
import { connect } from 'react-redux';
import {API_ROOT} from '../Constants'

class Countdown extends Component {
    componentDidMount() {
        console.log("COUNTDOWN ID", this.props.id)
        fetch(`${API_ROOT}/date/${this.props.id}`)
        .then(r => r.json())
        // .then(dispatch action to set date)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.token,
        weddingDate: state.weddingDetails.date
    }
}

export default connect(mapStateToProps)(Countdown)