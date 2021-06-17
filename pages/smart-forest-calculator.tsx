import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Link from 'next/link'

const App = () => {

const [regionArray, setRegionArray] = React.useState({
  carbon: {BC:500,	Prairies:252,	Ontario:347,	Quebec:347,	Atlantic:134 }
});
const [region, setRegion] = React.useState("");
const [footprint, setFootprint] = React.useState(0);
const [duration, setDuration] = React.useState(0);

var plantHectares = (duration*footprint)/regionArray.carbon[region];

var plantTrees = plantHectares*2470;

const changeRegion = (event) => {
  setRegion(event.target.value);
}
const changeFootprint = (event) => {
  setFootprint(event.target.value);
}
const changeDuration = (event) => {
  setDuration(event.target.value);
}


return (

<div>
  <Container className="p-5">
    <Row className="justify-content-center">
    <Col className="col-11 col-lg-10 pt-5 align-items-center my-4 pt-5">
      
      <h1 className="emphasis text-orange text-center bold ">Net-Zero Calculator</h1>
      
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col className="p-3 col-11 col-lg-6">
      <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
      <p className="lead text-white m-2 calc-intro pe-lg-2">Calculate how many hectares you, your family, your corporation, or your school must invest in to reach a net-zero emissions target</p>
      </div>
      <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
        <Row>
          <Col>
          <h4 className="text-green">
            Your emissions
          </h4>
        <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
          <label htmlFor="footprint">What is your carbon footprint? (Tonnes per year)</label><br />
          <input className="mb-4" onChange={changeFootprint} name="type" type="number" placeholder="Carbon footprint in tonnes per year" />
          Haven't calculated your footprint? <Link href="carbon-calculator"><a className="underline modal-btn">Do it here</a></Link>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
          <label htmlFor="type">What region do you live in?</label><br />
          <select name="type" value={region} onChange={changeRegion}>
            <option value="" hidden>Select...</option>
            <option value='BC'> British Columbia</option>			
            <option value='Prairies'>Prairies</option>
            <option value='Ontario'>Ontario</option>
            <option value='Quebec'>Quebec</option>
            <option value='Atlantic'>Atlantic</option>
          </select>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
          <label htmlFor="size">How long do you want to be carbon neutral? (years)</label><br />
          <select name="size" value={duration} onChange={changeDuration}>
            <option value="" hidden>Select...</option>
            <option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
<option value='10'>10</option>
<option value='15'>15</option>
<option value='20'>20</option>
<option value='25'>25</option>
<option value='30'>30</option>
<option value='40'>40</option>
<option value='50'>50</option>
<option value='60'>60</option>
<option value='80'>80</option>
<option value='100'>100</option>
          </select>
          </Col>
        </Row>

        
      </div>

      </Col>
      <Col className=" p-3  col-12 col-lg-4 stickyCalc mb-4">
        <div className="text-white p-5 innerShadow roundedBox">
      <h4 className="mb-0">Carbon offset</h4>
     
      <hr/>
      <Row><Col>You must plant {plantHectares > 0 ? plantHectares.toFixed(2) : "--"} hectares</Col></Row>
      <hr/>
      <Row><Col className="pb-3">You must plant {plantTrees > 0 ? Math.ceil(plantTrees).toLocaleString("en-US") : "--"} trees</Col></Row>
     
    </div>

      </Col>
    </Row>
   
  
    <Row className="justify-content-center ">
      <Col className="col-10 align-items-center text-center p-3">
      <div className="bg-brown p-5 innerShadow roundedBox">
        <p className="smallCaps text-orange">Next Step</p>
      <h3 className="text-white mb-4 px-2 px-lg-5">Calculate how many hectares you, your corporation, or your school must invest in to reach a net-negative emissions target.</h3>
      <Button className="btn-large mt-1" variant="green">CALCULATE YOUR NET NEGATIVE TARGET</Button>
      </div>
      </Col>
    </Row>
    
    <Row className="justify-content-center mt-5">
      <Col className="col-11 col-lg-10 pt-5">
      
      <h2 className=" text-orange text-center pt-5 bold mb-4">Carbon Calculators</h2>
      
      </Col>
    </Row>

    <Row className="justify-content-center pb-5 mb-5">

    <Col className="col-12 col-md-6 col-lg-4 col-xl-3 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
        <h4 className="text-white tight-drop-light">Corporate</h4>
        <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your corporation must offset to reach net-zero.</p>
       
        <Link href="business-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">SELECT</a></Link>
        </div>
        </Col>

        <Col className="col-12 col-md-6 col-lg-4 col-xl-3 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
        <h4 className="text-white tight-drop-light">School</h4>
        <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your school must offset to reach net-zero.</p>
       
        <Link href="school-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">SELECT</a></Link>
        </div>
        </Col>


        <Col className="col-12 col-md-6 col-lg-4 col-xl-3 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
        <h4 className="text-white tight-drop-light">Personal</h4>
        <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon you must personally offset to reach net-zero.</p>
       
        <Link href="personal-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">SELECT</a></Link>
        </div>
        </Col>
      
      
      </Row>
  </Container>
</div>

);
}

export default App;