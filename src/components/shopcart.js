import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import { Button } from 'reactstrap';
import '../asset/App.css';
class Shopcart extends Component {

  render() {
    return (
        <div>
        <Button color="link" onClick={this.toggle}><Ionicon icon="md-basket" fontSize="30px" color="gray"/>
            <p className="badgeCustom">5</p>
        </Button>
      </div>
    );
  }
}
export default Shopcart;
