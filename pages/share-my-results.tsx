import React, { useEffect } from "react";
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
import Header from "../components/header";
import Accordion from "react-bootstrap/Accordion";
import randomstring from "randomstring";
import Head from "next/head";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinIcon, LinkedinShareButton, EmailShareButton, EmailIcon } from 'react-share';

let sessionID = randomstring.generate(12);
let hostname = '';
if (typeof window !== 'undefined') {
  hostname = location.hostname;
  if (hostname.startsWith('localhost')) {
    // sharing won't allow localhost links to work
    hostname = hostname.replace('localhost', '127.0.0.1');
  }

  if (location.port !== '') {
    hostname += `:${location.port}`;
  }
}

const Lang = () => {
  var language ="en";

  const router = useRouter();
  if (router.query.lang) { 
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
      {name: 'heat3Title', component: 'markdown' },
      {name: 'heat3Para', component: 'markdown' },
      {name: 'heat3CalcHeader', component: 'markdown' },
      {name: 'heat3Calc1', component: 'markdown' },
      {name: 'heat3Calc2', component: 'markdown' },
      {name: 'Heat3People', component: 'markdown' },
      {name: 'heat3Months', component: 'markdown' },
      {name: 'heat3Size', component: 'markdown' },
      {name: 'heat3Source', component: 'markdown' },
      {name: 'heat3Savings', component: 'markdown' },
      {name: 'heat4Title', component: 'markdown' },
      {name: 'heat4Para', component: 'markdown' },
      {name: 'heat4CalcHeader', component: 'markdown' },
      {name: 'heat4Calc1', component: 'markdown' },
      {name: 'heat4Calc2', component: 'markdown' },
      {name: 'Heat4People', component: 'markdown' },
      {name: 'heat4Months', component: 'markdown' },
      {name: 'heat4Size', component: 'markdown' },
      {name: 'heat4Source', component: 'markdown' },
      {name: 'heat4Savings', component: 'markdown' },
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

  const [editingdata, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();

  const [getFam, setFam] = React.useState("myself");
  const [selectSize, setSize] = React.useState("");
  const [selectNum, setNum] = React.useState("");
  const [selectYear, setYear] = React.useState(0);
  const [selectHeat, setHeat] = React.useState("");
  const [selectEnergy, setEnergy] = React.useState("");

  let buildNum = Number(selectNum);
  const buildYear = selectYear;
  const buildSize = Number(selectSize);
  const heatType = selectHeat;
  const energyType = selectEnergy;

  const changeFam = (event) => {
    setFam(event.target.value);
  }

  const changeNum = (event) => {
    setNum(event.target.value);
  }

  const changeYear = (event) => {
    setYear(event.target.value);
  }

  const changeSize = (event) => {
    setSize(event.target.value);
  }

  const changeHeat = (event) => {
    setHeat(event.target.value);
  }

  const changeEnergy = (event) => {
    setEnergy(event.target.value);
  }

  const [getFamTwo, setFamTwo] = React.useState("myself");
  const [selectNumTwo, setNumTwo] = React.useState("");
  const [selectYearTwo, setYearTwo] = React.useState(0);
  const [selectSizeTwo, setSizeTwo] = React.useState("");
  const [selectHeatTwo, setHeatTwo] = React.useState("");
  const [selectEnergyTwo, setEnergyTwo] = React.useState("");

  let buildNumTwo = Number(selectNumTwo);
  const buildYearTwo = selectYearTwo;
  const buildSizeTwo = Number(selectSizeTwo);
  const heatTypeTwo = selectHeatTwo;
  const energyTypeTwo = selectEnergyTwo;

  const changeFamTwo = (event) => {
    setFamTwo(event.target.value);
  }

  const changeNumTwo = (event) => {
    setNumTwo(event.target.value);
  }

  const changeYearTwo = (event) => {
    setYearTwo(event.target.value);
  }

  const changeSizeTwo = (event) => {
    setSizeTwo(event.target.value);
  }

  const changeHeatTwo = (event) => {
    setHeatTwo(event.target.value);
  }

  const changeEnergyTwo = (event) => {
    setEnergyTwo(event.target.value);
  }

  const [getFamThree, setFamThree] = React.useState("myself");
  const [selectNumThree, setNumThree] = React.useState("");
  const [selectYearThree, setYearThree] = React.useState(0);
  const [selectSizeThree, setSizeThree] = React.useState("");
  const [selectHeatThree, setHeatThree] = React.useState("");
  const [selectEnergyThree, setEnergyThree] = React.useState("");

  let buildNumThree = Number(selectNumThree);
  const buildYearThree = selectYearThree;
  const buildSizeThree = Number(selectSizeThree);
  const heatTypeThree = selectHeatThree;
  const energyTypeThree = selectEnergyThree;

  const changeFamThree = (event) => {
    setFamThree(event.target.value);
  }

  const changeNumThree = (event) => {
    setNumThree(event.target.value);
  }

  const changeYearThree = (event) => {
    setYearThree(event.target.value);
  }

  const changeSizeThree = (event) => {
    setSizeThree(event.target.value);
  }

  const changeHeatThree = (event) => {
    setHeatThree(event.target.value);
  }

  const changeEnergyThree = (event) => {
    setEnergyThree(event.target.value);
  }

  const [getFamFour, setFamFour] = React.useState("myself");
  const [selectNumFour, setNumFour] = React.useState("");
  const [selectYearFour, setYearFour] = React.useState(0);
  const [selectSizeFour, setSizeFour] = React.useState("");
  const [selectHeatFour, setHeatFour] = React.useState("");
  const [selectEnergyFour, setEnergyFour] = React.useState("");

  let buildNumFour = Number(selectNumFour);
  const buildYearFour = selectYearFour;
  const buildSizeFour = Number(selectSizeFour);
  const heatTypeFour = selectHeatFour;
  const energyTypeFour = selectEnergyFour;

  const changeFamFour = (event) => {
    setFamFour(event.target.value);
  }

  const changeNumFour = (event) => {
    setNumFour(event.target.value);
  }

  const changeYearFour = (event) => {
    setYearFour(event.target.value);
  }

  const changeSizeFour= (event) => {
    setSizeFour(event.target.value);
  }

  const changeHeatFour = (event) => {
    setHeatFour(event.target.value);
  }

  const changeEnergyFour = (event) => {
    setEnergyFour(event.target.value);
  }

  const [getFamFive, setFamFive] = React.useState("myself");
  const [selectNumFive, setNumFive] = React.useState("");
  const [selectYearFive, setYearFive] = React.useState(0);
  const [selectSizeFive, setSizeFive] = React.useState("");
  const [selectHeatFive, setHeatFive] = React.useState("");
  const [selectEnergyFive, setEnergyFive] = React.useState("");

  let buildNumFive = Number(selectNumFive);
  const buildYearFive = selectYearFive;
  const buildSizeFive = Number(selectSizeFive);
  const heatTypeFive = selectHeatFive;
  const energyTypeFive = selectEnergyFive;

  const changeFamFive = (event) => {
    setFamFive(event.target.value);
  }

  const changeNumFive = (event) => {
    setNumFive(event.target.value);
  }

  const changeYearFive = (event) => {
    setYearFive(event.target.value);
  }

  const changeSizeFive= (event) => {
    setSizeFive(event.target.value);
  }

  const changeHeatFive = (event) => {
    setHeatFive(event.target.value);
  }

  const changeEnergyFive = (event) => {
    setEnergyFive(event.target.value);
  }

  let subtotalBuild = 0;
  let subtotalVehicle = 0;
  let subtotalFlight = 0;
  let subtotalPublicTransport = 0;

  //vehicle multiplier
  const [vehicleSub, setVehicle] = React.useState(0);
  const [vehicleArray, setVehicleArray] = React.useState({
    smallGas: { mult:	0.14836, miles: '' },
    smallDiesel: { mult: 0.13721, miles: '' },
    smallHybrid: { mult: 0.10275, miles: '' },
    smallPlug: { mult: 0.02935, miles: '' },
    smallElectric: { mult: 0, miles: '' },
    mediumGas: { mult: 0.18659, miles: '' },
    rentalGas: { mult: 0.18659, miles: '' },
    mediumDiesel: { mult:	0.16637, miles: '' },
    mediumHybrid: { mult:	0.10698, miles: '' },
    mediumPlug: { mult:	0.07083, miles: '' },
    mediumElectric: { mult:	0, miles: '' },
    largeGas: { mult:	0.27087, miles: '' },
    largeDiesel: { mult: 0.20419, miles: '' },
    largeHybrid: { mult: 0.1448, miles: '' },
    largePlug: { mult: 0.07731, miles: '' },
    largeElectric: { mult: 0, miles: '' },
    motorbikeGas: { mult:	0.11337, miles: '' },
    planeGas: { mult:	2.54306, miles: '' },
    heliGas: { mult: 2.54306, miles: '' },
    jetGas: { mult:	2.54306, miles: '' },
    yachtGas: { mult:	2.54, miles: '' },
    yachtDiesel: { mult: 2.35, miles: '' },
    atvGas: { mult:	2.3, miles: '' },
    sbsGas: { mult:	2.3, miles: '' },
    snowGas: { mult: 2.3, miles: '' },
    scootGas: { mult:	2.3, miles: '' },
    seaGas: { mult:	2.3, miles: '' },
    lawnGas: { mult: 2.3, miles: '' },
    tractorGas: { mult:	2.3, miles: '' }
  });

  //flight multiplier
  const [flightSub, setFlight] = React.useState(0);
  const [flightArray, setFlightArray] = React.useState({
    flyShort: { mult: 122.15, count: '' },
    flyMediumEco: { mult: 305.96, count: '' },
    flyMediumBus: { mult: 458.94, count: '' },
    flyLongEco: { mult: 696.225, count: '' },
    flyLongEcoPlus: { mult: 1113.9, count: '' },
    flyLongBus: { mult: 2018.95, count: '' },
    flyLongFirst: { mult: 2784.75, count: '' },
    flyHotels: { mult: 17.4, count: '' }
  });

  //public transportation
  const [publicTransportSub, setPublicTransport] = React.useState(0);
  const [publicTransportArray, setPublicTransportArray] = React.useState({
    publicCar: { mult: 0.06214, count: '' },
    publicTaxi: { mult: 0.1743, count: '' },
    publicSubway: { mult: 0.06214, count: '' }
  });

  /* array using data from the spreadsheet, including multipliers */
  const buildArray = {
    "1000": { gas: 1072, oil: 1562, electric:	758, wood: 91	},
    "1500": {	gas: 3473, oil:	5059, electric:	2456, wood:	295	},
    "2000": {	gas: 4188, oil:	6100, electric:	2961, wood:	356	},
    "2500": {	gas: 5464, oil:	7960, electric:	3864, wood:	465	},
    "5000": {	gas: 8197, oil:	11940, electric: 5796, wood: 697 },
    "7500": {	gas: 12295, oil: 17910, electric:	8694, wood:	1045 },
    "10000": { gas:	18442, oil:	26865, electric: 13041, wood:	1568 },
    "10001": { gas:	27663, oil:	40298, electric: 19561, wood:	2352 }
  };

  const energySavingsMult = {
    none: 1,
    light: 0.85,
    moderate: 0.6,
    extensive: 0.4
  };
      
  if (buildSize && heatType && energyType && buildNum) {
    if (getFam == "family") {
      buildNum = 1
    }
    
    subtotalBuild += Number((((buildArray[buildSize][heatType] * energySavingsMult[energyType])/buildNum)+((buildYear/12)* 1444)/buildNum)/1000);
  }

  if (buildSizeTwo && heatTypeTwo && energyTypeTwo && buildNumTwo) {
    if (getFamTwo == "family") {
      buildNumTwo = 1
    }

    subtotalBuild += Number((((buildArray[buildSizeTwo][heatTypeTwo] * energySavingsMult[energyTypeTwo])/buildNumTwo)+((buildYearTwo/12)* 1444)/buildNumTwo)/1000);
  }

  if (buildSizeThree && heatTypeThree && energyTypeThree && buildNumThree) {
    if (getFamThree == "family") {
      buildNumThree = 1
    }

    subtotalBuild += Number((((buildArray[buildSizeThree][heatTypeThree] * energySavingsMult[energyTypeThree])/buildNumThree)+((buildYearThree/12)* 1444)/buildNumThree)/1000);
  }

  if (buildSizeFour && heatTypeFour && energyTypeFour && buildNumFour) {
    if (getFamFour == "family") {
      buildNumFour = 1
    }

    subtotalBuild += Number((((buildArray[buildSizeFour][heatTypeFour] * energySavingsMult[energyTypeFour])/buildNumFour)+((buildYearFour/12)* 1444)/buildNumFour)/1000);
  }

  if (buildSizeFive && heatTypeFive && energyTypeFive && buildNumFive) {
    if (getFamFive == "family") {
      buildNumFive = 1
    }

    subtotalBuild += Number((((buildArray[buildSizeFive][heatTypeFive] * energySavingsMult[energyTypeFive])/buildNumFive)+((buildYearFive/12)* 1444)/buildNumFive)/1000);
  }

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

  /* function to calculate the vehicle mileage */
  const calculateMiles=(e)=>{
    setVehicleArray({
      ...vehicleArray,
      [e.target.name]: {
        ...vehicleArray[e.target.name],
        miles: Number(e.target.value)
      }
    });

    calculateVehicle();
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
    setFlightArray({
      ...flightArray,
      [e.target.name]: {
        ...flightArray[e.target.name],
        count: Number(e.target.value)
      }
    });

    calculateFlight();
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
    setPublicTransportArray({
      ...publicTransportArray,
      [e.target.name]: {
        ...publicTransportArray[e.target.name],
        count: Number(e.target.value)
      }
    });

    calculatePublicTransport();
  }

  /* calculate the 'total' here by adding on the other subtotals */
  const total = vehicleSub + subtotalBuild + (flightSub/1000) + (publicTransportSub/1000);
  if (typeof window !== 'undefined') {
    localStorage.setItem('personalfootprint', String(total));
  }

  const editUrlPrefix = '/personal-calculator?session=';
  const sharingUrlPrefix = '/personal-calculator-share?session=';
  const [editUrl, setEditUrl] = React.useState('/personal-calculator');
  const [sharingUrl, setSharingUrl] = React.useState('/share-my-results');

  const router = useRouter();
  const [sessionDataError, setSessionDataError] = React.useState("");
  useEffect(() => {
    if (router.isReady) {
      if (router.query.session) {
        sessionID = router.query.session;
      }
      
      setEditUrl(editUrlPrefix + sessionID);
      setSharingUrl(sharingUrlPrefix + sessionID);
  
      try {
        fetch(`/api/calc?sessionID=${sessionID}&type=personal-calculator`).then(async (response) => {
          if (response.status === 200) {
            const sessionData = await response.json();
            const sessionCalcData = sessionData.calcData && sessionData.calcData.data ? sessionData.calcData.data : {};

            if (sessionCalcData.selectSize !== undefined) {
              setSize(sessionCalcData.selectSize);
            }

            if (sessionCalcData.selectNum !== undefined) {
              setNum(sessionCalcData.selectNum);
            }

            if (sessionCalcData.selectYear !== undefined) {
              setYear(sessionCalcData.selectYear);
            }

            if (sessionCalcData.selectHeat !== undefined) {
              setHeat(sessionCalcData.selectHeat);
            }

            if (sessionCalcData.selectEnergy !== undefined) {
              setEnergy(sessionCalcData.selectEnergy);
            }

            if (sessionCalcData.selectNumTwo !== undefined) {
              setNumTwo(sessionCalcData.selectNumTwo);
            }

            if (sessionCalcData.selectYearTwo !== undefined) {
              setYearTwo(sessionCalcData.selectYearTwo);
            }

            if (sessionCalcData.selectSizeTwo !== undefined) {
              setSizeTwo(sessionCalcData.selectSizeTwo);
            }

            if (sessionCalcData.selectHeatTwo !== undefined) {
              setHeatTwo(sessionCalcData.selectHeatTwo);
            }

            if (sessionCalcData.selectEnergyTwo !== undefined) {
              setEnergyTwo(sessionCalcData.selectEnergyTwo);
            }

            if (sessionCalcData.selectNumThree !== undefined) {
              setNumThree(sessionCalcData.selectNumThree);
            }

            if (sessionCalcData.selectYearThree !== undefined) {
              setYearThree(sessionCalcData.selectYearThree);
            }

            if (sessionCalcData.selectSizeThree !== undefined) {
              setSizeThree(sessionCalcData.selectSizeThree);
            }

            if (sessionCalcData.selectHeatThree !== undefined) {
              setHeatThree(sessionCalcData.selectHeatThree);
            }

            if (sessionCalcData.selectEnergyThree !== undefined) {
              setEnergyThree(sessionCalcData.selectEnergyThree);
            }

            if (sessionCalcData.selectNumFour !== undefined) {
              setNumFour(sessionCalcData.selectNumFour);
            }

            if (sessionCalcData.selectYearFour !== undefined) {
              setYearFour(sessionCalcData.selectYearFour);
            }

            if (sessionCalcData.selectSizeFour !== undefined) {
              setSizeFour(sessionCalcData.selectSizeFour);
            }

            if (sessionCalcData.selectHeatFour !== undefined) {
              setHeatFour(sessionCalcData.selectHeatFour);
            }

            if (sessionCalcData.selectEnergyFour !== undefined) {
              setEnergyFour(sessionCalcData.selectEnergyFour);
            }

            if (sessionCalcData.selectNumFive !== undefined) {
              setNumFive(sessionCalcData.selectNumFive);
            }

            if (sessionCalcData.selectYearFive !== undefined) {
              setYearFive(sessionCalcData.selectYearFive);
            }

            if (sessionCalcData.selectSizeFive !== undefined) {
              setSizeFive(sessionCalcData.selectSizeFive);
            }

            if (sessionCalcData.selectHeatFive !== undefined) {
              setHeatFive(sessionCalcData.selectHeatFive);
            }

            if (sessionCalcData.selectEnergyFive !== undefined) {
              setEnergyFive(sessionCalcData.selectEnergyFive);
            }

            if (sessionCalcData.getFam !== undefined) {
              setFam(sessionCalcData.getFam);
            }

            if (sessionCalcData.getFamTwo !== undefined) {
              setFamTwo(sessionCalcData.getFamTwo);
            }

            if (sessionCalcData.getFamThree !== undefined) {
              setFamThree(sessionCalcData.getFamThree);
            }

            if (sessionCalcData.getFamFour !== undefined) {
              setFamFour(sessionCalcData.getFamFour);
            }

            if (sessionCalcData.getFamFive !== undefined) {
              setFamFive(sessionCalcData.getFamFive);
            }

            if (sessionCalcData.vehicleArray !== undefined) {
              setVehicleArray(sessionCalcData.vehicleArray);
            }

            if (sessionCalcData.publicTransportArray !== undefined) {
              setPublicTransportArray(sessionCalcData.publicTransportArray);
            }

            if (sessionCalcData.flightArray !== undefined) {
              setFlightArray(sessionCalcData.flightArray);
            }

            if (sessionCalcData.vehicleSub !== undefined) {
              setVehicle(sessionCalcData.vehicleSub);
            }

            if (sessionCalcData.publicTransportSub !== undefined) {
              setPublicTransport(sessionCalcData.publicTransportSub);
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

  const saveSession = async (successCallback: () => void, failureCallback: (error) => void) => {
    const body = {
      sessionID: sessionID,
      type: 'personal-calculator',
      data: {
        getFam,
        selectSize,
        selectNum,
        selectYear,
        selectHeat,
        selectEnergy,
        getFamTwo,
        selectNumTwo,
        selectYearTwo,
        selectSizeTwo,
        selectHeatTwo,
        selectEnergyTwo,
        getFamThree,
        selectNumThree,
        selectYearThree,
        selectSizeThree,
        selectHeatThree,
        selectEnergyThree,
        getFamFour,
        selectNumFour,
        selectYearFour,
        selectSizeFour,
        selectHeatFour,
        selectEnergyFour,
        getFamFive,
        selectNumFive,
        selectYearFive,
        selectSizeFive,
        selectHeatFive,
        selectEnergyFive,
        vehicleArray,
        publicTransportArray,
        flightArray,
        vehicleSub,
        publicTransportSub,
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

  const [editUrlError, setEditUrlError] = React.useState("");
  const editUrlClick = (e) => {
    e.preventDefault();

    saveSession(() => {
      setEditUrlError("");
      router.push(e.target.getAttribute('href'));
    }, (error) => {
      setEditUrlError(error);
    });
  };

  const [shareError, setShareError] = React.useState("");
  const shareBeforeClick = () => {
    return new Promise<void>((resolve, reject) => {
      saveSession(() => {
        setShareError("");
        resolve();
      }, (error) => {
        setShareError(error);
        reject(error);
      });
    })
  };

  const [nextStepError, setNextStepError] = React.useState("");
  const nextStepClick = (e) => {
    e.preventDefault();

    saveSession(() => {
      setNextStepError("");
      router.push("/smart-forest-personal");
    }, (error) => {
      setNextStepError(error);
    });
  };
  
  return (
    <div className="bg-legacy">
      <Header/>
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <Container className="p-4 pt-5">
        <Row className="justify-content-center">
          <Col className="col-12 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold tight-drop-light">{editingdata.title}</h1>
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
                  <h3 className="text-green">{editingdata.heat1Title}</h3>
                  <hr className="mb-4"/>
                </Col>
                <h5 className="smallCaps text-small text-green">{editingdata.heat1Para}</h5>
              </Row>
              <Row className="mb-3">
                <Col>
                <p>{getFam == 'myself'? "Myself" : "My family"}</p>
                <p className="x-small mb-3 op-7">Who are you filling this out for</p>
                
                  <p>{selectNum}</p>
                  <p className="x-small mb-3 op-7">Number of people in your household</p>
                
                  <p>{selectYear}</p>
                  <p className="x-small mb-3 op-7">Month(s) per year spent living at this residence</p>
                
                  <p>{selectSize}</p>
                  <p className="x-small mb-3 op-7">Square feet of your home</p>
                
                <p>{selectHeat}</p>
                <p className="x-small mb-3 op-7">Main source of heat for your home</p>
                
                  <p>{selectEnergy}</p>
                  <p className="x-small mb-3 op-7">Energy savings</p>
                </Col>
              </Row> 

              {/* residence 2 */}
              <Accordion>
              <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            
                  
                            <p>2nd Residence</p>

                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                              <div>
              
                              <Row>
                <Col>
                  {sessionDataError ? <p style={{ color: 'red' }}>{sessionDataError}</p> : null}
                  <h3 className="text-green">{editingdata.heat1Title}</h3>
                  <hr className="mb-4"/>
                </Col>
                <h5 className="smallCaps text-small text-green">{editingdata.heat1Para}</h5>
              </Row>
              <Row className="mb-3">
                <Col>
                <p>{getFamTwo == 'myself'? "Myself" : "My family"}</p>
                <p className="x-small mb-3 op-7">Who are you filling this out for</p>
                
                  <p>{Number(selectNumTwo)>0 ? selectNumTwo : ''}</p>
                  {selectNumTwo ? '<p className="x-small mb-3 op-7">Number of people in your household</p>' : ''}
                  
                  <p>{Number(selectYearTwo) >0 ? selectYearTwo : ''}</p>
                  {selectYearTwo? '<p className="x-small mb-3 op-7">Month(s) per year spent living at this residence</p>' :''}
                
                  <p>{selectSizeTwo}</p>
                  {selectSizeTwo? '<p className="x-small mb-3 op-7">Square feet of your home</p>' : ''}
                
                <p>{selectHeatTwo}</p>
                {selectHeatTwo? '<p className="x-small mb-3 op-7">Main source of heat for your home</p>' : ''}
               
                  <p>{selectEnergyTwo}</p>
                  {selectEnergyTwo? '<p className="x-small mb-3 op-7">Energy savings</p>' : ''}
                </Col>
              </Row> 
              </div>
</Accordion.Collapse>

</Card>
                {/* residence 3 */}
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                  <p>3rd Residence</p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <div>
                    <Row className="mb-3">
                <Col>
                <p>{getFamThree == 'myself'? "Myself" : "My family"}</p>
                <p className="x-small mb-3 op-7">Who are you filling this out for</p>
                
                  <p>{Number(selectNumThree)>0 ? selectNumThree : ''}</p>
                  {selectNumThree ? '<p className="x-small mb-3 op-7">Number of people in your household</p>' : ''}
                  
                  <p>{Number(selectYearThree) >0 ? selectYearThree : ''}</p>
                  {selectYearThree? '<p className="x-small mb-3 op-7">Month(s) per year spent living at this residence</p>' :''}
                
                  <p>{selectSizeThree}</p>
                  {selectSizeThree? '<p className="x-small mb-3 op-7">Square feet of your home</p>' : ''}
                
                <p>{selectHeatThree}</p>
                {selectHeatThree? '<p className="x-small mb-3 op-7">Main source of heat for your home</p>' : ''}
               
                  <p>{selectEnergyThree}</p>
                  {selectEnergyThree? '<p className="x-small mb-3 op-7">Energy savings</p>' : ''}
                </Col>
              </Row> 
                  </div>
                </Accordion.Collapse>
              </Card>

              {/* residence 4 */}
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                <p>4th Residence</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <div>
                  <Row className="mb-3">
                <Col>
                <p>{getFamThree == 'myself'? "Myself" : "My family"}</p>
                <p className="x-small mb-3 op-7">Who are you filling this out for</p>
                
                  <p>{Number(selectNumFour)>0 ? selectNumFour : ''}</p>
                  {selectNumFour ? '<p className="x-small mb-3 op-7">Number of people in your household</p>' : ''}
                  
                  <p>{Number(selectYearFour) >0 ? selectYearFour : ''}</p>
                  {selectYearFour? '<p className="x-small mb-3 op-7">Month(s) per year spent living at this residence</p>' :''}
                
                  <p>{selectSizeFour}</p>
                  {selectSizeFour? '<p className="x-small mb-3 op-7">Square feet of your home</p>' : ''}
                
                <p>{selectHeatFour}</p>
                {selectHeatFour? '<p className="x-small mb-3 op-7">Main source of heat for your home</p>' : ''}
               
                  <p>{selectEnergyFour}</p>
                  {selectEnergyFour? '<p className="x-small mb-3 op-7">Energy savings</p>' : ''}
                </Col>
              </Row> 
                </div>
              </Accordion.Collapse>
            </Card>

            {/* residence 5 */}
            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            
                  
                            <p>5th Residence</p>

                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                              <div>
              
                              <Row className="mb-3">
                <Col>
                <p>{getFamFive == 'myself'? "Myself" : "My family"}</p>
                <p className="x-small mb-3 op-7">Who are you filling this out for</p>
                
                  <p>{Number(selectNumFive)>0 ? selectNumFive : ''}</p>
                  {selectNumFive ? '<p className="x-small mb-3 op-7">Number of people in your household</p>' : ''}
                  
                  <p>{Number(selectYearFive) >0 ? selectYearFive : ''}</p>
                  {selectYearFive? '<p className="x-small mb-3 op-7">Month(s) per year spent living at this residence</p>' :''}
                
                  <p>{selectSizeFive}</p>
                  {selectSizeFive? '<p className="x-small mb-3 op-7">Square feet of your home</p>' : ''}
                
                <p>{selectHeatFive}</p>
                {selectHeatFive? '<p className="x-small mb-3 op-7">Main source of heat for your home</p>' : ''}
               
                  <p>{selectEnergyFive}</p>
                  {selectEnergyFive? '<p className="x-small mb-3 op-7">Energy savings</p>' : ''}
                </Col>
              </Row> 
           </div>
         </Accordion.Collapse>
         </Card>
     
        
         </Accordion>

            </div>

        <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
          <Row>
            <Col className="col-12">
              <h3 className="text-green">{editingdata.vehicleHeader}</h3>
              <hr/>
              <p className="text-grey mb-3">{editingdata.vehiclePara1}</p>
            </Col>
            <Col>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <p>
                    {editingdata.vehicleSmall}
                      </p>
                    
                    </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <div>
                      <Row>
                        <Col className="col">
                          {editingdata.vehicleGas}
                          <p>{vehicleArray.smallGas.miles}</p>
                          
                <p className="x-small mb-3 op-7">Annual KM (gas)</p>
                       
                          {editingdata.vehicleDiesel}
                          <p>{vehicleArray.smallDiesel.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (diesel)</p>
                       
                          {editingdata.vehicleHybrid}
                          <p>{vehicleArray.smallHybrid.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (hybrid)</p>
                        
                        {editingdata.vehiclePlug}
                          <p>{vehicleArray.smallPlug.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (plug-in hybrid)</p>
                        
                          {editingdata.vehicleElectric}
                         <p>{vehicleArray.smallElectric.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (battery electric)</p>
                        </Col>
                      </Row>
                    </div>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <p>
                    {editingdata.vehicleMed}
                    </p>
                    <h5 className="text-small smallCaps op-6">4-door sedans, SUVs</h5>
                  </Accordion.Toggle>
                  
                  <Accordion.Collapse eventKey="1">
                    <div>
                      <Row>
                        <Col className="col">
                          {editingdata.vehicleGas}
                         <p>{vehicleArray.mediumGas.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (gas)</p>
                        </Col>
                      </Row> 
                      <Row>
                        <Col className="col">
                        {editingdata.vehicleDiesel}
                          <p>{vehicleArray.mediumDiesel.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (diesel)</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="col">
                        {editingdata.vehicleHybrid}
                          <p>{vehicleArray.mediumHybrid.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (hybrid)</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="col">
                        {editingdata.vehiclePlug}
                          <p>{vehicleArray.mediumPlug.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (plug-in hybrid)</p>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="col">
                          {editingdata.vehicleElectric}
                          <p>{vehicleArray.mediumElectric.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (battery electric)</p>
                        </Col>
                      </Row>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <p>
                    {editingdata.vehicleLarge}
                    </p>
                    <h5 className="text-small smallCaps op-6">Pickup Trucks</h5>
                  </Accordion.Toggle>
                    
                  <Accordion.Collapse eventKey="2">
                    <div>
                      <Row>
                        <Col className="col">
                          {editingdata.vehicleGas}
                         <p>{vehicleArray.largeGas.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (gas)</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          {editingdata.vehicleDiesel}
                          <p>{vehicleArray.largeDiesel.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (diesel)</p>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="col">
                          {editingdata.vehicleHybrid}
                          <p>{vehicleArray.largeHybrid.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (hybrid)</p>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="col">
                        {editingdata.vehiclePlug}
                          <p>{vehicleArray.largePlug.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (plug-in hybrid)</p>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="col">
                          {editingdata.vehicleElectric}
                          <p>{vehicleArray.largeElectric.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (battery electric)</p>
                        </Col>
                      </Row>
                      <hr/>

                      <h5 className="smallCaps text-small text-green">{editingdata.vehicleMoto}</h5>
                      <p className="text-small op-6">{editingdata.vehicleMotoDesc}</p>
                      <Row>
                        <Col className="col">
                          {editingdata.vehicleGas}
                          <p>{vehicleArray.motorbikeGas.miles}</p>
                <p className="x-small mb-3 op-7">Annual KM (gas)</p>
                        </Col>
                      </Row> 
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <p>
                    Private Aircraft
                      </p>
                    <h5 className="text-small smallCaps op-6">Personally owned aircraft, prop planes, helicopters, jets, etc.</h5>
                  </Accordion.Toggle>


                  <Accordion.Collapse eventKey="3">
                    <div>
                      <Row>
                        <Col className="col">
                          {editingdata.vehiclePlane}
                          <p>{vehicleArray.jetGas.miles}</p>
                          <p className="x-small mb-3 op-7">Annual litres of fuel</p>
                        </Col>
                      </Row> 
                    
                      <Row>
                        <Col className="col">
                          {editingdata.vehicleJet}
                          <p>{vehicleArray.planeGas.miles}</p>
                          <p className="x-small mb-3 op-7">Annual litres of fuel</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          {editingdata.vehicleHeli}
                          <p>{vehicleArray.heliGas.miles}</p>
                          <p className="x-small mb-3 op-7">Annual litres of fuel</p>
                        </Col>
                      </Row>
                    </div>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    
                    <p>
                    Recreational Vehicles
                      </p>
                    <h5 className="text-small smallCaps op-6">Personally owned recreational vehicles, such as yachts, ATVs, etc.</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <div>
                      <p className="mb-3">{editingdata.VehicleOther}</p>
                      <Row>
                        <Col className="col">
                          {editingdata.vechileYacht}
                          <p>{vehicleArray.yachtGas.miles}</p>
                          <p className="x-small mb-3 op-7">Marine Diesel Litres per year</p>

                          <p>{vehicleArray.yachtDiesel.miles}</p>
                          <p className="x-small mb-3 op-7">Marine Diesel Litres per year</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          {editingdata.vehicleATV}
                          <p>{vehicleArray.atvGas.miles}</p>
                          <p className="x-small mb-3 op-7">Litres per year</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          {editingdata.vehicleSide}
                          <p>{vehicleArray.sbsGas.miles}</p>
                          <p className="x-small mb-3 op-7">Litres per year</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          {editingdata.vehicleSnow}
                          <p>{vehicleArray.snowGas.miles}</p>
                          <p className="x-small mb-3 op-7">Litres per year</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          Seadoo
                          <p>{vehicleArray.seaGas.miles}</p>
                          <p className="x-small mb-3 op-7">Litres per year</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          Scooter
                          <p>{vehicleArray.scootGas.miles}</p>
                          <p className="x-small mb-3 op-7">Litres per year</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          Lawn Mower/Tractor
                          <p>{vehicleArray.lawnGas.miles} </p>
                          <p className="x-small mb-3 op-7">Litres per year</p>
                        </Col>
                      </Row> 

                      <Row>
                        <Col className="col">
                          Tractor/Farm Equipment
                          <p>{vehicleArray.tractorGas.miles}</p>
                          <p className="x-small mb-3 op-7">Litres per year</p>
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
                  <hr/>
                  <p className="text-grey mb-3">{editingdata.flightPara}</p>
                </Col>
              </Row>
          
              <Row>
                <Col className="col-12 col-xl-4 bold mb-2">{editingdata.flightShort}</Col>
                <Col>
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6">{editingdata.flightShort1}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{flightArray.flyShort.count}</p>
                          <p className="x-small mb-3 op-7">Number of flights</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr/>

              <Row>
                <Col className="col-10 col-xl-4 bold mb-2">{editingdata.flightMed}</Col>
                <Col>
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6">{editingdata.flightMed1}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{flightArray.flyMediumEco.count}</p>
                       <p className="x-small mb-3 op-7">Number of flights</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6">{editingdata.flightMed2}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{flightArray.flyMediumBus.count}</p>
                         <p className="x-small mb-3 op-7">Number of flights</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr/>

              <Row>
                <Col className="col-10 col-xl-4 bold mb-2">{editingdata.flightLong}</Col>
                <Col className="col-12 col-xl-8">
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6">{editingdata.flightLong1}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{flightArray.flyLongEco.count}</p>
                      <p className="x-small mb-3 op-7">Number of flights</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6">{editingdata.flightLong2}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{flightArray.flyLongEcoPlus.count}</p>
                      <p className="x-small mb-3 op-7">Number of flights</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6">{editingdata.flightLong3}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{flightArray.flyLongBus.count}</p>
                       <p className="x-small mb-3 op-7">Number of flights</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12 col-xl-4 col-sm-6">{editingdata.flightLong4}</Col>
                    <Col className="col-12 col-xl-8 col-sm-6">
                      <p>{flightArray.flyLongFirst.count}</p>
                       <p className="x-small mb-3 op-7">Number of flights</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr/>

              <Row>
                <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.flightNights}</Col>
                <Col className="col-12 col-xl-8 col-sm-6">
                  <p>{flightArray.flyHotels.count}</p>
                    <p className="x-small mb-3 op-7">Number of nights</p>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.flightCars}</Col>
                <Col className="col-12 col-xl-8 col-sm-6">
                  <p>{vehicleArray.rentalGas.miles}</p>
                <p className="x-small mb-3 op-7">Annual Km (gas)</p>
                </Col>
              </Row> 
            </div>

            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h3 className="text-green">{editingdata.publicHeader}</h3>
                  <hr/>
                  <p className="text-grey mb-3">{editingdata.publicPara}</p>
                  
                </Col>
              </Row>
              
              <Row>
                <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.publicTaxi}</Col>
                <Col className="col-12 col-xl-8 col-sm-6">
                  <p>{publicTransportArray.publicTaxi.count}</p>
                  <p className="x-small mb-3 op-7">Average Km per day</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.publicMetro}</Col>
                <Col className="col-12 col-xl-8 col-sm-6">
                  <p>{publicTransportArray.publicSubway.count}</p>
                  <p className="x-small mb-3 op-7">Average Km per day</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.publicBus}</Col>
                <Col className="col-12 col-xl-8 col-sm-6">
                  <p>{publicTransportArray.publicCar.count}</p>
                  <p className="x-small mb-3 op-7">Average Km per day</p>
                </Col>
              </Row>
            </div>
          </Col>
          
          <Col className=" p-3  col-11 col-lg-4 stickyCalc mb-4">
            <div className="text-white p-5 innerShadow roundedBox bg-green">
              <h4 className="mb-0">{editingdata.dataHeader}</h4>
              <hr/>
              <Row>
                <Col>{editingdata.dataType1}</Col><Col className="text-right bold">{subtotalBuild > 0 ? subtotalBuild.toFixed(2) : "--"}</Col>
              </Row>
              <hr/>
              <Row>
                <Col>{editingdata.dataType2}</Col><Col className="text-right bold">{vehicleSub > 0 ? vehicleSub.toFixed(2) : "--"}</Col>
              </Row>
              <hr/>
              <Row>
                <Col>{editingdata.dataType3}</Col><Col className="text-right bold">{flightSub > 0 ? (flightSub/1000).toFixed(2) : "--"}</Col>
              </Row>
              <hr/>
              <Row>
                <Col>{editingdata.dataType4}</Col><Col className="text-right bold">{publicTransportSub > 0 ? (publicTransportSub/1000).toFixed(2) : "--"}</Col>
              </Row>
              <hr/>
              <span className="smallCaps text-small">{editingdata.dataTotal}</span><br/>
              <span className="h2 bold">{total > 0 ? total.toFixed(2) : "--"}</span>
              <p>{total > 0 ? "(Metric Tonnes of CO2 per Year)" : ""}</p>
              <p className="text-small">{editingdata.dataDisclaimer}</p>

              
            </div>
          </Col>
        </Row>  

        <Row className="justify-content-center ">
          <Col className="col-11 col-lg-10 align-items-center text-center p-3">
            <div className="bg-green p-4 innerShadow roundedBox">
              <p className="smallCaps text-white mb-3">Share your results</p>
              {shareError ? <p style={{color: 'red' }}>{shareError}</p> : null}

              {/* todo - change these to use sharingUrl instead of editUrl when the sharing page is implemented */}
              
              <FacebookShareButton url={hostname + sharingUrl} beforeOnClick={shareBeforeClick} className="mx-2">
                <FacebookIcon size={48} round />
              </FacebookShareButton>

              <TwitterShareButton url={hostname + sharingUrl} beforeOnClick={shareBeforeClick} className="mx-2">
                <TwitterIcon size={48} round />
              </TwitterShareButton>

              <LinkedinShareButton url={hostname + sharingUrl} beforeOnClick={shareBeforeClick} className="mx-2">
                <LinkedinIcon size={48} round />
              </LinkedinShareButton>

            </div>
          </Col>
        </Row>
      
        <Row className="justify-content-center ">
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
            <h2 className="text-orange text-center pt-5 bold mb-4 tight-drop-light">{editingdata.otherHeader}</h2>
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
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
            <h4 className="text-white tight-drop-light">{editingdata.otherbox2Header}</h4>
            <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox2Para}</p>
            <Link href="/school-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox2button}</a></Link>
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
export const getStaticProps: GetStaticProps = async function({preview, previewData}) {
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
      }
    },
  }
}
