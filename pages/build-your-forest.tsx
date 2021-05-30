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


export default function Build({ file }) {

const formOptions = {
label: 'Build Your Forest',
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
       <Col className="col-xl-5 p-5 stickyTop mb-5">
         <div className="rellax" data-rellax-speed="1">
<div className="px-5 " data-relative-input="true" id="scene">
<img className="pos-absolute" data-depth="-0.7" src="/buildTemp_layer3.svg"></img>
        <img className="pos-absolute" data-depth="-0.2" src="/buildTemp_layer1.svg"></img>
      <img className="pos-absolute" data-depth=".5" src="/buildTemp_layer2.svg"></img>
          </div></div>
        </Col>
        <Col className="col-xl-5 text-white p-5 pb-0">
        <h1 className="text-orange mb-5">
         {editingdata.heading}
        </h1>
        <p className="large">{editingdata.leadpara}</p>
        <p>{editingdata.para2}</p>
        <p>{editingdata.para3}</p>
        <p className="pt-3"><a className="sectionLink" href="#">Our 5-Phase Approach</a><br/>
        <a className="sectionLink" href="#">Our Smart Forests<sup>™</sup></a><br/></p>

        </Col>
      </Row>
    </Container>
    <Container className="v-full bg-green">
      <Row>
        <Col className="text-center">
        <h2 className="text-orange mb-5">
          Our 5-Phase Approach
        </h2>
        </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-lg-10 d-flex bg-brown roundedBox p-5 justify-content-center">
          <img className="p-3" src="/sliderTemp.png"></img>
          </Col>
        </Row>
    </Container>
    <Container className="bg-green py-6">
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
fileRelativePath: 'content/build.json',
parse: parseJson,
})
}
return {
props: {
sourceProvider: null,
error: null,
preview: false,
file: {
fileRelativePath: 'content/build.json',
data: (await import('../content/build.json')).default,
},
},
}
}