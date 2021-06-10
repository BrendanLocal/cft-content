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
          <p className="text-white m-2 bold op-6 ">SMART FORESTS</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">
               INTRO
              </a>
            </li>
            <li className="p-0" data-dest="#commitment" >              
              <a href="#commitment" className="text-white bold no-underline">
                COMMITMENT
              </a>
            </li>
            <li className="p-0" data-dest="#forever">
              <a href="#forever" className="text-white bold no-underline ">
                FOREVER
              </a>
            </li>
            <li className="p-0" data-dest="#smart-forests">             
              <a href="#smart-forests" className="text-white bold no-underline ">
                ANYONE
              </a>
            </li>
            <li className="p-0" data-dest="#everyday">             
              <a href="#everyday" className="text-white bold no-underline ">
                EARTH
              </a>
            </li>
          </ul>        
        </Col>
      </Row>

  <main className="bg-green py-5">
    <Container id="intro" className="bg-green py-5 px-5">
      <Row className="justify-content-center d-flex pb-5 mb-5 py-5 px-5"> 
      <Col className="col-12 col-lg-5 text-white p-5 pb-0">
        <h1 className="text-orange mb-5 bold">
         What is a Smart Forest?
        </h1>
        <p className="large my-5 op-8">Smart Forests™ have a significant impact on climate change. They provide ecosystems for diverse wildlife. They create jobs for generations of Canadians. And they show us exactly how they restore our planet via their own digital tools.</p>
        

        <p className="text-white text-left smallcaps intro-links-header op-2 mt-4">ON THIS PAGE</p>
        <a href="#commitment" className="btn btn-text text-left intro-links text-orange bold no-underline ">Our Commitment</a>
        <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline ">Here for good</a>
       <a href="#smart-forests" className="btn btn-text text-left intro-links text-orange bold no-underline ">Anyone can do it</a>
       <a href="#earth" className="btn btn-text text-left intro-links text-orange bold no-underline ">Everyday is Earth Day</a>

        </Col>

       <Col className="col-12 col-lg-5 p-2 stickyTop mb-5">
         
       <object className="op-8" type="image/svg+xml" data="/power2-svg.svg"/>
        </Col>
        
      </Row>
    </Container>
    


    <Container id="commitment" fluid className="v-full z-999 bg-green py-5">
    <Fade bottom>
      <Row className="pt-5 align-items-center justify-content-center">
        <Col className="col-12 col-lg-7 pt-3">
          <h2 className="text-center text-orange bold mb-2">Our commitment:</h2>
          <p className="emphasis text-center text-white bold mb-3 op-9">NEVER PLANT A SINGLE TREE AGAIN.</p>
          <p className="text-center text-white thin op-9">It’s now or never. Canada’s Forest Trust will plant 10 million acres of Smart Forests across Canada by 2040. This is the bold action needed to tackle the enormous challenge facing our planet.</p>

          
        </Col>
      </Row>
    </Fade>
    <Fade bottom>
      <Row className="justify-content-center d-flex pb-5 mx-5 px-5">  
        <Col className="col-12 col-lg-5 bg-green roundedBox innerShadow px-5 pt-5 pb-4 m-4">
          
              <h3 className="text-orange">A Forest</h3>
              <ul className="text-white checkMark">
                <li>Mitigates climate change by sequestering carbon</li>
                <li>Purifies the air and improves soil quality</li>
                <li>Regulates, filters, and moderates water flow</li>
                <li>Supports wildlife and plant species that would otherwise disappear</li>
                <li>Helps mitigate and prevent natural disasters</li>
              </ul>
          
          </Col>

          <Col className="col-12 col-lg-5 bg-green roundedBox innerShadow px-5 pt-5 pb-4 m-4">
          
              <h3 className="text-orange">A Smart Forest</h3>
              <ul className="text-white plus">
                <li>Is a forest <span className="bold italic">and</span> an investment in the health of our planet</li>
                <li>Offers a tangible way to offset a large carbon footprints</li>
                <li>Maximizes its impact through expert forest management</li>
                <li>Proves its effectiveness via proprietary digital tools</li>
                <li>Boosts the green economy</li>
                <li>Is protected forever with a no-harvest guarantee</li>
              </ul>

        </Col>
      </Row>
      
      </Fade>
    </Container>


    <Container id="forever" fluid className="v-full z-999 bg-green py-5">
    <Fade bottom>
      <Row className="pt-5 align-items-center justify-content-center">
        <Col className="col-12 col-lg-8 pt-3">
          <h2 className="text-center text-orange bold mb-2">Smart Forests are here for good.</h2>
          <p className="text-center text-white lead op-9">Once we build a Smart Forest, it’s protected. <span className="bold">Forever.</span></p>

          
        </Col>
      </Row>
    </Fade>
    <Fade bottom>
      <Row className="justify-content-center d-flex pb-5 mx-5">  
        <Col className="col-12 col-lg-8 bg-brown roundedBox innerShadow p-5 m-4 blockquote-bg">
          
              <h3 className="text-left blockquote text-orange p-5">“Time is much shorter than we think. Failure means disaster. The changes required are enormous and we must all contribute in every part of our daily life. Especially us in the rich countries where no nation is doing nearly enough.”</h3>
              <p className="text-left text-white my-0 mx-5 bold">— Greta Thunberg</p>
              <p className="text-left text-white mx-5 px-3 italic op-6">Climate activist</p>

        </Col>
      </Row>
      
      </Fade>
    </Container>


      
    
    <Container id="smart-forests" fluid className="v-full z-999 bg-green py-5">
    <Fade bottom>
      <Row className="pt-5 align-items-center justify-content-center">
        <Col className="col-12 col-lg-8 pe-lg-0 p-3">
          <h2 className="text-center text-orange bold">Anyone can build a Smart Forest. Across generations. Across Canada.</h2>
          
        </Col>
      </Row>
      <Row className="justify-content-center pb-5 align-items-stretch">
      <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
        <h4 className="text-white tight-drop-light">Corporate Forests Grow</h4>
        <p className="flex-fill pb-3 text-white tight-drop">A turnkey and sustainable solution to meet ESG goals</p>
       
        <Link href="/build-your-forest#corporate" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a></Link>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
        <h4 className="text-white tight-drop-light">School Forests Teach</h4>
        <p className="flex-fill pb-3 text-white tight-drop">A tangible opportunity for schools and students to combat climate change</p>
        <Link href="/build-your-forest#school" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a></Link>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
        <h4 className="text-white tight-drop-light">Legacy Forests Last</h4>
        <p className="flex-fill pb-3 text-white tight-drop">A unique way to leave a healthy planet for future generations</p>
        <Link href="/build-your-forest#legacy" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a></Link></div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
        <h4 className="text-white tight-drop-light">Communal Forests Unite</h4>
        <p className="flex-fill pb-3 text-white tight-drop">An opportunity for every Canadian to participate</p>
        <Link href="/build-your-forest#communal" ><a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a></Link> </div>
        </Col>
      </Row>
      </Fade>
    </Container>


    <Container id="earth" fluid className="v-full z-999 bg-green">
    <Fade bottom>
      <Row className="pt-5 align-items-center justify-content-center">
      <Col className="col-12 p-5 col-md-4">
      <h2 className="text-left text-orange bold ">Let’s live in a country where every day is Earth day.</h2>
          <p className="text-left text-white ">Canada’s Forest Trust will build Smart Forests on deforested or unused land, located in ecologically diverse regions across the country, and will protect some of our nation’s most imperilled plants and animals.</p>
        
      
      </Col>

        <Col className="col-12 col-md-4 p-5 roundedBox innerShadow forest-callout">
          
              <h3 className="text-left text-white p-3">Planting 500 hectares of land has the potential to sequester about 41,245 tonnes of carbon by 2050 and 75,300 tonnes by 2070. </h3>
              

        </Col>
      </Row>
    </Fade>
    <Fade bottom>
      <Row className="align-items-center justify-content-center">
      <Col className="col-12 col-lg-7 px-5"> 
      <p className="large text-center text-orange bold op-9 my-0">See your carbon footprint and learn what you can do to get to net-zero.</p> 

        </Col>
        <Col className="text-center col-lg-7 pb-5 pe-5 mt-5 pe-lg-0">
        <Link href="/what-is-a-smart-forest" ><a className="btn btn-large btn-green">WHAT'S YOUR IMPACT?</a></Link>
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