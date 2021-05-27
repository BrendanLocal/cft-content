import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Rellax from "rellax";

const Footer = ()=> {

const [isActive, setActive] = useState(false);

const toggleClass = () => {
setActive(!isActive);
};

const navItems = [
{
label: "FAQ",
path: "/faq"
},
{
  label: "Annual Reports",
  path: "/annual-reports"
  },
  {
    label: "Financial Statements",
    path: "/financial-statements"
    }
]

useEffect(() => {
  new Rellax(".rellax");
}, []);

return(
<React.Fragment>
<footer className="bg-brown">
  <Container fluid className="bg-brown text-white p-5">
    <Row >
      <Col className="col-12 col-md-3 p-3">
      <h4>Canada's Forest Trust</h4>
      <Button className="text-orange textButton text-left d-block">Contact Us</Button>
      <Button className="text-orange textButton text-left d-block">About CFT</Button>
      <Button className="text-orange textButton text-left d-block">FAQ</Button>
      <Button className="text-orange textButton text-left d-block">Annual Reports</Button>
      <Button className="text-orange textButton text-left d-block">Financial Statements</Button>
      </Col>
      <Col className="col-12 col-md-3 p-3">
      <h4>Calculators</h4>
      <Button className="text-orange textButton text-left d-block">Carbon Offset Calculator</Button>
      <Button className="text-orange textButton text-left d-block">Smart Forest™ Calculator</Button>
      </Col>
      <Col className="col-12 col-md-2 p-3">
      <h4>Portal</h4>
      <Button className="text-orange textButton text-left d-block">Log In</Button>
      <Button className="text-orange textButton text-left d-block">Sign Up</Button>
      </Col>
      <Col className="col-12 col-md-4 p-3">
      <h4>Join Our Newsletter</h4>
      <p>Provide your email to receive regular updates and the latest Canada’s Forest Trust news...</p>
      <input className="mb-3" type="text" placeholder="Your Email"></input>
      <Button variant="green btn-full">Subscribe</Button>
      </Col>
    </Row>
    <Row className="pt-3 pb-5">
      <Col>
      <span>©{(new Date().getFullYear())} Canada's Forest Trust Corporation</span>
      </Col>
    </Row>
  </Container>
  </footer>

</React.Fragment>
)
}

export default Footer