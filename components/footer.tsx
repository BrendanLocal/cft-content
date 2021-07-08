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
      <Col className="col-12 col-md-6 col-lg-3 p-3">
      <h4>Canada's Forest Trust</h4>
      <Link href="/contact"><a className="btn text-orange textButton text-left d-block">Home</a></Link>
      <Link href="/about"><a className="btn text-orange textButton text-left d-block">Inside CFT</a></Link>
      <Link href="/about#"><a className="btn text-orange textButton text-left d-block">What is a Smart Forest?</a></Link>
      <Link href="/build-your-smart-forest"><a className="btn text-orange textButton text-left d-block">Build A Smart Forest</a></Link>
      <Link href="/build-your-smart-forest#corporate"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3">CORPORATIONS</a></Link>
      <Link href="/build-your-smart-forest#school"><a className="btn text-orange textButtonAlt text-left d-block ms-3">SCHOOLS</a></Link>
      <Link href="/build-your-smart-forest#legacy"><a className="btn text-orange textButtonAlt text-left d-block ms-3">INDIVIDUALS</a></Link>
      <Link href="/build-your-smart-forest#communal"><a className="btn text-orange textButtonAlt text-left d-block ms-3">COMMUNITIES</a></Link>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3">
      <h4>Calculate Your Impact</h4>
      <Link href="/carbon-calculator"><a className="btn text-orange textButton text-left d-block">Carbon Calculator</a></Link>
      <Link href="/"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3">Corporate</a></Link>
      <Link href="/"><a className="btn text-orange textButtonAlt text-left d-block ms-3">School</a></Link>
      <Link href="/"><a className="btn text-orange textButtonAlt text-left d-block ms-3">Personal</a></Link>
      <Link href="/smart-forest-calculator"><a className="btn text-orange textButton text-left d-block">Net-Zero Calculator</a></Link>
      <Link href="/"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3">Corporate</a></Link>
      <Link href="/"><a className="btn text-orange textButtonAlt text-left d-block ms-3">School</a></Link>
      <Link href="/"><a className="btn text-orange textButtonAlt text-left d-block ms-3">Personal</a></Link>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3">
      <h4>Other</h4>
      <Link href="/portal"><a className="btn text-orange textButton text-left d-block">Sign In</a></Link>
      <Link href="/contact"><a className="btn text-orange textButton text-left d-block">Contact Us</a></Link>
      <Link href="/annual-reports"><a className="btn text-orange textButton text-left d-block">Annual Reports</a></Link>
      <Link href="/"><a className="btn text-orange textButton text-left d-block">Terms & Conditions</a></Link>
      <Link href="/"><a className="btn text-orange textButton text-left d-block">Privacy</a></Link>
      <Link href="/"><a className="btn text-orange textButton text-left d-block">Commitment to a Fair & Equitable workplace</a></Link>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3 pe-4">
      <h4>Join Our Newsletter</h4>
      <p className="mb-3 op-8">Provide your email to receive regular updates and the latest Canada’s Forest Trust news.</p>
      <input className="mb-1 no-border" type="text" placeholder="First Name*"></input>
      <input className="mb-1 no-border" type="text" placeholder="Last Name (Optional)"></input>
      <input className="mb-3 no-border" type="text" placeholder="Email*"></input>
      <Button variant="green btn-full">Subscribe</Button>
      </Col>
    </Row>
    <Row className="pt-3 pb-5">
      <Col>
      <span>©{(new Date().getFullYear())} Canada's Forest Trust Corporation</span>
      <p className="text-white text-small op-5 pe-5 mt-1 mb-0">This site is WCAG compliant</p>
      </Col>
    </Row>
  </Container>
  </footer>

</React.Fragment>
)
}

export default Footer