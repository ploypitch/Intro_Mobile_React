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
import HowToRegIcon from '@material-ui/icons/HowToRegOutlined';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Register } from '../actions/authActions';
import { Togglefirstpage } from '../actions/uiActions';
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
  },
  textField: {
    marginTop: theme.spacing.unit * 4
  }
});

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Registercomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Username: '',
      Password: '',
      Repassword: '',
      Birthday: '',
      toggleEmail: false,
      toggleUsername: false,
      togglePassword: false,
      toggleRepassword: false,
      toggleDate: false,
      checkedEmail: false
    };
  }
  onchangeEmail = event => {
    if (EMAIL_REGEX.test(event.target.value)) {
      this.setState({ Email: event.target.value, checkedEmail: true });
    } else {
      console.log('Please Enter Valid Email');
    }
  };
  onchangeUsername = event => {
    this.setState({ Username: event.target.value });
  };
  onchangePassword = event => {
    this.setState({ Password: event.target.value });
  };
  onchangeRepassword = event => {
    if (this.state.Password !== this.state.Repassword) {
      console.log('Password Doesnt match');
    } else {
      this.setState({ Repassword: event.target.value });
    }
  };
  onchangeBirthday = event => {
    this.setState({ Birthday: event.target.value });
  };
  onClickRegister = () => {
    if (!this.state.Email) {
      console.log('Please Enter Eamil');
    }
    if (!this.state.Username) {
      console.log('Please Enter Username');
    }
    if (!this.state.Password) {
      console.log('Please Enter Password');
    }
    if (!this.state.Repassword) {
      console.log('Please Enter Repassword');
    }
    if (!this.state.Birthday) {
      console.log('Please Enter Date');
    }
    if (!this.state.checkedEmail) {
      console.log('Please Check Email');
    } else {
      this.props.Register(this.state);
      this.props.Togglefirstpage(true);
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <HowToRegIcon />
            </Avatar>
            <Typography variant="headline">Register</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.onchangeEmail}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="usename">Username</InputLabel>
                <Input
                  id="username"
                  name="usermane"
                  onChange={this.onchangeUsername}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={this.onchangePassword}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Re-Password</InputLabel>
                <Input
                  name="re-password"
                  type="password"
                  autoComplete="current-password"
                  onChange={this.onchangeRepassword}
                />
              </FormControl>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                className={classes.textField}
                onChange={this.onchangeBirthday}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Button
                fullWidth
                color="primary"
                className={classes.submit}
                onClick={this.onClickRegister}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { auth: state.auth.isauth };
};
export default withRouter(
  connect(
    mapStateToProps,
    { Register, Togglefirstpage }
  )(withStyles(styles)(Registercomponent))
);
