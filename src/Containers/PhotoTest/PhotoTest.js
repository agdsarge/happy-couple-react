import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PhotoTest.css';
import {newImageToStore, postImagesToDB} from '../../Redux/Actions/photoTest';
import {API_ROOT} from '../../Constants/index'

class PhotoTest extends Component {

    constructor(props){
        super(props)
        this.state = {
            imageURl: '',
            image: null
        }
        this.handleImageClick = this.handleImageClick.bind(this);
    }


    handleImageClick(){
        fetch(`${API_ROOT}/test`, {
            method: 'GET',
            headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(d =>{ 
      
            this.setState({...this.state, imageURl: d.image_url})   
        })
    }

    onChangeImage = (e) => {
       
        this.setState({...this.state, image: e.target.files[0]})
    }


    componentDidMount() {

    }

    render() {
        return (
            <div className='photoTest'>
                <form onSubmit={(e) => this.props.handleSubmit(e, this.props.w_id, this.state.image)}>
                    <input 
                        type='file'
                        accept='image/*'
                        name='image'
                        onChange={(e) => this.onChangeImage(e)}
                    >
                    </input>
                    < br/>
                    <label>Caption</label>
                    <input name='caption' type='text'></input>
                    <br></br>
                    <input type='submit'></input>
                
                </form>
                <img src={this.state.imageURl} alt='last pic'/>
                <button onClick={this.handleImageClick}>Load last pic</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        w_id: state.weddingDetails.id,
        photo: state.photoTest.image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImageChange: (e) => {dispatch(newImageToStore(e))},
        handleSubmit: (e, id, photo) => dispatch(postImagesToDB(e, id, photo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoTest)
