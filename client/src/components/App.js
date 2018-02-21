import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Favicon from './Favicon'
import Home from './Home'
import Ping from './Ping'

//Handles Page Content and URL routes
//Renders first URL match
const App = () => (
  <div>
    <Switch>
      <Route exact path="/api/ping" component={Ping} />
      <Route exact path="/favicon.ico" component={Favicon} />
      <Route exact path="*" component={Home} />
    </Switch>
  </div>
)

export default App