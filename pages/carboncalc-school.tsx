import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const App = () => {

const [selectSize, setSize] = React.useState("");
const [selectType, setType] = React.useState("");
const [selectSizeTwo, setSizeTwo] = React.useState("");
const [selectNum, setNum] = React.useState("");
const [selectNumTwo, setNumTwo] = React.useState("");

let buildSize = null;
let schoolType = null;
let schoolNum = 1;
let totalResidenceSize = 0;
let subtotalBuild = 0; 
let subtotalTransit = 0;
let studentCommuteSubtotal = 0;
let subtotalOtherVehicle = 0;
let schoolSize = 1;
let schoolNumTwo = 1;
let buildSizeTwo = null;
let subtotalVehicle = 0;
let subtotalFlight = 0;

buildSize = Number(selectSize);
schoolType = selectType;
schoolSize = Number(selectSizeTwo);
schoolNum = Number(selectNum);
schoolNumTwo = Number(selectNumTwo);
buildSizeTwo = Number(selectSizeTwo);

//employee commute
const [transitArray, setTransitArray] = React.useState({
  transitCar: {mult:0.1743, days:195, count: null, miles: null},
  transitBus: {mult:0.06214, days:195,count: null, miles: null},
  transitTrain: {mult:0.06214, days:195, count: null, miles: null}
});
const [transitSub, setTransit] = React.useState(0);

//student commute
const [studentCommuteArray, setstudentCommuteArray] = React.useState({
  gasoline: {mult:1.22885, days:183, count: null, miles: null},
  diesel: {mult:0.74350344, days:183, count: null, miles: null},
  propane: {mult:0.897182946, days:183, count: null, miles: null},
  cityBus: {mult:0.06214, days:183, count: null, miles: null},
  car: {mult:0.1743, days:183, count: null, miles: null},
  train: {mult:0.06214, days:183, count: null, miles: null}
});
const [studentCommute, setStudentCommute] = React.useState(0);

//vehicle multiplier
const [vehicleSub, setVehicle] = React.useState(0);
const [vehicleArray, setVehicleArray] = React.useState({
  carGas: {mult:1.22885, miles: null},
  carDiesel: {mult:0.74350344, miles: null},
  carPropane: {mult:0.897182946, miles: null}
});

//other vehicle multiplier
const [otherVehicleSub, setOtherVehicle] = React.useState(0);
const [otherVehicleArray, setOtherVehicleArray] = React.useState({
  van: {mult:0.14853, miles: null},
  car: {mult:0.1743, miles: null}
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
});
const [flightSub, setFlight] = React.useState(0);

//onchange methods
const changeSize = (event) => {
  setSize(event.target.value);
}

const changeType = (event) => {
  setType(event.target.value);
}

const changeSizeTwo = (event) => {
  setSizeTwo(event.target.value);
}

const changeNum = (event) => {
  setNum(event.target.value);
}

const changeNumTwo = (event) => {
  setNumTwo(event.target.value);
}

/* array using data from the spreadsheet, including multipliers */

const buildArray = {
  "5000":{
    office:13701.48346
  , industrial:7179.992482
  , others:16688.30884
  },
  "10000":{
      office:28729.24786
    , industrial:26524.1674
    , others:33015.65352
  },
  "50000":{
      office:85196.594
    , industrial:67987.73782
    , others:69144.83022

  },
  "200000":{
      office:404560.9958
    , industrial:225304.9042
    , others:267273.1874

  },
  "200001":{
      office:1763397.214
    , industrial:862252.9814
    , others:1458790.148
  }
  }


if (schoolNumTwo)
{
  let multValue = 4.45188684; 
  totalResidenceSize = schoolNumTwo * multValue;
}

if (buildSize )
{
  subtotalBuild = Number((buildArray[buildSize][schoolType]) + totalResidenceSize)
}



/* function to calculate the 'vehicle' section */
const calculateVehicle=()=> {
  subtotalVehicle = 0
  for (let x of Object.keys(vehicleArray)) 
  {
    let i = 0;
    if ( vehicleArray[x].miles)
    {
      i += Number((vehicleArray[x].mult * vehicleArray[x].miles))
    }
  subtotalVehicle += i
  }
  setVehicle(Number(subtotalVehicle))
}

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
  
    
const calculateOtherVehicle=()=> {
  subtotalOtherVehicle = 0
  for (let x of Object.keys(otherVehicleArray)) 
  {
    let i = 0;
    if ( otherVehicleArray[x].miles)
    {
      i += Number((otherVehicleArray[x].mult * otherVehicleArray[x].miles))
    }
  subtotalOtherVehicle += i
  }    
  setOtherVehicle(Number(subtotalOtherVehicle))
}

const calculateOtherTransitMiles=(e)=>{
  otherVehicleArray[e.target.name].miles = Number(e.target.value)
  calculateOtherVehicle()
}

const calculateTransit=()=> {
  subtotalTransit = 0
  for (let x of Object.keys(transitArray))
  {
    let i = 0;
    if (transitArray[x].count && transitArray[x].miles)
    {
      i += Number((transitArray[x].count * transitArray[x].mult * transitArray[x].miles * transitArray[x].days))
    }
  subtotalTransit += i
  }   
  setTransit(Number(subtotalTransit))
}

const calculateTransitMiles=(e)=>{
  transitArray[e.target.name].miles = Number(e.target.value)
  calculateTransit()
}

const calculateTransitCount=(e)=>{
  transitArray[e.target.name].count = Number(e.target.value)
  calculateTransit()
}

const calculateStudentCommuteTransit=()=> {
  studentCommuteSubtotal = 0
  for (let x of Object.keys(studentCommuteArray)) 
  {
    let i = 0;
    if (studentCommuteArray[x].count && studentCommuteArray[x].miles)
    {
      i += Number((studentCommuteArray[x].count * studentCommuteArray[x].mult * studentCommuteArray[x].miles * studentCommuteArray[x].days))
    }
    studentCommuteSubtotal += i
  }    
  setStudentCommute(Number(studentCommuteSubtotal))
}

const calculateStudentCommuteCount=(e)=>{
  studentCommuteArray[e.target.name].count = Number(e.target.value)
  calculateStudentCommuteTransit()
}

const calculateStudentCommuteMiles=(e)=>{
  studentCommuteArray[e.target.name].miles = Number(e.target.value)
  calculateStudentCommuteTransit()
}

/* calculate the 'total' here by adding on the other subtotals */
let total = vehicleSub + subtotalBuild + flightSub + transitSub + studentCommute + otherVehicleSub;


return (

<div>
  <Container className="py-5">
    <Row className="justify-content-center">
      <Col className="col-11 col-lg-10 pt-5">
      
      <h1 className="text-orange text-center pt-5">Carbon Calculator</h1>
      
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col className="p-3 col-11 col-lg-6">
      <div className="card roundedBox bg-offwhite p-4 cardShadow">
      <p className="large">School Calculator</p>
      <p>Estimated Carbon Emission used in Schools.</p>
      </div>
      <div className="card roundedBox bg-offwhite p-4 cardShadow">
        <Row>
          <Col>
          <h4>
            Heating & Electricity
          </h4>
        <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
          <label htmlFor="size">What size is the main school building (Sq. Ft.)?</label><br />
          <select name="size" value={selectSize} onChange={changeSize}>
            <option value="" hidden>Select...</option>
            <option value='5000'> 0-5000 </option>
            <option value='10000'> 5000-10000 </option>
            <option value='50000'> 10000-50000 </option>
            <option value='200000'> 50000-200000 </option>
            <option value='200001'> 200000+ </option>
          </select>
          </Col>
        </Row>
        <hr/>
        <h5 className="smallCaps text-small text-green">Does your school use other buildings 
        unattached from the main building (Workshops, etc.)?</h5>
        <Row>
          <Col>
          <label htmlFor="type">Building Type</label><br />
          <select name="type" value={selectType} onChange={changeType}>
            <option value="" hidden>Select...</option>
            <option value='office'> Office Building </option>
            <option value='industrial'> Industrial Arts/Warehouse </option>
            <option value='others'> Others </option>
          </select>
          </Col>
        </Row>

        <Row>
          <Col>
          <label htmlFor="size">Building Size?</label><br />
          <select name="size" value={selectSizeTwo} onChange={changeSizeTwo}>
            <option value="" hidden>Select...</option>
            <option value='5000'> 0-5000 </option>
            <option value='10000'> 5000-10000 </option>
            <option value='50000'> 10000-50000 </option>
            <option value='200000'> 50000-200000 </option>
            <option value='200001'> 200000+ </option>
          </select>
          </Col>
        </Row>

        <Row>
          <Col>
          <label htmlFor="type">How many of this building type is used by your school?</label><br />
          <input onChange={changeNum} name="type" type="number" placeholder="# of buildings" />
          </Col>
        </Row>

      <Row>
          <Col>
          <label htmlFor="energy">If your school provides room and board, what size is the residence building (Sq. Ft.)?
          </label><br />
          <input onChange={changeNumTwo} name="type" type="number" placeholder="size of building" />
          </Col>
        </Row> 
      </div>


      <div className="card roundedBox bg-offwhite p-4 cardShadow">
        <Row>
          <Col>
          <h3>
            Employee Commute
          </h3>
          <p>Please input the following information for your employees' daily commute:</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-xl-4">
          Car
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateTransitCount} name="transitCar" type="number" placeholder="# of vehicles" />
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateTransitMiles} name="transitCar" type="number"
            placeholder="Average Km/day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-xl-4">
          Bus
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateTransitCount} name="transitBus" type="number" placeholder="# of employees" />
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateTransitMiles} name="transitBus" type="number" placeholder="Average km/day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-10 col-xl-4">
          Train
          </Col>
          <Col className="col-6 col-xl-4">
          <input onChange={calculateTransitCount} name="transitTrain" type="number" placeholder="# of employees" />
          </Col>
          <Col className="col-6 col-xl-4">
          <input onChange={calculateTransitMiles} name="transitTrain" type="number" placeholder="Average km/day" />
          </Col>
        </Row>
      </div>

      <div className="card roundedBox bg-offwhite p-4 cardShadow">
        <Row>
          <Col>
          <h3>
            Student Commute
          </h3>
          <p>Please input the following information for your students' daily commute:</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-xl-4">
          Gasoline
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateStudentCommuteCount} name="gasoline" type="number" placeholder="# of buses" />
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateStudentCommuteMiles} name="gasoline" type="number"
            placeholder="Average Km/day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-xl-4">
          Diesel
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateStudentCommuteCount} name="diesel" type="number" placeholder="# of buses" />
          </Col>
          <Col className="col-xl-4">
          <input onChange={calculateStudentCommuteMiles} name="diesel" type="number" placeholder="Average km/day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-10 col-xl-4">
          Propane
          </Col>
          <Col className="col-6 col-xl-4">
          <input onChange={calculateStudentCommuteCount} name="propane" type="number" placeholder="# of buses" />
          </Col>
          <Col className="col-6 col-xl-4">
          <input onChange={calculateStudentCommuteMiles} name="propane" type="number" placeholder="Average km/day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
          <label htmlFor="type">How many students commute by city bus?</label><br />
          </Col>
          <Col className ="col-6">
          <input onChange={calculateStudentCommuteCount} name="cityBus" type="number" placeholder="# of students" />
          </Col>
          <Col className ="col-6">
          <input onChange={calculateStudentCommuteMiles} name="cityBus" type="number" placeholder="Average km/day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
          <label htmlFor="type">How many students are usually picked up/dropped off by car?	</label><br />
          </Col>
          <Col className ="col-6">
          <input onChange={calculateStudentCommuteCount} name="car" type="number" placeholder="# of students" />
          </Col>
          <Col className ="col-6">
          <input onChange={calculateStudentCommuteMiles} name="car" type="number" placeholder="Average km/day" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
          <label htmlFor="type">How many students primarily commute by train? </label><br />
          </Col>
          <Col className ="col-6">
          <input onChange={calculateStudentCommuteCount} name="train" type="number" placeholder="# of students" />
          </Col>
          <Col className ="col-6">
          <input onChange={calculateStudentCommuteMiles} name="train" type="number" placeholder="Average km/day" />
          </Col>
        </Row>
      </div>

      <div className="card roundedBox bg-offwhite p-4 cardShadow">
        <Row>
          <Col className="col-12">
          <h3>
            Other Transportation
          </h3>
          <p>Please input the information to determine the C02 emissions for transportation other than the sudents' daily commute?:</p>
        <hr/>
          </Col>
           
          <Col>
          <h5 className="smallCaps text-small text-green">Field Trips (within school hours)</h5>
          <Row>
            <Col className="col-12 col-xl-4">
            Gasoline
            </Col>
            <Col className="col-xl-4">
            <input onChange={calculateMiles} name="carGas" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          <Row>
            <Col  className="col-10 col-xl-4">
            Diesel
            </Col>
            <Col className="col-6 col-xl-4">
            <input onChange={calculateMiles} name="carDiesel" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          <Row>
            <Col className="col-10 col-xl-4">
            Propane
            </Col>
            <Col className="col-6 col-xl-4">
            <input onChange={calculateMiles} name="carPropane" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          </Col>
        </Row>
       </div>
      
       <div className="card roundedBox bg-offwhite p-4 cardShadow">
        <Row>
          <Col className="col-12">
          <h3>
            Other Vehicles
            <hr/>
          </h3>
          
          <Row>
            <Col className="col-12 col-xl-4">
            Van
            </Col>
            <Col className="col-xl-4">
            <input onChange={calculateOtherTransitMiles} name="van" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          <Row>
            <Col  className="col-10 col-xl-4">
            Car
            </Col>
            <Col className="col-6 col-xl-4">
            <input onChange={calculateOtherTransitMiles} name="car" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          </Col>
        </Row>
       </div>


       <div className="card roundedBox bg-offwhite p-4 cardShadow">
        <Row>
          <Col className="col-12">
          <p>Extracurricular Activities (Any school endorsed activity outside of regular school hours such as sports teams,
               fundraising)</p>
        <hr/>
          </Col>
           
          <Col>
          <Row>
            <Col className="col-12 col-xl-4">
            Gasoline
            </Col>
            <Col className="col-xl-4">
            <input onChange={calculateMiles} name="carGas" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          <Row>
            <Col  className="col-10 col-xl-4">
            Diesel
            </Col>
            <Col className="col-6 col-xl-4">
            <input onChange={calculateMiles} name="carDiesel" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          <Row>
            <Col className="col-10 col-xl-4">
            Propane
            </Col>
            <Col className="col-6 col-xl-4">
            <input onChange={calculateMiles} name="carPropane" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          </Col>
        </Row>
       </div>

       <div className="card roundedBox bg-offwhite p-4 cardShadow">
        <Row>
          <Col className="col-12">
          <h3>
            Other Vehicles
          </h3>
          <hr/>
          <Row>
            <Col className="col-12 col-xl-4">
            Van
            </Col>
            <Col className="col-xl-4">
            <input onChange={calculateOtherTransitMiles} name="carGas" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          <Row>
            <Col  className="col-10 col-xl-4">
            Car
            </Col>
            <Col className="col-6 col-xl-4">
            <input onChange={calculateOtherTransitMiles} name="carDiesel" type="number" placeholder="Average Annual Km" />
            </Col>
          </Row>
          </Col>
        </Row>
       </div>


      <div className="card roundedBox bg-offwhite p-4 cardShadow">
        <Row>
          <Col>
          <h3>
            Flight
          </h3>
          <p>Please include the number of flights taken by students for any school endorsed programs 
              (educational trips, exchange programs).
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
              placeholder="Average # of flights" />
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
                placeholder="Average # of flights" />
              </Col>
            </Row>
            <Row>
              <Col className="col-6 ">
              Business/First
              </Col>
              <Col className="col-6">
              <input onChange={calculateFlightCount} name="flyMediumBus" type="number"
                placeholder="Average # of flights" />
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
                placeholder="Average # of flights" />
              </Col>
            </Row>
            <Row>
              <Col>
              Economy +
              </Col>
              <Col>
              <input onChange={calculateFlightCount} name="flyLongEcoPlus" type="number"
                placeholder="Average # of flights" />
              </Col>
            </Row>
            <Row>
              <Col>
              Business Class
              </Col>
              <Col>
              <input onChange={calculateFlightCount} name="flyLongBus" type="number"
                placeholder="Average # of flights" />
              </Col>
            </Row>
            <Row>
              <Col>
              First Class
              </Col>
              <Col>
              <input onChange={calculateFlightCount} name="flyLongFirst" type="number"
                placeholder="Average # of flights" />
              </Col>
            </Row>
            </Col>
          </Row>
      </div>


      </Col>
      <Col className=" p-3  col-12 col-lg-4 stickyCalc ">
        <div className="text-white p-5 innerShadow roundedBox">
      <h4 className="mb-0">Subtotals</h4>
      <hr/>
      <Row><Col>Heating & Electricity</Col><Col className="text-right bold">{subtotalBuild > 0 ? subtotalBuild.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <Row><Col>Employee Commute</Col><Col className="text-right bold">{transitSub > 0 ? transitSub.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <Row><Col>Student Commute</Col><Col className="text-right bold">{studentCommute > 0 ? studentCommute.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <Row><Col>Other Transportation</Col><Col className="text-right bold">{vehicleSub > 0 ? vehicleSub.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <Row><Col>Other Vehicle</Col><Col className="text-right bold">{otherVehicleSub > 0 ? otherVehicleSub.toFixed(2) : "--"}</Col></Row>
      <hr/>
      <Row><Col>Flights</Col><Col className="text-right bold">{flightSub > 0 ? flightSub.toFixed(2) : "--"}</Col></Row>
      <hr/>
      
      <span className="smallCaps text-small">Total</span><br/>
      <span className="h2 bold">{total > 0 ? total.toFixed(2) : "--"}</span>
      <p>{total > 0 ? "(Metric Tonnes of CO2 per Year)" : ""}</p>
      <p>This is only an estimate etc</p>
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