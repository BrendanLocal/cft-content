import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';

import Link from 'next/link'
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
<footer className="bg-brown container-drop-heavy">
  <Container fluid className="bg-brown text-white p-5">
    <Row >
      <Col className="col-12 col-md-3 p-3">
      <h4>Canada's Forest Trust</h4>
      <Link href="/contact"><a className="btn text-orange textButton text-left d-block">Contact Us</a></Link>
      <Link href="/about"><a className="btn text-orange textButton text-left d-block">About CFT</a></Link>
      <Link href="/FAQ"><a className="btn text-orange textButton text-left d-block">FAQ</a></Link>
      <Link href="/annual-reports"><a className="btn text-orange textButton text-left d-block">Annual Reports</a></Link>
      <Link href="/financial-statements"><a className="btn text-orange textButton text-left d-block">Financial Statements</a></Link>
      </Col>
      <Col className="col-12 col-md-3 p-3">
      <h4>Calculators</h4>

      <Link href="/carbon-calculator"><a className="btn text-orange textButton text-left d-block">Carbon Calculators</a></Link>
      <Link href="/smart-forest-calculator"><a className="btn text-orange textButton text-left d-block">Net-Zero Calculator</a></Link>
      </Col>
      <Col className="col-12 col-md-2 col-xl-2 p-3">
      <h4>Portal</h4>
      <Link href="/portal"><a className="btn text-orange textButton text-left d-block">Sign In</a></Link>
      <Link href="/portal-signup"><a className="btn text-orange textButton text-left d-block">SIGN UP</a></Link>
      </Col>
      <Col className="col-12 col-md-4 col-xl-3 p-3 pe-5">
      <h4>Join Our Newsletter</h4>
      <p className="mb-2">Provide your email to receive regular updates and the latest Canada’s Forest Trust news.</p>
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