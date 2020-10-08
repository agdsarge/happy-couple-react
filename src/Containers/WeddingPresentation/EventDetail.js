import React, { Component } from 'react'
import styleMap from '../../Constants/styleMap'

class EventDetail extends Component {
    render() {
        return (
            <div style={styleMap("primary", this.props.theme)}>
                General Info
            </div>
        )
    }
}
export default EventDetail;