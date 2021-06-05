import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
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
import Fade from 'react-reveal/Fade';
import { Parallax, Background } from 'react-parallax';

const Lang = () => {
var language = "en";
  const router = useRouter();
  if(router.query.lang){ 
  const lan = JSON.stringify(router.query.lang);
  language = JSON.parse(lan)
  }

  return (language)
}



export default function Home({ file, href, children}) {

  const router = useRouter();

  
const formOptions = {
label: 'Home Page',
fields: [{ name: 'title', component: 'text' }],
}

const [editingdata, form] = useGithubJsonForm(file, formOptions)
usePlugin(form)
useGithubToolbarPlugins()



useEffect(() => {



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    if (entry.intersectionRatio > 0.0 ) {
      if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)){
      document.querySelector(`.left-sidenav li[data-dest="#${id}"]`).classList.add('active');
      }
    } else {
      if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)){
      document.querySelector(`.left-sidenav li[data-dest="#${id}"]`).classList.remove('active');
      }
    }
  });
});

// Track all div containers that have an `id` applied
document.querySelectorAll('div[id]').forEach((id) => {
  observer.observe(id);
});

}, []);



return (
<div className={styles.homeParallax}>
  

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>

  <Row className="justify-content-left p-0 m-0 d-none d-lg-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white m-2 bold op-6 ">HOME</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">
               INTRO
              </a>
            </li>
            <li className="p-0" data-dest="#our-smart-forests" >              
              <a href="#our-smart-forests" className="text-white bold no-underline">
                OUR SMART FORESTS
              </a>
            </li>
            <li className="p-0" data-dest="#unlock-the-forest">
              <a href="#unlock-the-forest" className="text-white bold no-underline ">
                POWER OF FORESTS
              </a>
            </li>
            <li className="p-0" data-dest="#build-a-forest">             
              <a href="#build-a-forest" className="text-white bold no-underline ">
                BUILD A FOREST
              </a>
            </li>
            <li className="p-0" data-dest="#explore-your-forest">              
              <a href="#explore-your-forest" className="text-white bold no-underline ">
                EXPLORE YOUR FOREST
              </a>
            </li>
            <li className="p-0" data-dest="#calculate-impact" >  
              <a href="#calculate-impact" className="text-white bold no-underline ">
                CALCULATE YOUR IMPACT
              </a>
            </li>
          </ul>        
        </Col>
      </Row>


  <main id="intro">
  <Parallax
        bgImage='/landingSKY.png'
        bgImageAlt="SKY"
        strength={500}
        
    >
   <Parallax
        bgImage='/landingLAND.png'
        bgImageAlt="LAND"
        strength={200}
    >

 


    <Container  id="intro" fluid className="v-full d-flex py-5 flex-column z-0">
      <Row className="justify-content-center pt-5 align-items-center my-5">
        <Col className="col-12 col-lg-8 col-xl-6 p-3 pt-5 p-md-1">
        <h1 className="my-5 pt-5 text-white drop bold">
         
        {editingdata[Lang()].heading}
        </h1>
        <p className="lead py-5 text-white bold pe-5 pe-lg-0 big-drop tight-drop">{editingdata[Lang()].paragraph1}</p>
        <hr className="thick my-4"></hr>
        </Col>
        </Row>
        
      <Fade bottom>
      <Row className="justify-content-center  py-5">
        <Col className="col-12 col-lg-8 pe-lg-0 mb-0 p-0">
          <h2 className="text-center text-white mb-0 bold tight-drop">{editingdata[Lang()].foresttrust}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center  pb-5 align-items-stretch mb-5">
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3">
          <div className="roundedBox card no-border bg-white p-4 h-100 card-drop-heavy">
            <p className="large text-green thin">
          {editingdata[Lang()].card1}</p>
          </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3 ">
          <div className="roundedBox card no-border bg-white p-4 h-100 card-drop-heavy">
          <p className="large text-green thin">
          {editingdata[Lang()].card2}</p>
          </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3">
          <div className="roundedBox card no-border bg-white p-4 h-100 card-drop-heavy">
          <p className="large text-green thin">
          {editingdata[Lang()].card3}</p>
          </div>
        </Col>

        <Col className="text-center col-lg-12 pb-5 pe-5 mt-5 pe-lg-0">
        <Link href="/contact" ><a className="btn btn-green">{editingdata[Lang()].buildbutton}</a></Link>
        </Col>
      </Row>   
      </Fade>
    </Container>
    </Parallax>
    </Parallax>
    
    <Container id="our-smart-forests" fluid className="v-full z-999 bg-green py-5 container-drop-heavy ">
    <Fade bottom>
      <Row  className="pt-5 align-items-center justify-content-center">
        <Col className="col-12 col-lg-6 pe-lg-0 mt-5">
          <h2 className="text-center text-orange bold">{editingdata[Lang()].smarttitle}</h2>
          <p className="text-center text-white medium thin mb-4">{editingdata[Lang()].smartpara}</p>
        </Col>
      </Row>
      <Row className="justify-content-center pb-5 align-items-stretch">
      <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
        <h4 className="text-white tight-drop-light">{editingdata[Lang()].card1title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata[Lang()].card1para}</p>
       
        <Link href="/build-your-forest#corporate" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata[Lang()].learnmore}</a></Link>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
        <h4 className="text-white tight-drop-light">{editingdata[Lang()].card2title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata[Lang()].card2para}</p>
        <Link href="/build-your-forest#school" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata[Lang()].learnmore}</a></Link>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
        <h4 className="text-white tight-drop-light">{editingdata[Lang()].card3title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata[Lang()].card3para}</p>
        <Link href="/build-your-forest#legacy" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata[Lang()].learnmore}</a></Link></div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
        <h4 className="text-white tight-drop-light">{editingdata[Lang()].card4title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata[Lang()].card4para}</p>
        <Link href="/build-your-forest#communal" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata[Lang()].learnmore}</a></Link> </div>
        </Col>
      </Row>
    </Fade>
    </Container>

    <Container id="unlock-the-forest"  fluid className="v-full z-999 bg-green align-items-center py-5 ">
      <Fade bottom>
      <Row className="py-5 align-items-center justify-content-center">
        
        <Col className="order-2 order-lg-1 col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata[Lang()].powertitle}</h2>
        <p className="pb-3 thin">{editingdata[Lang()].powerpara}</p>
        <Link href="/power-of-the-forest" ><a className="btn btn-green">{editingdata[Lang()].unlockbutton}</a></Link>
      
        </Col>
        <Col className="order-1 order-lg-2 col-12 col-md-4 p-5">
        
          <object type="image/svg+xml" data="/power-svg.svg"/>
          <p className="text-center smallCaps x-small text-white op-1 py-0 my-0">HOVER</p>
        </Col>

      </Row>
      </Fade>
    </Container>

    <Container id="build-a-forest" fluid className="v-full z-999 bg-green py-5 mb-5">
    <Fade bottom>
    <Row  className="py-5 align-items-center justify-content-center ">
    <Col className="col-12 col-md-4 p-5 mx-5">

    <object type="image/svg+xml" data="/build-svg.svg"/>
    <p className="text-center smallCaps x-small text-white op-1 py-0 my-0">HOVER</p>
    
    </Col>
        <Col className="col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata[Lang()].buildtitle}</h2>
        <p className="pb-3 thin">{editingdata[Lang()].buildpara}</p>
        <Link href="/build-your-forest" ><a className="btn btn-green">
{editingdata[Lang()].buildbutton2}</a></Link>
      
        </Col>
        

      </Row>
    </Fade>
    </Container>

    <Container  id="explore-your-forest" fluid className="v-full z-999 bg-green py-5 my-5">
    <Fade bottom>
    <Row className="py-5 align-items-center justify-content-center  align-items-stretch protorow">
    
        <Col className="col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">{editingdata[Lang()].portaltitle}</h2>
        <p className="pb-3 thin">{editingdata[Lang()].portalpara}</p>
     
        <Link href="/portal" ><a className="btn btn-green">
        {editingdata[Lang()].portalbutton}</a></Link>
        </Col>
        <Col className="col-12 col-md-4 p-5 hover-grow">
                      
        </Col>
      </Row>
      </Fade>
    </Container>
    
    <Container id="calculate-impact" fluid className="v-full z-999 bg-green py-5 mb-2">
    <Fade bottom>
    <Row className="pt-5 align-items-center justify-content-center ">
      <Col className="col-12 col-lg-5 pe-lg-0 mb-4">
      <h2 className="text-center text-orange mb-2 bold">{editingdata[Lang()].calculateheader}</h2>
      <p className="text-center large text-white thin">{editingdata[Lang()].calculatepara}</p>
      </Col>
      </Row>
      <Row className="justify-content-center  pb-5 align-items-stretch mb-5 mx-5">
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-green p-4 h-100 calculate-card">
            <p className="h6 text-orange bold">
              STEP 1
            </p>
            <p className="large text-white mb-3 bold">
          {editingdata[Lang()].step1header}</p>
          <p className="text-white mb-5">
          {editingdata[Lang()].step1para}</p>
          <Button variant="green">      
              {editingdata[Lang()].calculatebutton1}
        </Button>
          </div>
        </Col>
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-green p-4 h-100 calculate-card">
            <p className="h6 text-orange bold">
              STEP 2
            </p>
            <p className="large text-white mb-3 bold">
          {editingdata[Lang()].step2header}</p>
          <p className="text-white mb-5">
          {editingdata[Lang()].step2para}</p>
          <Button variant="green">      
              {editingdata[Lang()].calculatebutton2}
        </Button>
          </div>
        </Col>
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-green p-4 h-100 calculate-card">
            <p className="h6 text-orange bold">
              STEP 3
            </p>
            <p className="large text-white mb-3 bold">
          {editingdata[Lang()].step3header}</p>
          <p className="text-white mb-5">
          {editingdata[Lang()].step3para}</p>
          <Button variant="green">      
              {editingdata[Lang()].calculatebutton3}
        </Button>
          </div>
        </Col>

        </Row>
      </Fade>
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
