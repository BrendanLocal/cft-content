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

    const [show, setShow] = useState(false);

    const [editingdata, form] = useGithubJsonForm(file, formOptions)
    usePlugin(form)
    useGithubToolbarPlugins()

    const [selectBusinessType, setBusinessType] = React.useState([
      "Airline & Air Travel",
      "Alcohol, Tobacco, & Cannabis Retail",
      "Auto Parts & Repair",
      "Beauty & Wellness",
      "Cafe/Restaurant",
      "Car Dealership",
      "Communication Service (Telecommunication, Media, Newspaper, Business,  etc)",
      "Construction",
      "Financial Service (Insurance, Bank, Advising, etc)",
      "Fitness (Gym, Personal Training)",
      "Home/Building Contractor",
      "Hospital",
      "Hospitality (Hotel, Motel, Air B&B)",
      "Information Technology (Cybersecurity, networking, software, etc.)",
      "Grocery Store",
      "Lumber/Pulp Mill",
      "Product Manufacturer",
      "Mining",
      "Medical Equipment/Pharmaceuticals",
      "Medical Care Provider",
      "Movie Theatre",
      "Oil & Gas Production",
      "Other",
      "Professional Service (Law, Engineering, Consulting, Business)",
      "Real Estate",
      "Retail (Clothing, Furniture, Books, etc)",
      "Transporation (Bus, Taxi, etc)",
      "Utility Provider (Electrical, Hydro, Natural Gas, etc.)	"
    ])
    
    const [counting, setCounting] = React.useState([]);
    const [selectBuild, setBuild] = React.useState("");
    const [selectSize, setSize] = React.useState("");
    const [selectNum, setNum] = React.useState("");
    const [vehicleSub, setVehicle] = React.useState(0);
    const [buildSub, setBuildSub] = React.useState(0);
    const [transitSub, setTransit] = React.useState(0);
    const [flightEmp, setEmp] = React.useState(0);
    const [flightSub, setFlight] = React.useState(0);
    const [freightSub, setFreight] = React.useState(0);

    const [vehicleArray, setVehicleArray] = React.useState({
      carGas: {mult:0.15179,count: null, miles: null},
      carDiesel: {mult:0.16748,count: null, miles: null},
      carHybrid: {mult:0.10487,count: null, miles: null},
      carPlug: {mult:0.02935, count: null, miles: null},
      carElectric: {mult:0.000001, count: null, miles: null},
      truckGas: {mult:0.27807,count: null, miles: null},
      truckDiesel: {mult:0.20419,count: null, miles: null},
      truckHybrid: {mult:0.11518,count: null, miles: null},
      truckPlug: {mult:0.07731, count: null, miles: null},
      truckElectric: {mult:0.000001, count: null, miles: null},
      deliveryGas: {mult:0.21962,count: null, miles: null},
      deliveryDiesel: {mult:0.2471,count: null, miles: null},
      semiNonFrig: {mult:0.8654,count: null, miles: null},
      semiFrig: {mult:1.0142,count: null, miles: null},
      jetNum: {mult:2.9237,count: null, miles: null},
      planeGas	:{mult:	2.54306	,miles: null},
      heliGas	:{mult:	2.54306	,miles: null}
    });

    const [transitArray, setTransitArray] = React.useState({
      transitCar: {mult:0.1743,count: null, miles: null},
      transitBus: {mult:0.06214,count: null, miles: null},
      transitTrain: {mult:0.06214,count: null, miles: null}
    });

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

    const [freightArray, setFreightArray] = React.useState({
      freightVan: {mult:0.61628,count: null, miles: null},
      freightSemiNonFrig: {mult:0.1065,count: null, miles: null},
      freightSemiFrig: {mult:0.12481,count: null, miles: null},
      freightCargo: {mult:0.01323,count: null, miles: null},
      freightAirLess: {mult:2.20496,count: null, miles: null},
      freightAirMore: {mult:1.13382,count: null, miles: null}
    });

    let buildType = null;
    let buildSize = null;
    let buildNum = 1;

    let subtotalVehicle = 0;
    let subtotalTransit = 0;
    let subtotalFlight = 0;
    let subtotalBuild = 0;
    let subtotalFreight = 0;

    buildType = selectBuild;
    buildSize = Number(selectSize);
    buildNum = Number(selectNum);

    const changeBuild = (event) => {
      setBuild(event.target.value);
    };

    const changeSize = (event) => {
      setSize(event.target.value);
    }

    const changeNum = (event) => {
      setNum(event.target.value);
    }


    const [selectBuildTwo, setBuildTwo] = React.useState("");
    const [selectSizeTwo, setSizeTwo] = React.useState("");
    const [selectNumTwo, setNumTwo] = React.useState("");

    let buildTypeTwo = null;
    let buildSizeTwo = null;
    let buildNumTwo = 1;
    buildTypeTwo = selectBuildTwo;
    buildSizeTwo = Number(selectSizeTwo);
    buildNumTwo = Number(selectNumTwo);

    const changeBuildTwo = (event) => {
      setBuildTwo(event.target.value);
    };
    const changeSizeTwo = (event) => {
      setSizeTwo(event.target.value);
    }
    const changeNumTwo = (event) => {
      setNumTwo(event.target.value);
    }


    const [selectBuildThree, setBuildThree] = React.useState("");
    const [selectSizeThree, setSizeThree] = React.useState("");
    const [selectNumThree, setNumThree] = React.useState("");

    let buildTypeThree = null;
    let buildSizeThree = null;
    let buildNumThree = 1;
    buildTypeThree = selectBuildThree;
    buildSizeThree = Number(selectSizeThree);
    buildNumThree = Number(selectNumThree);

    const changeBuildThree = (event) => {
      setBuildThree(event.target.value);
    };
    const changeSizeThree = (event) => {
      setSizeThree(event.target.value);
    }
    const changeNumThree = (event) => {
      setNumThree(event.target.value);
    }




    const [selectBuildFour, setBuildFour] = React.useState("");
    const [selectSizeFour, setSizeFour] = React.useState("");
    const [selectNumFour, setNumFour] = React.useState("");

    let buildTypeFour = null;
    let buildSizeFour = null;
    let buildNumFour = 1;
    buildTypeFour = selectBuildFour;
    buildSizeFour = Number(selectSizeFour);
    buildNumFour = Number(selectNumFour);

    const changeBuildFour = (event) => {
      setBuildFour(event.target.value);
    };
    const changeSizeFour = (event) => {
      setSizeFour(event.target.value);
    }
    const changeNumFour = (event) => {
      setNumFour(event.target.value);
    }




    const [selectBuildFive, setBuildFive] = React.useState("");
    const [selectSizeFive, setSizeFive] = React.useState("");
    const [selectNumFive, setNumFive] = React.useState("");

    let buildTypeFive = null;
    let buildSizeFive = null;
    let buildNumFive = 1;
    buildTypeFive = selectBuildFive;
    buildSizeFive = Number(selectSizeFive);
    buildNumFive = Number(selectNumFive);

    const changeBuildFive = (event) => {
      setBuildFive(event.target.value);
    };
    const changeSizeFive = (event) => {
      setSizeFive(event.target.value);
    }
    const changeNumFive = (event) => {
      setNumFive(event.target.value);
    }



    const buildArray = {
      "5000": {	Office:17364.7272966102,	Medical:11745.2006980804,	School:4757.66316027602,	Care:12771.2658005338,	Warehouse:9099.64324928882,	Hotel:9690.54436545558,	Hospital:37996.8383017167,	Food:31883.4665465874,	Restaurant:31883.4665465874,	Retail:14238.4420898752,	Other:21150.1136386494,	},
"10000": {	Office:36410.3314832734,	Medical:31652.8432142392,	School:50910.7964173328,	Care:38785.1544490552,	Warehouse:33615.6982670747,	Hotel:40569.5408950621,	Hospital:37996.8383017167,	Food:69291.7802772103,	Restaurant:69291.7802772103,	Retail:34880.9486788779,	Other:41842.7553285601,	},
"25000": {	Office:72820.6629665468,	Medical:63305.6864284785,	School:101821.592834666,	Care:77570.3088981104,	Warehouse:67231.3965341494,	Hotel:81139.0817901241,	Hospital:75993.6766034333,	Food:138583.560554421,	Restaurant:138583.560554421,	Retail:69761.8973577557,	Other:83685.5106571202,	},
"50000": {	Office:107974.850039479,	Medical:121467.615511552,	School:126421.429416638,	Care:135848.999758979,	Warehouse:86165.0149485114,	Hotel:110204.71235101,	Hospital:378941.441441445,	Food:336771.355336677,	Restaurant:336771.355336677,	Retail:130500.101484575,	Other:87631.4688550379,	},
"75000": {	Office:192271.827419795,	Medical:189560.602466795,	School:128368.440095647,	Care:217415.857796719,	Warehouse:107078.502637714,	Hotel:221974.440768748,	Hospital:474328.650611625,	Food:325826.606327465,	Restaurant:325826.606327465,	Retail:111670.883868581,	Other:127024.366414023,	},
"100000": {	Office:288407.741129692,	Medical:284340.903700192,	School:192552.66014347,	Care:326123.786695078,	Warehouse:160617.753956571,	Hotel:332961.661153122,	Hospital:711492.975917437,	Food:488739.909491198,	Restaurant:488739.909491198,	Retail:167506.325802871,	Other:190536.549621034,	},
"125000": {	Office:384543.65483959,	Medical:379121.204933589,	School:256736.880191293,	Care:434831.715593438,	Warehouse:214157.005275428,	Hotel:443948.881537496,	Hospital:948657.301223249,	Food:651653.21265493,	Restaurant:651653.21265493,	Retail:223341.767737162,	Other:254048.732828046,	},
"200000": {	Office:769087.30967918,	Medical:758242.409867179,	School:513473.760382587,	Care:869663.431186876,	Warehouse:428314.010550856,	Hotel:887897.763074991,	Hospital:1897314.6024465,	Food:1303306.42530986,	Restaurant:1303306.42530986,	Retail:446683.535474323,	Other:508097.465656091,	},
"350000": {	Office:1345902.79193856,	Medical:1326924.21726756,	School:898579.080669527,	Care:1521911.00457703,	Warehouse:749549.518463998,	Hotel:1553821.08538124,	Hospital:3320300.55428137,	Food:2280786.24429226,	Restaurant:2280786.24429226,	Retail:781696.187080065,	Other:889170.56489816,	},
"500000": {	Office:2691805.58387713,	Medical:2653848.43453513,	School:1797158.16133905,	Care:3043822.00915407,	Warehouse:1499099.036928,	Hotel:3107642.17076247,	Hospital:6640601.10856275,	Food:4561572.48858451,	Restaurant:4561572.48858451,	Retail:1563392.37416013,	Other:1778341.12979632,	}
    }


    if (buildType && buildNum && buildSize) {
      subtotalBuild = Number((buildArray[buildSize][buildType] * buildNum /1000))
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



    const calculateVehicle=()=> {
      subtotalVehicle = 0
      for (let x of Object.keys(vehicleArray)) {
        let i = 0;
        if (vehicleArray[x].count && vehicleArray[x].miles){
          i += Number((vehicleArray[x].count * vehicleArray[x].mult * vehicleArray[x].miles))/1000
        }
      subtotalVehicle += i
    }

    setVehicle(Number(subtotalVehicle))
    }

    const calculateCount=(e)=>{
      vehicleArray[e.target.name].count = Number(e.target.value)
      calculateVehicle()
    }

    const calculateMiles=(e)=>{
      vehicleArray[e.target.name].miles = Number(e.target.value)
      calculateVehicle()
    }


    const calculateTransit=()=> {
      subtotalTransit = 0
      for (let x of Object.keys(transitArray)) {
        let i = 0;
        if (transitArray[x].count && transitArray[x].miles){
          i += Number((transitArray[x].count * transitArray[x].mult * transitArray[x].miles * 231))/1000
        }
        subtotalTransit += i
      }
      setTransit(Number(subtotalTransit))
    }

    const calculateTransitCount=(e)=>{
      transitArray[e.target.name].count = Number(e.target.value)
      calculateTransit()
    }

    const calculateTransitMiles=(e)=>{
      transitArray[e.target.name].miles = Number(e.target.value)
      calculateTransit()
    }


    const calculateFlight=()=> {
      subtotalFlight = 0
      for (let x of Object.keys(flightArray)) {
        let i = 0;
        i += Number((flightArray[x].count * flightArray[x].mult * flightEmp))/1000
        subtotalFlight += i
      }
      setFlight(Number(subtotalFlight))
    }

    const calculateFlightCount=(e)=>{
      flightArray[e.target.name].count = Number(e.target.value)
      calculateFlight()
    }

    const calculateEmp=(e)=>{
      setEmp(e.target.value);
    }

    const calculateFreight=()=> {
      subtotalFreight = 0
      for (let x of Object.keys(freightArray)) {
        let i = 0;
        i += Number((freightArray[x].count * freightArray[x].mult * freightArray[x].miles))/1000
        subtotalFreight += i
      }
      setFreight(Number(subtotalFreight))
    }

    const calculateFreightNum=(e)=>{
      freightArray[e.target.name].count = Number(e.target.value)
      calculateFreight()
    }
      
    const calculateFreightMiles=(e)=>{
      freightArray[e.target.name].miles = Number(e.target.value)
      calculateFreight()
    }

    let total = vehicleSub + subtotalBuild + transitSub + flightSub + freightSub;

    return (
    <div className="bg-corp">
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
              <h4 className="text-green">
                Building Types
              </h4>
              <hr/>
              </Col>
            </Row>
            <Row>
              <Col> 
              <label htmlFor="business">{editingdata.businessTypeHeader}</label><br />
              <select name="business" >
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
              <hr/>
              <h5>Primary Building</h5>
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
                <input  onChange={changeNum} type="number" min="0" 
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }
                } placeholder="Number of buildings of this type"/>
              </Col>
            </Row>
          <hr/>
<h6 className="pt-3">Additional Buildings</h6>

              <Accordion>

              {/* Building Type 2 */}
              <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                              Building Type 2
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
                <input  onChange={changeNumTwo} type="number" min="0" 
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }
                } placeholder="Number of buildings of this type"/>
              </Col>
            </Row>
          

                              </div>
         </Accordion.Collapse>
         </Card>


 {/* Building Type 3 */}
 <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                              Building Type 3
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
                <input  onChange={changeNumThree} type="number" min="0" 
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }
                } placeholder="Number of buildings of this type"/>
              </Col>
            </Row>
          

                              </div>
         </Accordion.Collapse>
         </Card>

 {/* Building Type 4 */}
 <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                              Building Type 4
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
                <input  onChange={changeNumFour} type="number" min="0" 
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }
                } placeholder="Number of buildings of this type"/>
              </Col>
            </Row>
          

                              </div>
         </Accordion.Collapse>
         </Card>

          {/* Building Type 5 */}
          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                              Building Type 5
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
                <input  onChange={changeNumFive} type="number" min="0" 
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }
                } placeholder="Number of buildings of this type"/>
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
                <p className="text-grey">{editingdata.vehiclepara}</p>
                <hr/>
              </Col>
            
              <Col>
                <h5 className="smallCaps text-small text-green">Cars</h5>
                <Row>
                  <Col className="col-12 col-xl-4">
                    {editingdata.vehiclecarGas}
                  </Col>
                  <Col className="col-xl-4">
                    <input onChange={calculateCount} name="carGas" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-xl-4">
                    <input onChange={calculateMiles} name="carGas" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    } placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col  className="col-10 col-xl-4">
                    {editingdata.vehiclecarDiesel}
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="carDiesel" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="carDiesel" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-10 col-xl-4">
                    {editingdata.vehiclecarHybrid}
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="carHybrid" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="carHybrid" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-10 col-xl-4">
                    Plug-In Hybrid
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="carPlug" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="carPlug" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-10 col-xl-4">
                    Plug-In Electric
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="carElectric" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="carElectric" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5 className="smallCaps text-small text-green">{editingdata.vehiclepickupHeader}</h5>
                <Row>
                  <Col className="col-12 col-xl-4">{editingdata.vehiclepickupGas}</Col>
                  <Col className="col-6 col-xl-4 ">
                    <input onChange={calculateCount} name="truckGas" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="truckGas" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col  className="col-10 col-xl-4">{editingdata.vehiclepickupDiesel}</Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="truckDiesel" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="truckDiesel" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }  placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-10 col-xl-4">{editingdata.vehiclepickupHybrid}</Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="truckHybrid" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="truckHybrid" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-10 col-xl-4">Plug-In Hybrid</Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="truckPlug" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="truckPlug" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-10 col-xl-4">Plug-In Electric</Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="truckElectric" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="truckElectric" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5 className="smallCaps text-small text-green">{editingdata.vehicletruckHeader}</h5>
                <Row>
                  <Col className="col-10 col-xl-4">{editingdata.vehicletruckGas}</Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="deliveryGas" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="deliveryGas" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-10 col-xl-4">{editingdata.vehicletruckDiesel}</Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="deliveryDiesel" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="deliveryDiesel" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5 className="smallCaps text-small text-green">{editingdata.vehicleSemiHeader}</h5>
                <Row>
                  <Col className="col-10 col-xl-4">{editingdata.vehiclesemiFridge}</Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="semiFrig" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                  <input onChange={calculateMiles} name="semiFrig" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-10 col-xl-4">{editingdata.vehiclesemiNonFridge}</Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateCount} name="semiNonFrig" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder1} />
                  </Col>
                  <Col className="col-6 col-xl-4">
                    <input onChange={calculateMiles} name="semiNonFrig" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.vehiclePlaceholder2} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-10 col-xl-4">
                <h5 className="smallCaps text-small text-green">{editingdata.vehiclejet}</h5>
              </Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateCount} name="jetNum" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder1} />
              </Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateMiles} name="jetNum" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder2} />
              </Col>
            </Row>

            <Row>
              <Col className="col-10 col-xl-4">
                <h5 className="smallCaps text-small text-green">Private Plane</h5>
              </Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateCount} name="planeGas" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder1} />
              </Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateMiles} name="planeGas" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder2} />
              </Col>
            </Row>

            <Row>
              <Col className="col-10 col-xl-4">
                <h5 className="smallCaps text-small text-green">Private Helicopter</h5>
              </Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateCount} name="heliGas" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder1} />
              </Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateMiles} name="heliGas" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder2} />
              </Col>
            </Row>

            
          </div>
          <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
            <Row>
              <Col>
              <h3 className="text-green">{editingdata.commuteHeader}</h3>
              <p className="text-grey">{editingdata.commutePara}</p>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-xl-4">{editingdata.commuteCar}</Col>
              <Col className="col-xl-4">
                <input onChange={calculateTransitCount} name="transitCar" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder1} />
              </Col>
              <Col className="col-xl-4">
                <input onChange={calculateTransitMiles} name="transitCar" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder2} />
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-xl-4">{editingdata.commuteBus}</Col>
              <Col className="col-xl-4">
                <input onChange={calculateTransitCount} name="transitBus" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder1} />
              </Col>
              <Col className="col-xl-4">
                <input onChange={calculateTransitMiles} name="transitBus" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder2} />
              </Col>
            </Row>
            <Row>
              <Col className="col-10 col-xl-4">{editingdata.commuteTrain}</Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateTransitCount} name="transitTrain" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder1} />
              </Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateTransitMiles} name="transitTrain" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.vehiclePlaceholder2} />
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
              <Col className="col-10 col-sm-5 col-xl-4">{editingdata.travelEmp}</Col>
              <Col className="col-2 col-sm-1 col-xl-4">
              </Col>
              <Col className="col-6 col-xl-4">
                <input onChange={calculateEmp} name="flyEmployees" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.travelPlaceholder1} />
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
                    }   placeholder={editingdata.travelPlaceholder2} />
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
                        }   placeholder={editingdata.travelPlaceholder2} />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-6 ">{editingdata.travelMed2}</Col>
                      <Col className="col-6">
                        <input onChange={calculateFlightCount} name="flyMediumBus" type="number" min="0" onKeyPress={
                          (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                        }   placeholder={editingdata.travelPlaceholder2} />
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
                      }   placeholder={editingdata.travelPlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col>{editingdata.travelLong2}</Col>
                  <Col>
                    <input onChange={calculateFlightCount} name="flyLongEcoPlus" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.travelPlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col>{editingdata.travelLong3}</Col>
                  <Col>
                    <input onChange={calculateFlightCount} name="flyLongBus" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.travelPlaceholder2} />
                  </Col>
                </Row>
                <Row>
                  <Col>{editingdata.travelLong4}</Col>
                  <Col>
                    <input onChange={calculateFlightCount} name="flyLongFirst" type="number" min="0" onKeyPress={
                      (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                    }   placeholder={editingdata.travelPlaceholder2} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-10 col-sm-5 col-xl-4">{editingdata.travelNights}</Col>
              <Col  className="col-2 col-sm-1 col-xl-4"></Col>
              <Col className="col-sm-6 col-xl-4">
                <input onChange={calculateFlightCount} name="flyHotels" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.travelPlaceholder3} />
              </Col>
            </Row>
          </div>

          <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
            <Row>
              <Col>
                <h3 className="text-green">{editingdata.freightHeader}</h3>
                <p className="text-grey">{editingdata.freightPara}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4">{editingdata.freightVan}</Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightNum} name="freightVan" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.freightPlaceholder1} />
              </Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightMiles} name="freightVan" type="number"
                  placeholder={editingdata.freightPlaceholder2} />
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4">{editingdata.freightSemiNon}</Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightNum} name="freightSemiNonFrig" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.freightPlaceholder1} />
              </Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightMiles} name="freightSemiNonFrig" type="number" placeholder={editingdata.freightPlaceholder2}/>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4">{editingdata.freightSemiFridge}</Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightNum} name="freightSemiFrig" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.freightPlaceholder1} />
              </Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightMiles} name="freightSemiNonFrig" type="number" placeholder={editingdata.freightPlaceholder2}/>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4">{editingdata.freightShip}</Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightNum} name="freightCargo" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.freightPlaceholder1} />
              </Col>
              <Col className="col-xl-4">
              <input onChange={calculateFreightMiles} name="freightSemiNonFrig" type="number" placeholder={editingdata.freightPlaceholder2}/>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4">{editingdata.freightAirLow}</Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightNum} name="freightAirLess" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.freightPlaceholder1} />
              </Col>
              <Col className="col-xl-4">
              <input onChange={calculateFreightMiles} name="freightSemiNonFrig" type="number" placeholder={editingdata.freightPlaceholder2}/>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className="col-12 col-xl-4">{editingdata.freightAirHigh}</Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightNum} name="freightAirMore" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.freightPlaceholder1} />
              </Col>
              <Col className="col-xl-4">
                <input onChange={calculateFreightMiles} name="freightAirMore" type="number" min="0" onKeyPress={
                  (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                }   placeholder={editingdata.freightPlaceholder2} />
              </Col> 
            </Row>
          </div>
        </Col>
        <Col className=" p-3  col-12 col-lg-4 stickyCalc mb-4">
          <div className="text-white p-5 innerShadow roundedBox bg-green">
            <h4 className="mb-0">{editingdata.dataHeader}</h4>
            <hr/>
            <Row>
              <Col>{editingdata.dataType1}</Col>
              <Col className="text-right bold">{subtotalBuild > 0 ? subtotalBuild.toFixed(2) : "--"}</Col>
            </Row>
            <hr/>
            <Row>
              <Col>{editingdata.dataType2}</Col>
              <Col className="text-right bold">{vehicleSub > 0 ? vehicleSub.toFixed(2) : "--"}</Col>
            </Row>
            <hr/>
            <Row>
              <Col>{editingdata.dataType3}</Col>
              <Col className="text-right bold">{transitSub > 0 ? transitSub.toFixed(2) : "--"}</Col>
            </Row>
            <hr/>
            <Row>
              <Col>{editingdata.dataType4}</Col>
              <Col className="text-right bold">{flightSub > 0 ? flightSub.toFixed(2) : "--"}</Col>
            </Row>
            <hr/>
            <Row>
              <Col>{editingdata.dataType5}</Col>
              <Col className="text-right bold">{freightSub > 0 ? freightSub.toFixed(2) : "--"}</Col>
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
          <Col className="col-10 align-items-center text-center p-3">
          <div className="bg-brown p-5 innerShadow roundedBox">
            <p className="smallCaps text-orange">{editingdata.box1Header}</p>
          <h3 className="text-white mb-4 px-2 px-lg-5">{editingdata.box1Para}</h3>
          <Link href="/smart-forest-calculator">
          <a className="btn btn-green btn-large mt-1">{editingdata.box1Button}</a></Link>
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
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox1Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox1Para}</p>
              <Link href="school-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">other{editingdata.box1button}</a></Link>
            </div>
          </Col>

          <Col className="col-12 col-md-6 col-lg-4 col-xl-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox2Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox2Para}</p>
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