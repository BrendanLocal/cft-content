import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Link from 'next/link'

const App = () => {

const [selectSize, setSize] = React.useState("");
const [selectNum, setNum] = React.useState("");
const [selectYear, setYear] = React.useState("");
const [selectHeat, setHeat] = React.useState("");
const [selectEnergy, setEnergy] = React.useState("");
const [selectNumTwo, setNumTwo] = React.useState("");
const [selectYearTwo, setYearTwo] = React.useState("");
const [selectSizeTwo, setSizeTwo] = React.useState("");
const [selectHeatTwo, setHeatTwo] = React.useState("");
const [selectEnergyTwo, setEnergyTwo] = React.useState("");
const [buildSub, setBuildSub] = React.useState(0);

const [getFam, setFam] = React.useState(true);

const [getFamTwo, setFamTwo] = React.useState(true);


let buildType = null;
let buildSize = null;
let buildNum = 1;
let subtotalBuild = 0;
let heatType = null;
let buildYear = 1;
let energyType = null;
let buildNumTwo = 1;
let buildYearTwo = 1;
let buildSizeTwo = null;
let heatTypeTwo = null;
let energyTypeTwo = null;
let subtotalVehicle = 0;
let subtotalFlight = 0;
let subtotalPublicTransport = 0;
let subtotalBuildTwo = 0;
let totalBuild = 0;

buildSize = Number(selectSize);
buildNum = Number(selectNum);
buildYear = Number(selectYear);
heatType = selectHeat;
energyType = selectEnergy;
buildNumTwo = Number(selectNumTwo);
buildYearTwo = Number(selectYearTwo);
buildSizeTwo = Number(selectSizeTwo);
heatTypeTwo = selectHeatTwo;
energyTypeTwo = selectEnergyTwo;

//vehicle multiplier
const [vehicleSub, setVehicle] = React.useState(0);
const [vehicleArray, setVehicleArray] = React.useState({
  smallGas	:{mult:	0.14836	,miles: null},
  smallDiesel	:{mult:	0.13721	,miles: null},
  smallHybrid	:{mult:	0.10275	,miles: null},
  mediumGas	:{mult:	0.18659	,miles: null},
  mediumDiesel	:{mult:	0.16637	,miles: null},
  mediumHybrid	:{mult:	0.10698	,miles: null},
  largeGas	:{mult:	0.27087	,miles: null},
  largeDiesel	:{mult:	0.20419	,miles: null},
  largeHybrid	:{mult:	0.1448	,miles: null},
  motorbikeGas	:{mult:	0.11337	,miles: null},
  planeGas	:{mult:	2.9237	,miles: null},
  yachtGas	:{mult:	2.54	,miles: null},
  yachtDiesel	:{mult:	2.35	,miles: null},
  atvGas	:{mult:	2.3	,miles: null},
  sbsGas	:{mult:	2.3	,miles: null},
  snowGas	:{mult:	2.3	,miles: null}
});

//flight multiplier
const [flightArray, setFlightArray] = React.useState({
  flyShort: {mult:122.15,count: null},
  flyMediumEco: {mult:305.96,count: null},
  flyMediumBus: {mult:458.94,count: null},
  flyLongEco: {mult:696.225,count: null},
  flyLongEcoPlus: {mult:1113.9,count: null},
  flyLongBus: {mult:2018.95,count: null},
  flyLongFirst: {mult:2784.75,count: null},
  flyHotels: {mult:17.4, count: null}
});
const [flightSub, setFlight] = React.useState(0);

  //public transportation
const [publicTransportArray, setPublicTransportArray] = React.useState({
  publicCar: {mult:0.06214, count:null},
  publicTaxi: {mult:0.1743, count:null},
  publicSubway: {mult:0.06214, count:null}
});
const [publicTransportSub, setPublicTransport] = React.useState(0);

//onchange methods


const changeFam = (event) => {
  if(event.target.value == "myself"){
    setFam(true);
  } else {
    setFam(false);
  }
}


const changeFamTwo = (event) => {
  if(event.target.value == "myself"){
    setFamTwo(true);
  } else {
    setFamTwo(false);
  }
}


const changeSize = (event) => {
  setSize(event.target.value);
}

const changeNum = (event) => {
  setNum(event.target.value);
}

const changeYear = (event) => {
  setYear(event.target.value);
}

const changeHeat = (event) => {
  setHeat(event.target.value);
}

const changeEnergy = (event) => {
  setEnergy(event.target.value);
}

const changeNumTwo = (event) => {
  setNumTwo(event.target.value);
}

const changeSizeTwo = (event) => {
  setSizeTwo(event.target.value);
}

const changeYearTwo = (event) => {
  setYearTwo(event.target.value);
}

const changeHeatTwo = (event) => {
  setHeatTwo(event.target.value);
}

const changeEnergyTwo = (event) => {
  setEnergyTwo(event.target.value);
}

/* array using data from the spreadsheet, including multipliers */

const buildArray = {
  "1000":{
  gas:1072, oil:1562, electric:758, wood:91
  },
  "1500":{
    gas:3473, oil:5059, electric:2456, wood:295
  },
  "2000":{
    gas:4188, oil:6100, electric:2961, wood:356
  },
  "2500":{
    gas:5464, oil:7960, electric:3864, wood:465
  },
  "2501":{
    gas:6179, oil:9002, electric:4369, wood:525
  }
  }

const energySavingsMult = {
  none: 1,
  light: 0.85,
  moderate: 0.6,
  extensive: 0.4
}
    
if (buildSize && heatType && energyType)
{
  if(!getFam){
    buildNum = 1
  }
  subtotalBuild = Number(
    (
      (
        (buildArray[buildSize][heatType] * energySavingsMult[energyType])
        /
          buildNum
      )
      +
      (
        (buildYear/12)
        * 1444
      )
      /
      buildNum
      )
    /1000
    );
    }

if (buildSizeTwo && heatTypeTwo && energyTypeTwo) 
{

  if(!getFamTwo){
    buildNumTwo = 1
  }
  subtotalBuildTwo = Number(
    (
      (
        (buildArray[buildSizeTwo][heatTypeTwo] * energySavingsMult[energyTypeTwo])
        /
        buildNumTwo
      )
      +
      (
        (buildYearTwo/12)
        * 1444
      )
      /
      buildNumTwo
      )
    /1000
    );
}

totalBuild = Number(subtotalBuild + subtotalBuildTwo)

/* function to calculate the 'vehicle' section */
const calculateVehicle=()=> {
  subtotalVehicle = 0
  for (let x of Object.keys(vehicleArray))
  {
    let i = 0;
    
      i += Number((vehicleArray[x].mult * vehicleArray[x].miles))
    subtotalVehicle += i
  }
  setVehicle(Number(subtotalVehicle)/1000)
}

/* function to calculate the number of vehicles */
const calculateCount=(e)=>{
  vehicleArray[e.target.name].count = Number(e.target.value)
  calculateVehicle()
}
/* function to calculate the vehicle mileage */
const calculateMiles=(e)=>{
  vehicleArray[e.target.name].miles = Number(e.target.value)
  calculateVehicle()
}

const calculateFlight=()=> {
  subtotalFlight = 0
  for (let x of Object.keys(flightArray)) 
  {
    let i = 0;
    i += Number((flightArray[x].count * flightArray[x].mult))
    subtotalFlight += i
  }
  setFlight(Number(subtotalFlight))
}
  
const calculateFlightCount=(e)=>{
  flightArray[e.target.name].count = Number(e.target.value)
  calculateFlight()
}
  
const calculatePublicTransport=()=> {
  subtotalPublicTransport = 0
  for (let x of Object.keys(publicTransportArray))
  {
    let i = 0;
    if (publicTransportArray[x].count)
    {
      i += Number((publicTransportArray[x].count * publicTransportArray[x].mult))
    }
    subtotalPublicTransport += i
  }    
  setPublicTransport(Number(subtotalPublicTransport))
}

const calculateTransitMiles=(e)=>{
  publicTransportArray[e.target.name].count = Number(e.target.value)
  calculatePublicTransport()
}

/* calculate the 'total' here by adding on the other subtotals */
let total = vehicleSub + totalBuild + flightSub + publicTransportSub;



return (

<div className="bg-legacy">
  <Container className="p-5">
    <Row className="justify-content-center">
    <Col className="col-11 col-lg-10 pt-5 align-items-center my-4 pt-5">
      
      <h1 className="emphasis text-orange text-center bold tight-drop-light">Personal Carbon Calculator</h1>
      
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col className="p-3 col-11 col-lg-6">
      <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
      <p className="lead text-white m-2 calc-intro">Calculate how much carbon you must personally offset to reach net-zero</p>
      </div>
      <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
      
        <Row>
          <Col>
          <h4 className="text-green">
            Heating & Electricity
          </h4>

        <hr/>
          </Col>
          <h5 className="smallCaps text-small text-green">Residence 1</h5>
        </Row>
        <Row className="mb-3">
          <Col>
          <label htmlFor="number">Calculating for:</label><br />
          <input className="me-2" onChange={changeFam} type="radio" id="myself" name="calculateWho" value="myself" checked/>
<label >Myself</label><br></br>
<input className="me-2" onChange={changeFam} type="radio" id="family" name="calculateWho" value="family"/>
<label >Entire household</label><br></br>
          </Col>
        </Row>
        <Row>
          <Col>
          <label htmlFor="number">How many people live in your household?</label><br />
          <input onChange={changeNum} type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Number of people in your household" />
          </Col>
        </Row>

        <Row>
          <Col>
          <label htmlFor="number">Month(s) per year spent living at this residence?</label><br />
          <input onChange={changeYear} type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Month(s) per year in residence" />
          </Col>
        </Row>

        <Row>
          <Col>
          <label htmlFor="size">How many square feet is your home?</label><br />
          <select name="size" value={selectSize} onChange={changeSize}>
            <option value="" hidden>Select...</option>
            <option value='1000'> 0-1000 </option>
            <option value='1500'> 1000-1500 </option>
            <option value='2000'> 1500-2000 </option>
            <option value='2500'> 2000-2500 </option>
            <option value='2501'> 2500+ </option>
          </select>
          </Col>
        </Row>

        <Row>
          <Col>
          <label htmlFor="heat">What is the main source of heat for your home?</label><br />
          <select name="heat" value={selectHeat} onChange={changeHeat}>
            <option value="" hidden>Select...</option>
            <option value='gas'> Natural Gas </option>
            <option value='oil'> Furnace Oil </option>
            <option value='electric'> Electric </option>
            <option value='wood'> Wood/Pellets </option>
          </select>
          </Col>
        </Row>

      <Row>
          <Col>
          <label htmlFor="energy">Energy Savings: Have you retrofitted your house, 
          or built your house with any of the following energy-saving features?
          </label><br />
          <select name="energy" value={selectEnergy} onChange={changeEnergy}>
            <option value="" hidden>Select...</option>
            <option value='none'> None </option>
            <option value='light'> Light - Recommissioning, LED Lightbulbs, Weatherization </option>
            <option value='moderate'> Moderate - Lighting Retrofit, Automated Thermostats, Window Replacement </option>
            <option value='extensive'>Extensive - Air Sealing and Re-Insulating, Conversion to District Energy and Ground Source Heat Pumps </option>
          </select>
          </Col>
        </Row> 
        
      </div>


      <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
        <Row>
          <Col>
          <h4 className="text-green">
            Heating & Electricity
          </h4>

        <hr/>
          </Col>
          <h5 className="smallCaps text-small text-green">Residence 2</h5>
        </Row>
        <Row className="mb-3">
          <Col>
          <label htmlFor="number">Calculating for:</label><br />
          <input className="me-2" onChange={changeFamTwo} type="radio" id="myself" name="calculateWhoTwo" value="myself" checked/>
<label >Myself</label><br></br>
<input className="me-2" onChange={changeFamTwo} type="radio" id="family" name="calculateWhoTwo" value="family"/>
<label >Entire household</label><br></br>
          </Col>
        </Row>
        <Row>
          <Col>
          <label htmlFor="number">How many people live in your household?</label><br />
          <input onChange={changeNumTwo} type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Number of people in your household" />
          </Col>
        </Row>

        <Row>
          <Col>
          <label htmlFor="number">Month(s) per year spent living at this residence?</label><br />
          <input onChange={changeYearTwo} type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Month(s) per year in residence" />
          </Col>
        </Row>

        <Row>
          <Col>
          <label htmlFor="size">How many square feet is your home?</label><br />
          <select name="size" value={selectSizeTwo} onChange={changeSizeTwo}>
            <option value="" hidden>Select...</option>
            <option value='1000'> 0-1000 </option>
            <option value='1500'> 1000-1500 </option>
            <option value='2000'> 1500-2000 </option>
            <option value='2500'> 2000-2500 </option>
            <option value='2501'> 2500+ </option>
          </select>
          </Col>
        </Row>

        <Row>
          <Col>
          <label htmlFor="heat">What is the main source of heat for your home?</label><br />
          <select name="heat" value={selectHeatTwo} onChange={changeHeatTwo}>
            <option value="" hidden>Select...</option>
            <option value='gas'> Natural Gas </option>
            <option value='oil'> Furnace Oil </option>
            <option value='electric'> Electric </option>
            <option value='wood'> Wood/Pellets </option>
          </select>
          </Col>
        </Row>

      <Row>
          <Col>
          <label htmlFor="energy">Energy Savings: Have you retrofitted your house, 
          or built your house with any of the following energy-saving features?
          </label><br />
          <select name="energy" value={selectEnergyTwo} onChange={changeEnergyTwo}>
            <option value="" hidden>Select...</option>
            <option value='none'> None </option>
            <option value='light'> Light - Recommissioning, LED Lightbulbs, Weatherization </option>
            <option value='moderate'> Moderate - Lighting Retrofit, Automated Thermostats, Window Replacement </option>
            <option value='extensive'>Extensive - Air Sealing and Re-Insulating, Conversion to District Energy and Ground Source Heat Pumps </option>
          </select>
          </Col>
        </Row> 
        
      </div> 


      <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
        <Row>
          <Col className="col-12">
          <h3 className="text-green">
            Personal Vehicles
          </h3>
          <p className="text-grey">Please input your annual kilometers for each vehicle type that you drive:</p>

        <hr/>
          </Col>
        
          <Col>
          <h5 className="smallCaps text-small text-green">Small Cars</h5>
          <p className="text-small op-6">Honda Civic, Toyota Prius</p>
          <Row>
            <Col className="col">
              Gas
            <input onChange={calculateMiles} name="smallGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (gas)" />
            </Col>
          </Row> 
          <Row>
            <Col className="col">
              Diesel
            <input onChange={calculateMiles} name="smallDiesel" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (diesel)" />
            </Col>
          </Row>
          <Row>
            <Col className="col">
              Hybrid
            <input onChange={calculateMiles} name="smallHybrid" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (hybrid)" />
            </Col>
          </Row>
          
        <hr/>

        <h5 className="smallCaps text-small text-green">Medium Cars</h5>
          <p className="text-small op-6">4-Door Sedans, SUV's</p>

          <Row>
            <Col className="col">
              Gas
            <input onChange={calculateMiles} name="mediumGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (gas)" />
            </Col>
          </Row> 
          <Row>
            <Col className="col">
              Diesel
            <input onChange={calculateMiles} name="mediumDiesel" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (diesel)" />
            </Col>
          </Row>
          <Row>
            <Col className="col">
              Hybrid
            <input onChange={calculateMiles} name="mediumHybrid" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (hybrid)" />
            </Col>
          </Row>
          <hr/>

<h5 className="smallCaps text-small text-green">Large Vehicles</h5>
<p className="text-small op-6">Pickup Trucks</p>

  <Row>
    <Col className="col">
      Gas
    <input onChange={calculateMiles} name="largeGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (gas)" />
    </Col>
  </Row> 
  <Row>
    <Col className="col">
      Diesel
    <input onChange={calculateMiles} name="largeDiesel" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (diesel)" />
    </Col>
  </Row>
  <Row>
    <Col className="col">
      Hybrid
    <input onChange={calculateMiles} name="largeHybrid" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (hybrid)" />
    </Col>
  </Row>
  <hr/>
  <h5 className="smallCaps text-small text-green">Motorcycle</h5>
  <p className="text-small op-6">All sizes</p>
  <Row>
    <Col className="col">
      Gas
    <input onChange={calculateMiles} name="motorbikeGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (gas)" />
    </Col>
  </Row> 
  <hr/>
  <h5 className="smallCaps text-small text-green">Private Jet</h5>
  <p className="text-small op-6">All sizes</p>
  <Row>
    <Col className="col">
      All fuel types
    <input onChange={calculateMiles} name="planeGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Annual KM (gas)" />
    </Col>
  </Row> 


  <hr/>
  <h5 className="smallCaps text-small text-green">Input the amount of fuel annualy per vehicle</h5>

  <Row>
    <Col className="col">
      Yacht
    <input onChange={calculateMiles} name="yachtGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Marine Diesel Litres per year" />
    <input onChange={calculateMiles} name="yachtDiesel" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Marine Unleaded Litres per year" />
    </Col>
  </Row> 
  <hr/>
  <Row>
    <Col className="col">
      ATV (quad bike)
    <input onChange={calculateMiles} name="atvGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Litres per year" />
    </Col>
  </Row> 
  <hr/>

  <Row>
    <Col className="col">
      Side-by-side
    <input onChange={calculateMiles} name="sbsGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Litres per year" />
    </Col>
  </Row> 
  <hr/>

  <Row>
    <Col className="col">
      Snowmobile
    <input onChange={calculateMiles} name="snowGas" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Litres per year" />
    </Col>
  </Row> 


  
         </Col>
        </Row>
      </div>
      
      <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
        <Row>
          <Col>
          <h3 className="text-green">
            Flight
          </h3>
          <p className="text-grey">Please input the amount of flights you have taken this year, 
            and which class your seats were in. All flights are assumed to be round-trip. 
            For any one-way flights, use a value of 0.5.		
          </p>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col className="col-12 col-xl-4">
          Short (&lt;2 hrs)
          </Col>
          <Col>
          <Row>
            <Col className="col-6 col-md-6">
            All
            </Col>
            <Col className="col-6 col-xl-6">
            <input onChange={calculateFlightCount} name="flyShort" type="number"
              placeholder="Number of flights" />
            </Col>
          </Row>
          </Col>
          </Row>
          <hr/>
        <Row>
            <Col className="col-10 col-xl-4">
            Medium (2-4hrs)
            </Col>
            <Col>
            <Row>
              <Col className="col-6">
              Economy
              </Col>
              <Col className="col-6">
              <input onChange={calculateFlightCount} name="flyMediumEco" type="number"
                placeholder="Number of flights" />
              </Col>
            </Row>
            <Row>
              <Col className="col-6 ">
              Business/First
              </Col>
              <Col className="col-6">
              <input onChange={calculateFlightCount} name="flyMediumBus" type="number"
                placeholder="Number of flights" />
              </Col>
            </Row>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col className="col-10 col-xl-4">
            Long (4+ hrs)
            </Col>
            <Col className="col-12 col-xl-8">
            <Row>
              <Col>
              Economy
              </Col>
              <Col>
              <input onChange={calculateFlightCount} name="flyLongEco" type="number"
                placeholder="Number of flights" />
              </Col>
            </Row>
            <Row>
              <Col>
              Economy +
              </Col>
              <Col>
              <input onChange={calculateFlightCount} name="flyLongEcoPlus" type="number"
                placeholder="Number of flights" />
              </Col>
            </Row>
            <Row>
              <Col>
              Business Class
              </Col>
              <Col>
              <input onChange={calculateFlightCount} name="flyLongBus" type="number"
                placeholder="Number of flights" />
              </Col>
            </Row>
            <Row>
              <Col>
              First Class
              </Col>
              <Col>
              <input onChange={calculateFlightCount} name="flyLongFirst" type="number"
                placeholder="Number of flights" />
              </Col>
            </Row>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col className="col-10 col-sm-5 col-xl-4">
            Nights spent in hotels
            </Col>
            <Col  className="col-2 col-sm-1 col-xl-4">
            </Col>
            <Col className="col-sm-6 col-xl-4">
            <input onChange={calculateFlightCount} name="flyHotels" type="number"
              placeholder="Number of nights" />
            </Col>
          </Row>
      </div>

      <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
        <Row>
          <Col>
          <h3 className="text-green">
            Public Transportation
          </h3>
          <p className="text-grey">Please input the approximate distance you have travelled on each type of public transportation:</p>
          <hr/>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-xl-4">
          Bus
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateTransitMiles} name="publicCar" type="number"
            placeholder="Average Km per day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-xl-4">
          Taxi/Rideshare
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateTransitMiles} name="publicTaxi" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Average Km per day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-10 col-xl-4">
          Metro/Subway
          </Col>
          <Col className="col-6 col-xl-4">
          <input onChange={calculateTransitMiles} name="publicSubway" type="number"  min="0" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" placeholder="Average Km per day" />
          </Col>
        </Row>

      </div>

      </Col>
    

      
    
      <Col className=" p-3  col-12 col-lg-4 stickyCalc mb-4">
        <div className="text-white p-5 innerShadow roundedBox bg-green">
      <h4 className="mb-0">Subtotals</h4>
      <hr/>
      <Row><Col>Heating & Electricity</Col><Col className="text-right bold">{totalBuild > 0 ? totalBuild.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <Row><Col>Vehicle Mileage</Col><Col className="text-right bold">{vehicleSub > 0 ? vehicleSub.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <Row><Col>Flights</Col><Col className="text-right bold">{flightSub > 0 ? flightSub.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <Row><Col>Public Transportation</Col><Col className="text-right bold">{publicTransportSub > 0 ? publicTransportSub.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <span className="smallCaps text-small">Total</span><br/>
      <span className="h2 bold">{total > 0 ? total.toFixed(2) : "--"}</span>
      <p>{total > 0 ? "(Metric Tonnes of CO2 per Year)" : ""}</p>
      <p>This is only an estimate etc</p>
      </div>

      </Col>
    </Row>  
  
      <Row className="justify-content-center ">
      <Col className="col-10 align-items-center text-center p-3">
      <div className="bg-brown p-5 innerShadow roundedBox">
        <p className="smallCaps text-orange">Next Step</p>
      <h3 className="text-white mb-4 px-2 px-lg-5">Calculate how many hectares of Smart Forest you need to invest in to reach a Net-Zero emissions target.</h3>
      <Button className="btn-large mt-1" variant="green">Calculate Your Net-Zero Target</Button>
      </div>
      </Col>
    </Row>
    
    <Row className="justify-content-center mt-5">
      <Col className="col-11 col-lg-10 pt-5">
      
      <h2 className=" text-orange text-center pt-5 bold mb-4 tight-drop-light">Other Carbon Calculators</h2>
      
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
      
      </Row>
  </Container>
</div>

);
}

export default App;