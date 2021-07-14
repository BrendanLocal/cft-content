import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github";
import { usePlugin } from "tinacms";
import { useState } from "react";
import NumericInput from 'react-numeric-input';
import { Accordion } from "react-bootstrap";

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
    label: 'Carbon Calculator',
    fields: [
      {name: 'header1', component: 'markdown' },
      {name: 'title', component: 'markdown' },
      {name: 'para1', component: 'markdown' },
      {name: 'select', component: 'markdown' },
      {name: 'Placeholder1', component: 'markdown' },
      {name: 'Placeholder2', component: 'markdown' },
      {name: 'Placeholder3', component: 'markdown' },
      {name: 'Placeholder4', component: 'markdown' },
      {name: 'Placeholder5', component: 'markdown' },
      {name: 'Placeholder6', component: 'markdown' },
      {name: 'Placeholder7', component: 'markdown' },
      {name: 'Placeholder8', component: 'markdown' },
      {name: 'Placeholder9', component: 'markdown' },
      {name: 'heat1Title', component: 'markdown' },
      {name: 'heat1Para', component: 'markdown' },
      {name: 'heat1CalcHeader', component: 'markdown' },
      {name: 'heat1Calc1', component: 'markdown' },
      {name: 'heat1Calc2', component: 'markdown' },
      {name: 'Heat1People', component: 'markdown' },
      {name: 'heat1Months', component: 'markdown' },
      {name: 'heat1Size', component: 'markdown' },
      {name: 'heat1Source', component: 'markdown' },
      {name: 'heat1Savings', component: 'markdown' },
      {name: 'heat2Title', component: 'markdown' },
      {name: 'heat2Para', component: 'markdown' },
      {name: 'heat2CalcHeader', component: 'markdown' },
      {name: 'heat2Calc1', component: 'markdown' },
      {name: 'heat2Calc2', component: 'markdown' },
      {name: 'Heat2People', component: 'markdown' },
      {name: 'heat2Months', component: 'markdown' },
      {name: 'heat2Size', component: 'markdown' },
      {name: 'heat2Source', component: 'markdown' },
      {name: 'heat2Savings', component: 'markdown' },
      {name: 'heatSize1', component: 'markdown' },
      {name: 'heatSize2', component: 'markdown' },
      {name: 'heatSize3', component: 'markdown' },
      {name: 'heatSize4', component: 'markdown' },
      {name: 'heatSize5', component: 'markdown' },
      {name: 'heatSize6', component: 'markdown' },
      {name: 'heatSize7', component: 'markdown' },
      {name: 'heatSize8', component: 'markdown' },
      {name: 'heatSource1', component: 'markdown' },
      {name: 'heatSource2', component: 'markdown' },
      {name: 'heatSource3', component: 'markdown' },
      {name: 'heatSource4', component: 'markdown' },
      {name: 'heatSavings1', component: 'markdown' },
      {name: 'heatSavings2', component: 'markdown' },
      {name: 'heatSavings3', component: 'markdown' },
      {name: 'heatSavings4', component: 'markdown' },
      {name: 'vehicleHeader', component: 'markdown' },
      {name: 'vehiclePara1', component: 'markdown' },
      {name: 'vehicleSmall', component: 'markdown' },
      {name: 'vehicleSmallDesc', component: 'markdown' },
      {name: 'vehicleMed', component: 'markdown' },
      {name: 'vehicleMedDesc', component: 'markdown' },
      {name: 'vehicleLarge', component: 'markdown' },
      {name: 'vehicleLargeDesc', component: 'markdown' },
      {name: 'vehicleMoto', component: 'markdown' },
      {name: 'vehicleMotoDesc', component: 'markdown' },
      {name: 'vehiclePlane', component: 'markdown' },
      {name: 'vehiclePlaneDesc', component: 'markdown' },
      {name: 'vehicleJet', component: 'markdown' },
      {name: 'vehicleJetDesc', component: 'markdown' },
      {name: 'VehicleOther', component: 'markdown' },
      {name: 'vechileYacht', component: 'markdown' },
      {name: 'vehicleATV', component: 'markdown' },
      {name: 'vehicleSide', component: 'markdown' },
      {name: 'vehicleSnow', component: 'markdown' },
      {name: 'flightHeader', component: 'markdown' },
      {name: 'flightPara', component: 'markdown' },
      {name: 'flightShort', component: 'markdown' },
      {name: 'flightShort1', component: 'markdown' },
      {name: 'flightMed', component: 'markdown' },
      {name: 'flightMed1', component: 'markdown' },
      {name: 'flightMed2', component: 'markdown' },
      {name: 'flightLong', component: 'markdown' },
      {name: 'flightLong1', component: 'markdown' },
      {name: 'flightLong2', component: 'markdown' },
      {name: 'flightLong3', component: 'markdown' },
      {name: 'flightLong4', component: 'markdown' },
      {name: 'flightNights', component: 'markdown' },
      {name: 'flightCars', component: 'markdown' },
      {name: 'vehicleGas', component: 'markdown' },
      {name: 'vehicleDiesel', component: 'markdown' },
      {name: 'vehicleHybrid', component: 'markdown' },
      {name: 'vehicleAvitation', component: 'markdown' },
      {name: 'publicHeader', component: 'markdown' },
      {name: 'publicPara', component: 'markdown' },
      {name: 'publicBus', component: 'markdown' },
      {name: 'publicTaxi', component: 'markdown' },
      {name: 'publicMetro', component: 'markdown' },
      {name: 'dataHeader', component: 'markdown' },
      {name: 'dataType1', component: 'markdown' },
      {name: 'dataType2', component: 'markdown' },
      {name: 'dataType3', component: 'markdown' },
      {name: 'dataType4', component: 'markdown' },
      {name: 'dataTotal', component: 'markdown' },
      {name: 'dataDisclaimer', component: 'markdown' },
      {name: 'box1Header', component: 'markdown' },
      {name: 'box1Para', component: 'markdown' },
      {name: 'box1Button', component: 'markdown' },
      {name: 'otherHeader', component: 'markdown' },
      {name: 'otherbox1Header', component: 'markdown' },
      {name: 'otherbox1Para', component: 'markdown' },
      {name: 'otherbox1button', component: 'markdown' },
      {name: 'otherbox2Header', component: 'markdown' },
      {name: 'otherbox2Para', component: 'markdown' },
      {name: 'otherbox2button', component: 'markdown' }
    ]
  }

  const [show, setShow] = useState(false);

  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()

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
    smallPlug	:{mult:	0.02935	,miles: null},
    smallElectric	:{mult:	0	,miles: null},
    mediumGas	:{mult:	0.18659	,miles: null},

    rentalGas	:{mult:	0.18659	,miles: null},
    mediumDiesel	:{mult:	0.16637	,miles: null},
    mediumHybrid	:{mult:	0.10698	,miles: null},
    mediumPlug	:{mult:	0.07083	,miles: null},
    mediumElectric	:{mult:	0	,miles: null},
    largeGas	:{mult:	0.27087	,miles: null},
    largeDiesel	:{mult:	0.20419	,miles: null},
    largeHybrid	:{mult:	0.1448	,miles: null},
    largePlug	:{mult:	0.07731	,miles: null},
    largeElectric	:{mult:	0	,miles: null},
    motorbikeGas	:{mult:	0.11337	,miles: null},
    planeGas	:{mult:	2.54306	,miles: null},

    heliGas	:{mult:	2.54306	,miles: null},
    jetGas	:{mult:	2.54306	,miles: null},
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
    setYear(event.getValueAsNumber);
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
    setYearTwo(event.getValueAsNumber);
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
      gas:	1072	,
      oil:	1562	,
      electric:	758	,
      wood:	91	
    },
    "1500":{	
      gas:	3473	,
      oil:	5059	,
      electric:	2456	,
      wood:	295	
    },
    "2000":{	
      gas:	4188	,
      oil:	6100	,
      electric:	2961	,
      wood:	356	
    },
    "2500":{	
      gas:	5464	,
      oil:	7960	,
      electric:	3864	,
      wood:	465	
    },
    "5000":{	
      gas:	8197	,
      oil:	11940	,
      electric:	5796	,
      wood:	697	
    },
    "7500":{	
      gas:	12295	,
      oil:	17910	,
      electric:	8694	,
      wood:	1045	
    },
    "10000":{	
      gas:	18442	,
      oil:	26865	,
      electric:	13041	,
      wood:	1568	
    },
    "10001":{	
      gas:	27663	,
      oil:	40298	,
      electric:	19561	,
      wood:	2352	
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
      (((buildArray[buildSize][heatType] * energySavingsMult[energyType])/buildNum)+((buildYear/12)* 1444)/buildNum)/1000);
  }

  if (buildSizeTwo && heatTypeTwo && energyTypeTwo) 
  {
    if(!getFamTwo){
      buildNumTwo = 1
    }
    subtotalBuildTwo = Number(
      (((buildArray[buildSizeTwo][heatTypeTwo] * energySavingsMult[energyTypeTwo])/buildNumTwo)+((buildYearTwo/12)* 1444)/buildNumTwo)/1000);
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
            <h1 className="emphasis text-orange text-center bold tight-drop-light">{editingdata.title}</h1>
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
                  <h4 className="text-green">{editingdata.heat1Title}</h4>
                  <hr/>
                </Col>
                <h5 className="smallCaps text-small text-green">{editingdata.heat1Para}</h5>
              </Row>
              <Row className="mb-3">
                <Col>
                <label htmlFor="number">{editingdata.heat1CalcHeader}</label>
                <br />
                <input className="me-2" onChange={changeFam} type="radio" id="myself" name="calculateWho" value="myself" checked/>
                  <label>{editingdata.heat1Calc1}</label><br></br>
                <input className="me-2" onChange={changeFam} type="radio" id="family" name="calculateWho" value="family"/>
                <label>{editingdata.heat1Calc2}</label>
                <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="number">{editingdata.Heat1People}</label>
                  <br />
                  <input onChange={changeNum} type="number" min="0" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                  }} placeholder="Number of people in your household"/>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="number">{editingdata.heat1Months}</label>
                  <br />
                  <NumericInput onChange={changeYear} strict="true" precision={0} step={1} min={0} max={12} value={selectYear} placeholder="Month(s) per year in residence"/>
                  
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="size">{editingdata.heat1Size}</label>
                  <br />
                  <select name="size" value={selectSize} onChange={changeSize}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='1000'>{editingdata.heatSize1}</option>
                    <option value='1500'>{editingdata.heatSize2}</option>
                    <option value='2000'>{editingdata.heatSize3}</option>
                    <option value='2500'>{editingdata.heatSize4}</option>
                    <option value='5000'>{editingdata.heatSize5}</option>
                    <option value='7500'>{editingdata.heatSize6}</option>
                    <option value='10000'>{editingdata.heatSize7}</option>
                    <option value='10001'>{editingdata.heatSize8}</option>
                  </select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="heat">{editingdata.heat1Source}</label>
                  <br />
                  <select name="heat" value={selectHeat} onChange={changeHeat}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='gas'>{editingdata.heatSource1}</option>
                    <option value='oil'>{editingdata.heatSource2}</option>
                    <option value='electric'>{editingdata.heatSource3}</option>
                    <option value='wood'>{editingdata.heatSource4}</option>
                  </select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="energy">{editingdata.heat1Savings}</label>
                  <br />
                  <select name="energy" value={selectEnergy} onChange={changeEnergy}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='none'>{editingdata.heatSavings1}</option>
                    <option value='light'>{editingdata.heatSavings2}</option>
                    <option value='moderate'>{editingdata.heatSavings3}</option>
                    <option value='extensive'>{editingdata.heatSavings4}</option>
                  </select>
                </Col>
              </Row> 
            </div>


            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h4 className="text-green">{editingdata.heat2Title}</h4>
                  <hr/>
                </Col>
                <h5 className="smallCaps text-small text-green">{editingdata.heat2Para}</h5>
              </Row>
              <Row className="mb-3">
                <Col>
                <label htmlFor="number">{editingdata.heat2CalcHeader}</label>
                <br />
                <input className="me-2" onChange={changeFam} type="radio" id="myself" name="calculateWho" value="myself" checked/>
                  <label>{editingdata.heat2Calc1}</label><br></br>
                <input className="me-2" onChange={changeFam} type="radio" id="family" name="calculateWho" value="family"/>
                <label>{editingdata.heat2Calc2}</label>
                <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="number">{editingdata.Heat2People}</label>
                  <br />
                  <input onChange={changeNum} type="number" min="0" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                  }} placeholder="Number of people in your household"/>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="number">{editingdata.heat2Months}</label>
                  <br />
                  <input onChange={changeYear} type="number" min="0" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                  }} placeholder="Month(s) per year in residence"/>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="size">{editingdata.heat2Size}</label>
                  <br />
                  <select name="size" value={selectSize} onChange={changeSize}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='1000'>{editingdata.heatSize1}</option>
                    <option value='1500'>{editingdata.heatSize2}</option>
                    <option value='2000'>{editingdata.heatSize3}</option>
                    <option value='2500'>{editingdata.heatSize4}</option>
                    <option value='5000'>{editingdata.heatSize5}</option>
                    <option value='7500'>{editingdata.heatSize6}</option>
                    <option value='10000'>{editingdata.heatSize7}</option>
                    <option value='10001'>{editingdata.heatSize8}</option>
                  </select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="heat">{editingdata.heat2Source}</label>
                  <br />
                  <select name="heat" value={selectHeat} onChange={changeHeat}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='gas'>{editingdata.heatSource1}</option>
                    <option value='oil'>{editingdata.heatSource2}</option>
                    <option value='electric'>{editingdata.heatSource3}</option>
                    <option value='wood'>{editingdata.heatSource4}</option>
                  </select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="energy">{editingdata.heat2Savings}</label>
                  <br />
                  <select name="energy" value={selectEnergy} onChange={changeEnergy}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='none'>{editingdata.heatSavings1}</option>
                    <option value='light'>{editingdata.heatSavings2}</option>
                    <option value='moderate'>{editingdata.heatSavings3}</option>
                    <option value='extensive'>{editingdata.heatSavings4}</option>
                  </select>
                </Col>
              </Row> 
            </div>

            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
              <Col className="col-12">
                  <h3 className="text-green">{editingdata.vehicleHeader}</h3>

                  <p className="text-grey">{editingdata.vehiclePara1}</p>
                </Col>
                <Col>
              <Accordion>
              <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            
                  <h5 className="smallCaps text-small text-green">{editingdata.vehicleSmall}</h5>

                  <p className="text-small op-6">{editingdata.vehicleSmallDesc}</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                
                <div>
                
                  <Row>
                    <Col className="col">

                      {editingdata.vehicleGas}
                      <input onChange={calculateMiles} name="smallGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (gas)"/>
                    </Col>
                  </Row> 
                  <Row>
                    <Col className="col">
                      {editingdata.vehicleDiesel}
                      <input onChange={calculateMiles} name="smallDiesel" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (diesel)"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col">
                      {editingdata.vehicleHybrid}
                      <input onChange={calculateMiles} name="smallHybrid" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (hybrid)"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col">
                      <input onChange={calculateMiles} name="smallPlug" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (plug-in hybrid)"/>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="col">
                      {editingdata.vehicleElectric}
                      <input onChange={calculateMiles} name="smallElectric" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (battery electric)"/>
                    </Col>
                  </Row>
                  </div>
                </Accordion.Collapse>
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <h5 className="smallCaps text-small text-green">{editingdata.vehicleMed}</h5>
                  <p className="text-small op-6">{editingdata.vehicleMedDesc}</p>
                  </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">

                              <div>
                  <Row>
                    <Col className="col">
                      {editingdata.vehicleGas}
                      <input onChange={calculateMiles} name="mediumGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (gas)"/>
                    </Col>
                  </Row> 
                  <Row>
                    <Col className="col">
                    {editingdata.vehicleDiesel}
                      <input onChange={calculateMiles} name="mediumDiesel" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (diesel)"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col">
                    {editingdata.vehicleHybrid}
                      <input onChange={calculateMiles} name="mediumHybrid" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (hybrid)"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col">
                      <input onChange={calculateMiles} name="mediumPlug" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (plug-in hybrid)"/>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="col">
                      {editingdata.vehicleElectric}
                      <input onChange={calculateMiles} name="mediumElectric" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (battery electric)"/>
                    </Col>
                  </Row>
                  </div>
                </Accordion.Collapse>
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <h5 className="smallCaps text-small text-green">{editingdata.vehicleLarge}</h5>
                  <p className="text-small op-6">{editingdata.vehicleLargeDesc}</p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                              <div>
                  <Row>
                    <Col className="col">
                      {editingdata.vehicleGas}
                      <input onChange={calculateMiles} name="largeGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (gas)"/>
                    </Col>
                  </Row> 
                  <Row>
                    <Col className="col">
                      {editingdata.vehicleDiesel}
                      <input onChange={calculateMiles} name="largeDiesel" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (diesel)"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col">
                      {editingdata.vehicleHybrid}
                      <input onChange={calculateMiles} name="largeHybrid" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (hybrid)"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col">
                      <input onChange={calculateMiles} name="largePlug" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (plug-in hybrid)"/>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="col">
                      {editingdata.vehicleElectric}
                      <input onChange={calculateMiles} name="largeElectric" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (battery electric)"/>
                    </Col>
                  </Row>
                  <hr/>

                  <h5 className="smallCaps text-small text-green">{editingdata.vehicleMoto}</h5>
                  <p className="text-small op-6">{editingdata.vehicleMotoDesc}</p>
                  <Row>
                    <Col className="col">
                      {editingdata.vehicleGas}
                      <input onChange={calculateMiles} name="motorbikeGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual KM (gas)"/>
                    </Col>
                  </Row> 
                  </div>
                </Accordion.Collapse>
                </Card>
              <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
                  <h5 className="smallCaps text-small text-green">Private Aircraft</h5>
                  <p className="text-small op-6">Personally owned aircraft, prop planes, helicopters, jets, etc.</p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                              <div>
                  <Row>
                    <Col className="col">

                  <h5 className="smallCaps text-small text-green">{editingdata.vehiclePlane}</h5>
                      <input onChange={calculateMiles} name="jetGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual litres of fuel"/>
                    </Col>
                  </Row> 
                  
                  <Row>
                    <Col className="col">

                  <h5 className="smallCaps text-small text-green">{editingdata.vehicleJet}</h5>
                      <input onChange={calculateMiles} name="planeGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual litres of fuel"/>
                    </Col>
                  </Row> 
                  <Row>
                    <Col className="col">

                  <h5 className="smallCaps text-small text-green">{editingdata.vehicleHeli}</h5>
                      <input onChange={calculateMiles} name="heliGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Annual litres of fuel"/>
                    </Col>
                  </Row>
                  
                  </div>
                </Accordion.Collapse>

                </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <h5 className="smallCaps text-small text-green">Recreational Vehicles</h5>
                  <p className="text-small op-6">Personally owned recreational vehicles, such as yachts, ATVs, and more.</p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">

                              <div>
                  <h5 className="smallCaps text-small text-green">{editingdata.VehicleOther}</h5>
                  <Row>
                    <Col className="col">
                      {editingdata.vechileYacht}
                      <input onChange={calculateMiles} name="yachtGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Marine Diesel Litres per year"/>

                      <input onChange={calculateMiles} name="yachtDiesel" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Marine Unleaded Litres per year"/>
                    </Col>
                  </Row> 

                  <Row>
                    <Col className="col">
                      {editingdata.vehicleATV}
                      <input onChange={calculateMiles} name="atvGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Litres per year"/>
                    </Col>
                  </Row> 

                  <Row>
                    <Col className="col">
                      {editingdata.vehicleSide}
                      <input onChange={calculateMiles} name="sbsGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Litres per year"/>
                    </Col>
                  </Row> 

                  <Row>
                    <Col className="col">
                      {editingdata.vehicleSnow}
                      <input onChange={calculateMiles} name="snowGas" type="number" min="0" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                      }} placeholder="Litres per year"/>
                    </Col>
                  </Row> 
</div>
                  </Accordion.Collapse>

                </Card>
                </Accordion>

                </Col>
              </Row>
            </div>
          
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
            
              <Row>
                <Col>
                  <h3 className="text-green">{editingdata.flightHeader}</h3>
                  <p className="text-grey">{editingdata.flightPara}</p>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col className="col-12 col-xl-4">{editingdata.flightShort}</Col>
                <Col>
                  <Row>
                    <Col className="col-6 col-md-6">{editingdata.flightShort1}</Col>
                    <Col className="col-6 col-xl-6">
                      <input onChange={calculateFlightCount} name="flyShort" type="number" placeholder="Number of flights"/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr/>

              <Row>
                <Col className="col-10 col-xl-4">{editingdata.flightMed}</Col>
                <Col>
                  <Row>
                    <Col className="col-6">{editingdata.flightMed1}</Col>
                    <Col className="col-6">
                      <input onChange={calculateFlightCount} name="flyMediumEco" type="number"placeholder="Number of flights"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-6">{editingdata.flightMed2}</Col>
                    <Col className="col-6">
                      <input onChange={calculateFlightCount} name="flyMediumBus" type="number"placeholder="Number of flights"/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr/>

              <Row>
                <Col className="col-10 col-xl-4">{editingdata.flightLong}</Col>
                <Col className="col-12 col-xl-8">
                  <Row>
                    <Col>{editingdata.flightLong1}</Col>
                    <Col>
                      <input onChange={calculateFlightCount} name="flyLongEco" type="number" placeholder="Number of flights"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>{editingdata.flightLong2}</Col>
                    <Col>
                      <input onChange={calculateFlightCount} name="flyLongEcoPlus" type="number" placeholder="Number of flights"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>{editingdata.flightLong3}</Col>
                    <Col>
                      <input onChange={calculateFlightCount} name="flyLongBus" type="number" placeholder="Number of flights"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>{editingdata.flightLong4}</Col>
                    <Col>
                      <input onChange={calculateFlightCount} name="flyLongFirst" type="number" placeholder="Number of flights"/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr/>

              <Row>
                <Col className="col-10 col-sm-5 col-xl-4">{editingdata.flightNights}</Col>
                <Col  className="col-2 col-sm-1 col-xl-4"></Col>
                <Col className="col-sm-6 col-xl-4">
                  <input onChange={calculateFlightCount} name="flyHotels" type="number" placeholder="Number of nights"/>
                </Col>
              </Row>
              <Row>
                <Col className="col-10 col-sm-5 col-xl-4">{editingdata.flightCars}</Col>
                <Col  className="col-2 col-sm-1 col-xl-4"></Col>
                <Col className="col-sm-6 col-xl-4">
                  <input onChange={calculateMiles} name="rentalGas" type="number" min="0" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                  }} placeholder="Annual KM (gas)"/>
                </Col>
              </Row> 
            </div>

            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h3 className="text-green">{editingdata.publicHeader}</h3>
                  <p className="text-grey">{editingdata.publicPara}</p>
                  <hr/>
                </Col>
              </Row>
              
              <Row>
                <Col className="col-12 col-xl-4">{editingdata.publicTaxi}</Col>
                <Col className="col-xl-4">
                  <input onChange={calculateTransitMiles} name="publicTaxi" type="number" min="0" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                  }} placeholder="Average Km per day"/>
                </Col>
              </Row>
              <Row>
                <Col className="col-10 col-xl-4">{editingdata.publicMetro}</Col>
                <Col className="col-6 col-xl-4">
                  <input onChange={calculateTransitMiles} name="publicSubway" type="number" min="0" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {event.preventDefault();}
                  }} placeholder="Average Km per day"/>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4">{editingdata.publicBus}</Col>
                <Col className="col-xl-4">
                  <input onChange={calculateTransitMiles} name="publicCar" type="number" placeholder="Average Km per day"/>
                </Col>
              </Row>
            </div>
          </Col>
          
          <Col className=" p-3  col-12 col-lg-4 stickyCalc mb-4">
            <div className="text-white p-5 innerShadow roundedBox bg-green">
              <h4 className="mb-0">{editingdata.dataHeader}</h4>
              <hr/>
              <Row>
                <Col>{editingdata.dataType1}</Col><Col className="text-right bold">{totalBuild > 0 ? totalBuild.toFixed(2) : "--"}</Col>
              </Row>
              <hr/>
              <Row>
                <Col>{editingdata.dataType2}</Col><Col className="text-right bold">{vehicleSub > 0 ? vehicleSub.toFixed(2) : "--"}</Col>
              </Row>
              <hr/>
              <Row>
                <Col>{editingdata.dataType3}</Col><Col className="text-right bold">{flightSub > 0 ? flightSub.toFixed(2) : "--"}</Col>
              </Row>
              <hr/>
              <Row>
                <Col>{editingdata.dataType4}</Col><Col className="text-right bold">{publicTransportSub > 0 ? publicTransportSub.toFixed(2) : "--"}</Col>
              </Row>
              <hr/>
              <span className="smallCaps text-small">{editingdata.dataTotal}</span><br/>
              <span className="h2 bold">{total > 0 ? total.toFixed(2) : "--"}</span>
              <p>{total > 0 ? "(Metric Tonnes of CO2 per Year)" : ""}</p>
              <p>{editingdata.dataDisclaimer}</p>
            </div>
          </Col>
        </Row>  
      
        <Row className="justify-content-center ">
          <Col className="col-10 align-items-center text-center p-3">
            <div className="bg-brown p-5 innerShadow roundedBox">
              <p className="smallCaps text-orange">{editingdata.box1Header}</p>
              <h3 className="text-white mb-4 px-2 px-lg-5">{editingdata.box1Para}</h3>
              <Button className="btn-large mt-1" variant="green">{editingdata.box1Button}</Button>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col className="col-11 col-lg-10 pt-5">
            <h2 className=" text-orange text-center pt-5 bold mb-4 tight-drop-light">{editingdata.otherHeader}</h2>
          </Col>
        </Row>

        <Row className="justify-content-center pb-5 mb-5">
          <Col className="col-12 col-md-6 col-lg-4 col-xl-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
            <h4 className="text-white tight-drop-light">{editingdata.otherbox1Header}</h4>
            <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox1Para}</p>
            <Link href="business-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox1button}</a></Link>
            </div>
          </Col>

          <Col className="col-12 col-md-6 col-lg-4 col-xl-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
            <h4 className="text-white tight-drop-light">{editingdata.otherbox2Header}</h4>
            <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox2Para}</p>
            <Link href="school-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox2button}</a></Link>
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
      fileRelativePath: 'content/personal-calculator.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/personal-calculator.json',
        data: (await import('../content/personal-calculator.json')).default,
      },
    },
  }
}