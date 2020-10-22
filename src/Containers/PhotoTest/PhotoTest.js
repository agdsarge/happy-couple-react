import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PhotoTest.css';
import {newImageToStore, postImageToDB} from '../../Redux/Actions/photoTest';
import {API_ROOT} from '../../Constants/index'


class PhotoTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            lastPic: null
        }
    }

    newImageChange(e) {
        this.setState({image: e.target.files[0]})
    }

    newStateClear(e) {
        this.setState({image: null})
    }

    getLastImage() {
        fetch(`${API_ROOT}/test`)
        .then(res => res.json())
        .then(d => {
            console.log(d)
            this.setState({lastPic: d.image})
            console.log(d.mesg)
            console.log(d.image)
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='photoTest'>
                <input 
                    type='file'
                    accept='image/*'
                    name='photo'
                    onChange={this.props.handleImageChange}
                >
                </input>
                <br></br>
                <button onClick={() => this.props.handleSubmit(this.state.image)}>Submit</button>
                <hr />
                <div className='lastPhotoPreview'>
                    <button onClick={() => this.getLastImage()}>GET LAST PHOTO</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photoTest.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImageChange: (e) => {dispatch(newImageToStore(e))},
        handleSubmit: (photo) => dispatch(postImageToDB(photo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoTest)
