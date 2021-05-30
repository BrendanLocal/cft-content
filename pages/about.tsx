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
import { Slide } from 'react-slideshow-image';

export default function Power({ file }) {

const formOptions = {
label: 'About',
fields: [{ name: 'title', component: 'text' }],
}

const [editingdata, form] = useGithubJsonForm(file, formOptions)
usePlugin(form)
useGithubToolbarPlugins()

const slideProperties = {
  indicators: true,
  indicators: i => (<span className="sliderDot"/>)
}

return (
  
<div>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>

  <main className="bg-green py-5">
    <Container className="bg-green py-5">
      <Row className="justify-content-center align-items-center d-flex py-6"> 

      <Col className="col-xl-4 p-5 stickyTop">
         <img className="roundedBox" src="/placeholder-forest.jpg"/>
        </Col>
      <Col className="col-xl-4 text-white p-5 pb-0">
        <h1 className="text-orange mb-5">
         {editingdata.heading}
        </h1>
        <p>{editingdata.aboutpara}</p>
        
        </Col>

        
      </Row>
      <Row className="justify-content-center py-6">
        <Col className="col-12">
        <h3 className="text-orange text-center">{editingdata.ceotitle}</h3>
        </Col>
        <Col className="col-lg-6"><div className="roundedBox bg-brown v-50"></div></Col>
      </Row>
      <Row className="justify-content-center align-items-center py-6">
        <Col className="col-xl-4 p-5  text-white">
<h3 className="h2 bold text-orange">{editingdata.whytitle}</h3>
<p>{editingdata.whypara}</p>
        </Col>

      <Col className="col-xl-4 p-5 ">
         <img className="roundedBox" src="/placeholder-forest.jpg"/>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center py-6">
        <Col className="col-xl-6 text-center text-white">
<h3 className="h2 text-orange">{editingdata.whattitle}</h3>
<p className="lead ">{editingdata.whatsub}</p>
<span className="text-center text-orange smallCaps small letterspace">{editingdata.webelieve}</span>
</Col>
      </Row>
      <Row>
        <Col>
        <Slide easing="ease" {...slideProperties}>
          <Row className="justify-content-center each-slide">
            <Col className="col-4 p-5 bg-white roundedBox">
              <p className="text-center thin">
{editingdata.slide1}
</p>
</Col>
          </Row>
          <Row className="justify-content-center each-slide">
          <Col className="col-4 p-5 bg-white roundedBox">
              <p className="text-center thin">
{editingdata.slide2}
</p>
</Col>
          </Row>
        </Slide>
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
fileRelativePath: 'content/about.json',
parse: parseJson,
})
}
return {
props: {
sourceProvider: null,
error: null,
preview: false,
file: {
fileRelativePath: 'content/about.json',
data: (await import('../content/about.json')).default,
},
},
}
}