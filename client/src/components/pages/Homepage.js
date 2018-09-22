import React, { Component } from 'react';

import PropTypes from 'prop-types';

//Component
import Navbar from '../Navbar';
//Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

App.propTypes = {
  Logout: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { Logout }
)(App);
