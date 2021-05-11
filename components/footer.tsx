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
      <img src="/cft-logo-greenwhite.svg"></img>
      </Col>
      <Col className="col-12 col-md-3 p-3">
      <h3>Calculators</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <Button variant="white btn-full my-2">Carbon Calculator</Button>
      <Button variant="white btn-full my-2">Forest Calculator</Button>
      </Col>
      <Col className="col-12 col-md-3 p-3">
      <h3>Account</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <Button variant="white btn-full my-2">Login</Button>
      <Button variant="white btn-full my-2">Start an account</Button>
      </Col>
    <Col className="col-12 col-md-3 p-3">
    <h3>About CFT</h3>
    <ul className="py-5 py-sm-0">
      
            {navItems.map(item =>
            <li className="">
              <a href={item.path}>{item.label}</a>
            </li>
            )}
          </ul>
    </Col>
    </Row>
    <Row className="pt-3 pb-5 text-center">
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