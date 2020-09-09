import React, {Component} from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import LoginContainer from './Containers/Login/LoginContainer';
import RegisterContainer from './Containers/Register/RegisterContainer';
import Home from './Containers/Home/Home';
import ProtectedRoute from './Components/ProtectedRoute';

class App extends Component {
  
  render () {
    return (
      <div className="App">
       
      <Switch>
        <ProtectedRoute isAuth={this.props.isAuth} path='/home' component={ Home } />
        <Route exact path='/login' render={() => < LoginContainer /> } />
        <Route exact path='/register' render={() => < RegisterContainer /> } />

      </Switch>
  
  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: !!state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
