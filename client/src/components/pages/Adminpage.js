import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RefreshIcon from '@material-ui/icons/Refresh';

import { Link } from 'react-router-dom';

import ModalItem from '../itemModal';
import { connect } from 'react-redux';
import { getItems, deleteItems, updateItems } from '../../actions/itemActions';
import { Logout } from '../../actions/authActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      idtemp: ''
    };
  }
  componentDidMount = () => {
    this.props.getItems();
  };
  handleClickOpen = _id => {
    this.setState({
      open: true,
      idtemp: _id
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onDeleteClick = id => {
    this.props.deleteItems(id);
  };

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  onSubmit = () => {
    this.props.updateItems({ id: this.state.idtemp, name: this.state.name });
    this.setState({ open: false });
  };

  onSubmitLogout = () => {
    this.props.Logout(localStorage.getItem('loginSession'));
  };
  render() {
    const { items } = this.props.item;
    return (
      <div>
        <ModalItem />
        <List>
          {items.map(({ _id, name }) => (
            <ListItem>
              <ListItemText primary={name} />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Update"
                  onClick={this.handleClickOpen.bind(this, _id)}
                >
                  <RefreshIcon />
                </IconButton>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Update Shopping item
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>Enter name</DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="name"
                      onChange={this.onChange}
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.onSubmit} color="primary">
                      Update
                    </Button>
                  </DialogActions>
                </Dialog>
                <IconButton
                  aria-label="Delete"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <button onClick={this.onSubmitLogout} color="primary">
          Logout
        </button>
        <Link to="/Home">
          <button color="primary">Home</button>
        </Link>
      </div>
    );
  }
}

App.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItems: PropTypes.func.isRequired,
  updateItems: PropTypes.func.isRequired,
  Logout: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItems, updateItems, Logout }
)(App);
