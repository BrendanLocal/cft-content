import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'

import Link from 'next/link'
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
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from 'react-slideshow-image';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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


const slideProperties = {
indicators: i => (<span className="sliderDot" />)
}


return (

<div>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218">
    </meta>
  </Head>

  <main className="bg-green">
    <Container className="bg-green py-6">
      <Row className="justify-content-center d-flex pb-5 mb-5">
        <Col className="col-xl-5 p-5 stickyTop mb-5">
        <div className="rellax" data-rellax-speed="1">
          <div className="px-5 " data-relative-input="true" id="scene">
            <img className="pos-absolute" data-depth="-0.7" src="/buildTemp_layer3.svg"></img>
            <img className="pos-absolute" data-depth="-0.2" src="/buildTemp_layer1.svg"></img>
            <img className="pos-absolute" data-depth=".5" src="/buildTemp_layer2.svg"></img>
          </div>
        </div>
        </Col>
        <Col className="col-xl-5 text-white p-5 pb-0">
        <h1 className="text-orange mb-5">
          {editingdata.heading}
        </h1>
        <p className="large">{editingdata.leadpara}</p>
        <p>{editingdata.para2}</p>
        <p>{editingdata.para3}</p>
        <p className="pt-3"><a className="sectionLink" href="#5-phase">Our 5-Phase Approach</a><br />
          <a className="sectionLink" href="#smart-forests">Our Smart Forests<sup>™</sup></a><br /></p>

        </Col>
      </Row>
    </Container>
    <Container id="5-phase" className="v-full bg-green">
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
          <h4 className="text-white tight-drop-light">{editingdata.card1title}<span className="text-orange">™</span>
          </h4>
          <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card1para}</p>

          <a href="#corporate"
            className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
          <h4 className="text-white tight-drop-light">{editingdata.card2title}<span className="text-orange">™</span>
          </h4>
          <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card2para}</p>
          <a href="#school"
            className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
          <h4 className="text-white tight-drop-light">{editingdata.card3title}<span className="text-orange">™</span>
          </h4>
          <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card3para}</p>
          <a href="#legacy"
            className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
          <h4 className="text-white tight-drop-light">{editingdata.card4title}<span className="text-orange">™</span>
          </h4>
          <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card4para}</p>
          <a href="#communal"
            className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a>
        </div>
        </Col>
      </Row>
    </Container>

    {/* Coporate Forests */}

    <Container id="corporate" className="py-6 bg-corp">
      <Row className="text-center justify-content-center">
        <Col className="col-lg-6">
        <h2 className="text-white bold py-3">
          Corporate Smart Forests</h2>
        <h3>Don’t just care for the environment. Prove it.</h3>
        <h4>If ESG is not a box you’d like to tick, but a change you’d like to make, work with us.</h4>
        </Col>
      </Row>
      <Row className=" text-center  justify-content-center">
        <Col className="col-lg-7">
        <Row className=" horizTab  justify-content-center">
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.corpabout}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.corpgrow}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.corptesti}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.corpbenefits}</Button>
          </Col>
        </Row>
        </Col>
      </Row>
      <Row className="text-center justify-content-center">
        <Col className="col-lg-7 py-5">
        <p className="lead text-white bold">
          An investment in a Corporate Smart ForestTM is an opportunity for corporations across Canada to reimagine
          their sustainability strategy and invest for long-term ROI. This is a turnkey and sustainable approach for
          corporations to meet net-zero and ESG commitments, offering:
        </p>
        </Col>
      </Row>

      <Swiper spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }} onSlideChange={()=>
        console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >

        <Row className="py-5 align-items-stretch px-5">
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">Proprietary impact calculators </h4>
              <p className="flex-fill pb-3">Calculate your net-zero carbon footprint and determine the size of forest
                needed to offset your emissions.</p>
              <Button variant="text text-left">Try the Calculators</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">Real-time monitoring</h4>
              <p className="flex-fill pb-3">A secure, customized portal to watch your forest grow and build engagement
                campaigns that bring the journey to life for shareholders, employees, and customers.</p>
              <Button variant="text text-left">Try the Portal</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">Transparency and reporting</h4>
              <p className="flex-fill pb-3">Demonstrate your commitment to sustainability and the significance of your
                impact with a no clear-cut guarantee on each Smart Forest. Keep stakeholders informed with an annual
                report on performance.</p>
              <Button variant="text text-left">Reporting</Button>
            </div>
            </Col>
          </SwiperSlide>


        </Row>
      </Swiper>



      <Row>
        <Col className="text-center py-5">
        <Button variant="green">{editingdata.buildbutton}</Button></Col>
      </Row>

      <Row className="justify-content-center">
        <Col className="col-lg-4">
        <h3 className="text-center text-orange bold">{editingdata.growtitle}</h3>
        <p className="text-center text-white medium">{editingdata.growpara}</p>
        </Col>
      </Row>
      <Row className="justify-content-center py-4">
        <Col className="outlineBox text-white p-4 col-lg-3">
        <span className="smallCaps small text-orange letterspace">
          {editingdata.step1}
        </span>
        <h4 className="thin py-3">{editingdata.step1title}</h4>
        <p>{editingdata.step1para}</p>
        <Link href="/smart-forest-calculator">
        <Button variant="green">{editingdata.step1button}</Button>
        </Link>
        </Col>
        <Col className="outlineBox text-white p-4 col-lg-3">
        <span className="smallCaps small text-orange letterspace">
          {editingdata.step2}
        </span>
        <h4 className="thin py-3">{editingdata.step2title}</h4>
        <p>{editingdata.step2para}</p>

        <Link href="/carbon-calculator">
        <Button variant="green">{editingdata.step2button}</Button>
        </Link>
        </Col>
        <Col className="outlineBox text-white p-4 col-lg-3">
        <span className="smallCaps small text-orange letterspace">
          {editingdata.step3}
        </span>
        <h4 className="thin py-3">{editingdata.step3title}</h4>
        <p>{editingdata.step3para}</p>
        <Button variant="green">{editingdata.step3button}</Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center py-5">
        <span className="smallCaps small text-white letterspace">{editingdata.corptesti}</span>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="col-lg-8 bg-brown roundedBox p-5">
        <Slide easing="ease" {...slideProperties}>
          <Row className="justify-content-center each-slide px-5">
            <Col className="p-5 text-white">

            <p className="text-orange large">
              {editingdata.testi1para}
            </p>
            <span className="authorLine">{editingdata.testi1author}</span>
            <span className="authorTitle">{editingdata.testi1authortitle}</span>
            </Col>
          </Row>
          <Row className="justify-content-center each-slide px-5">
            <Col className="p-5 text-white">

            <p className="text-orange large">
              {editingdata.testi2para}
            </p>
            <span className="authorLine">{editingdata.testi2author}</span>
            <span className="authorTitle">{editingdata.testi2authortitle}</span>
            </Col>
          </Row>

        </Slide>
        </Col>
      </Row>

      <Row>
        <Col className="text-center py-3">
        <span className="smallCaps small text-white letterspace">{editingdata.corpbenefits}</span>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className=" col-6">
        <p className="text-center text-orange large bold">{editingdata.corpbenefitspara}</p>
        </Col>
      </Row>
      <Row className="py-5 align-items-stretch justify-content-center">
        <Col className="col-2">
        <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
          <p className="flex-fill pb-3  medium">{editingdata.corpbenefits1para}</p>
        </div>
        </Col>
        <Col className="col-2">
        <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
          <p className="flex-fill pb-3 medium">{editingdata.corpbenefits2para}</p>
        </div>
        </Col>
        <Col className="col-2">
        <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
          <p className="flex-fill pb-3 medium">{editingdata.corpbenefits3para}</p>
        </div>
        </Col>
        <Col className="col-2">
        <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
          <p className="flex-fill pb-3  medium">{editingdata.corpbenefits4para}</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <Link href="/contact">
        <Button variant="green">{editingdata.buildbutton}</Button>
        </Link>
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