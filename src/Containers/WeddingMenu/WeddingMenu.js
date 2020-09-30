import React, { Component } from 'react'

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { setWeddingDetails } from '../../Redux/Actions/weddingDetails';
import WeddingItem from './WeddingItem';
import './WeddingMenu.css';

class WeddingMenu extends Component {

    render() {
        return (
            <div className='WeddingMenu'>
                <Link to={'/planner/new'}>
                    <div className='WeddingItem'>
                        <div></div>
                        <div>
                        <p>+</p>
                        <p>Add a wedding</p>
                        </div>
                        <div></div>
                    </div>
                </Link>

                {this.props.weddings.length > 0 ? 
                this.props.weddings.map( wedding => <div onClick={e => this.props.handleClick(wedding)} >  < WeddingItem wedding={wedding} />  </div>) :
                <div>No weddings</div>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weddings: state.weddings.weddingList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (wedding) => dispatch(setWeddingDetails(wedding))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeddingMenu);