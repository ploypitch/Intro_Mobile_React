import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import LockIcon from '@material-ui/icons/LockOutlined';
import { connect } from 'react-redux';
import { Login } from '../actions/authActions';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: -10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: ''
    };
  }

  handleChangeName = event => {
    this.setState({ Email: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ Password: event.target.value });
  };

  handleClick = () => {
    this.props.Login(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign in</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Email Address</InputLabel>
                <Input onChange={this.handleChangeName} autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Password</InputLabel>
                <Input type="password" onChange={this.handleChangePassword} />
              </FormControl>
              <Button
                fullWidth
                color="primary"
                className={classes.submit}
                onClick={this.handleClick}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { auth: state.auth.isauth };
};

export default withRouter(
  connect(
    mapStateToProps,
    { Login }
  )(withStyles(styles)(SignIn))
);
