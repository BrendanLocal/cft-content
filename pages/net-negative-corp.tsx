import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github";
import { usePlugin } from "tinacms";
import { useState, useEffect } from "react";
import Header from "../components/header";

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
      {name: 'pageName', component: 'markdown' },
      {name: 'pageURL', component: 'markdown' },
      {name: 'title', component: 'markdown' },
      {name: 'header', component: 'markdown' },
      {name: 'select', component: 'markdown' },
      {name: 'emissionsHeader', component: 'markdown' },
      {name: 'emissionsCarbonHeader', component: 'markdown' },
      {name: 'emissionsCarbon', component: 'markdown' },
      {name: 'emissionsLink', component: 'markdown' },
      {name: 'emissionsPlaceholder', component: 'markdown' },
      {name: 'emissionsRegion', component: 'markdown' },
      {name: 'emissionsRegion1', component: 'markdown' },
      {name: 'emissionsRegion2', component: 'markdown' },
      {name: 'emissionsRegion3', component: 'markdown' },
      {name: 'emissionsRegion4', component: 'markdown' },
      {name: 'emissionsRegion5', component: 'markdown' },
      {name: 'emissionsTimeHeader', component: 'markdown' },
      {name: 'emissionsTime1', component: 'markdown' },
      {name: 'emissionsTime2', component: 'markdown' },
      {name: 'emissionsTime3', component: 'markdown' },
      {name: 'emissionsTime4', component: 'markdown' },
      {name: 'emissionsTime5', component: 'markdown' },
      {name: 'emissionsTime6', component: 'markdown' },
      {name: 'emissionsTime7', component: 'markdown' },
      {name: 'emissionsTime8', component: 'markdown' },
      {name: 'emissionsTime9', component: 'markdown' },
      {name: 'emissionsTime10', component: 'markdown' },
      {name: 'emissionsTime11', component: 'markdown' },
      {name: 'emissionsTime12', component: 'markdown' },
      {name: 'emissionsTime13', component: 'markdown' },
      {name: 'emissionsTime14', component: 'markdown' },
      {name: 'emissionsTime15', component: 'markdown' },
      {name: 'dataHeader', component: 'markdown' },
      {name: 'dataType', component: 'markdown' },
      {name: 'dataType1', component: 'markdown' },
      {name: 'dataType2', component: 'markdown' },
      {name: 'dataDisclaimer', component: 'markdown' },
      {name: 'nextHeader', component: 'markdown' },
      {name: 'nextPara', component: 'markdown' },
      {name: 'nextButton', component: 'markdown' },
      {name: 'otherHeader', component: 'markdown' },
      {name: 'otherbox1Header', component: 'markdown' },
      {name: 'otherbox1Para', component: 'markdown' },
      {name: 'otherbox1button', component: 'markdown' },
      {name: 'otherbox2Header', component: 'markdown' },
      {name: 'otherbox2Para', component: 'markdown' },
      {name: 'otherbox2button', component: 'markdown' },
      {name: 'otherbox3Header', component: 'markdown' },
      {name: 'otherbox3Para', component: 'markdown' },
      {name: 'otherbox3button', component: 'markdown' }
     ]
  }

  const [show, setShow] = useState(false);

  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()

  const [regionArray, setRegionArray] = React.useState({
    carbon: {BC:500,	Prairies:252,	Ontario:347,	Quebec:347,	Atlantic:134 }
  });

 
  const [region, setRegion] = React.useState("");
  const [footprint, setFootprint] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [negative, setNegative] = React.useState(0);


  useEffect(() => {
  const businessfootprint = localStorage.getItem('businessfootprint');
  var tempNum = Number(businessfootprint).toFixed(2)
  setFootprint(Number(tempNum));
  },[])





  var plantHectares = duration*footprint/regionArray.carbon[region];
  var plantAcres = plantHectares*2.47;

  if(negative > 0){
    plantHectares = plantHectares * negative;
  }
  var plantTrees = plantHectares*2470;
  const changeRegion = (event) => {
    setRegion(event.target.value);
  }
  const changeFootprint = (event) => {
    setFootprint(event.target.value);
  }
  const changeDuration = (event) => {
    setDuration(event.target.value);
  }
  const changeNegative = (event) => {
    setNegative(event.target.value);
  }

  return (
    <div className="bg-corp">
      <Header/>
      <Container className="p-4 pt-5">
        <Row className="justify-content-center">
          <Col className="col-12 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold tight-drop-light">Corporate Net-Negative Calculator</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="p-3 col-12 col-lg-6">
            <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
              <p className="lead text-white m-2 calc-intro pe-lg-2">Calculate how many acres your corporation must invest in to reach a net negative emissions target</p>
            </div>
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h4 className="text-green">{editingdata.emissionsHeader}</h4>
                  <hr/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="footprint">{editingdata.emissionsCarbonHeader}</label>
                  <br />
                  <input className="mb-4" value={footprint>0? footprint : ""} onChange={changeFootprint} name="type" type="number" min="0"  placeholder={editingdata.emissionsPlaceholder}/>
                  {editingdata.emissionsCarbon}<Link href="business-calculator"><a className="underline modal-btn">{editingdata.emissionsLink}</a></Link>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.emissionsRegion}</label>
                  <br />
                  <select name="type" value={region} onChange={changeRegion}>
                    <option value="" hidden>select</option>
                    <option value='BC'>{editingdata.emissionsRegion1}</option>			
                    <option value='Prairies'>{editingdata.emissionsRegion2}</option>
                    <option value='Ontario'>{editingdata.emissionsRegion3}</option>
                    <option value='Quebec'>{editingdata.emissionsRegion4}</option>
                    <option value='Atlantic'>{editingdata.emissionsRegion5}</option>
                  </select>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col>
                  <label htmlFor="size">{editingdata.emissionsTimeHeader}</label>
                  <br />
                  <select name="size" value={duration} onChange={changeDuration}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='1'>{editingdata.emissionsTime1}</option>
                    <option value='2'>{editingdata.emissionsTime2}</option>
                    <option value='3'>{editingdata.emissionsTime3}</option>
                    <option value='4'>{editingdata.emissionsTime4}</option>
                    <option value='5'>{editingdata.emissionsTime5}</option>
                    <option value='10'>{editingdata.emissionsTime6}</option>
                    <option value='15'>{editingdata.emissionsTime7}</option>
                    <option value='20'>{editingdata.emissionsTime8}</option>
                    <option value='25'>{editingdata.emissionsTime9}</option>
                    <option value='30'>{editingdata.emissionsTime10}</option>
                    <option value='40'>{editingdata.emissionsTime11}</option>
                    <option value='50'>{editingdata.emissionsTime12}</option>
                    <option value='60'>{editingdata.emissionsTime13}</option>
                    <option value='80'>{editingdata.emissionsTime14}</option>
                    <option value='100'>{editingdata.emissionsTime15}</option>
                  </select>
                </Col>
              </Row>

              <hr/>
              <Row>
                <Col>
                  <label htmlFor="additional">Plant it forward by adding</label>
                  <br />
                  <select name="additional" value={negative} onChange={changeNegative}>
                    <option value="" hidden>Select...</option>
                    <option value='1.05'>5%</option>
                    <option value='1.1'>10%</option>
                    <option value='1.15'>15%</option>
                    <option value='1.2'>20%</option>
                    <option value='1.25'>25%</option>
                  </select>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className=" p-3  col-11 col-lg-4 stickyCalc mb-4">
            <div className="text-white p-5 innerShadow roundedBox bg-green">
              <h4 className="mb-0">{editingdata.dataHeader}</h4>
              <hr/>
              <Row><Col className="pb-3">{editingdata.dataType} {plantAcres > 0 ? plantAcres.toFixed(2) : "--"} {editingdata.dataType1}</Col></Row>
              <hr/>
              <Row><Col className="pb-3">{editingdata.dataType} {plantTrees > 0 ? Math.ceil(plantTrees).toLocaleString("en-US") : "--"} {editingdata.dataType2}</Col></Row>
            </div>
          </Col>
        </Row>

        
        <Row className="justify-content-center">
          <Col className="col-11 col-lg-10 align-items-center text-center p-3">
            <div className="bg-brown p-4 innerShadow roundedBox">
              <p className="smallCaps text-orange mb-3">{editingdata.nextHeader}</p>
              <Link href="contact"><Button className="btn-large mt-1" variant="green">Contact us to become a stakeholder</Button></Link>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col className="col-11 col-lg-10 pt-5">
            <h2 className=" text-orange text-center pt-5 bold mb-4 tight-drop-light">{editingdata.otherHeader}</h2>
          </Col>
        </Row>

        <Row className="justify-content-center pb-5 mb-5">
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox1Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox1Para}</p>
              <Link href="business-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox1button}</a>
              </Link>
            </div>
          </Col>
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox2Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox2Para}</p>
              <Link href="school-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox2button}</a>
              </Link>
            </div>
          </Col>
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox3Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox3Para}</p>
              <Link href="personal-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox3button}</a>
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
      fileRelativePath: 'content/net-negative-personal.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/net-negative-personal.json',
        data: (await import('../content/net-negative-personal.json')).default,
      },
    },
  }
}