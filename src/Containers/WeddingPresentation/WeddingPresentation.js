import React, { Component } from 'react'

import {connect} from 'react-redux'
import {getWeddingView, weddingCleanup} from '../../Redux/Actions/weddingPresentation'

class WeddingPresentation extends Component {

    componentWillUnmount(){
        this.props.cleanup()
    }

    componentDidMount(){
        console.log()
        this.props.loadWedding(this.props.routeProps.match.params.slug)
    }

    render() {
        return (

            <div>
               <p>Wedding Presentation</p>
               <p>Accommadation Info</p>
               <p>Our Story</p>
               <p>Photo Album</p>
               <p>Registry</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        wedding: state.WeddingPresentation
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadWedding: (slug) => {dispatch(getWeddingView(slug))},
        cleanup: () => {dispatch(weddingCleanup())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeddingPresentation);