import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const App = () => {

return (
  <Container><br/><br/><br/><br/><br/><br/><br/>
<Row >
          <Col>
          <label htmlFor="building">Which type of commercial space is the building?</label><br />
          <select name="building" value="Select a building type"  defaultValue>
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
  </Row></Container>

);
}

export default App;