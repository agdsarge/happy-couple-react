import React, { Component } from 'react'

import './WeddingPresentation.css'

import {connect} from 'react-redux'
import {getWeddingView, weddingCleanup} from '../../Redux/Actions/weddingPresentation'

import Headline from './Headline';
import NavigationMenu from './NavigationMenu';
import EventDetail from './EventDetail';
import RSVP from './RSVP';
import Accommodation from './Accommodation';
import ImageGallery from './ImageGallery';
import Registry from './Registry';
import WeddingParty from './WeddingParty';


class WeddingPresentation extends Component {

    componentWillUnmount(){
        this.props.cleanup()
    }

    componentDidMount(){
        console.log()
        this.props.loadWedding(this.props.routeProps.match.params.slug)
    }

    renderView(){
        switch(this.props.view) {
            case "1":
                return ( < EventDetail /> );
            case "2":
                return ( < Accommodation /> );
            case "3":
                return ( < RSVP /> );
            case "4":
                return ( < WeddingParty /> );
            case "5":
                return ( < ImageGallery /> );
            case "6":
                return ( < Registry /> );
            default:
                return ( < EventDetail /> );
    }}

    render() {
        return (
            <div className='WeddingPresentation'>
               <p>Wedding Presentation</p>
               < Headline />
               < NavigationMenu />
                { this.renderView() }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        wedding: state.weddingPresentation.wedding,
        view: state.weddingPresentation.view
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadWedding: (slug) => {dispatch(getWeddingView(slug))},
        cleanup: () => {dispatch(weddingCleanup())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeddingPresentation);