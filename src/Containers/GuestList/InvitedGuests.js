import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchGuestList, incrementPage, decrementPage, reverseOrder, newSelector} from '../../Redux/Actions/guestList'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const ALPH = 'A'.charCodeAt()
const ZED = 'Z'.charCodeAt()
const camelDict = {
    idNum: 'id',
    firstName: 'first_name',
    lastName: 'last_name',
    email: 'email',
    role: 'role'
}

class InvitedGuests extends Component {
    componentDidMount() {
        this.props.fetchGuestList(this.props.weddingID)
    }

    // camelToSnake(str) { commented for posterity
    //     //camelCase => camel_case
    //     //might be faster to do a dict :-)
        
    //     if (str === 'idNum') return 'id'
    //     let strArr = str.split('')
    //     for (let i = 0; i < strArr.length; i++) {
    //         let code = strArr[i].charCodeAt()
    //         if (ALPH <= code && code <= ZED ) {
    //             strArr[i] = '_' + strArr[i].toLowerCase()
    //         }
    //     }
    //     return strArr.join('')
    // }

    sort_by_property(arr) {
        let selector = this.props.sortSelection
        for (let key in selector) {
            if (selector[key].selected) {
                let snake_key = camelDict[key]
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

    render() {
        let entireList = this.sort_by_property(this.props.guestList)

        entireList = entireList.map(g => <div key={g.id}> {g.first_name} {g.last_name} {g.email} {g.role}</div>)
       
        let low = this.props.currentPage * this.props.numEntries
        let high = low + this.props.numEntries
        let selection = entireList.slice(low, high)

        const BACK = '<-'
        const FORWARD = '->'
        return (
            <div className='paginator'>
                <div>
                <Button onClick={this.props.decrementPage} color='primary' > {BACK} </Button>
                <span style={{width: '70%'}}>{this.props.currentPage}</span>
                <Button onClick={this.props.incrementPage} color='primary' > {FORWARD} </Button>
                </div>
                <ButtonGroup>
                    <Button color='primary' onClick={(e) => this.props.handleSelector('idNum')} > ENTRY </Button>
                    <Button color='primary' onClick={(e) => this.props.handleReverse('idNum')} >ASC/DESC</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color='primary' onClick={(e) => this.props.handleSelector('firstName')} > FIRST NAME </Button>
                    <Button color='primary' onClick={(e) => this.props.handleReverse('firstName')} >ASC/DESC</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color='primary' onClick={(e) => this.props.handleSelector('lastName')} > LAST NAME </Button>
                    <Button color='primary' onClick={(e) => this.props.handleReverse('lastName')} >ASC/DESC</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color='primary' onClick={(e) => this.props.handleSelector('email')} > EMAIL </Button>
                    <Button color='primary' onClick={(e) => this.props.handleReverse('email')} >ASC/DESC</Button>
                </ButtonGroup>
                
                <div>
                    {selection}
                </div>
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
        handleSelector: (str) => {dispatch(newSelector(str))}
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(InvitedGuests)