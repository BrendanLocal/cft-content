import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DigitalSign = ()=> {


const [forestName, setForestName] = React.useState("");
const [forestAcres, setForestAcres] = React.useState(0);
const [selectCopy, setCopy] = React.useState("");

const [selectLogo, setLogo] = React.useState("");

const logoUpload = (event) => {
  setLogo(event.target.value);
  };

const changeCopy = (event) => {
  setCopy(event.target.value);
  };


const changeName = (event) => {
  setForestName(event.target.value);
  };

  return (

<React.Fragment>
    <Row className="justify-content-center text-white">
      <Col className="col-12 col-md-3">


<label htmlFor="forest-name">Choose a name for your forest:</label><br />
          <input name="forest-name" onChange={changeName} type="text" placeholder="Forest Name" />


          <input type='file' id='single' onChange={logoUpload} /> 

      <label htmlFor="copyOptions">Select copy for the bottom of the sign:</label><br />
      <select name="copyOptions"  onChange={changeCopy} value={selectCopy} >
            <option value="" hidden>Select...</option>
            <option>This Smart Forest is Growing to Net-Zero</option>
            <option>Smart Forest - Carbon Offsetting in progress</option>
            <option>Growing to Net-Zero</option>
            <option>Do Not Disturb- Carbon Offsetting in Progress</option>
            <option>Smart Forest- Breathing Made Easy</option>
            <option>Smart Forest- For the sake of Wildlife</option>
            <option>Smart Forest – It is easy being green!</option>

</select>



      </Col>

      <Col className="col-12 col-md-5 signImagebuilder">
        <div className="signImageContainer">
          <img src="signbg_fall.jpg"/>

          <div className="signImageText signTextForest">

          {forestName? "The " : ""}
          {forestName}
          {forestName? " Forest" : ""}
          
            </div>

            <img src={selectLogo}/>
          <div className="signImageText signTextBottom">

          {selectCopy}
          </div>
        </div>
      </Col>

    </Row>
    </React.Fragment>
  )


}

export default DigitalSign