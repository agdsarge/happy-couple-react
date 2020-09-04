import React, {Component} from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import LoginContainer from './Containers/Login/LoginContainer';

class App extends Component {
  render () {
    return (
      <div className="App">
       
      <Switch>
        <Route exact path='/login' render={() => < LoginContainer /> } />
  
      </Switch>
  
  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
