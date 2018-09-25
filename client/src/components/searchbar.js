import React, { Component } from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

export class Searchbar extends Component {
  constructor(props) {
    super(props);
  }

  onblursearchcomponent = () => {
    this.setState({ searchBluestatus: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <SearchIcon />

        <Input
          placeholder="Search…"
          disableUnderline
          onBlur={this.onblursearchcomponent}
          onKeyPress={this.handlekeyenter}
          onChange={this.handlesearchChange}
        />
      </div>
    );
  }
}
Searchbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Searchbar);
