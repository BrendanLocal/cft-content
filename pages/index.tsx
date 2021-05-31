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


const Lang = () => {
var language = "en";
  const router = useRouter();
  if(router.query.lang){ 
  const lan = JSON.stringify(router.query.lang);
  language = JSON.parse(lan)
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
  
    
      <img className="rellax parallaxLayers" src="/landingSKY.png" alt="SKY"
      data-rellax-speed="-15"></img>
    

<img className="rellax parallaxLayers" src="/landingLAND.png" alt="LAND"
      data-rellax-speed="-12"></img>
    <Container className="v-full d-flex py-5 flex-column z-0">
      <Row className="justify-content-center pt-5 align-items-center">
        <Col className="col-12 col-lg-8 col-xl-6 p-3 pt-5 p-md-1">
        <h1 className="my-5 pt-5 text-white drop bold">
         
        {editingdata[Lang()].heading}
        </h1>
        <p className="lead py-5 text-white bold pe-5 pe-lg-0 big-drop tight-drop">{editingdata[Lang()].paragraph1}</p>
        <hr className="thick my-4"></hr>
        </Col>
        </Row>
        
        
      <Row className="justify-content-center  py-5">
        <Col className="col-12 col-lg-8 pe-lg-0 mb-0">
          <h2 className="text-center text-white mb-0 bold tight-drop">{editingdata[Lang()].foresttrust}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center  pb-5 align-items-stretch mb-5">
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3">
          <div className="roundedBox card no-border bg-white p-4 h-100">
            <p className="large text-green">
          {editingdata[Lang()].card1}</p>
          </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3 ">
          <div className="roundedBox card no-border bg-white p-4 h-100">
          <p className="large text-green">
          {editingdata[Lang()].card2}</p>
          </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3">
          <div className="roundedBox card no-border bg-white p-4 h-100">
          <p className="large text-green">
          {editingdata[Lang()].card3}</p>
          </div>
        </Col>

        <Col className="text-center col-lg-12 pb-5 pe-5 mt-5 pe-lg-0">
        <Button variant="green">{editingdata[Lang()].buildbutton}</Button>
        </Col>
      </Row>

    </Container>

    
    <Container fluid className="z-999 bg-green py-5">
      <Row className="pt-5 align-items-center justify-content-center">
        <Col className="col-12 col-lg-6 pe-lg-0 mt-5">
          <h2 className="text-center text-orange bold">{editingdata[Lang()].smarttitle}</h2>
          <p className="text-center text-white medium thin mb-4">{editingdata[Lang()].smartpara}</p>
        </Col>
      </Row>
      <Row className="justify-content-center pb-5 align-items-stretch">
      <Col className="col-12 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-white no-border p-4 h-100 d-flex flex-column drop">
        <h4 className="thin text-green">{editingdata[Lang()].card1title}</h4>
        <p className="flex-fill pb-3">{editingdata[Lang()].card1para}</p>
        <Button variant="text text-left text-mildgreen">{editingdata[Lang()].learnmore}</Button>
        </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-white no-border p-4 h-100 d-flex flex-column drop">
        <h4 className="thin text-green">{editingdata[Lang()].card2title}</h4>
        <p className="flex-fill pb-3">{editingdata[Lang()].card2para}</p>
        <Button variant="text text-left text-mildgreen">{editingdata[Lang()].learnmore}</Button>
        </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-white no-border p-4 h-100 d-flex flex-column drop">
        <h4 className="thin text-green">{editingdata[Lang()].card3title}</h4>
        <p className="flex-fill pb-3">{editingdata[Lang()].card3para}</p>
        <Button variant="text text-left text-mildgreen">{editingdata[Lang()].learnmore}</Button>
        </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-white no-border p-4 h-100 d-flex flex-column drop">
        <h4 className="thin text-green">{editingdata[Lang()].card4title}</h4>
        <p className="flex-fill pb-3">{editingdata[Lang()].card4para}</p>
        <Button variant="text text-left text-mildgreen">{editingdata[Lang()].learnmore}</Button>
        </div>
        </Col>
      </Row>
    </Container>

    <Container fluid className="py-5 z-999 bg-green align-items-center">
      <Row className="py-5 align-items-center justify-content-center ">
        
        <Col className="order-2 order-lg-1 col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata[Lang()].powertitle}</h2>
        <p className="pb-3 thin">{editingdata[Lang()].powerpara}</p>
        <Button variant="green">
        {editingdata[Lang()].unlockbutton}
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

    <Container fluid className="z-999 bg-green pb-5">
    <Row className="py-5 align-items-center justify-content-center ">
    <Col className="col-12 col-md-4 p-5">
        
<div className="px-5 whiteFloat" data-relative-input="true">
      <img className="pos-absolute" data-depth=".2" src="/BUILD-animated.svg"></img>
          </div>
                </Col>
        <Col className="col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata[Lang()].buildtitle}</h2>
        <p className="pb-3 thin">{editingdata[Lang()].buildpara}</p>
        <Button variant="green">
{editingdata[Lang()].buildbutton2}
        </Button>
        </Col>
        

      </Row>
    </Container>
    <Container fluid className="z-999 bg-green py-5">
    <Row className="py-5 align-items-center justify-content-center  align-items-stretch protorow">
    
        <Col className="col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata[Lang()].portaltitle}</h2>
        <p className="pb-3 thin">{editingdata[Lang()].portalpara}</p>
        <Button variant="green">
{editingdata[Lang()].portalbutton}
        </Button>
        </Col>
        <Col className="col-12 col-md-4 p-5">
                </Col>
        

      </Row>
    </Container>
    
    <Container fluid className="z-999 bg-green py-5 mb-4">
    <Row className="pt-5 align-items-center justify-content-center ">
  <Col className="col-12 col-lg-5 pe-lg-0 mb-4">
  <h2 className="text-center text-orange mb-2 bold">{editingdata[Lang()].calculateheader}</h2>
  <p className="text-center large text-white thin">{editingdata[Lang()].calculatepara}</p>
  </Col>
      </Row>
      <Row className="justify-content-center  pb-5 align-items-stretch mb-5">
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-green p-4 h-100">
            <p className="h6 text-orange bold">
              STEP 1
            </p>
            <p className="large text-white mb-3 thin">
          {editingdata[Lang()].step1header}</p>
          <p className="text-white mb-5">
          {editingdata[Lang()].step1para}</p>
          <Button variant="green">      
              {editingdata[Lang()].calculatebutton1}
        </Button>
          </div>
        </Col>
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-green p-4 h-100">
            <p className="h6 text-orange bold">
              STEP 2
            </p>
            <p className="large text-white mb-3 thin">
          {editingdata[Lang()].step2header}</p>
          <p className="text-white mb-5">
          {editingdata[Lang()].step2para}</p>
          <Button variant="green">      
              {editingdata[Lang()].calculatebutton2}
        </Button>
          </div>
        </Col>
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-green p-4 h-100">
            <p className="h6 text-orange bold">
              STEP 3
            </p>
            <p className="large text-white mb-3 thin">
          {editingdata[Lang()].step3header}</p>
          <p className="text-white mb-5">
          {editingdata[Lang()].step3para}</p>
          <Button variant="green">      
              {editingdata[Lang()].calculatebutton3}
        </Button>
          </div>
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
if (preview) {
return getGithubPreviewProps({
...previewData,
fileRelativePath: 'content/home.json',
parse: parseJson,
})
}
return {
props: {
sourceProvider: null,
error: null,
preview: false,
file: {
fileRelativePath: 'content/home.json',
data: (await import('../content/home.json')).default,
},
},
}
}
