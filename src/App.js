import React, {Component} from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import ProtectedRoute from './Components/ProtectedRoute';
import LoginContainer from './Containers/Login/LoginContainer';
import RegisterContainer from './Containers/Register/RegisterContainer';
import Home from './Containers/Home/Home';
import Splash from './Components/Splash'

class App extends Component {
  
  render () {
      return (
        <div className="App">
        
        <Switch>
          <ProtectedRoute isAuth={this.props.isAuth} path='/planner' component={ Home } />
          <Route exact path='/login' render={() => < LoginContainer /> } />
          <Route exact path='/register' render={() => < RegisterContainer /> } />
          <Route exact path='/' render={() => < Splash /> } />

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
