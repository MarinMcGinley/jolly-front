import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Register from './routes/Register';
import LogIn from './routes/Login';

const { test } = require('./API/test');

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><LogIn /></Route>
      <Route path="/register"><Register /></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
