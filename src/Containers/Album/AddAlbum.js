import React, { Component } from "react";

import { connect } from "react-redux";
import {
  cleanupAlbum,
  albumFormChange,
  albumSubmit,
} from "../../Redux/Actions/album";

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from "@material-ui/core";

class AddAlbum extends Component {
  componentWillUnmount() {
    this.props.cleanup();
  }

  render() {
    
    return (
      <div className="AddAlbum">
        <Container>
          <CssBaseline />
          <form
            onSubmit={(e) => this.props.handleSubmit(e, this.props.wedding_id, this.props.new_album)}
          >
            <TextField
              required
              name="albumName"
              id="album-name"
              label="Enter the Album Name"
              value={this.props.albumName}
              onChange={(e) => this.props.handleChangeForm(e)}
            />

            <InputLabel id="label">Is this album Biographical?</InputLabel>
            <Select labelId="label" name='isBio' id="select" 
              onChange={(e) => this.props.handleChangeForm(e)} value={this.props.isBio}>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>

            <Button type="submit" color="primary" variant="contained">
              Submit!
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    new_album: {albumName: state.album.albumName, isBio: state.album.isBio},
    albumName: state.album.albumName,
    isBio: state.album.isBio,
    wedding_id: state.weddingDetails.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cleanup: () => {
      dispatch(cleanupAlbum());
    },
    handleChangeForm: (e) => {
      dispatch(albumFormChange(e));
    },
    handleSubmit: (e, w_id, form) => {
      dispatch(albumSubmit(e, w_id, form));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum);
