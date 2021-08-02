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
import { useState } from "react";
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

export default function CarbonCalc({ file, href, children}) {
  
  const formOptions = {
    label: 'Carbon Calculator',
    fields: [
      {name: 'header1', component: 'markdown' },
      {name: 'box1Header', component: 'markdown' },
      {name: 'box1Para', component: 'markdown' },
      {name: 'box2Header', component: 'markdown' },
      {name: 'box2Para', component: 'markdown' },
      {name: 'box3Header', component: 'markdown' },
      {name: 'box3Para', component: 'markdown' },
      {name: 'select', component: 'markdown' }
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
  
  var plantHectares = (duration*footprint)/regionArray.carbon[region];
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

  return (
    <div>
      <Header/>
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col className="col-11 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold">{editingdata.header}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="p-3 col-11 col-lg-6">
            <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
              <p className="lead text-white m-2 calc-intro pe-lg-2">{editingdata.para1}</p>
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
                  <input className="mb-4" onChange={changeFootprint} name="type" type="number" min="0" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
                  }  placeholder={editingdata.emissionsPlaceholder}/>
                  {editingdata.emissionsCarbon}<Link href="carbon-calculator"><a className="underline modal-btn">{editingdata.emissionsLink}</a></Link>
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
            </div>
          </Col>
          <Col className=" p-3  col-12 col-lg-4 stickyCalc mb-4">
            <div className="text-white p-5 innerShadow roundedBox">
              <h4 className="mb-0">{editingdata.dataHeader}</h4>
              <hr/>
              <Row><Col className="pb-3">{editingdata.dataType} {plantHectares > 0 ? plantHectares.toFixed(2) : "--"} {editingdata.dataType1}</Col></Row>
              <hr/>
              <Row><Col className="pb-3">{editingdata.dataType} {plantTrees > 0 ? Math.ceil(plantTrees).toLocaleString("en-US") : "--"} {editingdata.dataType2}</Col></Row>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="col-10 align-items-center text-center p-3">
            <div className="bg-brown p-5 innerShadow roundedBox">
              <p className="smallCaps text-orange">{editingdata.nextHeader}</p>
              <h3 className="text-white mb-4 px-2 px-lg-5">{editingdata.nextPara}</h3>
              {/* FIXME not sure where this link is supposed to go  */}
              <Link href="/net-negative-personal">
                <Button className="btn-large mt-1" variant="green">{editingdata.nextButton}</Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col className="col-11 col-lg-10 pt-5">
            <h1 className="h2 text-orange text-center pt-5 bold mb-4">Select a Net-Zero Calculator</h1>
          </Col>
        </Row>

        <Row className="justify-content-center pb-5 mb-5">
        <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
              <h4 className="text-white tight-drop-light">Corporate</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how many acres your corporation must invest in to reach a net-zero emissions target</p>
              <Link href="smart-forest-corp">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">SELECT</a>
              </Link>
            </div>
          </Col>

          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
              <h4 className="text-white tight-drop-light">School</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how many acres your school must invest in to reach a net-zero emissions target</p>
              <Link href="smart-forest-school">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">SELECT</a>
              </Link>
            </div>
          </Col>

          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
              <h4 className="text-white tight-drop-light">Personal</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how many acres you must invest in to reach a net-zero emissions target</p>
              <Link href="smart-forest-personal">
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
      fileRelativePath: 'content/carbon-calculator.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/carbon-calculator.json',
        data: (await import('../content/carbon-calculator.json')).default,
      },
    },
  }
}