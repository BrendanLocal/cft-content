import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Link from 'next/link'

const App = () => {

const [selectSize, setSize] = React.useState("");

let footSize = 0;
let region = null;

footSize = Number(selectSize);

//employee commute
const [regionArray, setRegion] = React.useState({
  transitCar: {mult:0.1743, days:195, count: null, miles: null},
  transitBus: {mult:0.06214, days:195,count: null, miles: null},
  transitTrain: {mult:0.06214, days:195, count: null, miles: null}
});
const [transitSub, setTransit] = React.useState(0);



return (

<div>
  <Container className="py-5">
    <Row className="justify-content-center">
      <Col className="col-11 col-lg-10 pt-5">
      
      <h1 className="text-orange text-center pt-5">"Net Zero" Calculator</h1>
      
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col className="p-3 col-11 col-lg-6">
      <div className="card roundedBox bg-offwhite p-4 cardShadow cardSpacing">
      <p>Calculate how many hectares you, your family, your corporation, or your school must invest in to reach a net-zero emissions target.</p>
      </div>
      <div className="card roundedBox bg-offwhite p-4 cardShadow cardSpacing">
        <Row>
          <Col>
          <h4>
            Your emissions
          </h4>
        <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
          <label htmlFor="footprint">What is your carbon footprint? (tonnes/year)</label><br />
          <input onChange={changeNum} name="type" type="number" placeholder="Carbon footprint in tonnes/year" />
          Haven't calculated your footprint? <Link href="carbon-calculator"><a className="underline">Do it here</a></Link>
          </Col>
        </Row>
        <hr/>
        <h5 className="smallCaps text-small text-green">What region do you live in?</h5>
        <Row>
          <Col>
          <label htmlFor="type">Region</label><br />British Columbia	Prairies	Ontario	Quebec	Atlantic
          <select name="type" value={selectRegion} onChange={changeRegion}>
            <option value="" hidden>Select...</option>
            <option value='britishcolumbia'> British Columbia</option>			
            <option value='prairies'>Prairies</option>
            <option value='ontario'>Ontario</option>
            <option value='quebec'>Quebec</option>
            <option value='atlantic'>Atlantic</option>
          </select>
          </Col>
        </Row>
        <hr/>
        <h5 className="smallCaps text-small text-green">How long do you want to be carbon neutral? (years)</h5>

        <Row>
          <Col>
          <label htmlFor="size">How long do</label><br />
          <select name="size" value={selectYears} onChange={changeYears}>
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
      <Col className=" p-3  col-12 col-lg-4 stickyCalc ">
        <div className="text-white p-5 innerShadow roundedBox">
      <h4 className="mb-0">Carbon offset</h4>
     
      <hr/>
      <Row><Col>You must plant {hectares > 0 ? hectares : "--"} hectares</Col></Row>
      <hr/>
      <Row><Col>You must plant {trees > 0 ? trees : "--"} trees</Col></Row>
     
    </div>

      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col className="col-md-10">
      <div className="bg-brown text-white p-5 innerShadow roundedBox">
      <h4 className="mb-0">Next Steps</h4>
      <hr/>
      <Button variant="green">Smart Forest™ Calculator</Button>
      </div>
      </Col>
    </Row>
  </Container>
</div>

);
}

export default App;