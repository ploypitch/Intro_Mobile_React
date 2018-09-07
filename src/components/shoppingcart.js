import React from 'react';
import { Container, Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody } from 'reactstrap';
import iphone from '../asset/Image/iPhoneX_cover.png';

import '../asset/App.css';

class Example extends React.Component {

  render(){
        return(
        <div>
          <Container>
          <CardColumns>
      <Card>
        <CardImg top style={{ height: '250px', width: '186px', margin: 'auto', display: 'block', padding: '20px'}} src={iphone} alt="Card image cap" />
        <CardBody>
          <CardTitle>iphoneXs</CardTitle>
          <CardSubtitle>The Brand new iPhoneX series</CardSubtitle>
          <CardText>Worse than iPhoneX and Greter price</CardText>
          <Button>Buy now</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top style={{ height: '250px', width: '186px', margin: 'auto', display: 'block', padding: '20px'}} src={iphone} alt="Card image cap" />
        <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardText><p className="Infor">50% OFF ALL PRICE</p></CardText>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </CardColumns>
          </Container>
        </div>
        );
    }
}
    
export default Example;