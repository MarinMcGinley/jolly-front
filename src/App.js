import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Authenticationprovider } from './Context/authentication';
import Register from './routes/Register';
import LogIn from './routes/Login';
import Profile from './routes/Profile';
import Test from './routes/Test';

require('dotenv').config();


class App extends Component {


  render() {
    return (
        <BrowserRouter>
          <Switch>
            {/* <Route isLoggedIn={this.state.loggedInCheck} exact path="/"><LogIn /></Route> */}
            <Route exact path="/"><LogIn /></Route>
            <Route exact path="/profile"><Profile /></Route>
            <Route path="/register"><Register /></Route>
            <Route path="/test"><Test /></Route>
          </Switch>
        </BrowserRouter>
    )
  }
  
}

export default App;
