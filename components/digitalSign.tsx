import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageUpload from 'image-upload-react'

const DigitalSign = ()=> {

  const [imageSrc, setImageSrc] = useState("")
 
  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }

  const [forestName, setForestName] = React.useState("");
  const [forestAcres, setForestAcres] = React.useState(0);
  const [logoImage, setLogoImage] = React.useState("");
  const [selectCopy, setCopy] = React.useState("");
  const [selectBG, setBG] = React.useState("signbg_forest.jpg");
  
  
  const changeCopy = (event) => {
    setCopy(event.target.value);
  };

  const changeBG = (event) => {
    setBG(event.target.value);
  };

  const changeAcres = (event) => {
    setForestAcres(event.target.value);
  };

  const changeName = (event) => {
    setForestName(event.target.value);
  };

  return (
    <React.Fragment>
      <Row className="justify-content-center text-white">
        <Col className="col-12 col-md-3">
          <label htmlFor="forest-name">Choose a name for your forest:</label>
          <br />
          <input name="forest-name" onChange={changeName} type="text" placeholder="Forest Name" />
          <label htmlFor="forest-name">How many acres is your forest:</label>
          <br />
          <input name="forest-name" onChange={changeAcres} type="text" placeholder="# of acres" />
          <label htmlFor="copyOptions">Select copy for the bottom of the sign:</label>
          <br />
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
          <label htmlFor="bgOptions">Select a background for your image:</label><br />
          <select name="bgOptions"  onChange={changeBG} value={selectBG} >
            <option value="signbg_forest.jpg" hidden>Select...</option>
            <option value="signbg_fall.jpg">Fall</option>
            <option value="signbg_forest.jpg">Spring</option>
            <option value="signbg_green.jpg">Summer</option>
          </select>
          <label htmlFor="forest-name">Upload an image for your sign</label>
          <div className="upload-button">
          <ImageUpload
            handleImageSelect={handleImageSelect}
            setImageSrc={setImageSrc}
          />
          </div>
        </Col>
        <Col className="col-12 col-md-5 signImagebuilder">
          <div className="signImageContainer">
            <img src={selectBG}/>
            <div className="signImageText signTextForest">
              {forestName? "The " : ""}
              {forestName}
              {forestName? " Forest" : ""}
              <br />
              <img src={imageSrc}></img>
            </div>
            <div className="signImageText signTextAcres">
              {forestAcres? forestAcres : ""}
              {forestAcres? " Acres" : ""}
            </div>
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