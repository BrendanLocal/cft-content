import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from "react-share";

let sessionID = randomstring.generate(12);
let sharingPrefix = 'https://www.canadasforesttrust.ca';
if (typeof window !== 'undefined') {
  sharingPrefix = location.hostname;
  if (sharingPrefix.startsWith('localhost')) {
    // sharing won't allow localhost links to work
    sharingPrefix = sharingPrefix.replace('localhost', '127.0.0.1');
  }
  if (location.port !== '') {
    sharingPrefix += `:${location.port}`;
  }
  sharingPrefix = location.protocol + '//' + sharingPrefix;
}

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

  const [selectNumTwo, setNumTwo] = React.useState("");

  const schoolNumTwo = Number(selectNumTwo);

  const [selectTypeThree, setTypeThree] = React.useState("");
  const [selectSizeThree, setSizeThree] = React.useState("");
  const [selectNumThree, setNumThree] = React.useState("");

  const schoolSizeThree = Number(selectSizeThree);
  const schoolTypeThree = selectTypeThree;
  const schoolNumThree = Number(selectNumThree);

  const [selectTypeFour, setTypeFour] = React.useState("");
  const [selectSizeFour, setSizeFour] = React.useState("");
  const [selectNumFour, setNumFour] = React.useState("");

  const schoolSizeFour = Number(selectSizeFour);
  const schoolTypeFour = selectTypeFour;
  const schoolNumFour = Number(selectNumFour);

  const [selectTypeFive, setTypeFive] = React.useState("");
  const [selectSizeFive, setSizeFive] = React.useState("");
  const [selectNumFive, setNumFive] = React.useState("");

  const schoolSizeFive = Number(selectSizeFive);
  const schoolTypeFive = selectTypeFive;
  const schoolNumFive = Number(selectNumFive);

  const [selectTypeSix, setTypeSix] = React.useState("");
  const [selectSizeSix, setSizeSix] = React.useState("");
  const [selectNumSix, setNumSix] = React.useState("");

  const schoolSizeSix = Number(selectSizeSix);
  const schoolTypeSix = selectTypeSix;
  const schoolNumSix = Number(selectNumSix);

  let subtotalBuild = 0; 
  let subtotalTransit = 0;
  let studentCommuteSubtotal = 0;
  let subtotalVehicle = 0;
  let subtotalFlight = 0;

  //employee commute
  const [transitSub, setTransit] = React.useState(0);
  const [transitArray, setTransitArray] = React.useState({
    transitCar: {mult:0.1743, days:195, count: '', miles: ''},
    transitBus: {mult:0.06214, days:195,count: '', miles: ''},
    transitTrain: {mult:0.06214, days:195, count: '', miles: ''}
  });

  useEffect(() => {
    calculateTransit();
  }, [transitArray]);

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

  useEffect(() => {
    calculateStudentCommuteTransit();
  }, [studentCommuteArray]);

  //vehicle multiplier
  const [vehicleSub, setVehicle] = React.useState(0);
  const [vehicleArray, setVehicleArray] = React.useState({
    busGas: {mult:1.22885, miles: ''},
    busDiesel: {mult:0.74350344, miles: ''},
    busPropane: {mult:0.897182946, miles: ''},
    carGas: {mult:1.22885, miles: ''},
    carDiesel: {mult:0.74350344, miles: ''},
    carPropane: {mult:0.897182946, miles: ''},
    carHybrid: { mult: 0.10487, count: '', miles: '' },
    carPlug: { mult: 0.02935, count: '', miles: '' },
    carElectric: { mult: 0.000001, count: '', miles: '' },
    train: {mult:0.06214, miles: ''},
    van: {mult:0.14853, miles: ''}
  });

  useEffect(() => {
    calculateVehicle();
  }, [vehicleArray]);

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

  useEffect(() => {
    calculateFlight();
  }, [flightArray]);

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
    subtotalBuild += Number(buildArray[schoolSize]) / 1000;
  }

  if (schoolNumTwo) {
    subtotalBuild += schoolNumTwo * 4.45188684 / 1000;
  }

  if (schoolSizeThree && schoolTypeThree && schoolNumThree) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeThree][schoolTypeThree]) * schoolNumThree / 1000;
  }

  if (schoolSizeFour && schoolTypeFour && schoolNumFour) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeFour][schoolTypeFour]) * schoolNumFour / 1000;
  }

  if (schoolSizeFive && schoolTypeFive && schoolNumFive) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeFive][schoolTypeFive]) * schoolNumFive / 1000;
  }

  if (schoolSizeSix && schoolTypeSix && schoolNumSix) {
    subtotalBuild += Number(buildArrayTwo[schoolSizeSix][schoolTypeSix]) * schoolNumSix / 1000;
  }

  subtotalBuild = Number(subtotalBuild.toFixed(2));

  /* function to calculate the 'vehicle' section */
  const calculateVehicle=()=> {
    subtotalVehicle = 0
    for (let x of Object.keys(vehicleArray)) 
    {
      let i = 0;
      const miles = Number(vehicleArray[x].miles);

      if (miles) {
        i += Number((vehicleArray[x].mult * miles))/1000;
      }
      subtotalVehicle += i
    }
    setVehicle(Number(subtotalVehicle.toFixed(2)))
  };

  const calculateFlight=()=> {
    subtotalFlight = 0
    for (let x of Object.keys(flightArray))
    {
      let i = 0;
      const count = Number(flightArray[x].count);

      if (count) {
        i += Number((count * flightArray[x].mult))/1000;
      }
      
      subtotalFlight += i
    }
    setFlight(Number(subtotalFlight.toFixed(2)))
  };

  const calculateTransit=()=> {
    subtotalTransit = 0
    for (let x of Object.keys(transitArray))
    {
      let i = 0;
      const count = Number(transitArray[x].count);
      const miles = Number(transitArray[x].miles);

      if (count && miles) {
        i += Number((count * transitArray[x].mult * miles * transitArray[x].days))/1000
      }
      subtotalTransit += i
    }   
    setTransit(Number(subtotalTransit.toFixed(2)))
  };

  const calculateStudentCommuteTransit=()=> {
    studentCommuteSubtotal = 0
    for (let x of Object.keys(studentCommuteArray)) 
    {
      let i = 0;
      const count = Number(studentCommuteArray[x].count);
      const miles = Number(studentCommuteArray[x].miles);

      if (count && miles) {
        i += Number((count * studentCommuteArray[x].mult * miles * studentCommuteArray[x].days))/1000
      }
      studentCommuteSubtotal += i
    }    
    setStudentCommute(Number(studentCommuteSubtotal.toFixed(2)))
  };

  /* calculate the 'total' here by adding on the other subtotals */
  const total = Number((vehicleSub + subtotalBuild + flightSub + transitSub + studentCommute).toFixed(2));
  if (typeof window !== 'undefined') {
    localStorage.setItem('schoolfootprint', String(total));
  }

  const sharingUrlPrefix = '/share-school-results?session=';
  const [sharingUrl, setSharingUrl] = React.useState('/share-school-results');

  const router = useRouter();
  const [sessionDataError, setSessionDataError] = React.useState("");
  useEffect(() => {
    if (router.isReady) {
      if (router.query.session) {
        sessionID = router.query.session;
      }
      
      setSharingUrl(sharingUrlPrefix + sessionID);
  
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

  return (
    <div className="bg-school">
      <Header/>
      <Head>
        <title>{editingdata.header}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="theme-color" content="#054218"/>

        <meta name="twitter:site" content="@CanadasForest" />
        <meta name="twitter:title" content={editingdata.header} />
        <meta name="twitter:description" content={editingdata.dataDisclaimer} />
        <meta name="twitter:image" content={sharingPrefix + '/logo-share-preview-twitter.png'} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property='og:title' content={editingdata.header}/>
        <meta property='og:description' content={editingdata.dataDisclaimer}/>
        <meta property='og:image' content={sharingPrefix + '/logo-share-preview-twitter.png'}/>
        <meta property='og:image:width' content='800'/>
        <meta property='og:image:height' content='800'/>
        <meta property='og:url' content={sharingPrefix + sharingUrl}/>
        <meta property='og:type' content='website'/>
      </Head>

      <Container className="p-4 pt-5">
        <Row className="justify-content-center">
          <Col className="col-12 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold tight-drop-light">{editingdata.header}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="p-3 col-12 col-lg-7 col-xl-6">
          <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
            <p className="lead text-white m-2 calc-intro">Shared results</p>
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
                  <p>{selectSize}</p>
                  
                </Col>
              </Row>
              <hr className="mb-4"/>
                <h5 className="smallCaps text-small text-green">{editingdata.heatingOtherHeader}</h5>

                <Row>
                  <Col>
                    <label htmlFor="energy">{editingdata.heatingOtherResidencyHeader}</label>
                    <br />
                    <p>{selectNumTwo}</p> <p className="x-small mb-3 op-7">{editingdata.placeholder2}</p>
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
                <p>{selectTypeThree}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                <label htmlFor="size">{editingdata.heatingOtherSizeHeader}</label><br />
               <p>{selectSizeThree}</p>
                
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.heatingOtherAmountHeader}</label><br />
                  <p>{selectNumThree}</p>
                 
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
                <p>{selectTypeFour}</p>
                  </Col>
              </Row>

              <Row>
                <Col>
                <label htmlFor="size">{editingdata.heatingOtherSizeHeader}</label><br />
                <p>{selectSizeFour}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.heatingOtherAmountHeader}</label><br />
                  <p>{selectNumFour} </p>
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
                <p>{selectTypeFive}</p>
               </Col>
              </Row>

              <Row>
                <Col>
                <label htmlFor="size">{editingdata.heatingOtherSizeHeader}</label><br />
                <p>{selectSizeFive}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.heatingOtherAmountHeader}</label><br />
                  <p>{selectNumFive}</p>
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
                <p>{selectTypeSix}</p>
               </Col>
              </Row>

              <Row>
                <Col>
                <label htmlFor="size">{editingdata.heatingOtherSizeHeader}</label><br />
                <p>{selectSizeSix}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.heatingOtherAmountHeader}</label><br />
                 <p>{selectNumSix}</p>
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
                  <p>{transitArray.transitCar.count}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder3}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <p>{transitArray.transitCar.miles}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 bold">{editingdata.empCommuteBus}</Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                 <p>{transitArray.transitBus.count}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder5}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                 <p>{transitArray.transitBus.miles}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row> 
              <Row>
                <Col className="col-12 col-xl-4 bold">
                Train
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <p>{transitArray.transitTrain.count}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder5}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <p>{transitArray.transitTrain.miles}</p>
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
                  <p>{studentCommuteArray.gasoline.count} </p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder6}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <p>{studentCommuteArray.gasoline.miles}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 bold">{editingdata.stuCommuteDiesel}</Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <p>{studentCommuteArray.diesel.count} </p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder6}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <p>{studentCommuteArray.diesel.miles} </p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 bold">{editingdata.stuCommutePropane}</Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                  <p>{studentCommuteArray.propane.count}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder6}</p>
                </Col>
                <Col className="col-12 col-xl-4 col-sm-6">
                 <p>{studentCommuteArray.propane.miles}</p>
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
                  <p>{studentCommuteArray.cityBus.count}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder7}</p>
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <p>{studentCommuteArray.cityBus.miles}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12">
                  <label htmlFor="type">{editingdata.stuCommuteDrop}</label>
                  <br />
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <p>{studentCommuteArray.car.count}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder7}</p>
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <p>{studentCommuteArray.car.miles}</p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder4}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12">
                  <label htmlFor="type">{editingdata.stuCommuteTrain}</label>
                  <br />
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <p>{studentCommuteArray.train.count} </p>
                  <p className="x-small mb-3 op-7">{editingdata.placeholder7}</p>
                </Col>
                <Col className ="col-12 col-xl-6 col-sm-6">
                  <p>{studentCommuteArray.train.miles} </p>
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
                          <p>{vehicleArray.busGas.miles}</p>
                          <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                          </Col>
                      </Row>
                      <Row>
                      <Col  className="col-10 col-xl-4 col-sm-6">{editingdata.otherTransportDiesel}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                       <p>{vehicleArray.busDiesel.miles}</p>
                       <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-10 col-xl-4 col-sm-6">{editingdata.otherTransportPropane}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{vehicleArray.busPropane.miles}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                      </Col>
                    </Row>
                    </Col>
                  </Row>    
                 
                  <hr/>
                  <Row>
                    <Col className="col-10 col-xl-4 col-sm-6 bold ">Train/Subway</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{vehicleArray.train.miles}</p>
                      <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                    </Col>
                  </Row>
                  <hr/>
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.otherVehicleVan}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{vehicleArray.van.miles}</p>
                      <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                    </Col>
                  </Row>
                  <hr/>
                  <Row>
                  <Col className="col-12 col-xl-4 mb-2 bold">{editingdata.otherVehicleCar}</Col>
                    <Col>
                      <Row>
                        <Col className="col-12 col-xl-4 col-sm-6">{editingdata.otherTransportGas}</Col>
                          <Col className="col-12 col-xl-8 col-sm-6">
                         <p>{vehicleArray.carGas.miles}</p>
                         <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                          </Col>
                      </Row>
                      <Row>
                      <Col  className="col-12 col-xl-4 col-sm-6">{editingdata.otherTransportDiesel}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{vehicleArray.carDiesel.miles}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder8}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">Hybrid</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{vehicleArray.carHybrid.miles} </p>
                        <p className="x-small mb-3 op-7">Average Annual Km</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">Plug-in Hybrid</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{vehicleArray.carPlug.miles} </p>
                        <p className="x-small mb-3 op-7">Average Annual Km</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">Plug-in Electric</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{vehicleArray.carElectric.miles}</p>
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
                  <hr/>
                  <p className="text-grey mb-3">{editingdata.travelPara}</p>
                </Col>
              </Row>
              
              <Row>
                <Col className="col-12 col-xl-4 mb-2 bold">{editingdata.travelShort}</Col>
                  <Col>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelShort1}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{flightArray.flyShort.count}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr/>
              <Row>
                  <Col className="col-12 col-xl-4 mb-2 bold">{editingdata.travelMed}</Col>
                  <Col>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelMed1}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{flightArray.flyMediumEco.count}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelMed2}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{flightArray.flyMediumBus.count}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col className="col-10 col-xl-4 mb-2 bold">{editingdata.travelLong}</Col>
                  <Col className="col-12 col-xl-8">
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong1}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{flightArray.flyLongEco.count}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong2}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{flightArray.flyLongEcoPlus.count}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong3}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{flightArray.flyLongBus.count}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong4}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <p>{flightArray.flyLongFirst.count}</p>
                        <p className="x-small mb-3 op-7">{editingdata.placeholder9}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </div>
          </Col>

          <Col className=" p-3  col-11 col-lg-5 col-xl-4 stickyCalc mb-4">
            <div className="text-white p-5 innerShadow roundedBox bg-green">
              <h4 className="mb-0">{editingdata.dataHeader}</h4>
              <hr/>
              <Row><Col>{editingdata.dataType1}</Col><Col className="text-right bold">{subtotalBuild > 0 ? subtotalBuild : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType2}</Col><Col className="text-right bold">{transitSub > 0 ? transitSub : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType3}</Col><Col className="text-right bold">{studentCommute > 0 ? studentCommute : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType4}</Col><Col className="text-right bold">{vehicleSub > 0 ? vehicleSub : "--"}</Col></Row>
              <hr/>
              <Row><Col>{editingdata.dataType6}</Col><Col className="text-right bold">{flightSub > 0 ? flightSub : "--"}</Col></Row>
              <hr/>
              <span className="smallCaps text-small">{editingdata.dataTotal}</span><br/>
              <span className="h2 bold">{total > 0 ? total : "--"}</span>
              <p>{total > 0 ? "(Metric Tonnes of CO2 per Year)" : ""}</p>
              <p className="text-small">{editingdata.dataDisclaimer}</p>

              <hr className="my-4"/>

<Row className="justify-content-center text-center">
<Col>
<div className="mt-3">
                <p className="smallCaps text-white mb-3">Share these results</p>
                
                <FacebookShareButton url={sharingPrefix + sharingUrl} quote={editingdata.shareFacebook} hashtag={editingdata.shareFacebookTags}className="mx-2">
                  <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton url={sharingPrefix + sharingUrl} title={editingdata.shareTwitter} className="mx-2">
                  <TwitterIcon size={40} round />
                </TwitterShareButton>

                {/* <LinkedinShareButton url={sharingPrefix + sharingUrl} summary={editingdata.shareLinkedIn} className="mx-2">
                  <LinkedinIcon size={40} round />
                </LinkedinShareButton> */}

                <EmailShareButton url={sharingPrefix + sharingUrl} body={editingdata.shareEmailBody} subject={editingdata.shareEmailSubject} className="mx-2">
                  <EmailIcon size={40} round />
                </EmailShareButton>
              </div>
              </Col>
            </Row>

            </div>

          </Col>
        </Row>


        
        <Row className="justify-content-center mt-5">
          <Col className="col-11 col-lg-10 pt-5">
            <h2 className=" text-orange text-center pt-5 bold mb-4 tight-drop-light">Get Started With Our Carbon Calculators</h2>        
          </Col>
        </Row>

        <Row className="justify-content-center pb-5">
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
              <h4 className="text-white tight-drop-light">Corporate</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your corporation must offset to reach net-zero.</p>
              <Link href="/business-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox1button}</a>
              </Link>
            </div>
          </Col>
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
              <h4 className="text-white tight-drop-light">School</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your school must offset to reach net-zero.</p>
              <Link href="/school-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox2button}</a>
              </Link>
            </div>
          </Col>
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
              <h4 className="text-white tight-drop-light">Personal</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your school must offset to reach net-zero.</p>
              <Link href="/personal-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">SELECT</a>
              </Link>
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