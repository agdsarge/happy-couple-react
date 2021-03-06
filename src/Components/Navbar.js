import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import { logout } from '../Redux/Actions/auth'
import {backToMenu} from '../Redux/Actions/weddingDetails'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const ButtonAppBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" className={classes.title}>
                    <p> THIS IS THE NAVBAR </p>
                </Typography>
                <div onClick={props.handleMenu}>
                    <Link to={'/planner'}>
                        <Button color="inherit">
                            Main Menu
                        </Button>
                    </Link>
                </div>
                
                <Button color="inherit" onClick={props.handleClick} >
                    Logout
                    
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: e => dispatch(logout()),
        handleMenu: e => dispatch(backToMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar)
