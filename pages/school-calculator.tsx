import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github";
import { usePlugin } from "tinacms";
import { useState } from "react";
import Header from "../components/header";

import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';

const Lang = () => {
  var language ="en";
    const router = useRouter();
    if(router.query.lang){ 
    const lan = JSON.stringify(router.query.lang);
    language = JSON.parse(lan)
    }
    return (language)
  }

  export default function App({ file, href, children}) {
  
  const formOptions = {
    label: 'Home Page',
    fields: [
      {name: 'title', component: 'markdown' },
      {name: 'pageName', component: 'markdown' },
      {name: 'pageURL', component: 'markdown' },
      {name: 'title', component: 'markdown' },
      {name: 'signUp', component: 'markdown' },
      {name: 'Note', component: 'markdown' }
     ]
  }

  const [show, setShow] = useState(false);

  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()
  
  const [selectSize, setSize] = React.useState("");
  const [selectType, setType] = React.useState("");
  const [selectSizeTwo, setSizeTwo] = React.useState("");
  const [selectNum, setNum] = React.useState("");
  const [selectNumTwo, setNumTwo] = React.useState("");


  const [selectTypeThree, setTypeThree] = React.useState("");
  const [selectSizeThree, setSizeThree] = React.useState("");
  const [selectNumThree, setNumThree] = React.useState("");


  const [selectTypeFour, setTypeFour] = React.useState("");
  const [selectSizeFour, setSizeFour] = React.useState("");
  const [selectNumFour, setNumFour] = React.useState("");


  const [selectTypeFive, setTypeFive] = React.useState("");
  const [selectSizeFive, setSizeFive] = React.useState("");
  const [selectNumFive, setNumFive] = React.useState("");


  const [selectTypeSix, setTypeSix] = React.useState("");
  const [selectSizeSix, setSizeSix] = React.useState("");
  const [selectNumSix, setNumSix] = React.useState("");

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


  let schoolTypeThree = null;
  let schoolSizeThree = 1;
  let schoolNumThree = 1;


  let schoolTypeFour = null;
  let schoolSizeFour = 1;
  let schoolNumFour = 1;


  let schoolTypeFive = null;
  let schoolSizeFive = 1;
  let schoolNumFive = 1;


  let schoolTypeSix = null;
  let schoolSizeSix = 1;
  let schoolNumSix = 1;

  buildSize = Number(selectSize);
  schoolType = selectType;
  schoolSize = Number(selectSizeTwo);
  schoolNum = Number(selectNum);
  schoolNumTwo = Number(selectNumTwo);
  buildSizeTwo = Number(selectSizeTwo);




  schoolTypeThree = selectTypeThree;
  schoolSizeThree = Number(selectSizeThree);
  schoolNumThree = Number(selectNumThree);


  schoolTypeFour = selectTypeFour;
  schoolSizeFour = Number(selectSizeFour);
  schoolNumFour = Number(selectNumFour);


  schoolTypeFive = selectTypeFive;
  schoolSizeFive = Number(selectSizeFive);
  schoolNumFive = Number(selectNumFive);


  schoolTypeSix = selectTypeSix;
  schoolSizeSix = Number(selectSizeSix);
  schoolNumSix = Number(selectNumSix);

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
    carPropane: {mult:0.897182946, miles: null},
    trainMiles: {mult:0.06214, miles: null}
  });

  //other vehicle multiplier
  const [otherVehicleSub, setOtherVehicle] = React.useState(0);
  const [otherVehicleArray, setOtherVehicleArray] = React.useState({
    van: {mult:0.14853, miles: null},
    car: {mult:0.1743, miles: null},
    bus: {mult:1.22885, miles: null}
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



  const changeTypeThree = (event) => {
    setTypeThree(event.target.value);
  }

  const changeSizeThree = (event) => {
    setSizeThree(event.target.value);
  }

  const changeNumThree = (event) => {
    setNumThree(event.target.value);
  }



  const changeTypeFour = (event) => {
    setTypeFour(event.target.value);
  }

  const changeSizeFour = (event) => {
    setSizeFour(event.target.value);
  }

  const changeNumFour = (event) => {
    setNumFour(event.target.value);
  }



  const changeTypeFive = (event) => {
    setTypeFive(event.target.value);
  }

  const changeSizeFive = (event) => {
    setSizeFive(event.target.value);
  }

  const changeNumFive = (event) => {
    setNumFive(event.target.value);
  }



  const changeTypeSix = (event) => {
    setTypeSix(event.target.value);
  }

  const changeSizeSix = (event) => {
    setSizeSix(event.target.value);
  }

  const changeNumSix = (event) => {
    setNumSix(event.target.value);
  }


  /* array using data from the spreadsheet, including multipliers */

  const buildArrayTwo = {
    "5000":{	"office": 	13701.48346	, "industrial": 	7179.992482	, "others": 	16688.30884	, none:0	},
"10000":{	"office": 	28729.24786	, "industrial": 	26524.1674	, "others": 	33015.65352	, none:1	},
"25000":{	"office": 	57458.49571	, "industrial": 	53048.3348	, "others": 	66031.30704	, none:2	},
"50000":{	"office": 	85196.594	, "industrial": 	67987.73782	, "others": 	69144.83022	, none:3	},
"75000":{	"office": 	101140.2489	, "industrial": 	56326.22605	, "others": 	66818.29685	, none:4	},
"100000":{	"office": 	202280.4979	, "industrial": 	112652.4521	, "others": 	133636.5937	, none:5	},
"125000":{	"office": 	269707.3305	, "industrial": 	150203.2695	, "others": 	178182.1249	, none:6	},
"150000":{	"office": 	404560.9958	, "industrial": 	225304.9042	, "others": 	267273.1874	, none:7	},
"200000":{	"office": 	881698.6069	, "industrial": 	431126.4907	, "others": 	729395.0741	, none:8	},
"200001":{	"office": 	1763397.214	, "industrial": 	862252.9814	, "others": 	1458790.148	, none:9	}
  }

  const buildArray = {
    "5000":	4757.66316	,
"10000":	50910.79642	,
"25000":	101821.5928	,
"50000":	126421.4294	,
"75000":	85578.96006	,
"100000":	171157.9201	,
"125000":	228210.5602	,
"150000":	342315.8403	,
"200000":	556382.2751	,
"200001":	1112764.55	
  }

  if (schoolNumTwo)
  {
    let multValue = 4.45188684; 
    totalResidenceSize = schoolNumTwo * multValue;
  }

  if (buildSizeTwo || buildSize || totalResidenceSize)
  {
    let i = 0;
    if (buildSize) {
      i += Number(buildArray[buildSize])

    }

    if (totalResidenceSize) {
      i += totalResidenceSize

    }

    if (buildSizeTwo && schoolType ) {
      i += Number(buildArrayTwo[buildSizeTwo][schoolType]) * schoolNum
    }
    subtotalBuild = i;
  }

  if(schoolSizeThree && schoolTypeThree && schoolNumThree) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeThree][schoolTypeThree]) * schoolNumThree
  }

  if(schoolSizeFour && schoolTypeFour && schoolNumFour) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeFour][schoolTypeFour]) * schoolNumFour
  }

  if(schoolSizeFive && schoolTypeFive && schoolNumFive) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeFive][schoolTypeFive]) * schoolNumFive
  }

  if(schoolSizeSix && schoolTypeSix && schoolNumSix) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeSix][schoolTypeSix]) * schoolNumSix
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
  if (typeof window !== 'undefined') {
  localStorage.setItem('schoolfootprint', String(total));
  }

  return (
    <div className="bg-school">
      <Header/>
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col className="col-11 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold tight-drop-light">{editingdata.header}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="p-3 col-11 col-lg-6">
            <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
              <p className="lead text-white m-2 calc-intro">{editingdata.para1}</p>
            </div>
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h4 className="text-green">{editingdata.heatingHeader1}</h4>
                  <hr/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="size">{editingdata.heatingSizeHeader}</label><br />
                  <select name="size" value={selectSize} onChange={changeSize}>
                    <option value="" hidden>{editingdata.select}</option>
                  <option value='5000'>less than 5000</option>
                  <option value='10000'>5000-10,000</option>
                  <option value='25000'>10,000-25,000</option>
                  <option value='50000'>25,000-50,000</option>
                  <option value='75000'>50,000-75,000</option>
                  <option value='100000'>75,000-100,000</option>
                  <option value='125000'>100,00-125,000</option>
                  <option value='150000'>125,000-150,000</option>
                  <option value='200000'>150,000-200,000</option>
                  <option value='200000'>200,000+</option>
                  </select>
                </Col>
              </Row>
              <hr/>
                <h5 className="smallCaps text-small text-green">{editingdata.heatingOtherHeader}</h5>

                <Accordion>

{/* Alt Building Type 1 */}
<Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Additional Building Type 1
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div>
              <Row>
                <Col>
                <label htmlFor="type">{editingdata.heatingOtherTypeHeader}</label><br />
                <select name="type" value={selectTypeThree} onChange={changeTypeThree}>
                  <option value="" hidden>{editingdata.select}</option>
                  <option value='none'>{editingdata.heatingOtherType1}</option>
                  <option value='office'>{editingdata.heatingOtherType2}</option>
                  <option value='industrial'>{editingdata.heatingOtherType3}</option>
                  <option value='others'>{editingdata.heatingOtherType4}</option>
                </select>
                </Col>
              </Row>

              <Row>
                <Col>
                <label htmlFor="size">{editingdata.heatingOtherSizeHeader}</label><br />
                <select name="size" value={selectSizeThree} onChange={changeSizeThree}>
                  <option value="" hidden>{editingdata.select}</option>
                  <option value='5000'>less than 5000</option>
                  <option value='10000'>5000-10,000</option>
                  <option value='25000'>10,000-25,000</option>
                  <option value='50000'>25,000-50,000</option>
                  <option value='75000'>50,000-75,000</option>
                  <option value='100000'>75,000-100,000</option>
                  <option value='125000'>100,00-125,000</option>
                  <option value='150000'>125,000-150,000</option>
                  <option value='200000'>150,000-200,000</option>
                  <option value='200000'>200,000+</option>
                </select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.heatingOtherAmountHeader}</label><br />
                  <input onChange={changeNumThree} name="type" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder1} />
                </Col>
              </Row>

              </div>

              </Accordion.Collapse>
         </Card>
         
         {/* Alt Building Type 2 */}
<Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
              Additional Building Type 2
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <div>
              <Row>
                <Col>
                <label htmlFor="type">{editingdata.heatingOtherTypeHeader}</label><br />
                <select name="type" value={selectTypeFour} onChange={changeTypeFour}>
                  <option value="" hidden>{editingdata.select}</option>
                  <option value='none'>{editingdata.heatingOtherType1}</option>
                  <option value='office'>{editingdata.heatingOtherType2}</option>
                  <option value='industrial'>{editingdata.heatingOtherType3}</option>
                  <option value='others'>{editingdata.heatingOtherType4}</option>
                </select>
                </Col>
              </Row>

              <Row>
                <Col>
                <label htmlFor="size">{editingdata.heatingOtherSizeHeader}</label><br />
                <select name="size" value={selectSizeFour} onChange={changeSizeFour}>
                  <option value="" hidden>{editingdata.select}</option>
                  <option value='5000'>less than 5000</option>
                  <option value='10000'>5000-10,000</option>
                  <option value='25000'>10,000-25,000</option>
                  <option value='50000'>25,000-50,000</option>
                  <option value='75000'>50,000-75,000</option>
                  <option value='100000'>75,000-100,000</option>
                  <option value='125000'>100,00-125,000</option>
                  <option value='150000'>125,000-150,000</option>
                  <option value='200000'>150,000-200,000</option>
                  <option value='200000'>200,000+</option>
                </select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.heatingOtherAmountHeader}</label><br />
                  <input onChange={changeNumFour} name="type" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder1} />
                </Col>
              </Row>

              </div>

              </Accordion.Collapse>
         </Card>
 
 {/* Alt Building Type 3 */}
<Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
              Additional Building Type 3
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <div>
              <Row>
                <Col>
                <label htmlFor="type">{editingdata.heatingOtherTypeHeader}</label><br />
                <select name="type" value={selectTypeFive} onChange={changeTypeFive}>
                  <option value="" hidden>{editingdata.select}</option>
                  <option value='none'>{editingdata.heatingOtherType1}</option>
                  <option value='office'>{editingdata.heatingOtherType2}</option>
                  <option value='industrial'>{editingdata.heatingOtherType3}</option>
                  <option value='others'>{editingdata.heatingOtherType4}</option>
                </select>
                </Col>
              </Row>

              <Row>
                <Col>
                <label htmlFor="size">{editingdata.heatingOtherSizeHeader}</label><br />
                <select name="size" value={selectSizeFive} onChange={changeSizeFive}>
                  <option value="" hidden>{editingdata.select}</option>
                  <option value='5000'>less than 5000</option>
                  <option value='10000'>5000-10,000</option>
                  <option value='25000'>10,000-25,000</option>
                  <option value='50000'>25,000-50,000</option>
                  <option value='75000'>50,000-75,000</option>
                  <option value='100000'>75,000-100,000</option>
                  <option value='125000'>100,00-125,000</option>
                  <option value='150000'>125,000-150,000</option>
                  <option value='200000'>150,000-200,000</option>
                  <option value='200000'>200,000+</option>
                </select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.heatingOtherAmountHeader}</label><br />
                  <input onChange={changeNumFive} name="type" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder1} />
                </Col>
              </Row>

              </div>

              </Accordion.Collapse>
         </Card>
 
 {/* Alt Building Type 4 */}
 <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
              Additional Building Type 4
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <div>
              <Row>
                <Col>
                <label htmlFor="type">{editingdata.heatingOtherTypeHeader}</label><br />
                <select name="type" value={selectTypeSix} onChange={changeTypeSix}>
                  <option value="" hidden>{editingdata.select}</option>
                  <option value='none'>{editingdata.heatingOtherType1}</option>
                  <option value='office'>{editingdata.heatingOtherType2}</option>
                  <option value='industrial'>{editingdata.heatingOtherType3}</option>
                  <option value='others'>{editingdata.heatingOtherType4}</option>
                </select>
                </Col>
              </Row>

              <Row>
                <Col>
                <label htmlFor="size">{editingdata.heatingOtherSizeHeader}</label><br />
                <select name="size" value={selectSizeSix} onChange={changeSizeSix}>
                  <option value="" hidden>{editingdata.select}</option>
                  <option value='5000'>less than 5000</option>
                  <option value='10000'>5000-10,000</option>
                  <option value='25000'>10,000-25,000</option>
                  <option value='50000'>25,000-50,000</option>
                  <option value='75000'>50,000-75,000</option>
                  <option value='100000'>75,000-100,000</option>
                  <option value='125000'>100,00-125,000</option>
                  <option value='150000'>125,000-150,000</option>
                  <option value='200000'>150,000-200,000</option>
                  <option value='200000'>200,000+</option>
                </select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.heatingOtherAmountHeader}</label><br />
                  <input onChange={changeNumSix} name="type" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder1} />
                </Col>
              </Row>

              </div>

              </Accordion.Collapse>
         </Card>
 

         </Accordion>
              <Row>
                <Col>
                  <label htmlFor="energy">{editingdata.heatingOtherResidencyHeader}</label>
                  <br />
                  <input onChange={changeNumTwo} name="type" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder2} />
                </Col>
              </Row> 
            </div>
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h3 className="text-green">{editingdata.empCommuteHeader}</h3>
                  <p className="text-grey">{editingdata.empCommutePara}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4">{editingdata.empCommuteCar}</Col>
                <Col className="col-xl-4">
                  <input onChange={calculateTransitCount} name="transitCar" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder3} />
                </Col>
                <Col className="col-xl-4">
                  <input onChange={calculateTransitMiles} name="transitCar" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4">{editingdata.empCommuteBus}</Col>
                <Col className="col-xl-4">
                <input onChange={calculateTransitCount} name="transitBus" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder5} />
                </Col>
                <Col className="col-xl-4">
                <input onChange={calculateTransitMiles} name="transitBus" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
              <Row>
                <Col className="col-10 col-xl-4">
                Train
                </Col>
                <Col className="col-6 col-xl-4">
                <input onChange={calculateTransitCount} name="transitTrain" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder5} />
                </Col>
                <Col className="col-6 col-xl-4">
                <input onChange={calculateTransitMiles} name="transitTrain" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
            </div>

            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h3 className="text-green">{editingdata.stuCommuteHeader}</h3>
                  <p className="text-grey">Please input the following information for your students' daily school bus commute (daily round trips):</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4">{editingdata.stuCommuteGas}</Col>
                <Col className="col-xl-4">
                  <input onChange={calculateStudentCommuteCount} name="gasoline" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder6} />
                </Col>
                <Col className="col-xl-4">
                  <input onChange={calculateStudentCommuteMiles} name="gasoline" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4">{editingdata.stuCommuteDiesel}</Col>
                <Col className="col-xl-4">
                  <input onChange={calculateStudentCommuteCount} name="diesel" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder6} />
                </Col>
                <Col className="col-xl-4">
                  <input onChange={calculateStudentCommuteMiles} name="diesel" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
              <Row>
                <Col className="col-10 col-xl-4">{editingdata.stuCommutePropane}</Col>
                <Col className="col-6 col-xl-4">
                  <input onChange={calculateStudentCommuteCount} name="propane" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder6} />
                </Col>
                <Col className="col-6 col-xl-4">
                  <input onChange={calculateStudentCommuteMiles} name="propane" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col className="col-12">
                  <label htmlFor="type">{editingdata.stuCommuteBus}</label>
                  <br />
                </Col>
                <Col className ="col-6">
                  <input onChange={calculateStudentCommuteCount} name="cityBus" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder7} />
                </Col>
                <Col className ="col-6">
                  <input onChange={calculateStudentCommuteMiles} name="cityBus" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
              <Row>
                <Col className="col-12">
                  <label htmlFor="type">{editingdata.stuCommuteDrop}</label>
                  <br />
                </Col>
                <Col className ="col-6">
                  <input onChange={calculateStudentCommuteCount} name="car" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder7} />
                </Col>
                <Col className ="col-6">
                  <input onChange={calculateStudentCommuteMiles} name="car" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
              <Row>
                <Col className="col-12">
                  <label htmlFor="type">{editingdata.stuCommuteTrain}</label>
                  <br />
                </Col>
                <Col className ="col-6">
                  <input onChange={calculateStudentCommuteCount} name="train" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder7} />
                </Col>
                <Col className ="col-6">
                  <input onChange={calculateStudentCommuteMiles} name="train" type="number" min="0" onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                </Col>
              </Row>
            </div>

            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col className="col-12">
                  <h3 className="text-green">{editingdata.otherTransportHeader1}</h3>
                  <p className="text-grey">{editingdata.otherTransportPara1}</p>
                  <hr/>
                </Col>
                
                <Col>
                  <h5 className="smallCaps text-small text-green">{editingdata.otherTransportHeader2}</h5>
                  <Row>
                    <Col className="col-12 col-xl-4">{editingdata.otherTransportGas}</Col>
                    <Col className="col-xl-4">
                      <input onChange={calculateMiles} name="carGas" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                  <Row>
                    <Col  className="col-10 col-xl-4">{editingdata.otherTransportDiesel}</Col>
                    <Col className="col-6 col-xl-4">
                      <input onChange={calculateMiles} name="carDiesel" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-10 col-xl-4">{editingdata.otherTransportPropane}</Col>
                    <Col className="col-6 col-xl-4">
                      <input onChange={calculateMiles} name="carPropane" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                 
                  <hr/>
                  <h5 className="smallCaps text-small text-green">Field trips by train (WITHIN SCHOOL HOURS)</h5>
                  <Row>
                    <Col className="col-10 col-xl-4">Train</Col>
                    <Col className="col-6 col-xl-4">
                      <input onChange={calculateMiles} name="trainMiles" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col className="col-12">
                  <h3 className="text-green">{editingdata.otherVehicleHeader}</h3>
                  <hr/>
                  <Row>
                    <Col className="col-12 col-xl-4">{editingdata.otherVehicleVan}</Col>
                    <Col className="col-xl-4">
                      <input onChange={calculateOtherTransitMiles} name="van" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                  <Row>
                    <Col  className="col-10 col-xl-4">{editingdata.otherVehicleCar}</Col>
                    <Col className="col-6 col-xl-4">
                      <input onChange={calculateOtherTransitMiles} name="car" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                  <Row>
                    <Col  className="col-10 col-xl-4">Bus (gas)</Col>
                    <Col className="col-6 col-xl-4">
                      <input onChange={calculateOtherTransitMiles} name="bus" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col className="col-12">
                  <h3 className="text-green">{editingdata.activitiesHeader}</h3>
                  <p className="text-grey">{editingdata.activitiesPara1}</p>
                  <hr/>
                </Col>
                <Col>
                  <Row>
                    <Col className="col-12 col-xl-4">{editingdata.activitiesGas}</Col>
                    <Col className="col-xl-4">
                      <input onChange={calculateMiles} name="carGas" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                  <Row>
                    <Col  className="col-10 col-xl-4">{editingdata.activitiesDiesel}</Col>
                    <Col className="col-6 col-xl-4">
                      <input onChange={calculateMiles} name="carDiesel" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-10 col-xl-4">{editingdata.activitiesPropane}</Col>
                    <Col className="col-6 col-xl-4">
                      <input onChange={calculateMiles} name="carPropane" type="number" min="0" onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>


            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h3 className="text-green">{editingdata.travelHeader}</h3>
                  <p className="text-grey">{editingdata.travelPara}</p>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col className="col-12 col-xl-4">{editingdata.travelShort}</Col>
                  <Col>
                    <Row>
                      <Col className="col-6 col-md-6">{editingdata.travelShort1}</Col>
                      <Col className="col-6 col-xl-6">
                        <input onChange={calculateFlightCount} name="flyShort" type="number" min="0" onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr/>
              <Row>
                  <Col className="col-10 col-xl-4">{editingdata.travelMed}</Col>
                  <Col>
                    <Row>
                      <Col className="col-6">{editingdata.travelMed1}</Col>
                      <Col className="col-6">
                        <input onChange={calculateFlightCount} name="flyMediumEco" type="number" min="0" onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-6">{editingdata.travelMed2}</Col>
                      <Col className="col-6">
                        <input onChange={calculateFlightCount} name="flyMediumBus" type="number" min="0" onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col className="col-10 col-xl-4">{editingdata.travelLong}</Col>
                  <Col className="col-12 col-xl-8">
                    <Row>
                      <Col>{editingdata.travelLong1}</Col>
                      <Col>
                        <input onChange={calculateFlightCount} name="flyLongEco" type="number" min="0" onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>{editingdata.travelLong2}</Col>
                      <Col>
                        <input onChange={calculateFlightCount} name="flyLongEcoPlus" type="number" min="0" onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>{editingdata.travelLong3}</Col>
                      <Col>
                        <input onChange={calculateFlightCount} name="flyLongBus" type="number" min="0" onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>{editingdata.travelLong4}</Col>
                      <Col>
                        <input onChange={calculateFlightCount} name="flyLongFirst" type="number" min="0" onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </div>
          </Col>

          <Col className=" p-3  col-11 col-lg-4 stickyCalc mb-4">
            <div className="text-white p-5 innerShadow roundedBox bg-green">
              <h4 className="mb-0">{editingdata.dataHeader}</h4>
              <hr/>
              <Row><Col>{editingdata.dataType1}</Col><Col className="text-right bold">{subtotalBuild > 0 ? (subtotalBuild/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType2}</Col><Col className="text-right bold">{transitSub > 0 ? (transitSub/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType3}</Col><Col className="text-right bold">{studentCommute > 0 ? (studentCommute/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType4}</Col><Col className="text-right bold">{vehicleSub > 0 ? (vehicleSub/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType5}</Col><Col className="text-right bold">{otherVehicleSub > 0 ? (otherVehicleSub/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType6}</Col><Col className="text-right bold">{flightSub > 0 ? (flightSub/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <span className="smallCaps text-small">{editingdata.dataTotal}</span><br/>
              <span className="h2 bold">{total > 0 ? (total/1000).toFixed(2) : "--"}</span>
              <p>{total > 0 ? "(Metric Tonnes of CO2 per Year)" : ""}</p>
              <p className="text-small">{editingdata.dataDisclaimer}</p>
            </div>

          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="col-11 col-lg-10 align-items-center text-center p-3">
            <div className="bg-brown p-4 innerShadow roundedBox">
              <p className="smallCaps text-orange mb-3">{editingdata.box1Header}</p>
            <Link href="smart-forest-school"><Button className="btn-large mt-1" variant="green">{editingdata.box1Button}</Button></Link>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col className="col-11 col-lg-10 pt-5">
            <h2 className=" text-orange text-center pt-5 bold mb-4 tight-drop-light">{editingdata.otherHeader}</h2>
          </Col>
        </Row>

        <Row className="justify-content-center pb-5 mb-5">
            <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
                <h4 className="text-white tight-drop-light">{editingdata.otherbox1Header}</h4>
                <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox1Para}</p>
                <Link href="business-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox1button}</a></Link>
              </div>
            </Col>

            <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
                <h4 className="text-white tight-drop-light">{editingdata.otherbox2Header}</h4>
                <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox2Para}</p>\
                <Link href="personal-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox2button}</a></Link>
              </div>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

/**
* Fetch data with getStaticProps based on 'preview' mode
*/
export const getStaticProps: GetStaticProps = async function({preview, previewData,}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/school-calculator.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/school-calculator.json',
        data: (await import('../content/school-calculator.json')).default,
      },
    },
  }
}