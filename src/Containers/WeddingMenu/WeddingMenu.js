import React, { Component } from 'react'

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import WeddingItem from './WeddingItem';
import './WeddingMenu.css';

class WeddingMenu extends Component {
    componentDidMount(){
        
    }
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
                this.props.weddings.map( wedding => < WeddingItem wedding={wedding} /> ) :
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeddingMenu);