import React, { Component } from 'react'

import {connect} from 'react-redux';
import WeddingItem from './WeddingItem';

class WeddingMenu extends Component {
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                <div>
                    <p>Add a wedding</p>
                </div>

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

const mapDispatchToProps = (Dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeddingMenu);