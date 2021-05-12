import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const App = () => {


const [selectBuild, setBuild] = React.useState("");
const [selectSize, setSize] = React.useState("");
const [selectNum, setNum] = React.useState("");
const [vehicleSub, setVehicle] = React.useState(0);
const [buildSub, setBuildSub] = React.useState(0);
const [vehicleArray, setVehicleArray] = React.useState({
  carGas: {mult:0.15179,count: null, miles: null},
  carDiesel: {mult:0.16748,count: null, miles: null},
  carHybrid: {mult:0.10487,count: null, miles: null},
  truckGas: {mult:0.27807,count: null, miles: null},
  truckDiesel: {mult:0.20419,count: null, miles: null},
  truckHybrid: {mult:0.11518,count: null, miles: null},
  deliveryGas: {mult:0.21962,count: null, miles: null},
  deliveryDiesel: {mult:0.2471,count: null, miles: null},
  semiNonFrig: {mult:0.8654,count: null, miles: null},
  semiFrig: {mult:1.0142,count: null, miles: null},
  jetNum: {mult:2.9237,count: null, miles: null}});
const [transitArray, setTransitArray] = React.useState({
    car: {mult:0.1743,count: null, miles: null},
    bus: {mult:0.06214,count: null, miles: null},
    train: {mult:0.06214,count: null, miles: null}});


let buildType = null;
let buildSize = null;
let buildNum = 1;
let subtotalVehicle = 0;
let subtotalBuild = 0;


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


const buildArray = {
"5000":{
Office:17364.7272966102, Medical:11745.2006980804, School:4757.66316027602, Care:12771.2658005338,
Warehouse:9099.64324928882, Hotel:9690.54436545558, Hospital:37996.8383017167, Food:31883.4665465874,
Retail:14238.4420898752, Other:21150.1136386494
},
"10000":{
Office:36410.3314832734, Medical:31652.8432142392, School:50910.7964173328, Care:38785.1544490552,
Warehouse:33615.6982670747, Hotel:40569.5408950621, Hospital:37996.8383017167, Food:69291.7802772103,
Retail:34880.9486788779, Other:41842.7553285601
},
"50000":{
Office:107974.850039479, Medical:121467.615511552, School:126421.429416638, Care:135848.999758979,
Warehouse:86165.0149485114, Hotel:110204.71235101, Hospital:378941.441441445, Food:336771.355336677,
Retail:130500.101484575, Other:87631.4688550379
},
"200000":{
Office:512724.873119453, Medical:505494.939911453, School:342315.840255058, Care:579775.620791251,
Warehouse:285542.673700571, Hotel:591931.842049994, Hospital:1264876.401631, Food:868870.950206574,
Retail:297789.023649549, Other:338731.643770728
},
"200001":{
Office:2234861.05228483, Medical:5452546.29629634, School:1112764.55026456, Care:1377046.13095239,
Warehouse:1092785.89654373, Hotel:1861523.06967986, Hospital:5946424.34988185, Food:1439977.47747749,
Retail:2446129.79207279, Other:1848813.90303718
}
}


if (buildType && buildNum && buildSize) {

  subtotalBuild = Number((buildArray[buildSize][buildType] * buildNum /1000).toFixed(2))
  
}

const calculateVehicle=()=> {
  let i = 0;
  for (let x of Object.keys(vehicleArray)) {
    if (vehicleArray[x].count && vehicleArray[x].miles){
    i += Number(vehicleArray[x].count * vehicleArray[x].mult * vehicleArray[x].miles)/1000
  }
  subtotalVehicle += i
  }

  setVehicle(Number(subtotalVehicle.toFixed(2)))
}

const calculateCount=(e)=>{
  vehicleArray[e.target.name].count = Number(e.target.value) 
  calculateVehicle()
}

const calculateMiles=(e)=>{
  vehicleArray[e.target.name].miles = Number(e.target.value) 
  calculateVehicle()
}

let total = vehicleSub + subtotalBuild;


return (
<div>
  <Container className="py-5">
    <Row>
      <h1 className="text-white pt-5">Carbon Calculator</h1>
    </Row>
    <Row>
      <Col className="p-3 col-12 col-lg-8">
      <div className="card roundedBox p-5">
        <Row>
          <Col>
          <h3>
            Heating & Electricity
          </h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <label htmlFor="building">Which type of commercial space is the building?</label><br/>
          <select name="building" value="Select a building type" onChange={changeBuild}>

            <option value='Office'>Office Building (Non-Medical)</option>
            <option value='Medical'>Medical Office Building</option>
            <option value='School'>Elementary/Secondary School</option>
            <option value='Care'>Assisted Daily/ Residential Care Facility</option>
            <option value='Warehouse'>Warehouse</option>
            <option value='Hotel'>Hotel/Motel/Lodge</option>
            <option value='Hospital'>Hospital</option>
            <option value='Food'>Food and Beverage Store</option>
            <option value='Retail'>Non-Food Retail</option>
            <option value='Other'>Other</option>
          </select>
          </Col>
        </Row>
        <Row>
          <Col>
          <label htmlFor="size">How many square feet is the building?</label><br/>
          <select name="size"  value="Select a building size" onChange={changeSize}>
           
            <option value='5000'>&lt;5000</option>
            <option value='10000'>5000-10,000</option>
            <option value='50000'>10,000-50,000</option>
            <option value='200000'>50,000-200,000</option>
            <option value='200001'>200,000+</option>
          </select>
          </Col>
        </Row>
        <Row>
          <Col>
          <label htmlFor="number">How many buildings of this type are in the organization?</label><br/>
          <input onChange={changeNum} type="number" placeholder="Number of buildings of this type" />

          </Col>
        </Row>
      </div>
      <div className="card roundedBox p-5">
        <Row>
          <Col>
          <h3>
            Vehicle Fleet
          </h3>
          <p>Please input the following information for all company-owned fleet vehicles:</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>Cars</h5>
          <Row>
            <Col>
            Gas
            </Col>
            <Col>
            <input onChange={calculateCount} name="carGas" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="carGas" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          <Row>
            <Col>
            Diesel
            </Col>
            <Col>
            <input onChange={calculateCount} name="carDiesel" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="carDiesel" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          <Row>
            <Col>
            Hybrid
            </Col>
            <Col>
            <input onChange={calculateCount} name="carHybrid" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="carHybrid" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>Pickups/SUVs</h5>
          <Row>
            <Col>
            Gas
            </Col>
            <Col>
            <input onChange={calculateCount} name="truckGas" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="truckGas" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          <Row>
            <Col>
            Diesel
            </Col>
            <Col>
            <input onChange={calculateCount} name="truckDiesel" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="truckDiesel" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          <Row>
            <Col>
            Hybrid
            </Col>
            <Col>
            <input onChange={calculateCount} name="truckHybrid" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="truckHybrid" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>Delivery Trucks/Vans (Up to 3.5 tonnes)</h5>
          <Row>
            <Col>
            Gas
            </Col>
            <Col>
            <input onChange={calculateCount} name="deliveryGas" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="deliveryGas" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          <Row>
            <Col>
            Diesel
            </Col>
            <Col>
            <input onChange={calculateCount} name="deliveryDiesel" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="deliveryDiesel" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>Semi</h5>
          <Row>
            <Col>
            Refridgerated
            </Col>
            <Col>
            <input onChange={calculateCount} name="semiFrig" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="semiFrig" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          <Row>
            <Col>
            Non-Refridgerated
            </Col>
            <Col>
            <input onChange={calculateCount} name="semiNonFrig" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="semiNonFrig" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>Private Jet</h5>
          <Row>
            <Col>
            Lucky you
            </Col>
            <Col>
            <input onChange={calculateCount} name="jetNum" type="number" placeholder="# of vehicles"/>
            </Col>
            <Col>
            <input onChange={calculateMiles} name="jetNum" type="number" placeholder="Average Annual Km/vehicle"/>
            </Col>
          </Row>
          </Col>
        </Row>
      </div>
      </Col>
      <Col className="text-white p-3  col-12 col-lg-4">
      <h4>Subtotals (Metric Tonnes C02):</h4>
      <p>Heating & Electricity: {subtotalBuild}</p>
      
      <p>Vehicle Fleet: {vehicleSub}</p>
      <h4>Total (Metric Tonnes C02):</h4>
      <h5>{total}</h5>
      </Col>
    </Row>
  </Container>
</div>

);
}

export default App;