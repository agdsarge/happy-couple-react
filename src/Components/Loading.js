import React, { Component } from 'react'

import './Loading.css'

class Loading extends Component {
    render() {
        return (
            <div className='Loading-container '>
            <div className='Loading-wrapper'>
                <div className='Loading-heart' id='lh1'>
                </div>
                <div className='Loading-heart' id='lh2'>
                </div>
                <div className='Loading-heart' id='lh3'>
                </div>
                <div className='Loading-heart' id='lh4'>
                </div>
            </div>
        </div>
        )
    }
}

export default Loading;
