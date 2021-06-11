import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'



const App = () => {

return (


<div>
  <Container className="py-5">
    <Row className="justify-content-center">
      <Col className="col-11 col-lg-10 pt-5">
      
      <h1 className="text-orange text-center pt-5">Carbon Calculators</h1>
      
      </Col>
    </Row>

    <Row className="justify-content-center">
    <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
        <h4 className="text-white tight-drop-light">Corporate Forest<span className="text-orange">™</span> Calculator</h4>
        <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your corporation must offset to reach net-zero.</p>
       
        <Link href="business-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">Proceed</a></Link>
        </div>
        </Col>

        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
        <h4 className="text-white tight-drop-light">School Forest<span className="text-orange">™</span> Calculator</h4>
        <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your school must offset to reach net-zero.</p>
       
        <Link href="school-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">Proceed</a></Link>
        </div>
        </Col>

        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
        <h4 className="text-white tight-drop-light">Personal Calculator</h4>
        <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon you must personally offset to reach net-zero.</p>
       
        <Link href="personal-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">Proceed</a></Link>
        </div>
        </Col>
      </Row>
    
  </Container>
</div>

);
}

export default App;