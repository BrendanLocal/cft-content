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
import { useEffect } from 'react';
import Header from "../components/header";
import randomstring from "randomstring";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';
import Head from "next/head";

let sessionID = randomstring.generate(12);

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
  };

  const [editingdata, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();
  
  const [selectSize, setSize] = React.useState("");

  const schoolSize = Number(selectSize);

  const changeSize = (event) => {
    setSize(event.target.value);
  };

  const [selectNumTwo, setNumTwo] = React.useState("");

  const schoolNumTwo = Number(selectNumTwo);

  const changeNumTwo = (event) => {
    setNumTwo(event.target.value);
  };

  const [selectTypeThree, setTypeThree] = React.useState("");
  const [selectSizeThree, setSizeThree] = React.useState("");
  const [selectNumThree, setNumThree] = React.useState("");

  const schoolSizeThree = Number(selectSizeThree);
  const schoolTypeThree = selectTypeThree;
  const schoolNumThree = Number(selectNumThree);

  const changeTypeThree = (event) => {
    setTypeThree(event.target.value);
  };

  const changeSizeThree = (event) => {
    setSizeThree(event.target.value);
  };

  const changeNumThree = (event) => {
    setNumThree(event.target.value);
  };

  const [selectTypeFour, setTypeFour] = React.useState("");
  const [selectSizeFour, setSizeFour] = React.useState("");
  const [selectNumFour, setNumFour] = React.useState("");

  const schoolSizeFour = Number(selectSizeFour);
  const schoolTypeFour = selectTypeFour;
  const schoolNumFour = Number(selectNumFour);

  const changeTypeFour = (event) => {
    setTypeFour(event.target.value);
  };

  const changeSizeFour = (event) => {
    setSizeFour(event.target.value);
  };

  const changeNumFour = (event) => {
    setNumFour(event.target.value);
  };

  const [selectTypeFive, setTypeFive] = React.useState("");
  const [selectSizeFive, setSizeFive] = React.useState("");
  const [selectNumFive, setNumFive] = React.useState("");

  const schoolSizeFive = Number(selectSizeFive);
  const schoolTypeFive = selectTypeFive;
  const schoolNumFive = Number(selectNumFive);

  const changeTypeFive = (event) => {
    setTypeFive(event.target.value);
  };

  const changeSizeFive = (event) => {
    setSizeFive(event.target.value);
  };

  const changeNumFive = (event) => {
    setNumFive(event.target.value);
  };

  const [selectTypeSix, setTypeSix] = React.useState("");
  const [selectSizeSix, setSizeSix] = React.useState("");
  const [selectNumSix, setNumSix] = React.useState("");

  const schoolSizeSix = Number(selectSizeSix);
  const schoolTypeSix = selectTypeSix;
  const schoolNumSix = Number(selectNumSix);

  const changeTypeSix = (event) => {
    setTypeSix(event.target.value);
  };

  const changeSizeSix = (event) => {
    setSizeSix(event.target.value);
  };

  const changeNumSix = (event) => {
    setNumSix(event.target.value);
  };

  let subtotalBuild = 0; 
  let subtotalTransit = 0;
  let studentCommuteSubtotal = 0;
  let subtotalOtherVehicle = 0;
  let subtotalVehicle = 0;
  let subtotalFlight = 0;

  //employee commute
  const [transitSub, setTransit] = React.useState(0);
  const [transitArray, setTransitArray] = React.useState({
    transitCar: {mult:0.1743, days:195, count: '', miles: ''},
    transitBus: {mult:0.06214, days:195,count: '', miles: ''},
    transitTrain: {mult:0.06214, days:195, count: '', miles: ''}
  });

  //student commute
  const [studentCommute, setStudentCommute] = React.useState(0);
  const [studentCommuteArray, setstudentCommuteArray] = React.useState({
    gasoline: {mult:1.22885, days:183, count: '', miles: ''},
    diesel: {mult:0.74350344, days:183, count: '', miles: ''},
    propane: {mult:0.897182946, days:183, count: '', miles: ''},
    cityBus: {mult:0.06214, days:183, count: '', miles: ''},
    car: {mult:0.1743, days:183, count: '', miles: ''},
    train: {mult:0.06214, days:183, count: '', miles: ''}
  });

  //vehicle multiplier
  const [vehicleSub, setVehicle] = React.useState(0);
  const [vehicleArray, setVehicleArray] = React.useState({
    carGas: {mult:1.22885, miles: ''},
    carDiesel: {mult:0.74350344, miles: ''},
    carPropane: {mult:0.897182946, miles: ''},
    carHybrid: { mult: 0.10487, count: '', miles: '' },
    carPlug: { mult: 0.02935, count: '', miles: '' },
    carElectric: { mult: 0.000001, count: '', miles: '' },
    trainMiles: {mult:0.06214, miles: ''}
  });

  //other vehicle multiplier
  const [otherVehicleSub, setOtherVehicle] = React.useState(0);
  const [otherVehicleArray, setOtherVehicleArray] = React.useState({
    van: {mult:0.14853, miles: ''},
    car: {mult:0.1743, miles: ''},
    bus: {mult:1.22885, miles: ''}
  });

  //flight multiplier
  const [flightSub, setFlight] = React.useState(0);
  const [flightArray, setFlightArray] = React.useState({
    flyShort: {mult:122.15,count: ''},
    flyMediumEco: {mult:305.96,count: ''},
    flyMediumBus: {mult:458.94,count: ''},
    flyLongEco: {mult:696.225,count: ''},
    flyLongEcoPlus: {mult:1113.9,count: ''},
    flyLongBus: {mult:2018.95,count: ''},
    flyLongFirst: {mult:2784.75,count: ''},
  });

  /* array using data from the spreadsheet, including multipliers */
  const buildArray = {
    "5000":	4757.66316,
    "10000": 50910.79642,
    "25000": 101821.5928,
    "50000": 126421.4294,
    "75000": 85578.96006,
    "100000":	171157.9201,
    "125000":	228210.5602,
    "150000":	342315.8403,
    "200000":	556382.2751,
    "200001":	1112764.55	
  };

  const buildArrayTwo = {
    "5000": {	"office": 13701.48346, "industrial": 7179.992482, "others": 16688.30884, none: 0 },
    "10000": { "office": 28729.24786, "industrial": 26524.1674, "others": 33015.65352, none: 1 },
    "25000": { "office": 57458.49571, "industrial": 53048.3348, "others": 66031.30704, none: 2 },
    "50000": { "office": 85196.594, "industrial": 67987.73782, "others": 69144.83022, none: 3	},
    "75000": { "office": 101140.2489, "industrial": 56326.22605, "others": 66818.29685, none: 4	},
    "100000": {	"office": 202280.4979, "industrial": 112652.4521, "others": 133636.5937, none: 5 },
    "125000": {	"office": 269707.3305, "industrial": 150203.2695, "others": 178182.1249, none: 6 },
    "150000": {	"office": 404560.9958, "industrial": 225304.9042, "others": 267273.1874, none: 7 },
    "200000": {	"office": 881698.6069, "industrial": 431126.4907, "others": 729395.0741, none: 8 },
    "200001": {	"office": 1763397.214, "industrial": 862252.9814, "others": 1458790.148, none: 9 }
  };

  if (schoolSize) {
    subtotalBuild += Number(buildArray[schoolSize]);
  }

  if (schoolNumTwo) {
    subtotalBuild += schoolNumTwo * 4.45188684;
  }

  if (schoolSizeThree && schoolTypeThree && schoolNumThree) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeThree][schoolTypeThree]) * schoolNumThree;
  }

  if (schoolSizeFour && schoolTypeFour && schoolNumFour) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeFour][schoolTypeFour]) * schoolNumFour;
  }

  if (schoolSizeFive && schoolTypeFive && schoolNumFive) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeFive][schoolTypeFive]) * schoolNumFive;
  }

  if (schoolSizeSix && schoolTypeSix && schoolNumSix) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeSix][schoolTypeSix]) * schoolNumSix;
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
  };

  const calculateMiles=(e)=>{
    vehicleArray[e.target.name].miles = Number(e.target.value)
    calculateVehicle()
  };

  const calculateFlight=()=> {
    subtotalFlight = 0
    for (let x of Object.keys(flightArray))
    {
      let i = 0;
      i += Number((flightArray[x].count * flightArray[x].mult))
      subtotalFlight += i
    }
    setFlight(Number(subtotalFlight))
  };
    
  const calculateFlightCount=(e)=>{
    flightArray[e.target.name].count = Number(e.target.value)
    calculateFlight()
  };
    
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
  };

  const calculateOtherTransitMiles=(e)=>{
    otherVehicleArray[e.target.name].miles = Number(e.target.value)
    calculateOtherVehicle()
  };

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
  };

  const calculateTransitMiles=(e)=>{
    transitArray[e.target.name].miles = Number(e.target.value)
    calculateTransit()
  };

  const calculateTransitCount=(e)=>{
    transitArray[e.target.name].count = Number(e.target.value)
    calculateTransit()
  };

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
  };

  const calculateStudentCommuteCount=(e)=>{
    studentCommuteArray[e.target.name].count = Number(e.target.value)
    calculateStudentCommuteTransit()
  };

  const calculateStudentCommuteMiles=(e)=>{
    studentCommuteArray[e.target.name].miles = Number(e.target.value)
    calculateStudentCommuteTransit()
  };

  /* calculate the 'total' here by adding on the other subtotals */
  const total = vehicleSub + subtotalBuild + flightSub + transitSub + studentCommute + otherVehicleSub;

  const otherTransportTotal = vehicleSub + otherVehicleSub;
  if (typeof window !== 'undefined') {
    localStorage.setItem('schoolfootprint', String((total/1000).toFixed(2)));
  }

  const fullUrlPrefix = '/school-calculator?session=';
  const sharingUrlPrefix = '/school-calculator-share?session=';
  const [fullUrl, setFullUrl] = React.useState('/school-calculator');
  const [sharingUrl, setSharingUrl] = React.useState('/school-calculator-share');

  const router = useRouter();
  const [sessionDataError, setSessionDataError] = React.useState("");
  useEffect(() => {
    if (router.isReady) {
      if (router.query.session) {
        sessionID = router.query.session;
      }
      else if (localStorage.getItem('school-calculator_sessionID')) {
        sessionID = localStorage.getItem('school-calculator_sessionID');
      }
      
      setFullUrl(fullUrlPrefix + sessionID);
      setSharingUrl(sharingUrlPrefix + sessionID);
  
      localStorage.setItem('school-calculator_sessionID', sessionID);
  
      try {
        fetch(`/api/calc?sessionID=${sessionID}&type=school-calculator`).then(async (response) => {
          if (response.status === 200) {
            const sessionData = await response.json();
            const sessionCalcData = sessionData.calcData && sessionData.calcData.data ? sessionData.calcData.data : {};

            if (sessionCalcData.selectSize !== undefined) {
              setSize(sessionCalcData.selectSize);
            }

            if (sessionCalcData.selectNumTwo !== undefined) {
              setNumTwo(sessionCalcData.selectNumTwo);
            }

            if (sessionCalcData.selectSizeThree !== undefined) {
              setSizeThree(sessionCalcData.selectSizeThree);
            }

            if (sessionCalcData.selectTypeThree !== undefined) {
              setTypeThree(sessionCalcData.selectTypeThree);
            }

            if (sessionCalcData.selectNumThree !== undefined) {
              setNumThree(sessionCalcData.selectNumThree);
            }

            if (sessionCalcData.selectSizeFour !== undefined) {
              setSizeFour(sessionCalcData.selectSizeFour);
            }

            if (sessionCalcData.selectTypeFour !== undefined) {
              setTypeFour(sessionCalcData.selectTypeFour);
            }

            if (sessionCalcData.selectNumFour !== undefined) {
              setNumFour(sessionCalcData.selectNumFour);
            }

            if (sessionCalcData.selectSizeFive !== undefined) {
              setSizeFive(sessionCalcData.selectSizeFive);
            }

            if (sessionCalcData.selectTypeFive !== undefined) {
              setTypeFive(sessionCalcData.selectTypeFive);
            }

            if (sessionCalcData.selectNumFive !== undefined) {
              setNumFive(sessionCalcData.selectNumFive);
            }

            if (sessionCalcData.selectSizeSix !== undefined) {
              setSizeSix(sessionCalcData.selectSizeSix);
            }

            if (sessionCalcData.selectTypeSix !== undefined) {
              setTypeSix(sessionCalcData.selectTypeSix);
            }

            if (sessionCalcData.selectNumSix !== undefined) {
              setNumSix(sessionCalcData.selectNumSix);
            }

            if (sessionCalcData.transitArray !== undefined) {
              setTransitArray(sessionCalcData.transitArray);
            }

            if (sessionCalcData.studentCommuteArray !== undefined) {
              setstudentCommuteArray(sessionCalcData.studentCommuteArray);
            }

            if (sessionCalcData.vehicleArray !== undefined) {
              setVehicleArray(sessionCalcData.vehicleArray);
            }

            if (sessionCalcData.otherVehicleArray !== undefined) {
              setOtherVehicleArray(sessionCalcData.otherVehicleArray);
            }

            if (sessionCalcData.flightArray !== undefined) {
              setFlightArray(sessionCalcData.flightArray);
            }

            if (sessionCalcData.transitSub !== undefined) {
              setTransit(sessionCalcData.transitSub);
            }

            if (sessionCalcData.studentCommute !== undefined) {
              setStudentCommute(sessionCalcData.studentCommute);
            }
            
            if (sessionCalcData.vehicleSub !== undefined) {
              setVehicle(sessionCalcData.vehicleSub);
            }

            if (sessionCalcData.otherVehicleSub !== undefined) {
              setOtherVehicle(sessionCalcData.otherVehicleSub);
            }

            if (sessionCalcData.flightSub !== undefined) {
              setFlight(sessionCalcData.flightSub);
            }
          }
          else {
            setSessionDataError(await response.text());
          }
        });
      }
      catch (error) {
        setSessionDataError('An unknown error has occurred while loading calculator session.');
      }
    }
  }, [router.query]);

  const saveSession = async (e, successCallback: () => void, failureCallback: (error) => void) => {
    e.preventDefault();

    const body = {
      sessionID: sessionID,
      type: 'school-calculator',
      data: {
        selectSize,
        selectNumTwo,
        selectSizeThree,
        selectTypeThree,
        selectNumThree,
        selectSizeFour,
        selectTypeFour,
        selectNumFour,
        selectSizeFive,
        selectTypeFive,
        selectNumFive,
        selectSizeSix,
        selectTypeSix,
        selectNumSix,
        transitArray,
        studentCommuteArray,
        vehicleArray,
        otherVehicleArray,
        flightArray,
        transitSub,
        studentCommute,
        vehicleSub,
        otherVehicleSub,
        flightSub
      }
    };

    try {
      const res = await fetch('/api/calc', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        successCallback();
      }
      else {
        const error_message = await res.text();
        failureCallback(error_message);
      }
    }
    catch (error) {
      failureCallback('An unknown error has occurred while saving calculator session.');
    }
  };

  const [fullUrlError, setFullUrlError] = React.useState("");
  const fullUrlClick = (e) => {
    saveSession(e, () => {
      setFullUrlError("");
      router.push(e.target.getAttribute('href'));
    }, (error) => {
      setFullUrlError(error);
    });
  };

  const [nextStepError, setNextStepError] = React.useState("");
  const nextStepClick = (e) => {
    saveSession(e, () => {
      setNextStepError("");
      router.push("/smart-forest-school");
    }, (error) => {
      setNextStepError(error);
    });
  };

  return (
    <div className="bg-school">
      <Header/>
      <Head>
        <title>{editingdata.header}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <Container className="p-4 pt-5">
        <Row className="justify-content-center">
          <Col className="col-12 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold tight-drop-light">{editingdata.header}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="p-3 col-12 col-lg-6">
            <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
              <p className="lead text-white m-2 calc-intro">{editingdata.para1}</p>
            </div>
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  {sessionDataError ? <p style={{ color: 'red' }}>{sessionDataError}</p> : null}
                  <h3 className="text-green">{editingdata.heatingHeader1}</h3>
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
              <hr className="mb-4"/>
                <h5 className="smallCaps text-small text-green">{editingdata.heatingOtherHeader}</h5>

                <Row>
                  <Col>
                    <label htmlFor="energy">{editingdata.heatingOtherResidencyHeader}</label>
                    <br />
                    <input onChange={changeNumTwo} name="type" type="number" min="0" value={schoolNumTwo} onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.placeholder2} />
                    <p className="x-small mb-3 op-7">{editingdata.placeholder2}</p>
                  </Col>
                </Row> 

                <Accordion>

{/* Alt Building Type 1 */}
<Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <p>
                  Additional Building Type 1
                  </p>
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
                  <input onChange={changeNumThree} name="type" type="number" min="0" value={schoolNumThree} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder1} />
                  
                  <p className="x-small mb-3 op-7">{editingdata.placeholder1}</p>
                </Col>
              </Row>

              </div>

              </Accordion.Collapse>
         </Card>
         
         {/* Alt Building Type 2 */}
<Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
              <p>
              Additional Building Type 2
              </p>
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
                  <input onChange={changeNumFour} name="type" type="number" min="0" value={schoolNumFour} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder1} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder1}</p>
                </Col>
              </Row>

              </div>

              </Accordion.Collapse>
         </Card>
 
 {/* Alt Building Type 3 */}
<Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
              <p>
              Additional Building Type 3
              </p>
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
                  <input onChange={changeNumFive} name="type" type="number" min="0" value={schoolNumFive} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder1} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder1}</p>
                </Col>
              </Row>

              </div>

              </Accordion.Collapse>
         </Card>
 
 {/* Alt Building Type 4 */}
 <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
              <p>
                Additional Building Type 4
                </p>
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
                  <input onChange={changeNumSix} name="type" type="number" min="0" value={schoolNumSix} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder1} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder1}</p>
                </Col>
              </Row>

              </div>

              </Accordion.Collapse>
         </Card>
 

         </Accordion>
            </div>
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                <h3 className="text-green">Commute</h3>
                  <hr/>
                </Col>
              </Row>
              <Row>
              
              <Col className="col-12 mb-4">
                <h5 className="smallCaps text-small text-green">Employees</h5>
                <p className="text-grey">{editingdata.empCommutePara}</p>
              </Col>
                <Col className="col-12 col-xl-4 bold">{editingdata.empCommuteCar}</Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <input onChange={calculateTransitCount} name="transitCar" type="number" min="0" value={transitArray.transitCar.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder3} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder3}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <input onChange={calculateTransitMiles} name="transitCar" type="number" min="0" value={transitArray.transitCar.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 bold">{editingdata.empCommuteBus}</Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitCount} name="transitBus" type="number" min="0" value={transitArray.transitBus.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder5} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder5}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitMiles} name="transitBus" type="number" min="0" value={transitArray.transitBus.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row> 
              <Row>
                <Col className="col-12 col-xl-4 bold">
                Train
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitCount} name="transitTrain" type="number" min="0" value={transitArray.transitTrain.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder5} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder5}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitMiles} name="transitTrain" type="number" min="0" value={transitArray.transitTrain.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>

              <Row>
                <Col className="mb-3">
                <hr className="mb-4"/>
                  <h5 className="smallCaps text-small text-green">Students</h5>
                  <p className="text-grey">If you would like to include the carbon footprint of your students, please complete the following:</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 bold">{editingdata.stuCommuteGas}</Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <input onChange={calculateStudentCommuteCount} name="gasoline" type="number" min="0" value={studentCommuteArray.gasoline.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder6} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder6}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <input onChange={calculateStudentCommuteMiles} name="gasoline" type="number" min="0" value={studentCommuteArray.gasoline.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 bold">{editingdata.stuCommuteDiesel}</Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <input onChange={calculateStudentCommuteCount} name="diesel" type="number" min="0" value={studentCommuteArray.diesel.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder6} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder6}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <input onChange={calculateStudentCommuteMiles} name="diesel" type="number" min="0" value={studentCommuteArray.diesel.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 bold">{editingdata.stuCommutePropane}</Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <input onChange={calculateStudentCommuteCount} name="propane" type="number" min="0" value={studentCommuteArray.propane.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder6} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder6}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <input onChange={calculateStudentCommuteMiles} name="propane" type="number" min="0" value={studentCommuteArray.propane.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col className="col-12">
                  <label htmlFor="type">{editingdata.stuCommuteBus}</label>
                  <br />
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <input onChange={calculateStudentCommuteCount} name="cityBus" type="number" min="0" value={studentCommuteArray.cityBus.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder7} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder7}</p>
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <input onChange={calculateStudentCommuteMiles} name="cityBus" type="number" min="0" value={studentCommuteArray.cityBus.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12">
                  <label htmlFor="type">{editingdata.stuCommuteDrop}</label>
                  <br />
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <input onChange={calculateStudentCommuteCount} name="car" type="number" min="0" value={studentCommuteArray.car.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder7} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder7}</p>
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <input onChange={calculateStudentCommuteMiles} name="car" type="number" min="0" value={studentCommuteArray.car.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12">
                  <label htmlFor="type">{editingdata.stuCommuteTrain}</label>
                  <br />
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <input onChange={calculateStudentCommuteCount} name="train" type="number" min="0" value={studentCommuteArray.train.count} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder7} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder7}</p>
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <input onChange={calculateStudentCommuteMiles} name="train" type="number" min="0" value={studentCommuteArray.train.miles} onKeyPress={
                    (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.placeholder4} />
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
            <hr className="mb-4"/>
              <Row>
                <Col className="col-12 mb-3">
                  <h5 className="smallCaps text-small text-green">{editingdata.otherTransportHeader1}</h5>
                  <p className="text-grey">{editingdata.otherTransportPara1}</p>
                </Col>
                
                <Col>

                <Row>
                  <Col className="col-12 col-xl-4 mb-2 bold">Bus</Col>
                    <Col>
                      <Row>
                        <Col className="col-12 col-xl-4 col-sm-6">{editingdata.otherTransportGas}</Col>
                          <Col className="col-12 col-xl-8 col-sm-6">
                          <input onChange={calculateMiles} name="carGas" type="number" min="0" value={vehicleArray.carGas.miles} onKeyPress={
                            (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                          }  placeholder={editingdata.placeholder8} />
                          <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                          </Col>
                      </Row>
                      <Row>
                      <Col  className="col-10 col-xl-4 col-sm-6">{editingdata.otherTransportDiesel}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateMiles} name="carDiesel" type="number" min="0" value={vehicleArray.carDiesel.miles} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder8} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-10 col-xl-4 col-sm-6">{editingdata.otherTransportPropane}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateMiles} name="carPropane" type="number" min="0" value={vehicleArray.carPropane.miles} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder8} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                      </Col>
                    </Row>
                    </Col>
                  </Row>    
                 
                  
                  <Row>
                    <Col className="col-10 col-xl-4 col-sm-6 bold ">Train/Subway</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <input onChange={calculateMiles} name="trainMiles" type="number" min="0" value={vehicleArray.trainMiles.miles} onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                      <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.otherVehicleVan}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <input onChange={calculateOtherTransitMiles} name="van" type="number" min="0" value={otherVehicleArray.van.miles} onKeyPress={
                        (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                      }  placeholder={editingdata.placeholder8} />
                      <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                    </Col>
                  </Row>

                  <Row>
                  <Col className="col-12 col-xl-4 mb-2 bold">{editingdata.otherVehicleCar}</Col>
                    <Col>
                      <Row>
                        <Col className="col-12 col-xl-4 col-sm-6">{editingdata.otherTransportGas}</Col>
                          <Col className="col-12 col-xl-8 col-sm-6">
                          <input onChange={calculateMiles} name="carGas" type="number" min="0" value={vehicleArray.carGas.miles} onKeyPress={
                            (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                          }  placeholder={editingdata.placeholder8} />
                          <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                          </Col>
                      </Row>
                      <Row>
                      <Col  className="col-12 col-xl-4 col-sm-6">{editingdata.otherTransportDiesel}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateMiles} name="carDiesel" type="number" min="0" value={vehicleArray.carDiesel.miles} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder8} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">Hybrid</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateMiles} name="carHybrid" type="number" min="0" value={vehicleArray.carHybrid.miles} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder8} />
                        <p className="x-small mb-3 op-7">Average Annual Km</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">Plug-in Hybrid</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateMiles} name="carPlug" type="number" min="0" value={vehicleArray.carPlug.miles} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder8} />
                        <p className="x-small mb-3 op-7">PAverage Annual Km</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">Plug-in Electric</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateMiles} name="carElectric" type="number" min="0" value={vehicleArray.carElectric.miles} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder8} />
                        <p className="x-small mb-3 op-7">Average Annual Km</p>
                      </Col>
                    </Row>
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
                <Col className="col-12 col-xl-4 bold">{editingdata.travelShort}</Col>
                  <Col>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelShort1}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateFlightCount} name="flyShort" type="number" min="0" value={flightArray.flyShort.count} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr/>
              <Row>
                  <Col className="col-12 col-xl-4 bold">{editingdata.travelMed}</Col>
                  <Col>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelMed1}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateFlightCount} name="flyMediumEco" type="number" min="0" value={flightArray.flyMediumEco.count} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelMed2}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateFlightCount} name="flyMediumBus" type="number" min="0" value={flightArray.flyMediumBus.count} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col className="col-10 col-xl-4 bold">{editingdata.travelLong}</Col>
                  <Col className="col-12 col-xl-8">
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong1}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateFlightCount} name="flyLongEco" type="number" min="0" value={flightArray.flyLongEco.count} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong2}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateFlightCount} name="flyLongEcoPlus" type="number" min="0" value={flightArray.flyLongEcoPlus.count} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong3}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateFlightCount} name="flyLongBus" type="number" min="0" value={flightArray.flyLongBus.count} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong4}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateFlightCount} name="flyLongFirst" type="number" min="0" value={flightArray.flyLongFirst.count} onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }  placeholder={editingdata.placeholder9} />
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
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
              <Row><Col>{editingdata.dataType4}</Col><Col className="text-right bold">{otherTransportTotal > 0 ? (otherTransportTotal/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType5}</Col><Col className="text-right bold">{otherVehicleSub > 0 ? (otherVehicleSub/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType6}</Col><Col className="text-right bold">{flightSub > 0 ? (flightSub/1000).toFixed(2) : "--"}</Col></Row>
              <hr/>
              <span className="smallCaps text-small">{editingdata.dataTotal}</span><br/>
              <span className="h2 bold">{total > 0 ? (total/1000).toFixed(2) : "--"}</span>
              <p>{total > 0 ? "(Metric Tonnes of CO2 per Year)" : ""}</p>
              <p className="text-small">{editingdata.dataDisclaimer}</p>

              <Row>
                <Col className="whiteBorder rounded mt-3 p-3">
                  <p className="text-small">To continue editing your results in the future, save or bookmark this link:</p>
                  <p className="pt-2 text-small">
                    {fullUrlError ? <p style={{ color: 'red' }}>{fullUrlError}</p> : null}
                    <a href={fullUrl} onClick={fullUrlClick}>{fullUrl}</a>
                  </p>
                  {/* <hr/>
                  <p className="text-small">Share your results on social media with this link:</p>
                  <p className="pt-2 text-small"><a href={sharingUrl}>{sharingUrl}</a></p> */}
                </Col>
              </Row>
            </div>

          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="col-11 col-lg-10 align-items-center text-center p-3">
            <div className="bg-brown p-4 innerShadow roundedBox">
              <p className="smallCaps text-orange mb-3">{editingdata.box1Header}</p>
              {nextStepError ? <p style={{color: 'red' }}>{nextStepError}</p> : null}
              <Button className="btn-large mt-1" variant="green" onClick={nextStepClick}>{editingdata.box1Button}</Button>
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
                <Link href="/business-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox1button}</a></Link>
              </div>
            </Col>

            <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
                <h4 className="text-white tight-drop-light">{editingdata.otherbox2Header}</h4>
                <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox2Para}</p>\
                <Link href="/personal-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox2button}</a></Link>
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