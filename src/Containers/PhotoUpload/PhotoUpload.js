import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PhotoUpload.css';
import { newPhoto, editCaption, postImagesToDB, selectAlbum} from '../../Redux/Actions/photoUpload';
import {API_ROOT, SMALL_BUTTON} from '../../Constants/index'
import {Button, InputLabel, MenuItem, Select, TextField} from '@material-ui/core'

class PhotoUpload extends Component {
    constructor(props){
        super(props)
        this.state = {
            imageURl: '',
            images: [],
        }
        this.handleImageClick = this.handleImageClick.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
    }

    componentDidMount() {
        
    }

    handleImageClick(){
        //for testing only
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
        for (let i = 0; i < e.target.files.length; i++) {
            imgArr.push(e.target.files[i])
            const url = URL.createObjectURL(e.target.files[i])
            this.props.handleUploadPreview(url)
        }
        this.setState({...this.state, images: imgArr})
    }
//<input name='caption' type='text' onChange={(e) => this.props.handleCaptionChange(e, ind)}/>
    imagesPreview() {
        return (
            <div>
                {this.props.imageSources.map((s, ind) => 
                    <div key={ind}>
                        <img  
                            src={s} 
                            style={{maxWidth: '100px', margin: '10px'}}
                        />
                        <TextField 
                            placeholder='Caption' 
                            onChange={(e) => this.props.handleCaptionChange(e, ind)}
                        />
                    </div>
                )}
            </div>
        )   
    }

    albumOptions() {
        if (this.props.albums.length) {
            return (
                <div>
                    <InputLabel id="album-select-label">Which Album?</InputLabel>
                    <Select 
                        labelId="album-select-label"
                        id="album-select"
                        value={this.props.albums[0]} 
                        onChange={(e)=>this.props.handleAlbumChange(e)}>
                        {this.props.albums.map(al => <MenuItem key={al.id} value={al}>{al.title}</MenuItem>)}
                    </Select>
                </div>
            )
        } else {
            return null
        }
        
    }

    render() {
        return (
            <div className='PhotoUpload'>
                <form onSubmit={(e) => {
                    this.props.handleSubmit(e, this.props.w_id, this.state.images, this.props.captions, this.props.albumSelection.id)
                    this.setState({...this.state, images: []})
                }}
                >
                    <Button {...SMALL_BUTTON} component='label'>
                        Select Photos to Upload
                        <input 
                            style={{display: 'none'}}
                            type='file'
                            accept='image/*'
                            name='image'
                            onChange={(e) => this.onChangeImage(e)}
                            multiple
                        />
                    </Button>
                    
                    <br/>
                    <hr/>
                    {this.imagesPreview()}
                    {this.albumOptions()}
                    <hr/>
                    <br/>
                    <Button {...SMALL_BUTTON} type='submit'>SUBMIT</Button>
                
                </form>
                <hr />
                
                <hr/>
                <img style={{maxWidth: '200px'}}src={this.state.imageURl} alt='last pic'/>
                
                <button onClick={this.handleImageClick}>Load last pic</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        w_id: state.weddingDetails.id,
        imageSources: state.photoUpload.imageSources,
        captions: state.photoUpload.captions,
        albums: state.weddingDetails.albums,
        albumSelection: state.photoUpload.albumSelection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // handleImageChange: (e) => {dispatch(newImageToStore(e))},
        handleSubmit: (e, wedID, photo, captions, albumID) => dispatch(postImagesToDB(e, wedID, photo, captions, albumID)),
        handleUploadPreview: (url) => dispatch(newPhoto(url)),
        handleCaptionChange: (e, ind) => dispatch(editCaption(e, ind)),
        handleAlbumChange: (e) => dispatch(selectAlbum(e)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload)
