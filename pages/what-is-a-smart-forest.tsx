import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Rellax from "rellax";
import Parallax from 'parallax-js'
export default function Power({ file }) {
const formOptions = {
label: 'What is a Smart Forest',
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
  
<div>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>


  <Row className="justify-content-left p-0 m-0 d-none d-lg-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white m-2 bold op-6 ">WHAT IS A SMART FOREST</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">
               INTRO
              </a>
            </li>
            <li className="p-0" data-dest="#smart-forests" >              
              <a href="#smart-forests" className="text-white bold no-underline">
                OUR SMART FORESTS
              </a>
            </li>
            <li className="p-0" data-dest="#countdown">
              <a href="#countdown" className="text-white bold no-underline ">
                CARBON COUNTDOWN
              </a>
            </li>
            <li className="p-0" data-dest="#unlock">             
              <a href="#unlock" className="text-white bold no-underline ">
                UNLOCK THE POWER
              </a>
            </li>
          </ul>        
        </Col>
      </Row>

  <main className="bg-green py-5">
    <Container id="intro" className="bg-green py-5 px-5">
      <Row className="justify-content-center d-flex pb-5 mb-5 py-5 px-5"> 
      <Col className="col-xl-5 text-white p-5 pb-0">
        <h1 className="text-orange mb-5 bold">
         {editingdata.heading}
        </h1>
        <p className="large bold mt-5">Smart Forests™ have the ability to:</p>
        <ul className="checkMark large thin pb-5">
          <li>
            {editingdata.list1}
          </li>
          <li>
            {editingdata.list2}
          </li>
          <li>
            {editingdata.list4}
          </li>
          <li>
            {editingdata.list5}
          </li>
          <li>
            {editingdata.list6}
          </li>
          <li>
            {editingdata.list7}
          </li>
          <li>
            {editingdata.list8}
          </li>
          <li>
            {editingdata.list9}
          </li>
          <li>
            {editingdata.list10}
          </li>
          <li>
            {editingdata.list11}
          </li>
          <li>
            {editingdata.list12}
          </li>
        </ul>

        <p className="text-white text-left smallcaps intro-links-header op-2">ON THIS PAGE</p>
        <a href="#smart-forests" className="btn btn-text text-left intro-links text-orange bold no-underline ">{editingdata.smarttitle}</a>
        <a href="#countdown" className="btn btn-text text-left intro-links text-orange bold no-underline ">{editingdata.canadacontribution}</a>
       <a href="#unlock" className="btn btn-text text-left intro-links text-orange bold no-underline ">{editingdata.unlock}</a>

        </Col>

       <Col className="col-xl-5 p-5 stickyTop mb-5">
         
       <object type="image/svg+xml" data="/power2-svg.svg"/>
        </Col>
        
      </Row>
</Container>
    
    <Container id="smart-forests" fluid className="v-full z-999 bg-green py-5">
    <Fade bottom>
      <Row className="pt-5 align-items-center justify-content-center">
        <Col className="col-12 col-lg-6 pe-lg-0 mt-5">
          <h2 className="text-center text-orange bold">{editingdata.smarttitle}</h2>
          <p className="text-center text-white medium thin mb-4">{editingdata.smartpara}</p>
        </Col>
      </Row>
      <Row className="justify-content-center pb-5 align-items-stretch">
      <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
        <h4 className="text-white tight-drop-light">{editingdata.card1title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card1para}</p>
       
        <Link href="/build-your-forest#corporate" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a></Link>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
        <h4 className="text-white tight-drop-light">{editingdata.card2title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card2para}</p>
        <Link href="/build-your-forest#school" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a></Link>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
        <h4 className="text-white tight-drop-light">{editingdata.card3title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card3para}</p>
        <Link href="/build-your-forest#legacy" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a></Link></div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
        <h4 className="text-white tight-drop-light">{editingdata.card4title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card4para}</p>
        <Link href="/build-your-forest#communal" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a></Link> </div>
        </Col>
      </Row>
      </Fade>
    </Container>

    <Container id="countdown" className="py-5 mb-5">
    <Fade bottom>
      <Row className="mb-3">
        <Col>
        <h2 className="text-center text-orange bold">{editingdata.carboncount}</h2>
        </Col>
      </Row>
        
      <Row className="justify-content-center">
        <Col className="col-12 col-lg-7">
        <Row className="roundedBox bg-brown canada-carbon-graphic innerShadow px-4 py-2">
            <Col className="col-12 col-lg-6 p-3">
              <img src="/countdown-igraphic-left.png"></img>
            
            </Col>
            <Col className="col-12 col-lg-6 p-3">
               <img src="/countdown-igraphic-right.png"></img>

            </Col>
        </Row>
        </Col>
      </Row>
      
      <Row className="text-center mt-4">
        <Col>
        <h4 className="text-orange pb-3">{editingdata.decreasetitle}</h4>
        <Link href="/carbon-calculator" ><a className="btn btn-green mb-5">{editingdata.offsetbutton}</a></Link>
        
        </Col>
      </Row>

      </Fade>
    </Container>

    
  <Container id="unlock" className="py-5 my-5">
    <Fade bottom>
      <Row className="justify-content-center">
        <Col className="col-lg-4 roundedBox innerShadow p-0">
          <object type="image/svg+xml" data="/unlock-svg.svg"/>
        </Col>
        <Col className="col-lg-4 p-5">
          <h3 className="h2 text-orange bold">
            {editingdata.unlocktitle}
          </h3>
          <p className="text-white mb-3">{editingdata.unlockpara}</p>
         <Link href="/build-your-forest" ><a className="btn btn-green mt-3">{editingdata.buildctabutton}</a></Link>
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
fileRelativePath: 'content/power.json',
parse: parseJson,
})
}
return {
props: {
sourceProvider: null,
error: null,
preview: false,
file: {
fileRelativePath: 'content/power.json',
data: (await import('../content/power.json')).default,
},
},
}
}