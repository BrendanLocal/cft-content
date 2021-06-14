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
import Carousel from 'react-bootstrap/Carousel';
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

const slideProperties = {
indicators: i => (<span className="sliderDot" />)
}

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  

return (

<div>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218">
    </meta>
  </Head>

  <Row className="justify-content-left p-0 m-0 d-none d-lg-block d-xl-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white mx-2 mt-0 mb-0 bold op-6 ">BUILD A SMART FOREST</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">
               INTRO
              </a>
            </li>
            <li className="p-0" data-dest="#commitment" >              
              <a href="#commitment" className="text-white bold no-underline">
                THE PLAN
              </a>
            </li>
            <li className="p-0" data-dest="#forever">
              <a href="#forever" className="text-white bold no-underline">
                DIFFERENCE
              </a>
            </li>
            <li className="p-0" data-dest="#smart-forests">             
              <a href="#smart-forests" className="text-white bold no-underline">
                OUR FORESTS
              </a>
            </li>
            <li className="p-0" data-dest="#earth">             
              <a href="#earth" className="text-white bold no-underline">
                CORPORATE
              </a>
            </li>
            <li className="p-0" data-dest="#earth">             
              <a href="#earth" className="text-white bold no-underline">
                SCHOOL
              </a>
            </li>
            <li className="p-0" data-dest="#earth">             
              <a href="#earth" className="text-white bold no-underline">
                LEGACY
              </a>
            </li>
            <li className="p-0" data-dest="#earth">             
              <a href="#earth" className="text-white bold no-underline">
                COMMUNAL
              </a>
            </li>
          </ul>        
        </Col>
      </Row>

      <main className="bg-green py-5">
    <Container id="intro" className="bg-green py-5 px-5">
      <Row className="justify-content-center d-flex pb-5 mb-5 py-5 px-5">
        
        <Col className="col-12 col-lg-5 stickyTop mb-5 p-3">
         
       <object type="image/svg+xml" data="/build2-svg.svg"/>
        </Col> 
      
      <Col className="col-12 col-lg-5 text-white p-4 pb-0 intro-order">
        <h1 className="text-orange mb-5 bold">
        Build Your Smart Forest™
        </h1>
        <p className="large my-5 op-9">An opportunity for youth, families, farmers, landowners, Indigenous communities, and corporate Canada to come together to build a better environment and achieve a net-zero future.</p>
        

        <p className="text-white text-left smallcaps intro-links-header op-5 mt-4">ON THIS PAGE</p>
        <a href="#commitment" className="btn btn-text text-left intro-links text-orange bold no-underline ">The Smart Forest Action Plan</a>
        <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline ">Start making a difference</a>
       <a href="#smart-forests" className="btn btn-text text-left intro-links text-orange bold no-underline">Our Smart Forests</a>
              <a href="#corporate" className="btn btn-text text-left text-orange intro-links  no-underline">Corporate Smart Forests</a>
              <a href="#school" className="btn btn-text text-left text-orange intro-links  no-underline">School Smart Forests</a>
              <a href="#legacy" className="btn btn-text text-left text-orange intro-links no-underline">Legacy Smart Forests</a>
              <a href="#communal" className="btn btn-text text-left text-orange intro-links no-underline">Communal Smart Forests</a>

        </Col>

       
        
      </Row>
    </Container>


    <Container id="5-phase" className="v-full z-999 bg-green p-5">
      <Row className="justify-content-center align-items-center my-4">
        <Col className="col-11 col-lg-8 text-center text-white">
        <h2 className=" text-orange bold mb-2">The Smart Forest Action Plan</h2>
        <p className="large mt-0 mb-0">When you invest in a Smart Forest, you stay informed on its progress - from site selection to planting to ongoing maintenance and carbon footprint impact.</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center px-5">
        
        <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={<span aria-hidden="false" className="carousel-control-next-icon" />} nextLabel="" prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} prevLabel="" className="col-12 col-md-11 col-lg-10 d-flex bg-brown roundedBox innerShadow-heavy px-0">
          
          <Carousel.Item interval={500000} className="drop align-items-center">
          <div className="d-block w-100 phases"></div>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={100000}>
          <div className="d-block w-100 phase1"></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="h2 text-left tight-drop bold mb-1">PROCURE</h3>
              <p className="large text-left tight-drop bold ">Acquire land across Canada.</p>
              
              <div className="card card-drop no-border bg-white px-4 py-2 op-8 mb-2 ">
                <ul className="text-grey text-left checkMark pe-3 pb-0">
                  <li className="pb-0">Identify appropriate areas for Smart Forests across Canada</li>
                </ul>
              </div>

              <div className="card card-drop no-border bg-white px-4 py-2 op-8">
                <ul className="text-grey text-left checkMark pe-3 pb-0">
                <li className="pb-0">Secure seedlings that will thrive in the local environment</li>
                </ul>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item interval={100000}>
          <div className="d-block w-100 phase2 " ></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="h2 text-left tight-drop-light bold">PREPARE</h3>
              <p className="large text-left tight-drop-light bold mb-5">Assess, plan, and complete site preparation for planting.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={100000}>
          <div className="d-block w-100 phase3 " ></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="h2 text-left tight-drop bold">PLANT</h3>
              <p className="large text-left tight-drop bold mb-5">Strategically plant seedlings to ensure optimal growth and carbon sequestration.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={100000}>
          <div className="d-block w-100 phase4 "></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="h2 text-left tight-drop-heavy bold">PRESERVE</h3>
              <p className="large text-left tight-drop-heavy bold mb-5">Perform innovative forest management activities to maintain the forest and maximize its impact.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={100000}>
          <div className="d-block w-100 phase5 " ></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="h2 text-left tight-drop bold ">PROTECT</h3>
              <p className="large text-left tight-drop bold mb-5">Audit, and set a no clear-cut guarantee on every forest.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
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
       
        <a href="#corporate" className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
        <h4 className="text-white tight-drop-light">{editingdata.card2title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card2para}</p>
        <a href="#school" className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
        <h4 className="text-white tight-drop-light">{editingdata.card3title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card3para}</p>
        <a href="#legacy" className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a>
        </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
        <h4 className="text-white tight-drop-light">{editingdata.card4title}<span className="text-orange">™</span></h4>
        <p className="flex-fill pb-3 text-white tight-drop">{editingdata.card4para}</p>
        <a href="#communal" className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnmore}</a> </div>
        </Col>
      </Row>
    </Container>

    {/* Coporate Forests */}

    <Container id="corporate" className="py-6">
      <Row className="text-center justify-content-center">
        <Col className="col-lg-6">
        <h2 className="text-white bold py-3">
          {editingdata.corporatetitle}</h2>
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
          {editingdata.corppara}
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
              <h4 className="thin text-green">{editingdata.corpcard1title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard1para}</p>
              <Button variant="text text-left">{editingdata.corpcard1button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard2title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard2para}</p>
              <Button variant="text text-left">{editingdata.corpcard2button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard3title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard3para}</p>
              <Button variant="text text-left">{editingdata.corpcard3button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard4title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard4para}</p>
              <Button variant="text text-left">{editingdata.corpcard4button}</Button>
            </div>
            </Col>
          </SwiperSlide>

        </Row>
      </Swiper>



      <Row>
        <Col className="text-center py-5">
        <Button variant="green">{editingdata.buildbutton}</Button></Col>
      </Row>

    </Container>
    <Container className="py-6">
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
    </Container>
    <Container fluid className="py-6">
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

    </Container>
    <Container fluid className="py-6">
    <Row>
        <Col className="text-center py-3">
        <span className="smallCaps small text-white letterspace">{editingdata.corpbenefits}</span>
        </Col>
      </Row>
    <Row className="justify-content-center">
        <Col className=" col-6">
        <p className="text-center text-orange large bold">{editingdata.corpbenefitspara}</p></Col>
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

    {/* School Forests */}

    <Container id="school" className="py-6">
      <Row className="text-center justify-content-center">
        <Col className="col-lg-6">
        <h2 className="text-white bold py-3">
          {editingdata.schooltitle}</h2>
        </Col>
      </Row>
      <Row className=" text-center  justify-content-center">
        <Col className="col-lg-7">
        <Row className=" horizTab  justify-content-center">
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolabout}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolgrow}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schooltesti}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolbenefits}</Button>
          </Col>
        </Row>
        </Col>
      </Row>
      <Row className="text-center justify-content-center">
        <Col className="col-lg-7 py-5">
        <p className="lead text-white bold">
          {editingdata.schoolpara}
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
              <h4 className="thin text-green">{editingdata.corpcard1title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard1para}</p>
              <Button variant="text text-left">{editingdata.corpcard1button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard2title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard2para}</p>
              <Button variant="text text-left">{editingdata.corpcard2button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard3title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard3para}</p>
              <Button variant="text text-left">{editingdata.corpcard3button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard4title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard4para}</p>
              <Button variant="text text-left">{editingdata.corpcard4button}</Button>
            </div>
            </Col>
          </SwiperSlide>

        </Row>
      </Swiper>



      <Row>
        <Col className="text-center py-5">

        <Link href="/contact">
        <Button variant="green">{editingdata.buildbutton}</Button>
        </Link></Col>
      </Row>

    </Container>
    <Container className="py-6">
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
    </Container>
    <Container fluid className="py-6">
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

    </Container>
    <Container fluid className="py-6">
    <Row>
        <Col className="text-center py-3">
        <span className="smallCaps small text-white letterspace">{editingdata.schoolbenefits}</span>
        </Col>
      </Row>
    <Row className="justify-content-center">
        <Col className=" col-6">
        <p className="text-center text-orange large bold">{editingdata.schoolbenefitspara}</p></Col>
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
          <Button variant="green">{editingdata.schoolbuildbutton}</Button>
          </Link>
        </Col>
      </Row>
    </Container>

{/* Legacy Forests */}

<Container id="legacy" className="py-6">
      <Row className="text-center justify-content-center">
        <Col className="col-lg-6">
        <h2 className="text-white bold py-3">
          {editingdata.legacytitle}</h2>
        </Col>
      </Row>
      <Row className=" text-center  justify-content-center">
        <Col className="col-lg-7">
        <Row className=" horizTab  justify-content-center">
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolabout}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolgrow}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schooltesti}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolbenefits}</Button>
          </Col>
        </Row>
        </Col>
      </Row>
      <Row className="text-center justify-content-center">
        <Col className="col-lg-7 py-5">
        <p className="lead text-white bold">
          {editingdata.schoolpara}
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
              <h4 className="thin text-green">{editingdata.corpcard1title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard1para}</p>
              <Button variant="text text-left">{editingdata.corpcard1button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard2title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard2para}</p>
              <Button variant="text text-left">{editingdata.corpcard2button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard3title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard3para}</p>
              <Button variant="text text-left">{editingdata.corpcard3button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard4title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard4para}</p>
              <Button variant="text text-left">{editingdata.corpcard4button}</Button>
            </div>
            </Col>
          </SwiperSlide>

        </Row>
      </Swiper>



      <Row>
        <Col className="text-center py-5">
          <Link href="/contact">
        <Button variant="green">{editingdata.buildbutton}</Button>
        </Link></Col>
      </Row>

    </Container>
    <Container className="py-6">
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
        <Link href="carbon-calculator">
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
    </Container>
    <Container fluid className="py-6">
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

    </Container>
    <Container fluid className="py-6">
    <Row>
        <Col className="text-center py-3">
        <span className="smallCaps small text-white letterspace">{editingdata.schoolbenefits}</span>
        </Col>
      </Row>
    <Row className="justify-content-center">
        <Col className=" col-6">
        <p className="text-center text-orange large bold">{editingdata.schoolbenefitspara}</p></Col>
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
          <Button variant="green">{editingdata.schoolbuildbutton}</Button>
          </Link>
        </Col>
      </Row>
    </Container>

    {/* Communal Forests */}

<Container id="communal" className="py-6">
      <Row className="text-center justify-content-center">
        <Col className="col-lg-6">
        <h2 className="text-white bold py-3">
          {editingdata.communaltitle}</h2>
        </Col>
      </Row>
      <Row className=" text-center  justify-content-center">
        <Col className="col-lg-7">
        <Row className=" horizTab  justify-content-center">
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolabout}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolgrow}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schooltesti}</Button>
          </Col>
          <Col>
          <Button variant="text text-orange smallCaps letterspace">{editingdata.schoolbenefits}</Button>
          </Col>
        </Row>
        </Col>
      </Row>
      <Row className="text-center justify-content-center">
        <Col className="col-lg-7 py-5">
        <p className="lead text-white bold">
          {editingdata.communalpara}
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
              <h4 className="thin text-green">{editingdata.corpcard1title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard1para}</p>
              <Button variant="text text-left">{editingdata.corpcard1button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard2title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard2para}</p>
              <Button variant="text text-left">{editingdata.corpcard2button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard3title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard3para}</p>
              <Button variant="text text-left">{editingdata.corpcard3button}</Button>
            </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col className="h-100">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">{editingdata.corpcard4title}</h4>
              <p className="flex-fill pb-3">{editingdata.corpcard4para}</p>
              <Button variant="text text-left">{editingdata.corpcard4button}</Button>
            </div>
            </Col>
          </SwiperSlide>

        </Row>
      </Swiper>



      <Row>
        <Col className="text-center py-5">
          <Link href="/contact">
        <Button variant="green">{editingdata.buildbutton}</Button>
        </Link></Col>
      </Row>

    </Container>
    <Container className="py-6">
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
    </Container>
    <Container fluid className="py-6">
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

    </Container>
    <Container fluid className="py-6">
    <Row>
        <Col className="text-center py-3">
        <span className="smallCaps small text-white letterspace">{editingdata.schoolbenefits}</span>
        </Col>
      </Row>
    <Row className="justify-content-center">
        <Col className=" col-6">
        <p className="text-center text-orange large bold">{editingdata.schoolbenefitspara}</p></Col>
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
          <Button variant="green">{editingdata.schoolbuildbutton}</Button>
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