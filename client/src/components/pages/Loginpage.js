import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import Grid from '@material-ui/core/Grid'
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { Togglefirstpage, getToggleState } from '../../actions/uiActions';
import SignIn from '../login-page';
import Reg from '../Register';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class tabSignReg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getToggleState();
  };
  handleChangeLogin = () => {
    this.props.Togglefirstpage(true);
  };

  handleChangeRegis = () => {
    this.props.Togglefirstpage(false);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              Hi
            </Typography>
            <Button onClick={this.handleChangeLogin} color="inherit">
              SIGN IN{' '}
            </Button>
            <Button onClick={this.handleChangeRegis} color="inherit">
              Register
            </Button>
          </Toolbar>
        </AppBar>

        {this.props.toggle ? <SignIn /> : <Reg />}
      </div>
    );
  }
}

tabSignReg.propTypes = {
  Togglefirstpage: PropTypes.func.isRequired,
  getToggleState: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  toggle: state.toggle.Firstpagetoggle
});

export default withRouter(
  connect(
    mapStateToProps,
    { Togglefirstpage, getToggleState }
  )(withStyles(styles)(tabSignReg))
);
