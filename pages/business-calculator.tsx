import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { useEffect } from "react";
import Header from "../components/header";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';
import randomstring from "randomstring";
import Head from "next/head";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from "react-share";

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
  if(router.query.lang){ 
  const lan = JSON.stringify(router.query.lang);
  language = JSON.parse(lan)
  }
  return (language)
}

export default function BusinessCalc({ file, href, children}) {
  const formOptions = {
    label: 'Business Calculator',
    fields: [
      {name: 'businessType1', component: 'markdown' },
      {name: 'header', component: 'markdown' },
      {name: 'para1', component: 'markdown' },
      {name: 'select', component: 'markdown' },
      {name: 'businessHeader', component: 'markdown' },
      {name: 'businessTypeHeader', component: 'markdown' },
      {name: 'businessType1', component: 'markdown' },
      {name: 'businessType2', component: 'markdown' },
      {name: 'businessType3', component: 'markdown' },
      {name: 'businessType4', component: 'markdown' },
      {name: 'businessType5', component: 'markdown' },
      {name: 'businessType6', component: 'markdown' },
      {name: 'businessType7', component: 'markdown' },
      {name: 'businessType8', component: 'markdown' },
      {name: 'businessType9', component: 'markdown' },
      {name: 'businessType10', component: 'markdown' },
      {name: 'businessType11', component: 'markdown' },
      {name: 'businessType12', component: 'markdown' },
      {name: 'businessType13', component: 'markdown' },
      {name: 'businessType14', component: 'markdown' },
      {name: 'businessType15', component: 'markdown' },
      {name: 'businessType16', component: 'markdown' },
      {name: 'businessType17', component: 'markdown' },
      {name: 'businessType18', component: 'markdown' },
      {name: 'businessType19', component: 'markdown' },
      {name: 'businessType20', component: 'markdown' },
      {name: 'businessType21', component: 'markdown' },
      {name: 'businessType22', component: 'markdown' },
      {name: 'businessType23', component: 'markdown' },
      {name: 'businessType24', component: 'markdown' },
      {name: 'businessType25', component: 'markdown' },
      {name: 'businessType26', component: 'markdown' },
      {name: 'businessType27', component: 'markdown' },
      {name: 'businessType28', component: 'markdown' },
      {name: 'commercialSpaceHeader', component: 'markdown' },
      {name: 'commercialSpace1', component: 'markdown' },
      {name: 'commercialSpace2', component: 'markdown' },
      {name: 'commercialSpace3', component: 'markdown' },
      {name: 'commercialSpace4', component: 'markdown' },
      {name: 'commercialSpace5', component: 'markdown' },
      {name: 'commercialSpace6', component: 'markdown' },
      {name: 'commercialSpace7', component: 'markdown' },
      {name: 'commercialSpace8', component: 'markdown' },
      {name: 'commercialSpace9', component: 'markdown' },
      {name: 'commercialSpace10', component: 'markdown' },
      {name: 'commercialSpace11', component: 'markdown' },
      {name: 'squareFeetHeader', component: 'markdown' },
      {name: 'squareFeet1', component: 'markdown' },
      {name: 'squareFeet2', component: 'markdown' },
      {name: 'squareFeet3', component: 'markdown' },
      {name: 'squareFeet4', component: 'markdown' },
      {name: 'squareFeet5', component: 'markdown' },
      {name: 'squareFeet6', component: 'markdown' },
      {name: 'squareFeet7', component: 'markdown' },
      {name: 'buildingNumberHeader', component: 'markdown' },
      {name: 'vehicleHeader', component: 'markdown' },
      {name: 'vehiclepara', component: 'markdown' },
      {name: 'vehiclecarHeader', component: 'markdown' },
      {name: 'vehiclecarGas', component: 'markdown' },
      {name: 'vehiclecarDiesel', component: 'markdown' },
      {name: 'vehiclecarHybrid', component: 'markdown' },
      {name: 'vehiclepickupHeader', component: 'markdown' },
      {name: 'vehiclepickupGas', component: 'markdown' },
      {name: 'vehiclepickupDiesel', component: 'markdown' },
      {name: 'vehiclepickupHybrid', component: 'markdown' },
      {name: 'vehicletruckHeader', component: 'markdown' },
      {name: 'vehicletruckGas', component: 'markdown' },
      {name: 'vehicletruckDiesel', component: 'markdown' },
      {name: 'vehicleSemiHeader', component: 'markdown' },
      {name: 'vehiclesemiFridge', component: 'markdown' },
      {name: 'vehiclesemiNonFridge', component: 'markdown' },
      {name: 'vehiclejet', component: 'markdown' },
      {name: 'vehiclePlaceholder1', component: 'markdown' },
      {name: 'vehiclePlaceholder2', component: 'markdown' },
      {name: 'commuteHeader', component: 'markdown' },
      {name: 'commutePara', component: 'markdown' },
      {name: 'commuteCar', component: 'markdown' },
      {name: 'commuteBus', component: 'markdown' },
      {name: 'commuteTrain', component: 'markdown' },
      {name: 'travelHeader', component: 'markdown' },
      {name: 'travelPara', component: 'markdown' },
      {name: 'travelEmp', component: 'markdown' },
      {name: 'travelShort', component: 'markdown' },
      {name: 'travelShort1', component: 'markdown' },
      {name: 'travelMed', component: 'markdown' },
      {name: 'travelMed1', component: 'markdown' },
      {name: 'travelMed2', component: 'markdown' },
      {name: 'travelLong', component: 'markdown' },
      {name: 'travelLong1', component: 'markdown' },
      {name: 'travelLong2', component: 'markdown' },
      {name: 'travelLong3', component: 'markdown' },
      {name: 'travelLong4', component: 'markdown' },
      {name: 'travelNights', component: 'markdown' },
      {name: 'travelPlaceholder1', component: 'markdown' },
      {name: 'travelPlaceholder2', component: 'markdown' },
      {name: 'travelPlaceholder3', component: 'markdown' },
      {name: 'freightHeader', component: 'markdown' },
      {name: 'freightPara', component: 'markdown' },
      {name: 'freightVan', component: 'markdown' },
      {name: 'freightSemiNon', component: 'markdown' },
      {name: 'freightSemiFridge', component: 'markdown' },
      {name: 'freightShip', component: 'markdown' },
      {name: 'freightAirLow', component: 'markdown' },
      {name: 'freightAirHigh', component: 'markdown' },
      {name: 'freightPlaceholder1', component: 'markdown' },
      {name: 'freightPlaceholder2', component: 'markdown' },
      {name: 'dataHeader', component: 'markdown' },
      {name: 'dataType1', component: 'markdown' },
      {name: 'dataType2', component: 'markdown' },
      {name: 'dataType3', component: 'markdown' },
      {name: 'dataType4', component: 'markdown' },
      {name: 'dataType5', component: 'markdown' },
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

  const [business, setBusiness] = React.useState("");

  const changeBusiness = (event) => {
    setBusiness(event.target.value);
  };

  const [selectBuild, setBuild] = React.useState("");
  const [selectSize, setSize] = React.useState("");
  const [selectNum, setNum] = React.useState("");

  const buildType = selectBuild;
  const buildSize = Number(selectSize);
  const buildNum = Number(selectNum);

  const changeBuild = (event) => {
    setBuild(event.target.value);
  };

  const changeSize = (event) => {
    setSize(event.target.value);
  };

  const changeNum = (event) => {
    setNum(event.target.value);
  };

  const [selectBuildTwo, setBuildTwo] = React.useState("");
  const [selectSizeTwo, setSizeTwo] = React.useState("");
  const [selectNumTwo, setNumTwo] = React.useState("");

  const buildTypeTwo = selectBuildTwo;
  const buildSizeTwo = Number(selectSizeTwo);
  const buildNumTwo = Number(selectNumTwo);

  const changeBuildTwo = (event) => {
    setBuildTwo(event.target.value);
  };

  const changeSizeTwo = (event) => {
    setSizeTwo(event.target.value);
  };

  const changeNumTwo = (event) => {
    setNumTwo(event.target.value);
  };

  const [selectBuildThree, setBuildThree] = React.useState("");
  const [selectSizeThree, setSizeThree] = React.useState("");
  const [selectNumThree, setNumThree] = React.useState("");

  const buildTypeThree = selectBuildThree;
  const buildSizeThree = Number(selectSizeThree);
  const buildNumThree = Number(selectNumThree);

  const changeBuildThree = (event) => {
    setBuildThree(event.target.value);
  };

  const changeSizeThree = (event) => {
    setSizeThree(event.target.value);
  };

  const changeNumThree = (event) => {
    setNumThree(event.target.value);
  };

  const [selectBuildFour, setBuildFour] = React.useState("");
  const [selectSizeFour, setSizeFour] = React.useState("");
  const [selectNumFour, setNumFour] = React.useState("");

  const buildTypeFour = selectBuildFour;
  const buildSizeFour = Number(selectSizeFour);
  const buildNumFour = Number(selectNumFour);

  const changeBuildFour = (event) => {
    setBuildFour(event.target.value);
  };

  const changeSizeFour = (event) => {
    setSizeFour(event.target.value);
  };

  const changeNumFour = (event) => {
    setNumFour(event.target.value);
  };

  const [selectBuildFive, setBuildFive] = React.useState("");
  const [selectSizeFive, setSizeFive] = React.useState("");
  const [selectNumFive, setNumFive] = React.useState("");

  const buildTypeFive = selectBuildFive;
  const buildSizeFive = Number(selectSizeFive);
  const buildNumFive = Number(selectNumFive);

  const changeBuildFive = (event) => {
    setBuildFive(event.target.value);
  };

  const changeSizeFive = (event) => {
    setSizeFive(event.target.value);
  };

  const changeNumFive = (event) => {
    setNumFive(event.target.value);
  };

  let subtotalBuild = 0;
  let subtotalVehicle = 0;
  let subtotalTransit = 0;
  let subtotalFlight = 0;
  let subtotalFreight = 0;

  const [vehicleSub, setVehicle] = React.useState(0);
  const [vehicleArray, setVehicleArray] = React.useState({
    carGas: { mult: 0.15179, count: '', miles: '' },
    carDiesel: { mult: 0.16748, count: '', miles: '' },
    carHybrid: { mult: 0.10487, count: '', miles: '' },
    carPlug: { mult: 0.02935, count: '', miles: '' },
    carElectric: { mult: 0.000001, count: '', miles: '' },
    truckGas: { mult: 0.27807, count: '', miles: '' },
    truckDiesel: { mult: 0.20419, count: '', miles: '' },
    truckHybrid: { mult: 0.11518, count: '', miles: '' },
    truckPlug: { mult: 0.07731, count: '', miles: '' },
    truckElectric: { mult: 0.000001, count: '', miles: '' },
    deliveryGas: { mult: 0.21962, count: '', miles: '' },
    deliveryDiesel: { mult:0.2471, count: '', miles: '' },
    semiNonFrig: { mult: 0.8654, count: '', miles: '' },
    semiFrig: { mult:1.0142, count: '', miles: ''},
    jetNum: { mult:2.9237, count: '', miles: '' },
    planeGas: { mult:	2.54306, count: '', miles: '' },
    heliGas: { mult: 2.54306, count: '', miles: '' }
  });

  useEffect(() => {
    calculateVehicle();
  }, [vehicleArray]);

  const [transitSub, setTransit] = React.useState(0);
  const [transitArray, setTransitArray] = React.useState({
    transitCar: { mult: 0.1743, count: '', miles: '' },
    transitBus: { mult: 0.06214, count: '', miles: '' },
    transitTrain: { mult: 0.06214, count: '', miles: '' }
  });

  useEffect(() => {
    calculateTransit();
  }, [transitArray]);

  const [flightEmp, setEmp] = React.useState("");
  useEffect(() => {
    calculateFlight();
  }, [flightEmp]);

  const [flightSub, setFlight] = React.useState(0);
  const [flightArray, setFlightArray] = React.useState({
    flyShort: { mult: 122.15, count: '' },
    flyMediumEco: { mult: 305.96, count: '' },
    flyMediumBus: { mult: 458.94, count: '' },
    flyLongEco: { mult: 696.225, count: '' },
    flyLongEcoPlus: { mult: 1113.9, count: '' },
    flyLongBus: { mult: 2018.95, count: '' },
    flyLongFirst: { mult: 2784.75, count: '' },
    flyHotels: { mult:17.4, count: '' }
  });

  useEffect(() => {
    calculateFlight();
  }, [flightArray]);

  const [freightSub, setFreight] = React.useState(0);
  const [freightArray, setFreightArray] = React.useState({
    freightVan: { mult: 0.61628, count: '', miles: '' },
    freightSemiNonFrig: { mult:0.1065, count: '', miles: '' },
    freightSemiFrig: { mult:0.12481, count: '', miles: '' },
    freightCargo: { mult: 0.01323, count: '', miles: '' },
    freightAirLess: { mult: 2.20496, count: '', miles: '' },
    freightAirMore: { mult:1.13382, count: '', miles: '' }
  });

  useEffect(() => {
    calculateFreight();
  }, [freightArray]);

  const buildArray = {
    "5000": {	Office: 17364.7272966102, Medical:11745.2006980804, School:4757.66316027602, Care:12771.2658005338, Warehouse:9099.64324928882, Hotel:9690.54436545558, Hospital:37996.8383017167, Food:31883.4665465874, Restaurant:31883.4665465874, Retail:14238.4420898752, Other:21150.1136386494 },
    "10000": { Office: 36410.3314832734, Medical:31652.8432142392, School:50910.7964173328, Care:38785.1544490552, Warehouse:33615.6982670747, Hotel:40569.5408950621, Hospital:37996.8383017167, Food:69291.7802772103, Restaurant:69291.7802772103, Retail:34880.9486788779, Other:41842.7553285601	},
    "25000": { Office: 72820.6629665468, Medical:63305.6864284785, School:101821.592834666, Care:77570.3088981104, Warehouse:67231.3965341494, Hotel:81139.0817901241, Hospital:75993.6766034333, Food:138583.560554421, Restaurant:138583.560554421, Retail:69761.8973577557, Other:83685.5106571202	},
    "50000": { Office: 107974.850039479, Medical:121467.615511552, School:126421.429416638, Care:135848.999758979, Warehouse:86165.0149485114, Hotel:110204.71235101, Hospital:378941.441441445, Food:336771.355336677, Restaurant:336771.355336677, Retail:130500.101484575, Other:87631.4688550379 },
    "75000": { Office: 192271.827419795, Medical:189560.602466795, School:128368.440095647, Care:217415.857796719, Warehouse:107078.502637714, Hotel:221974.440768748, Hospital:474328.650611625, Food:325826.606327465, Restaurant:325826.606327465, Retail:111670.883868581, Other:127024.366414023	},
    "100000": {	Office: 288407.741129692, Medical:284340.903700192, School:192552.66014347, Care:326123.786695078, Warehouse:160617.753956571, Hotel:332961.661153122, Hospital:711492.975917437, Food:488739.909491198, Restaurant:488739.909491198, Retail:167506.325802871, Other:190536.549621034	},
    "125000": {	Office: 384543.65483959, Medical:379121.204933589, School:256736.880191293, Care:434831.715593438, Warehouse:214157.005275428, Hotel:443948.881537496, Hospital:948657.301223249, Food:651653.21265493, Restaurant:651653.21265493, Retail:223341.767737162, Other:254048.732828046	},
    "200000": {	Office: 769087.30967918, Medical:758242.409867179, School:513473.760382587, Care:869663.431186876, Warehouse:428314.010550856, Hotel:887897.763074991, Hospital:1897314.6024465, Food:1303306.42530986, Restaurant:1303306.42530986, Retail:446683.535474323, Other:508097.465656091 },
    "350000": {	Office: 1345902.79193856, Medical:1326924.21726756, School:898579.080669527, Care:1521911.00457703, Warehouse:749549.518463998, Hotel:1553821.08538124, Hospital:3320300.55428137, Food:2280786.24429226, Restaurant:2280786.24429226, Retail:781696.187080065, Other:889170.56489816	},
    "500000": {	Office: 2691805.58387713, Medical:2653848.43453513, School:1797158.16133905, Care:3043822.00915407, Warehouse:1499099.036928, Hotel:3107642.17076247, Hospital:6640601.10856275, Food:4561572.48858451, Restaurant:4561572.48858451, Retail:1563392.37416013, Other:1778341.12979632 }
  }

  if (buildType && buildNum && buildSize) {
    subtotalBuild += Number((buildArray[buildSize][buildType] * buildNum /1000))
  }

  if (buildTypeTwo && buildNumTwo && buildSizeTwo) {
    subtotalBuild += Number((buildArray[buildSizeTwo][buildTypeTwo] * buildNumTwo /1000))
  }

  if (buildTypeThree && buildNumThree && buildSizeThree) {
    subtotalBuild += Number((buildArray[buildSizeThree][buildTypeThree] * buildNumThree /1000))
  }

  if (buildTypeFour && buildNumFour && buildSizeFour) {
    subtotalBuild += Number((buildArray[buildSizeFour][buildTypeFour] * buildNumFour /1000))
  }

  if (buildTypeFive && buildNumFive && buildSizeFive) {
    subtotalBuild += Number((buildArray[buildSizeFive][buildTypeFive] * buildNumFive /1000))
  }

  subtotalBuild = Number(subtotalBuild.toFixed(2));

  const calculateVehicle=()=> {
    subtotalVehicle = 0
    for (let x of Object.keys(vehicleArray)) {
      let i = 0;
      const count = Number(vehicleArray[x].count);
      const miles = Number(vehicleArray[x].miles);

      if (count && miles){
        i += Number((count * vehicleArray[x].mult * miles))/1000
      }
      subtotalVehicle += i
    }
    setVehicle(Number(subtotalVehicle.toFixed(2)))
  }

  const calculateCount=(e)=>{
    setVehicleArray({
      ...vehicleArray,
      [e.target.name]: {
        ...vehicleArray[e.target.name],
        count: e.target.value
      }
    });
  }

  const calculateMiles=(e)=>{
    setVehicleArray({
      ...vehicleArray,
      [e.target.name]: {
        ...vehicleArray[e.target.name],
        miles: e.target.value
      }
    });
  }

  const calculateTransit=()=> {
    subtotalTransit = 0
    for (let x of Object.keys(transitArray)) {
      let i = 0;
      const count = transitArray[x].count;
      const miles = transitArray[x].miles;

      if (count && miles){
        i += Number((count * transitArray[x].mult * miles * 231))/1000
      }
      subtotalTransit += i
    }
    setTransit(Number(subtotalTransit.toFixed(2)))
  }

  const calculateTransitCount=(e)=>{
    setTransitArray({
      ...transitArray,
      [e.target.name]: {
        ...transitArray[e.target.name],
        count: e.target.value
      }
    });
  }

  const calculateTransitMiles=(e)=>{
    setTransitArray({
      ...transitArray,
      [e.target.name]: {
        ...transitArray[e.target.name],
        miles: e.target.value
      }
    });
  }

  const calculateFlight=()=> {
    subtotalFlight = 0
    for (let x of Object.keys(flightArray)) {
      let i = 0;
      const count = Number(flightArray[x].count);
      const emp = Number(flightEmp);

      if (count) {
        i += Number((count * flightArray[x].mult * emp))/1000;
      }
      
      subtotalFlight += i
    }
    setFlight(Number(subtotalFlight.toFixed(2)));
  }

  const calculateFlightCount=(e)=>{
    setFlightArray({
      ...flightArray,
      [e.target.name]: {
        ...flightArray[e.target.name],
        count: e.target.value
      }
    });
  }

  const calculateEmp=(e)=>{
    setEmp(e.target.value);
  }

  const calculateFreight=()=> {
    subtotalFreight = 0
    for (let x of Object.keys(freightArray)) {
      let i = 0;
      const count = Number(freightArray[x].count);
      const miles = Number(freightArray[x].miles);

      if (count && miles) {
        i += Number((count * freightArray[x].mult * miles))/1000
      }
      
      subtotalFreight += i
    }
    
    setFreight(Number(subtotalFreight.toFixed(2)))
  }

  const calculateFreightNum=(e)=>{
    setFreightArray({
      ...freightArray,
      [e.target.name]: {
        ...freightArray[e.target.name],
        count: e.target.value
      }
    });
  }
    
  const calculateFreightMiles=(e)=>{
    setFreightArray({
      ...freightArray,
      [e.target.name]: {
        ...freightArray[e.target.name],
        miles: e.target.value
      }
    });
  }

  const total = Number((vehicleSub + subtotalBuild + transitSub + flightSub + freightSub).toFixed(2));
  if (typeof window !== 'undefined') {
    localStorage.setItem('businessfootprint', String(total));
  }

  const editUrlPrefix = '/business-calculator?session=';
  const sharingUrlPrefix = '/share-corp-results?session=';
  const [editUrl, setEditUrl] = React.useState('/business-calculator');
  const [sharingUrl, setSharingUrl] = React.useState('/share-corp-results');

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
        fetch(`/api/calc?sessionID=${sessionID}&type=business-calculator`).then(async (response) => {
          if (response.status === 200) {
            const sessionData = await response.json();
            const sessionCalcData = sessionData.calcData && sessionData.calcData.data ? sessionData.calcData.data : {};

            if (sessionCalcData.business !== undefined) {
              setBusiness(sessionCalcData.business);
            }

            if (sessionCalcData.selectBuild !== undefined) {
              setBuild(sessionCalcData.selectBuild);
            }

            if (sessionCalcData.selectSize !== undefined) {
              setSize(sessionCalcData.selectSize);
            }

            if (sessionCalcData.selectNum !== undefined) {
              setNum(sessionCalcData.selectNum);
            }

            if (sessionCalcData.selectBuildTwo !== undefined) {
              setBuildTwo(sessionCalcData.selectBuildTwo);
            }

            if (sessionCalcData.selectSizeTwo !== undefined) {
              setSizeTwo(sessionCalcData.selectSizeTwo);
            }

            if (sessionCalcData.selectNumTwo !== undefined) {
              setNumTwo(sessionCalcData.selectNumTwo);
            }

            if (sessionCalcData.selectBuildThree !== undefined) {
              setBuildThree(sessionCalcData.selectBuildThree);
            }

            if (sessionCalcData.selectSizeThree !== undefined) {
              setSizeThree(sessionCalcData.selectSizeThree);
            }

            if (sessionCalcData.selectNumThree !== undefined) {
              setNumThree(sessionCalcData.selectNumThree);
            }

            if (sessionCalcData.selectBuildFour !== undefined) {
              setBuildFour(sessionCalcData.selectBuildFour);
            }

            if (sessionCalcData.selectSizeFour !== undefined) {
              setSizeFour(sessionCalcData.selectSizeFour);
            }

            if (sessionCalcData.selectNumFour !== undefined) {
              setNumFour(sessionCalcData.selectNumFour);
            }

            if (sessionCalcData.selectBuildFive !== undefined) {
              setBuildFive(sessionCalcData.selectBuildFive);
            }

            if (sessionCalcData.selectSizeFive !== undefined) {
              setSizeFive(sessionCalcData.selectSizeFive);
            }

            if (sessionCalcData.selectNumFive !== undefined) {
              setNumFive(sessionCalcData.selectNumFive);
            }

            if (sessionCalcData.vehicleArray !== undefined) {
              setVehicleArray(sessionCalcData.vehicleArray);
            }

            if (sessionCalcData.transitArray !== undefined) {
              setTransitArray(sessionCalcData.transitArray);
            }

            if (sessionCalcData.flightArray !== undefined) {
              setFlightArray(sessionCalcData.flightArray);
            }

            if (sessionCalcData.freightArray !== undefined) {
              setFreightArray(sessionCalcData.freightArray);
            }

            if (sessionCalcData.vehicleSub !== undefined) {
              setVehicle(sessionCalcData.vehicleSub);
            }

            if (sessionCalcData.transitSub !== undefined) {
              setTransit(sessionCalcData.transitSub);
            }

            if (sessionCalcData.flightEmp !== undefined) {
              setEmp(sessionCalcData.flightEmp);
            }

            if (sessionCalcData.flightSub !== undefined) {
              setFlight(sessionCalcData.flightSub);
            }

            if (sessionCalcData.freightSub !== undefined) {
              setFreight(sessionCalcData.freightSub);
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
      type: 'business-calculator',
      data: {
        business,
        selectBuild,
        selectSize,
        selectNum,
        selectBuildTwo,
        selectSizeTwo,
        selectNumTwo,
        selectBuildThree,
        selectSizeThree,
        selectNumThree,
        selectBuildFour,
        selectSizeFour,
        selectNumFour,
        selectBuildFive,
        selectSizeFive,
        selectNumFive,
        vehicleArray,
        transitArray,
        flightArray,
        freightArray,
        vehicleSub,
        transitSub,
        flightEmp,
        flightSub,
        freightSub
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
      router.push("/smart-forest-corp");
    }, (error) => {
      setNextStepError(error);
    });
  };

  return (
    <div className="bg-corp">
      <Header/>
      <Head>
        <title>{editingdata.header}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <Container className=" pt-5">
        <Row className="justify-content-center">
          <Col className="col-12 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold tight-drop-light">{editingdata.header}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="p-3 col-12 col-lg-7 col-xl-6">
          <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
            <p className="lead text-white m-2 calc-intro">{editingdata.para1}</p>
            <p className="text-white small m-2">If you already know your carbon footprint please proceed to <a href="/smart-forest-corp" className="text-orange bold underline">step two</a></p>
          </div>

          <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
            <Row>
              <Col>
              {sessionDataError ? <p style={{ color: 'red' }}>{sessionDataError}</p> : null}
              <h3 className="text-green">
                Building Types
              </h3>
              <hr/>
              </Col>
            </Row>
            <Row>
              <Col> 
              <label htmlFor="business">{editingdata.businessTypeHeader}</label><br />
              <select name="business" value={business} onChange={changeBusiness}>
                <option value="" hidden>{editingdata.select}</option>
                <option>{editingdata.businessType1}</option>
                <option>{editingdata.businessType2}</option>
                <option>{editingdata.businessType3}</option>
                <option>{editingdata.businessType4}</option>
                <option>{editingdata.businessType5}</option>
                <option>{editingdata.businessType6}</option>
                <option>{editingdata.businessType7}</option>
                <option>{editingdata.businessType8}</option>
                <option>{editingdata.businessType9}</option>
                <option>{editingdata.businessType10}</option>
                <option>{editingdata.businessType11}</option>
                <option>{editingdata.businessType12}</option>
                <option>{editingdata.businessType13}</option>
                <option>{editingdata.businessType14}</option>
                <option>{editingdata.businessType15}</option>
                <option>{editingdata.businessType16}</option>
                <option>{editingdata.businessType17}</option>
                <option>{editingdata.businessType18}</option>
                <option>{editingdata.businessType19}</option>
                <option>{editingdata.businessType20}</option>
                <option>{editingdata.businessType21}</option>
                <option>{editingdata.businessType22}</option>
                <option>{editingdata.businessType23}</option>
                <option>{editingdata.businessType24}</option>
                <option>{editingdata.businessType25}</option>
                <option>{editingdata.businessType26}</option>
                <option>{editingdata.businessType27}</option>
                <option>{editingdata.businessType28}</option>
              </select>
              </Col>
            </Row>
            <Row>
              <Col> 
              <hr className="mb-4"/>
              <h5 className="smallCaps text-small text-green">Primary Building</h5>
              <label htmlFor="building">What kind of building do you have?</label><br />
              <select name="building" onChange={changeBuild} value={selectBuild}>
                <option value="" hidden>{editingdata.select}</option>
                <option value='Office'>{editingdata.commercialSpace1}</option>
                <option value='Medical'>{editingdata.commercialSpace2}</option>
                <option value='School'>{editingdata.commercialSpace3}</option>
                <option value='Care'>{editingdata.commercialSpace4}</option>
                <option value='Warehouse'>{editingdata.commercialSpace5}</option>
                <option value='Hotel'>{editingdata.commercialSpace6}</option>
                <option value='Hospital'>{editingdata.commercialSpace7}</option>
                <option value='Food'>{editingdata.commercialSpace8}</option>
                <option value='Restaurant'>{editingdata.commercialSpace9}</option>
                <option value='Retail'>{editingdata.commercialSpace10}</option>
                <option value='Other'>{editingdata.commercialSpace11}</option>
              </select>
              </Col>
            </Row>


            <Row>
              <Col>
              <label htmlFor="size">{editingdata.squareFeetHeader}</label><br />
              <select name="size" value={selectSize} onChange={changeSize}>
                <option value="" hidden>{editingdata.select}</option>
                <option value='5000'>less than 5000</option>
                <option value='10000'>5000-10,000</option>
                <option value='25000'>10,000-25,000</option>
                <option value='50000'>25,000-50,000</option>
                <option value='75000'>50,000-75,000</option>
                <option value='100000'>75,000-100,000</option>
                <option value='125000'>100,000-125,000</option>
                <option value='200000'>150,000-200,000</option>
                <option value='350000'>200,000-350,000</option>
                <option value='500000'>500,000+</option>
              </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="number">{editingdata.buildingNumberHeader}</label><br />
                <input onChange={changeNum} type="number" min="0" value={selectNum} placeholder="Number of buildings of this type"/>
                <p className="x-small mb-3 op-7">Number of buildings of this type</p>
              </Col>
            </Row>
          <hr className="mb-4"/>
              <h5 className="smallCaps text-small text-green">Additional Buildings</h5>

              <Accordion>

              {/* Building Type 2 */}
              <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                              <p>
                                Building Type 2
                                </p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                              <div>
                             
            <Row>
              <Col> 
              <label htmlFor="building">What kind of building is this?</label><br />
              <select name="building" onChange={changeBuildTwo} value={selectBuildTwo}>
                <option value="" hidden>{editingdata.select}</option>
                <option value='Office'>{editingdata.commercialSpace1}</option>
                <option value='Medical'>{editingdata.commercialSpace2}</option>
                <option value='School'>{editingdata.commercialSpace3}</option>
                <option value='Care'>{editingdata.commercialSpace4}</option>
                <option value='Warehouse'>{editingdata.commercialSpace5}</option>
                <option value='Hotel'>{editingdata.commercialSpace6}</option>
                <option value='Hospital'>{editingdata.commercialSpace7}</option>
                <option value='Food'>{editingdata.commercialSpace8}</option>
                <option value='Restaurant'>{editingdata.commercialSpace9}</option>
                <option value='Retail'>{editingdata.commercialSpace10}</option>
                <option value='Other'>{editingdata.commercialSpace11}</option>
              </select>
              </Col>
            </Row>


            <Row>
              <Col>
              <label htmlFor="size">{editingdata.squareFeetHeader}</label><br />
              <select name="size" value={selectSizeTwo} onChange={changeSizeTwo}>
                <option value="" hidden>{editingdata.select}</option>
                <option value='5000'>less than 5000</option>
                <option value='10000'>5000-10,000</option>
                <option value='25000'>10,000-25,000</option>
                <option value='50000'>25,000-50,000</option>
                <option value='75000'>50,000-75,000</option>
                <option value='100000'>75,000-100,000</option>
                <option value='125000'>100,000-125,000</option>
                <option value='200000'>150,000-200,000</option>
                <option value='350000'>200,000-350,000</option>
                <option value='500000'>500,000+</option>
              </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="number">{editingdata.buildingNumberHeader}</label><br />
                <input  onChange={changeNumTwo} type="number" min="0" value={selectNumTwo} placeholder="Number of buildings of this type"/>
                <p className="x-small mb-3 op-7">Number of buildings of this type</p>
              </Col>
            </Row>
          

                              </div>
         </Accordion.Collapse>
         </Card>


 {/* Building Type 3 */}
 <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                              <p>
                                Building Type 3
                                </p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <div>
                             
            <Row>
              <Col> 
              <label htmlFor="building">What kind of building is this?</label><br />
              <select name="building" onChange={changeBuildThree} value={selectBuildThree}>
                <option value="" hidden>{editingdata.select}</option>
                <option value='Office'>{editingdata.commercialSpace1}</option>
                <option value='Medical'>{editingdata.commercialSpace2}</option>
                <option value='School'>{editingdata.commercialSpace3}</option>
                <option value='Care'>{editingdata.commercialSpace4}</option>
                <option value='Warehouse'>{editingdata.commercialSpace5}</option>
                <option value='Hotel'>{editingdata.commercialSpace6}</option>
                <option value='Hospital'>{editingdata.commercialSpace7}</option>
                <option value='Food'>{editingdata.commercialSpace8}</option>
                <option value='Restaurant'>{editingdata.commercialSpace9}</option>
                <option value='Retail'>{editingdata.commercialSpace10}</option>
                <option value='Other'>{editingdata.commercialSpace11}</option>
              </select>
              </Col>
            </Row>


            <Row>
              <Col>
              <label htmlFor="size">{editingdata.squareFeetHeader}</label><br />
              <select name="size" value={selectSizeThree} onChange={changeSizeThree}>
              <option value="" hidden>{editingdata.select}</option>
                <option value='5000'>less than 5000</option>
                <option value='10000'>5000-10,000</option>
                <option value='25000'>10,000-25,000</option>
                <option value='50000'>25,000-50,000</option>
                <option value='75000'>50,000-75,000</option>
                <option value='100000'>75,000-100,000</option>
                <option value='125000'>100,000-125,000</option>
                <option value='200000'>150,000-200,000</option>
                <option value='350000'>200,000-350,000</option>
                <option value='500000'>500,000+</option>
              </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="number">{editingdata.buildingNumberHeader}</label><br />
                <input  onChange={changeNumThree} type="number" min="0" value={selectNumThree} placeholder="Number of buildings of this type"/>
                <p className="x-small mb-3 op-7">Number of buildings of this type</p>
              </Col>
            </Row>
          

                              </div>
         </Accordion.Collapse>
         </Card>

 {/* Building Type 4 */}
 <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                              <p>
                                Building Type 4
                                </p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                              <div>
                             
            <Row>
              <Col> 
              <label htmlFor="building">What kind of building is this?</label><br />
              <select name="building" onChange={changeBuildFour} value={selectBuildFour}>
                <option value="" hidden>{editingdata.select}</option>
                <option value='Office'>{editingdata.commercialSpace1}</option>
                <option value='Medical'>{editingdata.commercialSpace2}</option>
                <option value='School'>{editingdata.commercialSpace3}</option>
                <option value='Care'>{editingdata.commercialSpace4}</option>
                <option value='Warehouse'>{editingdata.commercialSpace5}</option>
                <option value='Hotel'>{editingdata.commercialSpace6}</option>
                <option value='Hospital'>{editingdata.commercialSpace7}</option>
                <option value='Food'>{editingdata.commercialSpace8}</option>
                <option value='Restaurant'>{editingdata.commercialSpace9}</option>
                <option value='Retail'>{editingdata.commercialSpace10}</option>
                <option value='Other'>{editingdata.commercialSpace11}</option>
              </select>
              </Col>
            </Row>


            <Row>
              <Col>
              <label htmlFor="size">{editingdata.squareFeetHeader}</label><br />
              <select name="size" value={selectSizeFour} onChange={changeSizeFour}>
              <option value="" hidden>{editingdata.select}</option>
                <option value='5000'>less than 5000</option>
                <option value='10000'>5000-10,000</option>
                <option value='25000'>10,000-25,000</option>
                <option value='50000'>25,000-50,000</option>
                <option value='75000'>50,000-75,000</option>
                <option value='100000'>75,000-100,000</option>
                <option value='125000'>100,000-125,000</option>
                <option value='200000'>150,000-200,000</option>
                <option value='350000'>200,000-350,000</option>
                <option value='500000'>500,000+</option>
              </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="number">{editingdata.buildingNumberHeader}</label><br />
                <input  onChange={changeNumFour} type="number" min="0" value={selectNumFour} placeholder="Number of buildings of this type"/>
                <p className="x-small mb-3 op-7">Number of buildings of this type</p>
              </Col>
            </Row>
          

                              </div>
         </Accordion.Collapse>
         </Card>

          {/* Building Type 5 */}
          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                              <p>
                                Building Type 5
                                
                              </p>
                              
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                              <div>
                             
            <Row>
              <Col> 
              <label htmlFor="building">What kind of building is this?</label><br />
              <select name="building" onChange={changeBuildFive} value={selectBuildFive}>
                <option value="" hidden>{editingdata.select}</option>
                <option value='Office'>{editingdata.commercialSpace1}</option>
                <option value='Medical'>{editingdata.commercialSpace2}</option>
                <option value='School'>{editingdata.commercialSpace3}</option>
                <option value='Care'>{editingdata.commercialSpace4}</option>
                <option value='Warehouse'>{editingdata.commercialSpace5}</option>
                <option value='Hotel'>{editingdata.commercialSpace6}</option>
                <option value='Hospital'>{editingdata.commercialSpace7}</option>
                <option value='Food'>{editingdata.commercialSpace8}</option>
                <option value='Restaurant'>{editingdata.commercialSpace9}</option>
                <option value='Retail'>{editingdata.commercialSpace10}</option>
                <option value='Other'>{editingdata.commercialSpace11}</option>
              </select>
              </Col>
            </Row>


            <Row>
              <Col>
              <label htmlFor="size">{editingdata.squareFeetHeader}</label><br />
              <select name="size" value={selectSizeFive} onChange={changeSizeFive}>
              <option value="" hidden>{editingdata.select}</option>
                <option value='5000'>less than 5000</option>
                <option value='10000'>5000-10,000</option>
                <option value='25000'>10,000-25,000</option>
                <option value='50000'>25,000-50,000</option>
                <option value='75000'>50,000-75,000</option>
                <option value='100000'>75,000-100,000</option>
                <option value='125000'>100,000-125,000</option>
                <option value='200000'>150,000-200,000</option>
                <option value='350000'>200,000-350,000</option>
                <option value='500000'>500,000+</option>
              </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="number">{editingdata.buildingNumberHeader}</label><br />
                <input  onChange={changeNumFive} type="number" min="0" value={selectNumFive} placeholder="Number of buildings of this type"/>
                <p className="x-small mb-3 op-7">Number of buildings of this type</p>
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
                <p className="text-grey mb-3">{editingdata.vehiclepara}</p>
                
            
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <p>Cars</p>
                      
                    </Accordion.Toggle>
                      
                    <Accordion.Collapse eventKey="0">
                      <div>
                        <Row>
                          <Col className="col-12 col-xl-4">
                            {editingdata.vehiclecarGas}
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="carGas" type="number" min="0" value={vehicleArray.carGas.count}  placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="carGas" type="number" min="0" value={vehicleArray.carGas.miles} placeholder={editingdata.vehiclePlaceholder2} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row> 

                        <Row>
                          <Col  className="col-12 col-xl-4">
                            {editingdata.vehiclecarDiesel}
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="carDiesel" type="number" min="0" value={vehicleArray.carDiesel.count}  placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="carDiesel" type="number" min="0" value={vehicleArray.carDiesel.miles}  placeholder={editingdata.vehiclePlaceholder2} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="col-12 col-xl-4">
                            {editingdata.vehiclecarHybrid}
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="carHybrid" type="number" min="0" value={vehicleArray.carHybrid.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="carHybrid" type="number" min="0" value={vehicleArray.carHybrid.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="col-12 col-xl-4">
                            Plug-In Hybrid
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="carPlug" type="number" min="0" value={vehicleArray.carPlug.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="carPlug" type="number" min="0" value={vehicleArray.carPlug.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                        
                        <Row>
                          <Col className="col-12 col-xl-4">
                            Plug-In Electric
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="carElectric" type="number" min="0" value={vehicleArray.carElectric.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="carElectric" type="number" min="0" value={vehicleArray.carElectric.miles} placeholder={editingdata.vehiclePlaceholder2} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <p>
                      {editingdata.vehiclepickupHeader}
                        </p>
                      
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <div>
                        <Row>
                          <Col className="col-12 col-xl-4">{editingdata.vehiclepickupGas}</Col>
                          <Col className="col-12 col-xl-4 col-sm-6 ">
                            <input onChange={calculateCount} name="truckGas" type="number" min="0" value={vehicleArray.truckGas.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="truckGas" type="number" min="0" value={vehicleArray.truckGas.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col  className="col-12 col-xl-4">{editingdata.vehiclepickupDiesel}</Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="truckDiesel" type="number" min="0" value={vehicleArray.truckDiesel.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="truckDiesel" type="number" min="0" value={vehicleArray.truckDiesel.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="col-12 col-xl-4">{editingdata.vehiclepickupHybrid}</Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="truckHybrid" type="number" min="0" value={vehicleArray.truckHybrid.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="truckHybrid" type="number" min="0" value={vehicleArray.truckHybrid.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="col-12 col-xl-4">Plug-In Hybrid</Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="truckPlug" type="number" min="0" value={vehicleArray.truckPlug.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="truckPlug" type="number" min="0" value={vehicleArray.truckPlug.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="col-12 col-xl-4">Plug-In Electric</Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="truckElectric" type="number" min="0" value={vehicleArray.truckElectric.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="truckElectric" type="number" min="0" value={vehicleArray.truckElectric.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      <p>
                      {editingdata.vehicletruckHeader}
                      </p>
                      
                      <h5 className="text-small smallCaps op-6">(up to 3.5 tonnes)</h5>
                    </Accordion.Toggle>
                     
                    <Accordion.Collapse eventKey="3">
                      <div>
                        <Row>
                          <Col className="col-12 col-xl-4">{editingdata.vehicletruckGas}</Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="deliveryGas" type="number" min="0" value={vehicleArray.deliveryGas.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="deliveryGas" type="number" min="0" value={vehicleArray.deliveryGas.miles} placeholder={editingdata.vehiclePlaceholder2} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="col-12 col-xl-4">{editingdata.vehicletruckDiesel}</Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="deliveryDiesel" type="number" min="0" value={vehicleArray.deliveryDiesel.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="deliveryDiesel" type="number" min="0" value={vehicleArray.deliveryDiesel.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      <p>
                      {editingdata.vehicleSemiHeader}
                        </p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <div>
                        <Row>
                          <Col className="col-12 col-xl-4">{editingdata.vehiclesemiFridge}</Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="semiFrig" type="number" min="0" value={vehicleArray.semiFrig.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                          <input onChange={calculateMiles} name="semiFrig" type="number" min="0" value={vehicleArray.semiFrig.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="col-12 col-xl-4">{editingdata.vehiclesemiNonFridge}</Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="semiNonFrig" type="number" min="0" value={vehicleArray.semiNonFrig.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="semiNonFrig" type="number" min="0" value={vehicleArray.semiNonFrig.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      <p>
                      Air Travel
                      </p>
                      <h5 className="text-small smallCaps op-6">aircrafts, prop planes, helicopters, jets, etc.</h5>
                    </Accordion.Toggle>
                    
                    <Accordion.Collapse eventKey="5">
                      <div>
                        <Row>
                          <Col className="col-12 col-xl-4">
                            <p>Private Jet</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="jetNum" type="number" min="0" value={vehicleArray.jetNum.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="jetNum" type="number" min="0" value={vehicleArray.jetNum.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="col-12 col-xl-4">
                            <p>Private Plane</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="planeGas" type="number" min="0" value={vehicleArray.planeGas.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="planeGas" type="number" min="0" value={vehicleArray.planeGas.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="col-12 col-xl-4">
                            <p>Private Helicopter</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateCount} name="heliGas" type="number" min="0" value={vehicleArray.heliGas.count} placeholder={editingdata.vehiclePlaceholder1} />
                            <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
                          </Col>
                          <Col className="col-12 col-xl-4 col-sm-6">
                            <input onChange={calculateMiles} name="heliGas" type="number" min="0" value={vehicleArray.heliGas.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
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
              <h3 className="text-green">{editingdata.commuteHeader}</h3>
              <hr/>
              <p className="text-grey mb-3">{editingdata.commutePara}</p>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.commuteCar}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitCount} name="transitCar" type="number" min="0" value={transitArray.transitCar.count} placeholder={editingdata.vehiclePlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitMiles} name="transitCar" type="number" min="0" value={transitArray.transitCar.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.commuteBus}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitCount} name="transitBus" type="number" min="0" value={transitArray.transitBus.count} placeholder={editingdata.vehiclePlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitMiles} name="transitBus" type="number" min="0" value={transitArray.transitBus.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.commuteTrain}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitCount} name="transitTrain" type="number" min="0" value={transitArray.transitTrain.count} placeholder={editingdata.vehiclePlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateTransitMiles} name="transitTrain" type="number" min="0" value={transitArray.transitTrain.miles} placeholder={editingdata.vehiclePlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.vehiclePlaceholder2}</p>
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
              <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.travelEmp}</Col>
              <Col className="col-12 col-xl-8 col-sm-6">
                <input onChange={calculateEmp} name="flyEmployees" type="number" min="0" value={flightEmp} placeholder={editingdata.travelPlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder1}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4 mb-2 bold">{editingdata.travelShort}</Col>
              <Col>
                <Row>
                  <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelShort1}</Col>
                  <Col className="col-12 col-xl-8 col-sm-6">
                    <input onChange={calculateFlightCount} name="flyShort" type="number" min="0" value={flightArray.flyShort.count}  placeholder={editingdata.travelPlaceholder2} />
                    <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder2}</p>
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
                        <input onChange={calculateFlightCount} name="flyMediumEco" type="number" min="0" value={flightArray.flyMediumEco.count} placeholder={editingdata.travelPlaceholder2} />
                        <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder2}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelMed2}</Col>
                      <Col className="col-12 col-xl-8 col-sm-6">
                        <input onChange={calculateFlightCount} name="flyMediumBus" type="number" min="0" value={flightArray.flyMediumBus.count} placeholder={editingdata.travelPlaceholder2} />
                        <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder2}</p>
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
                      <input onChange={calculateFlightCount} name="flyLongEco" type="number" min="0" value={flightArray.flyLongEco.count} placeholder={editingdata.travelPlaceholder2} />
                      <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder2}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong2}</Col>
                  <Col className="col-12 col-xl-8 col-sm-6">
                    <input onChange={calculateFlightCount} name="flyLongEcoPlus" type="number" min="0" value={flightArray.flyLongEcoPlus.count}  placeholder={editingdata.travelPlaceholder2} />
                    <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder2}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong3}</Col>
                  <Col className="col-12 col-xl-8 col-sm-6">
                    <input onChange={calculateFlightCount} name="flyLongBus" type="number" min="0" value={flightArray.flyLongBus.count}  placeholder={editingdata.travelPlaceholder2} />
                    <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder2}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-12 col-xl-4 col-sm-6">{editingdata.travelLong4}</Col>
                  <Col className="col-12 col-xl-8 col-sm-6">
                    <input onChange={calculateFlightCount} name="flyLongFirst" type="number" min="0" value={flightArray.flyLongFirst.count}  placeholder={editingdata.travelPlaceholder2} />
                    <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder2}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4 col-sm-6 bold">{editingdata.travelNights}</Col>
              <Col className="col-12 col-xl-8 col-sm-6">
                <input onChange={calculateFlightCount} name="flyHotels" type="number" min="0" value={flightArray.flyHotels.count} placeholder={editingdata.travelPlaceholder3} />
                <p className="x-small mb-3 op-7">{editingdata.travelPlaceholder3}</p>
              </Col>
            </Row>
          </div>

          <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
            <Row>
              <Col>
                <h3 className="text-green">{editingdata.freightHeader}</h3>
                <hr/>
                <p className="text-grey mb-3">{editingdata.freightPara}</p>
              </Col>
            </Row>
           
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.freightVan}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightNum} name="freightVan" type="number" min="0" value={freightArray.freightVan.count} placeholder={editingdata.freightPlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightMiles} name="freightVan" type="number" min="0" value={freightArray.freightVan.miles} placeholder={editingdata.freightPlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder2}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.freightSemiNon}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightNum} name="freightSemiNonFrig" type="number" min="0" value={freightArray.freightSemiNonFrig.count} placeholder={editingdata.freightPlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightMiles} name="freightSemiNonFrig" type="number" min="0" value={freightArray.freightSemiNonFrig.miles} placeholder={editingdata.freightPlaceholder2}/>
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder2}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.freightSemiFridge}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightNum} name="freightSemiFrig" type="number" min="0" value={freightArray.freightSemiFrig.count} placeholder={editingdata.freightPlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightMiles} name="freightSemiFrig" type="number" min="0" value={freightArray.freightSemiFrig.miles} placeholder={editingdata.freightPlaceholder2}/>
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder2}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.freightShip}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightNum} name="freightCargo" type="number" min="0" value={freightArray.freightCargo.count} placeholder={editingdata.freightPlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightMiles} name="freightCargo" type="number" min="0" value={freightArray.freightCargo.miles} placeholder={editingdata.freightPlaceholder2}/>
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder2}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.freightAirLow}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightNum} name="freightAirLess" type="number" min="0" value={freightArray.freightAirLess.count} placeholder={editingdata.freightPlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightMiles} name="freightAirLess" type="number" min="0" value={freightArray.freightAirLess.miles} placeholder={editingdata.freightPlaceholder2}/>
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder2}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4 bold">{editingdata.freightAirHigh}</Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightNum} name="freightAirMore" type="number" min="0" value={freightArray.freightAirMore.count} placeholder={editingdata.freightPlaceholder1} />
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder1}</p>
              </Col>
              <Col className="col-12 col-xl-4 col-sm-6">
                <input onChange={calculateFreightMiles} name="freightAirMore" type="number" min="0" value={freightArray.freightAirMore.miles} placeholder={editingdata.freightPlaceholder2} />
                <p className="x-small mb-3 op-7">{editingdata.freightPlaceholder2}</p>
              </Col> 
            </Row>
          </div>
        </Col>
        <Col className=" p-3  col-11 col-lg-5 col-xl-4 stickyCalc mb-4">
          <div className="text-white p-5 innerShadow roundedBox bg-green">
            <h4 className="mb-0">{editingdata.dataHeader}</h4>
            <hr/>
            <Row>
              <Col>{editingdata.dataType1}</Col>
              <Col className="text-right bold">{subtotalBuild > 0 ? subtotalBuild : "--"}</Col>
            </Row>
            <hr/>
            <Row>
              <Col>{editingdata.dataType2}</Col>
              <Col className="text-right bold">{vehicleSub > 0 ? vehicleSub : "--"}</Col>
            </Row>
            <hr/>
            <Row>
              <Col>{editingdata.dataType3}</Col>
              <Col className="text-right bold">{transitSub > 0 ? transitSub : "--"}</Col>
            </Row>
            <hr/>
            <Row>
              <Col>{editingdata.dataType4}</Col>
              <Col className="text-right bold">{flightSub > 0 ? flightSub : "--"}</Col>
            </Row>
            <hr/>
            <Row>
              <Col>{editingdata.dataType5}</Col>
              <Col className="text-right bold">{freightSub > 0 ? freightSub : "--"}</Col>
            </Row>
            <hr/>
            <span className="smallCaps text-small">{editingdata.dataTotal}</span><br/>
            <span className="h2 bold">{total > 0 ? total : "--"}</span>
            <p>{total > 0 ? "(Metric Tonnes of CO2 per Year)" : ""}</p>
            <p className="text-small">{editingdata.dataDisclaimer}</p>

            <Row>
              <Col className="whiteBorder rounded mt-3 p-3 mb-5">
                <p className="text-small">To continue editing your results in the future, save or bookmark this link:</p>
                <p className="pt-2 text-small">
                  {editUrlError ? <p style={{ color: 'red' }}>{editUrlError}</p> : null}
                  <a href={editUrl} onClick={editUrlClick}>{editUrl}</a>
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center text-center">
              <Col>
              <div className="">
                <p className="smallCaps text-center text-white mb-3">Share Your Results</p>
                {shareError ? <p style={{color: 'red' }}>{shareError}</p> : null}
                
                <FacebookShareButton url={hostname + sharingUrl} beforeOnClick={shareBeforeClick} quote={editingdata.shareQuote} className="mx-2">
                  <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton url={hostname + sharingUrl} beforeOnClick={shareBeforeClick} title={editingdata.shareQuote} className="mx-2">
                  <TwitterIcon size={40} round />
                </TwitterShareButton>

                <LinkedinShareButton url={hostname + sharingUrl} beforeOnClick={shareBeforeClick} summary={editingdata.shareQuote} className="mx-2">
                  <LinkedinIcon size={40} round />
                </LinkedinShareButton>

                <EmailShareButton url={hostname + sharingUrl} beforeOnClick={shareBeforeClick} body={editingdata.shareQuote} className="mx-2">
                  <EmailIcon size={40} round />
                </EmailShareButton>
              </div>
              </Col>
            </Row>
            

          </div>

          </Col>
        </Row>



        <Row className="justify-content-center ">
          <Col className="col-11 col-lg-12 col-xl-10 align-items-center text-center p-3">
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

        <Row className="justify-content-center pb-5">
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox1Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox1Para}</p>
              <Link href="/school-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox1button}</a></Link>
            </div>
          </Col>

          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox2Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox2Para}</p>
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
      fileRelativePath: 'content/business-calculator.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/business-calculator.json',
        data: (await import('../content/business-calculator.json')).default,
      },
    },
  }
}