import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PublicRoute from './route/Publicroute';
import PrivateRoute from './route/Privateroute';

import Login from './components/pages/Loginpage';
import Adminform from './components/pages/Adminpage';
import Homepage from './components/pages/Homepage';
class App extends Component {
  render() {
    return (
      <div>
        <PrivateRoute path="/admin" exact component={Adminform} />
        <PrivateRoute path="/home" exact component={Homepage} />
        <PrivateRoute path="/search" exact component={Homepage} />
        <PublicRoute path="/" exact component={Login} />
      </div>
    );
  }
}

export default withRouter(App);
