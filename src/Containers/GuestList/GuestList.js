import React, { Component } from 'react'
import {connect} from 'react-redux'
import './GuestList.css'
import Button from '@material-ui/core/Button';



class GuestList extends Component {
    render() {
        return (
            <div className='GuestListForm'>
                <Button variant='contained' color='primary'> Import xls!</Button>
                <p>Doesn't work yet!</p>
                <h3>FORM FOR TYPING IT IN YOURSELF, LIKE A BARBARIAN</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList)