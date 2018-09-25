import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Publicroute = ({ isauth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isauth ? <Component {...props} /> : <Redirect to="/home" />
    }
  />
);

Publicroute.propTypes = {
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isauth: state.auth.isauth
  };
};
export default withRouter(connect(mapStateToProps)(Publicroute));
