import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageUpload from './imageUpload';
import Button from 'react-bootstrap/Button';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import downloadjs from "downloadjs";


const DigitalSign = ()=> {

  const [imageSrc, setImageSrc] = useState("")
 
  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }
  
  const [forestName, setForestName] = React.useState("");
  const [forestAcres, setForestAcres] = React.useState(0);
  const [forestDate, setForestDate] = React.useState("");
  const [selectCopy, setCopy] = React.useState("");
  const [selectBG, setBG] = React.useState("signbg_forest.jpg");
  const [selectLogo, setLogo] = React.useState("");
  const forestFullName = "The " + forestName + " Forest";
  const logoUpload = (event) => { 
    setLogo(event.target.value);
  };
  
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

  const changeDate = (event) => {
    setForestDate(event.target.value);
  };

  const divStyle = {
    fontSize: '25px  col-md-9 col-lg-7 col-xl-6 mt-2 mt-lg-3 mt-xl-2'
  };

  function CreateImage(){
    htmlToImage.toPng(document.getElementById('signImage'))
  .then(function (dataUrl) {
    downloadjs(dataUrl, 'my-forest-sign.png');
  });
  }

  return (
    <React.Fragment>
      <Row className="justify-content-center text-white mb-5 px-lg-5 px-xl-0">
        <Col className="col-10 col-md-9 col-lg-3 col-xl-3 mb-4">
          <label className="text-small bold" htmlFor="forest-name">Choose a name for your forest:</label>
          <br />
          <input className="no-border input-height" name="forest-name" onChange={changeName} type="text" placeholder="Forest name" 
          maxLength={40}/>
          <p className="x-small mb-3 ">* 40 character limit</p>

          <label className="text-small bold" htmlFor="forest-name">How many acres is your forest:</label>
          <br />
          <input className="no-border input-height" name="forest-name" onChange={changeAcres} type="text" maxLength={8} placeholder="# of acres"/>
          <p className="x-small mb-3">* 8 character limit</p>

          <label className="text-small bold" htmlFor="copyOptions">Select copy for the bottom of the sign:</label>
          <br />
          <select className="mb-3 no-border input-height" name="copyOptions"  onChange={changeCopy} value={selectCopy}>
            <option value="" hidden>Select...</option>
            <option>This Smart Forest is Growing to Net-Zero</option>
            <option>Growing to Net-Zero</option>
            <option>Smart Forest - Breathing Made Easy</option>
            <option>Smart Forest - for the sake of wildlife</option>
            <option>Smart Forest – It is easy being green!</option>
          </select>

          <label className="text-small bold" htmlFor="bgOptions">Select a background for your image:</label><br />
          <select className="mb-3 no-border input-height" name="bgOptions"  onChange={changeBG} value={selectBG}>
            <option value="signbg_start.jpg" hidden>Select...</option>
            <option value="signbg_fall.jpg">Fall</option>
            <option value="signbg_forest.jpg">Spring</option>
            <option value="signbg_green.jpg">Summer</option>
          </select>

            <label className="text-small mb-2 bold" htmlFor="forest-name">Upload an image for your sign:</label>
            
          <div className="upload-button mb-3">
            <ImageUpload
              imageSrc={imageSrc}
              handleImageSelect={handleImageSelect}
              setImageSrc={setImageSrc}
            />
          </div>

          <label className="text-small mb-2">For best results, use .png format with a transparent background.</label>
        </Col>
        
        <Col className="col-11 col-md-9 col-lg-7 col-xl-6 mt-2 mt-lg-3 mt-xl-2 signImagebuilder pe-lg-0">
          <div id="signImage" className="signImageContainer card-drop-heavy">
            <img src={selectBG}/>
            <div className="signImageText signTextForest">
            <span style={forestFullName.length > 35 ? { fontSize: "80%" } : undefined } 
                hidden={forestName? false : true} >
                {forestFullName}
              </span>
            </div>
            
            <img className="signImageLogo" src={imageSrc}></img>
            <div className="signImageText signTextAcres">
              {forestAcres? forestAcres : ""}
              {forestAcres? " Acres" : ""}
            </div>
            <div className="signImageText signTextBottom">
              {selectCopy}
            </div>
          </div>
          <br />
          <Button className="btn btn-green no-border w-100 text-center" onClick={CreateImage}>
            Export As PNG
          </Button>
          <div id="imageresult"></div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default DigitalSign
