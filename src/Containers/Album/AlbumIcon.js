import React, { Component } from 'react'

import {connect} from 'react-redux'

class AlbumIcon extends Component {
    render() {
        return (
            <div>
                <p>                    
                <strong>Album Title: </strong>{this.props.album.title}
                </p>
                <p>                    
                <strong>Date Created:</strong> {this.props.album.created_at}
                </p>
                <p>                    
                <strong>Total Photos:</strong> {this.props.album.image_count}
                </p>
                { this.props.album.image_count > 0 
                ? <img src={this.props.album.image_url} alt='cover photo for the wedding album' style={{width: '300px'}}/>                    
                : <p>No photos saved at this time.</p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return (dispatch) => {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIcon);