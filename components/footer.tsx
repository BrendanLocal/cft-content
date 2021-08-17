import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';

import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useForm, ValidationError } from '@formspree/react';
import Rellax from "rellax";


  const socialIcons = [
    {
      icon: "/fbookIcon.svg",
      label: "Facebook",
      path: "https://www.facebook.com/canadasforest"
    },
    {
      icon: "/twtIcon.svg",
      label: "Twitter",
      path: "https://twitter.com/CanadasForest"
    },
    {
      icon: "/instaIcon.svg",
      label: "Instagram",
      path: "https://www.instagram.com/canadasforest/?hl=en"
    },
    {
      icon: "/linkedinIcon.svg",
      label: "LinkedIn",
      path: "https://linkedin.com/company/canadas-forest-trust"
    }
  ]

  function NewsletterForm() {
    const [state, handleSubmit] = useForm("mwkanyjv");
    if (state.succeeded) {
        return (
          <Row className="justify-content-center align-items-center">
            <Col>
            <p className="text-orange newsletter-ty bold mb-3 pe-3">Thank you for your interest in Canada’s Forest Trust. We will release our first newsletter soon. In the meantime, please follow us on social media </p>
           
            </Col>
          </Row>
        );
  
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
        <h3 className="h4">Canada's Forest Trust</h3>
        <Link href="/home"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Home</a></Link>
        <Link href="/inside-cft"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Inside CFT</a></Link>
        <Link href="/inside-cft#what"><a className="btn text-orange textButton text-left d-block no-underline footer-links">What is a Smart Forest?</a></Link>
        <Link href="/build-your-smart-forest"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Build Your Smart Forest</a></Link>
        <Link href="/build-your-smart-forest#corporate"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3 no-bold footer-links">CORPORATE</a></Link>
        <Link href="/build-your-smart-forest#school"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold footer-links">SCHOOL</a></Link>
        <Link href="/build-your-smart-forest#legacy"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold footer-links">LEGACY</a></Link>
        <Link href="/build-your-smart-forest#communal"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold footer-links">COMMUNAL</a></Link>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3">
        <h3 className="h4">Calculate Your Impact</h3>
        <Link href="/carbon-calculator"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Carbon Calculators</a></Link>
        <Link href="/business-calculator"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3 no-bold footer-links">Corporate</a></Link>
        <Link href="/school-calculator"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold footer-links">School</a></Link>
        <Link href="/personal-calculator"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold footer-links">Personal</a></Link>
        <Link href="/smart-forest-calculator"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Net-Zero Calculators</a></Link>
        <Link href="/smart-forest-corp"><a className="btn text-orange textButtonAlt arrow-before text-left d-block ms-3 no-bold footer-links">Corporate</a></Link>
        <Link href="/smart-forest-school"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold footer-links">School</a></Link>
        <Link href="/smart-forest-personal"><a className="btn text-orange textButtonAlt text-left d-block ms-3 no-bold footer-links">Personal</a></Link>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3">
        <h3 className="h4">Other</h3>
        <Link href="/portal"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Sign In</a></Link>
        <Link href="/contact"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Contact Us</a></Link>
        <Link href="/annual-reports"><a className="btn text-orange textButton text-left d-block no-underline d-none footer-links">Annual Reports</a></Link>
        <Link href="/terms-and-conditions"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Terms & Conditions</a></Link>
        <Link href="/privacy"><a className="btn text-orange textButton text-left d-block no-underline footer-links">Privacy</a></Link>
        <Link href="/commitment"><a className="btn text-orange textButton text-left d-block no-underline d-none footer-links">Commitment to a Fair & Equitable workplace</a></Link>
      </Col>
      <Col className="col-12 col-md-6 col-lg-3 p-3 pe-4">
        <h3 className="h4">Join Our Newsletter</h3>
      <p className="mb-3 pe-3">Provide your email to receive regular updates and the latest Canada’s Forest Trust news.</p>
      <NewsletterForm/>
      
      </Col>
    </Row> 
    <Row className="pt-3 pb-5 ps-1">
      <Col>
      <span>©{(new Date().getFullYear())} Canada's Forest Trust Corporation</span>
      <p className="text-white text-small bold pe-5 mt-1 mb-0">This site is WCAG compliant</p>
      </Col>
    </Row>
  </Container>
  </footer>

</React.Fragment>
)
}

export default Footer
