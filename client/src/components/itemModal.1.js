import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItems } from "../actions/itemActions";

class itemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: ""
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const newItem = {
      name: this.state.name
    };

    this.props.addItems(newItem);
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Add Item</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Shopping item</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter name</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              placeholder="Username"
              type="email"
              onChange={this.onChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default withRouter(connect(
  mapStateToProps,
  { addItems }
)(itemModal));
