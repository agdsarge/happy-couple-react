import React, { Component } from 'react'

import {connect} from 'react-redux'

import Countdown from '../../Components/Countdown'

class Headline extends Component {

    formatDate(date){
        let d = new Date(date);
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    }

    render() {
        return (
            <div>
                <h2>Our Wedding</h2>
                <h1>Bob and Sally</h1>
                <p>{this.formatDate(this.props.date)}</p>
                <p>Countdown!</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.weddingPresentation.wedding.wedding_date
    }
}

export default connect(mapStateToProps)(Headline);