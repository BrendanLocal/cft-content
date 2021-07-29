import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';

import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useForm, ValidationError } from '@formspree/react';
import Rellax from "rellax";

function NewsletterForm() {
  const [state, handleSubmit] = useForm("mwkanyjv");
  if (state.succeeded) {
      return <p className="newsletter-ty">Thank you for your interest in Canada’s Forest Trust. We will release our first newsletter soon. In the meantime, please follow us on social media </p>;

  }
  return (
      <form onSubmit={handleSubmit}>

      <input
        id="FirstName"
        type="text" 
        name="FirstName"
        placeholder="First Name*"
        required
      />
      <ValidationError 
        prefix="FirstName" 
        field="FirstName"
        errors={state.errors}
      />

      <input
        id="LastName"
        type="text" 
        name="LastName"
        placeholder="Last Name (Optional)"
      />
      <ValidationError 
        prefix="LastName" 
        field="LastName"
        errors={state.errors}
      />

      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email*"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <button type="submit" className="btn btn-green btn-full" disabled={state.submitting}>
        Subscribe
      </button>
    </form>
  );
}


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
        <Link href="/home"><a className="btn text-orange textButton text-left d-block no-underline">Home</a></Link>
        <Link href="/inside-cft"><a className="btn text-orange textButton text-left d-block no-underline">Inside CFT</a></Link>
        <Link href="/inside-cft#what"><a className="btn text-orange textButton text-left d-block no-underline">What is a Smart Forest?</a></Link>
        <Link href="/build-your-smart-forest"><a className="btn text-orange textButton text-left d-block no-underline">Build Your Smart Forest</a></Link>
        <Link href="/build-your-smart-forest#corporate"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3 no-bold">CORPORATIONS</a></Link>
        <Link href="/build-your-smart-forest#school"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold">SCHOOLS</a></Link>
        <Link href="/build-your-smart-forest#legacy"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold">INDIVIDUALS</a></Link>
        <Link href="/build-your-smart-forest#communal"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold">COMMUNITIES</a></Link>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3">
        <h4>Calculate Your Impact</h4>
        <Link href="/carbon-calculator"><a className="btn text-orange textButton text-left d-block no-underline">Carbon Calculator</a></Link>
        <Link href="/business-calculator"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3 no-bold">Corporate</a></Link>
        <Link href="/school-calculator"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold">School</a></Link>
        <Link href="/personal-calculator"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold">Personal</a></Link>
        <Link href="/smart-forest-calculator"><a className="btn text-orange textButton text-left d-block no-underline">Net-Zero Calculator</a></Link>
        <Link href="/smart-forest-corp"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3 no-bold">Corporate</a></Link>
        <Link href="/smart-forest-school"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold">School</a></Link>
        <Link href="/smart-forest-personal"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold">Personal</a></Link>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3">
        <h4>Other</h4>
        <Link href="/portal"><a className="btn text-orange textButton text-left d-block no-underline">Sign In</a></Link>
        <Link href="/contact"><a className="btn text-orange textButton text-left d-block no-underline">Contact Us</a></Link>
        {/* <Link href="/annual-reports"><a className="btn text-orange textButton text-left d-block">Annual Reports</a></Link>
        <Link href="/terms-and-conditions"><a className="btn text-orange textButton text-left d-block">Terms & Conditions</a></Link>
        <Link href="/privacy"><a className="btn text-orange textButton text-left d-block">Privacy</a></Link>
        <Link href="/commitment"><a className="btn text-orange textButton text-left d-block">Commitment to a Fair & Equitable workplace</a></Link> */}
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3 pe-4">
      <h4>Join Our Newsletter</h4>
      <p className="mb-3 op-8">Provide your email to receive regular updates and the latest Canada’s Forest Trust news.</p>
      <NewsletterForm/>
      
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
