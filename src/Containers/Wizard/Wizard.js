import React, { Component } from 'react';

import { connect } from 'react-redux'

import {wizardCleanup, wizardFormChange, wizardPageChange, wizardSubmit} from '../../Redux/Actions/wizard'

import './Wizard.css'

class Wizard extends Component {

    componentWillUnmount() {
        this.props.handleCleanup()
    }

    renderPageOne(){
        return (
            <div className='Wizard-Page-1'>
                    one
            </div>
        )

    }
    renderPageTwo(){
        return (
            <div className='Wizard-Page-2'>
                    two
            </div>
        )
     
    }
    renderPageThree(){
        return (
            <div className='Wizard-Page-3'>
                    three
            </div>
        )
    }

    render() {
        return (
            <div className='Wizard'>
                <form>
                    {this.props.page === 1 ? this.renderPageOne() : this.props.page === 2 ? this.renderPageTwo() : this.renderPageThree() }
                </form>
                <div className='Wizard-control-panel'>
                    {this.props.page > 1 ? <div className='wiz-directional-button' onClick={() => {this.props.handleChangePage(-1)}}>Prev</div> : <div> </div>}
                    {this.props.page === this.props.pageCount ? <div className='wiz-submit-button' onClick={this.props.handleSubmit}>Submit</div> : <div> </div>}
                    {this.props.page < this.props.pageCount ? <div className='wiz-directional-button' onClick={() => {this.props.handleChangePage(1)}}>Next</div> : <div> </div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.wizard.page,
        pageCount: state.wizard.totalPages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage: (value) => {dispatch(wizardPageChange(value))},
        handleChangeForm: () => {},
        handleSubmit: () => {},
        handleCleanup: () => {dispatch(wizardCleanup())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);

