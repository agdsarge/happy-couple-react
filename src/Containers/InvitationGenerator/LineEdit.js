import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLineFontSize, popEditClose, changeFontFamily, changeLineColor, changeLineStyle } from '../../Redux/Actions/invitationGenerator';
import {Button, MenuItem, Select} from '@material-ui/core';

class LineEdit extends Component {

    componentDidMount() {

    }

    styleSelectors() {

        const allOptions = this.props.editor.allOptions

        const out = []
        // for (let category in styleOptions) {  
        //     let opts = styleOptions[category].map(opt => <MenuItem key={opt} value={this.props.editor[this.props.lineNum].lineStyle[category]}>{opt}</MenuItem>)
        //     let sel = 
        //         <Select 
        //             key={category} 
        //             value={category}
        //             onChange={(e) => this.props.handleLineStyleChange(e, category, this.props.lineNum)}
        //         >
        //             {opts}   
        //         </Select>
        //     out.push(sel)
        // }
        // return out
        let x = 
            <Select 
                key='x'
                value={this.props.editor[this.props.lineNum].lineStyle.colorName||'Color'}
                onChange={(e) => this.props.handleLineStyleChange(e, 'colorName', this.props.lineNum)}
            >
                <MenuItem value="Color" disabled>Color</MenuItem>
                <MenuItem value={'Black'}>Black</MenuItem>
                <MenuItem value={'Red'}>Red</MenuItem>
                <MenuItem value={'Gold'}>Gold</MenuItem>
            </Select>
        let y = 
        <Select
            key='y'
            value={this.props.editor[this.props.lineNum].lineStyle.fontCategory||'Font'}
            onChange={(e) => this.props.handleLineStyleChange(e, 'fontCategory', this.props.lineNum)}
        >
            <MenuItem value="Font" disabled>Font</MenuItem>
            <MenuItem value={'Script'}>Script</MenuItem>
            <MenuItem value={'Sans Serif'}>Sans Serif</MenuItem>
            <MenuItem value={'Serif'}>Serif</MenuItem>
        </Select>

        let z = 
            <Select 
                key='z'
                value={this.props.editor[this.props.lineNum].lineStyle.textAlign}
                onChange={(e) => this.props.handleLineStyleChange(e, 'textAlign', this.props.lineNum)}
            >
                
                <MenuItem value={'left'}>left</MenuItem>
                <MenuItem value={'center'}>center</MenuItem>
                <MenuItem value={'right'}>right</MenuItem>
            </Select>
        return [x, y, z]
    }

    render() {
        return (
            <div className='lineEdit'>
                <Button size='small' variant='contained' color='primary' onClick={(e) => this.props.handleFontChange(this.props.lineNum, -1)}>-</Button>
                {parseInt(this.props.editor[this.props.lineNum].lineStyle.fontSize)}
                <Button size='small' variant='contained' color='primary' onClick={(e) => this.props.handleFontChange(this.props.lineNum, 1)}>+</Button>
                {this.styleSelectors()}
                <Button variant='contained' color='primary' size='small' onClick={(e) => this.props.handlePopEditClose()}>edit text</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lineNum: state.invitationGenerator.popEdit.lineNumber,
        editor: state.invitationGenerator.editor,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFontChange: (lineNum, int) => {dispatch(changeLineFontSize(lineNum, int))},
        handlePopEditClose: () => {dispatch(popEditClose())},
        handleFontFamilyChange: (e, lineNum) => {dispatch(changeFontFamily(e, lineNum))} ,
        handleLineColorChange: (e, lineNum) => {dispatch(changeLineColor(e, lineNum))},
        handleLineStyleChange: (e, attr, lineNum) => {dispatch(changeLineStyle(e, attr, lineNum))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineEdit)

// a
// <select onChange={(e) => this.props.handleFontFamilyChange(e, this.props.lineNum)}>
//                     <option>Script</option>
//                     <option>Sans Serif</option>
//                     <option>Serif</option>
//                 </select>
//                 <select onChange={(e) => this.props.handleLineColorChange(e, this.props.lineNum)}>
//                     <option>Black</option>
//                     <option>Gold</option>
//                     <option>Red</option>
//                     {/* <option>Custom</option> */}
//                 </select>
//                 <select onChange={(e) => this.props.handleLineStyleChange(e, this.props.lineNum)}>
//                     <option>Left</option>
//                     <option>Center</option>
//                     <option>Right</option>
//                 </select>