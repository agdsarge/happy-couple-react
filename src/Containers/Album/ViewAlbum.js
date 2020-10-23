import React, { Component } from 'react'

import {connect} from 'react-redux'
import AlbumIcon from './AlbumIcon'

class ViewAlbum extends Component {
    render() {
        return (
            <div>
                {this.props.albumList.map( (album) => < AlbumIcon key={album.id} album={album} /> )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        albumList: state.album.albumList
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return (dispatch) => {

//     }
// }
export default connect(mapStateToProps, null)(ViewAlbum);