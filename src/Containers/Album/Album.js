import React, { Component } from 'react'

import {connect} from 'react-redux'

import {fetchAlbums} from '../../Redux/Actions/album'

import ViewAlbum from './ViewAlbum.js'
import AddAlbum from './AddAlbum.js'

class Album extends Component {

    componentDidMount(){
        this.props.getAlbums(this.props.wedding_id)
    }

    render() {
        return (
            <div>
                < AddAlbum />
                < br/>
                < br/>

                < ViewAlbum />

                edit albums


                delete albums
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        wedding_id: state.weddingDetails.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAlbums: (id) => {dispatch(fetchAlbums(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);