import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchGuestList} from '../../Redux/Actions/guestList'

class InvitedGuests extends Component {
    componentDidMount() {
        this.props.fetchGuestList(this.props.weddingID)
    }

    populateList() {
        return this.props.guestList.map(g => <div key={g.id}> {g.first_name} </div>)
    }

    render() {
        return (
            <div>
                {this.populateList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weddingID: state.weddingDetails.id,
        guestList: state.guestList.guestList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGuestList: (id) => {dispatch(fetchGuestList(id))}
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(InvitedGuests)