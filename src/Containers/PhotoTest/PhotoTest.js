import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PhotoTest.css';
import {newImageToStore, postImagesToDB} from '../../Redux/Actions/photoTest';


class PhotoTest extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='photoTest'>
                <input 
                    type='file'
                    accept='image/*'
                    onChange={this.props.handleImageChange}
                >
                </input>
                <button onClick={(e) => this.props.handleSubmit(this.props.photos)}></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImageChange: (e) => {dispatch(newImageToStore(e))},
        handleSubmit: (photos) => dispatch(postImagesToDB(photos))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoTest)
