import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'
import Rellax from "rellax";
import Parallax from 'parallax-js'


const Lang = async() => {
var language = "en";
  const router = useRouter();
  if(router.query.lang){

  language = router.query.lang;
  }

  return (language)
}



export default function Home({ file }) {


const formOptions = {
label: 'Home Page',
fields: [{ name: 'title', component: 'text' }],
}

const [editingdata, form] = useGithubJsonForm(file, formOptions)
usePlugin(form)
useGithubToolbarPlugins()


useEffect(() => {
  new Rellax(".rellax");
  var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);



}, []);


return (
<div className={styles.homeParallax}>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>

  <main>
  
    
      <img className="rellax parallaxLayers" src="/landing_layer1.jpg" alt="Wide image of the forest"
      data-rellax-speed="-15"></img>
    

<img className="rellax parallaxLayers" src="/landing_layer3.png" alt="Wide image of the forest, layered to imply depth"
      data-rellax-speed="-12"></img>
    <Container className="v-full d-flex pt-5 flex-column z-0">
      <Row className="justify-content-center pt-5 align-items-center">
        <Col className="col-12 col-lg-6 p-3 pt-5 p-md-1">
        <h1 className="mb-5 pt-5 text-white drop">
        {editingdata.en.heading}
        </h1>
        <p className="large py-6 text-white bold pe-5 pe-lg-0">{editingdata.en.paragraph1}</p>
        </Col><Col className="col-lg-2"></Col>
        </Row>
        <Row className="justify-content-center  py-6">
          <Col className="p-3 col-12 col-lg-4 pe-5 pe-lg-3">
          <p className="large text-white bold">
          {editingdata.en.paragraph2}
          </p>
          </Col>
          <Col className="p-3 col-12 col-lg-4 pe-5 pe-lg-3">
          <div className="roundedBox card bg-white text-center p-4">
            <h3 className="text-orange bold">
            {editingdata.en.impactCardTitle}
            </h3>
<span className="smallCaps small text-green letterspace pb-3">{editingdata.en.try}</span>
<Button variant="green">Carbon Offset Calculator</Button>
<Button variant="green">Smart Forest Calculator</Button>
          </div>
          </Col>
      </Row>
      <Row className="justify-content-center  py-5">
<Col className="col-12 col-lg-8  pe-5 pe-lg-0">
  <h2 className="text-center text-white mb-0">{editingdata.en.foresttrust}</h2>
</Col>
      </Row>
      <Row className="justify-content-center  pb-5 align-items-stretch">
<Col className="col-12 col-lg-3 pe-5 pe-lg-0">
  <div className="roundedBox card bg-white p-4 h-100">
    <p className="large">
  {editingdata.en.card1}</p>
  </div>
</Col>
<Col className="col-12 col-lg-3 pe-5 pe-lg-0">
  <div className="roundedBox card bg-white p-4 h-100">
  <p className="large">
  {editingdata.en.card2}</p>
  </div>
</Col>
<Col className="col-12 col-lg-3 pe-5 pe-lg-0">
  <div className="roundedBox card bg-white p-4 h-100">
  <p className="large">
  {editingdata.en.card3}</p>
  </div>
</Col>
<Col className="col-12 col-lg-9 py-3 pe-5 pe-lg-0">
<hr className="thick"/></Col>
<Col className="text-center col-lg-12 pb-5 pe-5 pe-lg-0">
<h3 className="text-white mb-5">{editingdata.en.buildyourforest}</h3>
<Button variant="green">{editingdata.en.buildbutton}</Button>
</Col>
      </Row>

    </Container>
    <Container fluid className="py-6 z-999 bg-green align-items-center">
      <Row className="py-6 align-items-center justify-content-center ">
        
        <Col className="order-2 order-lg-1 col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata.en.powertitle}</h2>
        <p className="pb-3">{editingdata.en.powerpara}</p>
        <Button variant="green">
{editingdata.en.unlockbutton}
        </Button>
        </Col>
        <Col className="order-1 order-lg-2 col-12 col-md-4 p-5">
        
<div className="p-5 whiteFloat" data-relative-input="true" id="scene">
<img className="op-0" data-depth="-1" src="/cft-c.svg"></img>
<img className="op-3" data-depth="-.5" src="/cft-c.svg"></img>

<img className="op-5" data-depth="-.3" src="/cft-c.svg"></img>

<img className="op-7" data-depth="0" src="/cft-c.svg"></img>

<img className="" data-depth=".3" src="/cft-c.svg"></img>

<img className="" data-depth=".5" src="/cft-c.svg"></img>
</div>
        </Col>

      </Row>
    </Container>
    <Container fluid className="z-999 bg-green">
    <Row className="py-6 align-items-center justify-content-center ">
    <Col className="col-12 col-md-4 p-5">
        
<div className="px-5 whiteFloat" data-relative-input="true">
      <img className="pos-absolute" data-depth=".2" src="/BUILD-animated.svg"></img>
          </div>
                </Col>
        <Col className="col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata.en.buildtitle}</h2>
        <p className="pb-3">{editingdata.en.buildpara}</p>
        <Button variant="green">
{editingdata.en.buildbutton2}
        </Button>
        </Col>
        

      </Row>
    </Container>
    <Container fluid className="z-999 bg-green">
    <Row className="py-6 align-items-center justify-content-center  align-items-stretch protorow">
    
        <Col className="col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata.en.portaltitle}</h2>
        <p className="pb-3">{editingdata.en.portalpara}</p>
        <Button variant="green">
{editingdata.en.portalbutton}
        </Button>
        </Col>
        <Col className="col-12 col-md-4 p-5">
                </Col>
        

      </Row>
    </Container>

  </main>

</div>
)
}



/**
* Fetch data with getStaticProps based on 'preview' mode
*/
export const getStaticProps: GetStaticProps = async function({
preview,
previewData,
}) {


if (preview ) {
return getGithubPreviewProps({
...previewData,
fileRelativePath: "content/home.json",
parse: parseJson,
})
}
  return {
    props: {
    sourceProvider: null,
    error: null,
    preview: false,
    file: {
    fileRelativePath: "content/home.json",
    data: (await import("../content/home.json")).default,
    },
    },
    }
}
