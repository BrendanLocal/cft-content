import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'

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
label: 'Power of the Forest',
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
  
<div>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>

  <main className="bg-green py-5">
    <Container className="bg-green py-5">
      <Row className="justify-content-center d-flex pb-5 mb-5"> 
      <Col className="col-xl-5 text-white p-5 pb-0">
        <h1 className="text-orange mb-5">
         {editingdata.heading}
        </h1>
        <p className="large">Smart Forests™ have the ability to:</p>
        <ul className="checkMark large thin pb-5">
          <li>
            {editingdata.list1}
          </li>
          <li>
            {editingdata.list2}
          </li>
          <li>
            {editingdata.list3}
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
        <a href="#smart-forests" className="btn btn-text text-orange arrow-after medium d-block text-left py-3">{editingdata.smarttitle}</a>
        <a href="#contribution" className="btn btn-text text-orange arrow-after medium d-block text-left py-3">{editingdata.canadacontribution}</a>
       <a href="#unlock" className="btn btn-text text-orange arrow-after medium d-block text-left py-3">{editingdata.unlock}</a>

        </Col>

       <Col className="col-xl-5 p-5 stickyTop mb-5">
         
<div className="p-5 whiteFloat" data-relative-input="true" id="scene">
<img className="op-0" data-depth="-1" src="/cft-c.svg"></img>
<img className="op-1" data-depth="-.2" src="/cft-c.svg"></img>

<img className="op-2" data-depth="-.1" src="/cft-c.svg"></img>

<img className="" data-depth="0" src="/cft-c.svg"></img>

<img className="op-2" data-depth=".1" src="/cft-c.svg"></img>

<img className="op-1" data-depth=".3" src="/cft-c.svg"></img>
</div>
        </Col>
        
      </Row>
</Container>

    <Container id="smart-forests" fluid className="v-full z-999 bg-green py-5">
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
    </Container>
<Container id="conribution">
      <Row>
        <Col>
        <h2 className="text-center text-orange bold">{editingdata.carboncount}</h2>
        </Col></Row><Row>
        <Col>
        <div className="roundedBox bg-brown v-100"></div>
        </Col>
      </Row>
      
    </Container>
<Container id="unlock">
      <Row className="text-center py-6">
        <Col>
        <h3 className="text-orange">{editingdata.decreasetitle}</h3>
        <Link href="/carbon-calculator" ><a className="btn btn-green">{editingdata.offsetbutton}</a></Link>
        
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col className="col-lg-4 p-5">
        <h3 className="h2 text-orange bold">
          {editingdata.unlocktitle}
        </h3>
        <p className="text-white">{editingdata.unlockpara}</p>
        </Col>
        <Col className="col-lg-4 p-5"><img src="/unlock-standin.png"/></Col>
        <Col className="col-8">
        <hr className="thick"/></Col>
      </Row>
      <Row className="py-6">
        <Col className="text-center">
        <h3 className="text-white">
          {editingdata.buildctatitle}
        </h3>
        <Link href="/build-your-forest" ><a className="btn btn-green">{editingdata.buildctabutton}</a></Link>
        
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