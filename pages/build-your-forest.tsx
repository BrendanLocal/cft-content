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

const [data, form] = useGithubJsonForm(file, formOptions)
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
          <span className="bold">Build</span><br/>Your<br/>Forest
        </h1>
        <p className="large">Canada’s Forest Trust engages and empowers youth, families, farmers, landowners, Indigenous communities and corporate Canada to work together to build a better environment and meet our country’s global commitment to a net-zero future.</p>
        <p>As we envision a multi-generational transformation, we are prioritizing environmental education and engagement among high school students as part of our efforts.</p>
        <p>When fully operative, our project is expected to engage thousands of employees across the country annually.</p>
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
          <Col className="col-lg-10 d-flex bg-brown roundedBoxLarge p-5 justify-content-center">
          <img className="p-3" src="/sliderTemp.png"></img>
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