import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import { Button, Modal,  ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input,
         Container, Row, Col } from 'reactstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }
    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }
    toggleNested(){
        this.setState({
            nestedModal: !this.state.nestedModal
        })
    }
    toggleAll(){
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        })
    }

  render() {
    return (
        <div>
        <Button color="link" onClick={this.toggle}><Ionicon icon="md-person" fontSize="30px" color="gray"/></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
              <Container>
                  <Row>
                      <Col md={{ size:10, offset: 1}}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button color="link" id="TooltipExample" disabled><Ionicon icon="ios-mail" fontSize="35px" color="gray"/></Button>
                            </InputGroupAddon>
                            <Input placeholder="username" />
                        </InputGroup>
                      </Col>
                  </Row>
                  <Row>
                        <Col md={{ size:10, offset: 1}}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button color="link" id="TooltipExample" disabled><Ionicon icon="ios-key" fontSize="35px" color="gray"/></Button>
                            </InputGroupAddon>
                            <Input placeholder="Password" />
                        </InputGroup>
                      </Col>
                      <Col md={{ size: 10, offset: 3}}>
                      <Button color="link" id="TooltipExample">Forget Password ?</Button>
                      </Col>
                  </Row>
                </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Login</Button>
            <Button color="secondary" onClick={this.toggleNested}>Register</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
            <Container>
                  <Row>
                        <Col md={{ size:10, offset: 1}}>
                            <ModalHeader>Register Form</ModalHeader>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <Button color="link" id="TooltipExample" disabled><Ionicon icon="ios-mail" fontSize="35px" color="gray"/></Button>
                                </InputGroupAddon>
                            <Input placeholder="username" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <Button color="link" id="TooltipExample" disabled><Ionicon icon="ios-key" fontSize="35px" color="gray"/></Button>
                                </InputGroupAddon>
                            <Input placeholder="Password" />
                            </InputGroup>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleAll}>Register</Button>
                            </ModalFooter>
                        </Col>
                    </Row>
                </Container>
            </Modal>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Login;
