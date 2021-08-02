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
      <Container className="py-5 mb-5">
        

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