import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Favicon from './Favicon'
import Home from './Home'

//Handles Page Content and URL routes
const App = () => (
  <div>
    <Route exact path="/favicon.ico" component={Favicon} />
    <Route exact path="*" component={Home} />
  </div>
)

export default App