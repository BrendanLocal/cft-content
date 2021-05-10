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
    <Row className="pb-5">
      <Col>
      <img src="/cft-logo-greenwhite.svg"></img>
      </Col>
      <Col>
      <h3>Calculators</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <Button variant="white btn-full">Carbon Calculator</Button>
      <Button variant="white btn-full">Forest Calculator</Button>
      </Col>
      <Col>
      <h3>Account</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <Button variant="white btn-full">Login</Button>
      <Button variant="white btn-full">Start an account</Button>
      </Col>
    <Col>
    <h3>About CFT</h3>
    <ul className="py-5 py-sm-0">
            {navItems.map(item =>
            <li key={item.key} className="">
              <a href={item.path}>{item.label}</a>
            </li>
            )}
          </ul>
    </Col>
    </Row>
  </Container>
  </footer>

</React.Fragment>
)
}

export default Footer