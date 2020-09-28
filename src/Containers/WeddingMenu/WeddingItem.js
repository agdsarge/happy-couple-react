import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import './WeddingMenu.css'

class WeddingItem extends Component {
    render() {
        return (
            <Link to={`/planner/${this.props.wedding.wedding.id}`}>
                <div className='WeddingItem' >
                    <div>
                        <p>Wedding</p>
                        <p>{this.props.wedding.wedding.id}</p>
                    </div>
                    <div>
                        <p>Wedding Date</p> 
                        <p>{this.props.wedding.wedding.wedding_date}</p>
                    </div>
                    <div>
                        <p>You are {this.props.wedding.is_admin ? "the admin" : "a guest"}</p>
                    </div>    
                </div>
            </Link>
        )
    }
}
export default WeddingItem;