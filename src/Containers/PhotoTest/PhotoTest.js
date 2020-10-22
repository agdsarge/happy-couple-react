import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PhotoTest.css';
import {newImageToStore, postImagesToDB} from '../../Redux/Actions/photoTest';
import {API_ROOT} from '../../Constants/index'

//https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa


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

    constructor(props){
        super(props)
        this.state = {
            imageURl: '',
            images: [],
            imageSources: [],
            captions: []
        }
        this.handleImageClick = this.handleImageClick.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
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
        const imgArr = [...this.state.images]
        const urlArr = [...this.state.imageSources]
        const captionArr = [...this.state.captions]
        for (let i = 0; i < e.target.files.length; i++) {
            imgArr.push(e.target.files[i])
            urlArr.push(URL.createObjectURL(e.target.files[i]))
            captionArr.push('')
        }
        this.setState({...this.state, images: imgArr, imageSources: urlArr, captions: captionArr})
        
    }

    onChangeCaption(e, ind) {
        this.setState({...this.state, captions: {...this.state.captions, [ind]: e.target.value}})
    }

    imagesPreview() {
        return (
            <div>
                {this.state.imageSources.map((s, ind) => {
                    return <div key={ind}>
                        <img  src={s} style={{maxWidth: '100px', margin: '10px'}}/>
                        <label>Caption</label>
                        <input name='caption' type='text' onChange={(e) => this.onChangeCaption(e, ind)}/>
                    </div>
                })}
            </div>
        )   
    }

    newSubmit(e, wedID, photos, captions) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('wedding_id', wedID)

        for (let i = 0; i < photos.length; i++) {
            formData.append('images[]', photos[i])
            formData.append('captions[]', captions[i])
        }

        fetch(`${API_ROOT}/photos`, {
            method: 'POST',
            headers: {
                // "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: formData
        })
        .then(res => res.json())
        .then(d => {
            this.setState({...this.state, images: [], imageSources: [], captions: []})
        })
        // .then(d => {
            
        // })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='photoTest'>
                <form onSubmit={(e) => this.newSubmit(e, this.props.w_id, this.state.images, this.state.captions)}>
                    <input 
                        type='file'
                        accept='image/*'
                        name='image'
                        onChange={(e) => this.onChangeImage(e)}
                        multiple
                    >
                    </input>
                    < br/>
                    <hr/>
                    {this.imagesPreview()}
                    <hr/>
                    <br/>
                    <input type='submit'></input>
                
                </form>
                <hr />
                
                <hr/>
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
        // handleImageChange: (e) => {dispatch(newImageToStore(e))},
        handleSubmit: (e, id, photo) => dispatch(postImagesToDB(e, id, photo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoTest)
