import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchGuestList, incrementPage, decrementPage, reverseOrder, newSelector, changeNumEntry} from '../../Redux/Actions/guestList'
import {SMALL_BUTTON} from '../../Constants/index.js';
import InvitedRow from './InvitedRow'
import './Guest.css'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const BACK = '<-'
const FORWARD = '->'

const camelTranslation = {
    idNum: 'id',
    firstName: 'first_name',
    lastName: 'last_name',
    email: 'email',
    role: 'role'
}

// const optionDict = {
//     firstName: ''
// }

class InvitedGuests extends Component {
    componentDidMount() {
        this.props.fetchGuestList(this.props.weddingID)
    }

    sort_by_property(arr) {
        let selector = this.props.sortSelection
        for (let key in selector) {
            if (selector[key].selected) {
                let snake_key = camelTranslation[key]
                arr.sort((a,b) => {
                    let ans
                    if (a[snake_key] < b[snake_key]) {
                        ans = -1
                    } else if (b[snake_key] < a[snake_key]) {
                        ans = 1
                    } else {
                        ans = 0
                    }
                    return selector[key].ascending * ans
                })
                return arr
            }
        } 
    }

    sortButtons() {
        const options = ['firstName', 'lastName', 'email']
        return options.map(opt => {
            return (
                <ButtonGroup>
                    <Button {...SMALL_BUTTON} onClick={(e) => this.props.handleSelector(opt)}> {camelTranslation[opt]}</Button>
                    <Button {...SMALL_BUTTON} onClick={(e) => this.props.handleReverse(opt)}>ASC/DESC</Button>
                </ButtonGroup>
            )
        })
    }

    render() {
        let entireList = this.sort_by_property(this.props.guestList)
       
        let low = this.props.currentPage * this.props.numEntries
        let high = low + this.props.numEntries
        // new class here for good CSS and easier conversion to stuff
        let selection = entireList
                            .slice(low, high)
                            .map(g => <InvitedRow key={g.id} guest={g}/> )
        
        return (
            <div className='paginator'>
                <div className='navButtons'>
                    <Button onClick={this.props.decrementPage} color='primary' size='small' > {BACK} </Button>
                    <span style={{width: '70%'}}>{this.props.currentPage}</span>
                    <Button onClick={this.props.incrementPage} color='primary' size='small' > {FORWARD} </Button>
                </div>
                <div className='sortButtons'>
                    {this.sortButtons()}
                </div>
                <table className='invitedTable'>
                    {selection}                    
                </table>

                <label htmlFor="numRows">Number of Rows: </label>
                <select name="numRows" id="numRows" onChange={(e) => this.props.handleChangeNumEntry(e)}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weddingID: state.weddingDetails.id,
        guestList: state.guestList.guestList,
        currentPage: state.guestList.paginator.currentPage,
        numEntries: state.guestList.paginator.entriesPerPage,
        sortSelection: state.guestList.paginator.sortSelection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGuestList: (id) => {dispatch(fetchGuestList(id))},
        incrementPage: (e) => {dispatch(incrementPage())},
        decrementPage: (e) => {dispatch(decrementPage())},
        handleReverse: (str) => {dispatch(reverseOrder(str))},
        handleSelector: (str) => {dispatch(newSelector(str))},
        handleChangeNumEntry: (e) => {dispatch(changeNumEntry(e))}
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(InvitedGuests)