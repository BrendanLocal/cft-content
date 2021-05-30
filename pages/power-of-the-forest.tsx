import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
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

        <Button variant="text text-orange arrow-after medium d-block text-left py-3">{editingdata.smarttitle}</Button>
        <Button variant="text text-orange arrow-after medium d-block text-left py-3">{editingdata.canadacontribution}</Button>
        <Button variant="text text-orange arrow-after medium d-block text-left py-3">{editingdata.unlock}</Button>


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
      <Row className="justify-content-center pt-5">
        <Col className=" col-6">
        <h2 className="text-center text-orange bold">{editingdata.smarttitle}</h2>
        <p className="text-center text-white medium thin">{editingdata.smartpara}</p></Col>
      </Row>
      <Row className="py-5 align-items-stretch ">
        <Col>
        <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
        <h4 className="thin text-green">{editingdata.card1title}</h4>
        <p className="flex-fill pb-3">{editingdata.card1para}</p>
        <Button variant="text text-left">{editingdata.learnmore}</Button>
        </div>
        </Col>
        <Col>
        <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
        <h4 className="thin text-green">{editingdata.card2title}</h4>
        <p className="flex-fill pb-3">{editingdata.card2para}</p>
        <Button variant="text text-left">{editingdata.learnmore}</Button>
        </div>
        </Col>
        <Col>
        <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
        <h4 className="thin text-green">{editingdata.card3title}</h4>
        <p className="flex-fill pb-3">{editingdata.card3para}</p>
        <Button variant="text text-left">{editingdata.learnmore}</Button>
        </div>
        </Col>
        <Col>
        <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
        <h4 className="thin text-green">{editingdata.card4title}</h4>
        <p className="flex-fill pb-3">{editingdata.card4para}</p>
        <Button variant="text text-left">{editingdata.learnmore}</Button>
        </div>
        </Col>
      </Row>

      <Row>
        <Col>
        <h2 className="text-center text-orange bold">{editingdata.carboncount}</h2>
        </Col></Row><Row>
        <Col>
        <div className="roundedBox bg-brown v-100"></div>
        </Col>
      </Row>

      <Row className="text-center py-6">
        <Col>
        <h3 className="text-orange">{editingdata.decreasetitle}</h3>
        <Button variant="green">{editingdata.offsetbutton}</Button>
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
        <Button variant="green">{editingdata.buildctabutton}</Button>
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