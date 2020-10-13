import React, { Component } from 'react'

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { setWeddingDetails } from '../../Redux/Actions/weddingDetails';
import { toggleWeddingMenu } from '../../Redux/Actions/weddings';
import WeddingItem from './WeddingItem';
import './WeddingMenu.css';

class WeddingMenu extends Component {

    renderList(string, array){
        return(
            <div>
                {array.length > 0 ? 
                    array.sort((a, b) => a.wedding.wedding_date > b.wedding.wedding_date ? 1 : -1).map( wedding => <div key={wedding.wedding.id} onClick={() => this.props.handleClick(wedding)} >  < WeddingItem wedding={wedding} key={wedding.wedding.id} />  </div>) :
                    <div>{`No ${string} weddings`}</div>
                    }
            </div>
        )
    }

    render() {
        let upcoming = [];
        let past = [];
        const date = new Date();

        if (this.props.weddings.length > 0) {
            upcoming = this.props.weddings.filter( w => new Date(w.wedding.wedding_date) >= date)
            past = this.props.weddings.filter( w => new Date(w.wedding.wedding_date) < date)
            }
        return (
            <div className='WeddingMenu'>
                <div className='WeddingRow'>
                    <div className='WeddingButton'>
                        <Link to={'/planner/new'}>
                            <div></div>
                            <div>
                                <p>+</p>
                                <p>Add a wedding</p>
                            </div>
                            <div></div>
                        </Link>
                    </div>
                <div className='WeddingButton' onClick={() => this.props.changeMenu(1)}>Upcoming Weddings
                    <p>{upcoming.length}</p>
                </div>
                <div className='WeddingButton' onClick={() => this.props.changeMenu(2)}>Past Weddings
                    <p>{past.length}</p>
                </div>
                </div>

                {this.props.showUpcoming ? 
                this.renderList("upcoming", upcoming) :
                this.renderList("past", past)
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weddings: state.weddings.weddingList,
        showUpcoming: state.weddings.showUpcoming
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (wedding) => dispatch(setWeddingDetails(wedding)),
        changeMenu: (value) => dispatch(toggleWeddingMenu(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeddingMenu);