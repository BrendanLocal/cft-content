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
import Rellax from"rellax";
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

  return (

    <div>
      <Head>
        <title>Canada's Forest Trust</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218">
        </meta>
      </Head>

      <Row className="justify-content-left p-0 m-0 d-none d-lg-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white m-2 bold op-6">{editingdata.buildForest}</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">{editingdata.menu1}</a>
            </li>
            <li className="p-0" data-dest="#commitment" >              
              <a href="#commitment" className="text-white bold no-underline">{editingdata.menu2}</a>
            </li>
            <li className="p-0" data-dest="#forever">
              <a href="#forever" className="text-white bold no-underline">{editingdata.menu3}</a>
            </li>
            <li className="p-0" data-dest="#smart-forests">             
              <a href="#smart-forests" className="text-white bold no-underline">{editingdata.menu4}</a>
            </li>
            <li className="p-0" data-dest="#earth">             
              <a href="#earth" className="text-white bold no-underline">{editingdata.menu5}</a>
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
              <h1 className="text-orange mb-5 bold">{editingdata.part1_header1}</h1>
              <p className="large my-5 op-9">{editingdata.part1_para1}</p>
              <p className="text-white text-left smallcaps intro-links-header op-5 mt-4">{editingdata.part1_header2}</p>
              <a href="#commitment" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu1}</a>
              <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu2}</a>
              <a href="#smart-forests" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu3}</a>
              <a href="#earth" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu4}</a>
            </Col>
          </Row>
        </Container>
        <Container id="5-phase" className="v-full bg-green">
          <Row>
            <Col className="text-center">
              <h2 className="text-orange mb-5">{editingdata.part1_header4}</h2>
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
              <h2 className="text-center text-orange bold">{editingdata.part1_header4}</h2>
              <p className="text-center text-white medium thin mb-4">{editingdata.part1_para2}</p>
            </Col>
          </Row>
          <Row className="justify-content-center pb-5 align-items-stretch">
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
            <h4 className="text-white tight-drop-light">{editingdata.part1_box1header1}<span className="text-orange">™</span></h4>
            <p className="flex-fill pb-3 text-white tight-drop">{editingdata.part1_box1para1}</p>
          
            <a href="#corporate" className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnMore}</a>
            </div>
            </Col>
            <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
            <h4 className="text-white tight-drop-light">{editingdata.part1_box2header1}<span className="text-orange">™</span></h4>
            <p className="flex-fill pb-3 text-white tight-drop">{editingdata.part1_box2para1}</p>
            <a href="#school" className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnMore}</a>
            </div>
            </Col>
            <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
            <h4 className="text-white tight-drop-light">{editingdata.part1_box3header1}<span className="text-orange">™</span></h4>
            <p className="flex-fill pb-3 text-white tight-drop">{editingdata.part1_box3para1}</p>
            <a href="#legacy" className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnMore}</a>
            </div>
            </Col>
            <Col className="col-12 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
            <h4 className="text-white tight-drop-light">{editingdata.part1_box4header1}<span className="text-orange">™</span></h4>
            <p className="flex-fill pb-3 text-white tight-drop">{editingdata.part1_box4para1}</p>
            <a href="#communal" className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnMore}</a> </div>
            </Col>
          </Row>
        </Container>

        {/* Coporate Forests */}

        <Container id="corporate" className="py-6">
          <Row className="text-center justify-content-center">
            <Col className="col-lg-6">
              <h2 className="text-white bold py-3">{editingdata.part2_header1}</h2>
            </Col>
          </Row>
          <Row className=" text-center  justify-content-center">
            <Col className="col-lg-7">
              <Row className=" horizTab  justify-content-center">
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part2_menu1}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part2_menu2}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part2_menu3}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part2_menu4}</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            <Col className="col-lg-7 py-5">
              <p className="lead text-white bold">{editingdata.part2_para1}</p>
            </Col>
          </Row>

          <Swiper spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }} 
          onSlideChange={()=> console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}
          >
            <Row className="py-5 align-items-stretch px-5">
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part2_box1header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part2_box1para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part2_box2header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part2_box2para1}</p>
                    <Button variant="text text-left">{editingdata.learnMore}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part2_box3header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part2_box3para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part2_box4header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part2_box4para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
            </Row>
          </Swiper>  
          <Row>
            <Col className="text-center py-5">
            <Button variant="green">{editingdata.part2_button1}</Button></Col>
          </Row>
        </Container>

        <Container className="py-6">
          <Row className="justify-content-center">
            <Col className="col-lg-4">
              <h3 className="text-center text-orange bold">{editingdata.part2_header2}</h3>
              <p className="text-center text-white medium">{editingdata.part2_para2}</p>
            </Col>
          </Row>
          <Row className="justify-content-center py-4">
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step1}</span>
              <h4 className="thin py-3">{editingdata.part2_step1header1}</h4>
              <p>{editingdata.part2_step1para1}</p>
              <Link href="/smart-forest-calculator">
                <Button variant="green">{editingdata.part2_step1button1}</Button>
              </Link>
            </Col>
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step2}</span>
              <h4 className="thin py-3">{editingdata.part2_step2header1}</h4>
              <p>{editingdata.part2_step2para1}</p>
              <Link href="/carbon-calculator">
                <Button variant="green">{editingdata.part2_step2button1}</Button>
              </Link>
            </Col>
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step3}</span>
              <h4 className="thin py-3">{editingdata.part2_step3header1}</h4>
              <p>{editingdata.part2_step3para1}</p>
              <Button variant="green">{editingdata.part2_step3button1}</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-6">
          <Row>
            <Col className="text-center py-5">
              <span className="smallCaps small text-white letterspace">{editingdata.testimonials}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-lg-8 bg-brown roundedBox p-5">
              <Slide easing="ease" {...slideProperties}>
                <Row className="justify-content-center each-slide px-5">
                  <Col className="p-5 text-white">
                    <p className="text-orange large">{editingdata.part2_quote1para1}</p>
                    <span className="authorLine">{editingdata.part2_quote1para2}</span>
                    <span className="authorTitle">{editingdata.part2_quote1para3}</span>
                  </Col>
                </Row>
                <Row className="justify-content-center each-slide px-5">
                  <Col className="p-5 text-white">
                    <p className="text-orange large">{editingdata.part2_quote2para1}</p>
                    <span className="authorLine">{editingdata.part2_quote2para2}</span>
                    <span className="authorTitle">{editingdata.part2_quote2para3}</span>
                  </Col>
                </Row>
              </Slide>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-6">
          <Row>
            <Col className="text-center py-3">
              <span className="smallCaps small text-white letterspace">{editingdata.benefits}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className=" col-6">
              <p className="text-center text-orange large bold">{editingdata.part2_para3}</p>
            </Col>
          </Row>
          <Row className="py-5 align-items-stretch justify-content-center">
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3  medium">{editingdata.part2_benefitsbox1}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3 medium">{editingdata.part2_benefitsbox2}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3 medium">{editingdata.part2_benefitsbox3}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3  medium">{editingdata.part2_benefitsbox4}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link href="/contact">
                <Button variant="green">{editingdata.part2_button2}</Button>
              </Link>
            </Col>
          </Row>
        </Container>

        {/* School Forests */}

        <Container id="school" className="py-6">
          <Row className="text-center justify-content-center">
            <Col className="col-lg-6">
              <h2 className="text-white bold py-3">{editingdata.part3_header1}</h2>
            </Col>
          </Row>
          <Row className=" text-center  justify-content-center">
            <Col className="col-lg-7">
              <Row className=" horizTab  justify-content-center">
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part3_menu1}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part3_menu2}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part3_menu3}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part3_menu4}</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            <Col className="col-lg-7 py-5">
              <p className="lead text-white bold">{editingdata.part3_para1}</p>
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
                  <h4 className="thin text-green">{editingdata.part3_box1header1}</h4>
                  <p className="flex-fill pb-3">{editingdata.part3_box1para1}</p>
                  <Button variant="text text-left">{editingdata.watchVideo}</Button>
                </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                  <h4 className="thin text-green">{editingdata.part3_box2header1}</h4>
                  <p className="flex-fill pb-3">{editingdata.part3_box2para1}</p>
                  <Button variant="text text-left">{editingdata.watchVideo}</Button>
                </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                  <h4 className="thin text-green">{editingdata.part3_box3header1}</h4>
                  <p className="flex-fill pb-3">{editingdata.part3_box3para1}</p>
                  <Button variant="text text-left">{editingdata.watchVideo}</Button>
                </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                  <h4 className="thin text-green">{editingdata.part3_box4header1}</h4>
                  <p className="flex-fill pb-3">{editingdata.part3_box4para1}</p>
                  <Button variant="text text-left">{editingdata.watchVideo}</Button>
                </div>
                </Col>
              </SwiperSlide>
            </Row>
          </Swiper>
          <Row>
            <Col className="text-center py-5">
              <Link href="/contact">
                <Button variant="green">{editingdata.part3_button1}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="py-6">
          <Row className="justify-content-center">
            <Col className="col-lg-4">
              <h3 className="text-center text-orange bold">{editingdata.part3_header2}</h3>
              <p className="text-center text-white medium">{editingdata.part3_para2}</p>
            </Col>
          </Row>
          <Row className="justify-content-center py-4">
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step1}</span>
              <h4 className="thin py-3">{editingdata.part3_step1header1}</h4>
              <p>{editingdata.part3_step1para1}</p>
              <Link href="/smart-forest-calculator">
                <Button variant="green">{editingdata.part3_step1button1}</Button>
              </Link>
            </Col>
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step2}</span>
              <h4 className="thin py-3">{editingdata.part3_step2header1}</h4>
              <p>{editingdata.part3_step2para1}</p>
              <Link href="/carbon-calculator">
                <Button variant="green">{editingdata.part3_step2button1}</Button>
              </Link>
            </Col>
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step3}</span>
              <h4 className="thin py-3">{editingdata.part3_step3header1}</h4>
              <p>{editingdata.part3_step3para1}</p>
              <Button variant="green">{editingdata.part3_step3button1}</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-6">
          <Row>
            <Col className="text-center py-5">
              <span className="smallCaps small text-white letterspace">{editingdata.testimonials}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-lg-8 bg-brown roundedBox p-5">
              <Slide easing="ease" {...slideProperties}>
                <Row className="justify-content-center each-slide px-5">
                  <Col className="p-5 text-white">
                    <p className="text-orange large">{editingdata.part3_quote1para1}</p>
                    <span className="authorLine">{editingdata.part3_quote1para2}</span>
                    <span className="authorTitle">{editingdata.part3_quote1para3}</span>
                  </Col>
                </Row>
                <Row className="justify-content-center each-slide px-5">
                  <Col className="p-5 text-white">
                    <p className="text-orange large">{editingdata.part3_quote2para1}</p>
                    <span className="authorLine">{editingdata.part3_quote2para2}</span>
                    <span className="authorTitle">{editingdata.part3_quote2para3}</span>
                  </Col>
                </Row>
              </Slide>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-6">
          <Row>
            <Col className="text-center py-3">
              <span className="smallCaps small text-white letterspace">{editingdata.benefits}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className=" col-6">
              <p className="text-center text-orange large bold">{editingdata.part3_para3}</p>
            </Col>
          </Row>
          <Row className="py-5 align-items-stretch justify-content-center">
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3  medium">{editingdata.part3_benefitsbox1}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3 medium">{editingdata.part3_benefitsbox2}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3 medium">{editingdata.part3_benefitsbox3}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3  medium">{editingdata.part3_benefitsbox4}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link href="/contact">
                <Button variant="green">{editingdata.part3_button1}</Button>
              </Link>
            </Col>
          </Row>
        </Container>

    {/* Legacy Forests */}

        <Container id="legacy" className="py-6">
          <Row className="text-center justify-content-center">
            <Col className="col-lg-6">
              <h2 className="text-white bold py-3">{editingdata.part4_header1}</h2>
            </Col>
          </Row>
          <Row className=" text-center  justify-content-center">
            <Col className="col-lg-7">
              <Row className=" horizTab  justify-content-center"> 
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part4_menu1}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part4_menu2}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part4_menu3}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part4_menu4}</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            <Col className="col-lg-7 py-5">
            <p className="lead text-white bold">
              {editingdata.part4_para1}
            </p>
            </Col>
          </Row>
          <Swiper spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }} 
          onSlideChange={()=> console.log('slide change')}onSwiper={(swiper) => console.log(swiper)}
            >
            <Row className="py-5 align-items-stretch px-5">
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part4_box1header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part4_box1para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part4_box2header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part4_box2para1}</p>
                    <Button variant="text text-left">{editingdata.learnMore}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part4_box3header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part4_box3para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part4_box4header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part4_box4para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
            </Row>
          </Swiper>
          <Row>
            <Col className="text-center py-5">
              <Link href="/contact">
                <Button variant="green">{editingdata.part4_button1}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="py-6">
          <Row className="justify-content-center">
            <Col className="col-lg-4">
              <h3 className="text-center text-orange bold">{editingdata.part4_header2}</h3>
              <p className="text-center text-white medium">{editingdata.part4_para2}</p>
            </Col>
          </Row>
          <Row className="justify-content-center py-4">
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step1}</span>
              <h4 className="thin py-3">{editingdata.part4_step1header2}</h4>
              <p>{editingdata.part4_step1para1}</p>
              <Link href="/smart-forest-calculator">
                <Button variant="green">{editingdata.part4_step1button1}</Button>
              </Link>
            </Col>
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step2}</span>
              <h4 className="thin py-3">{editingdata.part4_step2header2}</h4>
              <p>{editingdata.part4_step2para1}</p>
              <Link href="carbon-calculator">
                <Button variant="green">{editingdata.part4_step2button1}</Button>
              </Link>
            </Col>
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step3}</span>
              <h4 className="thin py-3">{editingdata.part4_step3header2}</h4>
              <p>{editingdata.part4_step3para1}</p>
              <Button variant="green">{editingdata.part4_step3button1}</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-6">
          <Row>
            <Col className="text-center py-5">
              <span className="smallCaps small text-white letterspace">{editingdata.testimonials}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-lg-8 bg-brown roundedBox p-5">
              <Slide easing="ease" {...slideProperties}>
                <Row className="justify-content-center each-slide px-5">
                  <Col className="p-5 text-white">
                    <p className="text-orange large">{editingdata.part4_quote1para1}</p>
                    <span className="authorLine">{editingdata.part4_quote1para2}</span>
                    <span className="authorTitle">{editingdata.part4_quote1para3}</span>
                  </Col>        
                </Row>
                <Row className="justify-content-center each-slide px-5">
                  <Col className="p-5 text-white">
                    <p className="text-orange large">{editingdata.part4_quote2para1}</p>
                    <span className="authorLine">{editingdata.part4_quote2para2}</span>
                    <span className="authorTitle">{editingdata.part4_quote2para3}</span>
                  </Col>
                </Row>
              </Slide>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-6">
          <Row>
            <Col className="text-center py-3">
              <span className="smallCaps small text-white letterspace">{editingdata.benefits}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className=" col-6">
              <p className="text-center text-orange large bold">{editingdata.part4_para3}</p>
            </Col>
          </Row>
          <Row className="py-5 align-items-stretch justify-content-center">
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3  medium">{editingdata.part4_benefitsbox1}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3 medium">{editingdata.part4_benefitsbox2}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3 medium">{editingdata.part4_benefitsbox3}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3  medium">{editingdata.part4_benefitsbox4}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link href="/contact">
              <Button variant="green">{editingdata.part4_button2}</Button>
              </Link>
            </Col>
          </Row>
        </Container>

        {/* Communal Forests */}

        <Container id="communal" className="py-6">
          <Row className="text-center justify-content-center">
            <Col className="col-lg-6">
              <h2 className="text-white bold py-3">{editingdata.part5_header1}</h2>
            </Col>
          </Row>
          <Row className=" text-center  justify-content-center">
            <Col className="col-lg-7">
              <Row className=" horizTab  justify-content-center">
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part5_menu1}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part5_menu2}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part5_menu3}</Button>
                </Col>
                <Col>
                  <Button variant="text text-orange smallCaps letterspace">{editingdata.part5_menu4}</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            <Col className="col-lg-7 py-5">
              <p className="lead text-white bold">{editingdata.part5_para1}</p>
            </Col>
          </Row>
          <Swiper spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }} 
            onSlideChange={()=> console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}
            >
            <Row className="py-5 align-items-stretch px-5">
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part5_box1header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part5_box1para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part5_box2header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part5_box2para1}</p>
                    <Button variant="text text-left">{editingdata.learnMore}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part5_box3header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part5_box3para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
              <SwiperSlide>
                <Col className="h-100">
                  <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                    <h4 className="thin text-green">{editingdata.part5_box4header1}</h4>
                    <p className="flex-fill pb-3">{editingdata.part5_box4para1}</p>
                    <Button variant="text text-left">{editingdata.watchVideo}</Button>
                  </div>
                </Col>
              </SwiperSlide>
            </Row>
          </Swiper>
          <Row>
            <Col className="text-center py-5">
              <Link href="/contact">
                <Button variant="green">{editingdata.part5_button1}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="py-6">
          <Row className="justify-content-center">
            <Col className="col-lg-4">
              <h3 className="text-center text-orange bold">{editingdata.part17_header1}</h3>
              <p className="text-center text-white medium">{editingdata.part17_para1}</p>
            </Col>
          </Row>
          <Row className="justify-content-center py-4">
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step1}</span>
              <h4 className="thin py-3">{editingdata.part5_step1header2}</h4>
              <p>{editingdata.part5_step1para1}</p>
              <Link href="/smart-forest-calculator">
                <Button variant="green">{editingdata.part5_step1button1}</Button>
              </Link>
            </Col>
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step2}</span>
              <h4 className="thin py-3">{editingdata.part5_step2header2}</h4>
              <p>{editingdata.part5_step2para1}</p>
              <Link href="/carbon-calculator">
                <Button variant="green">{editingdata.part5_step2button1}</Button>
              </Link>
            </Col>
            <Col className="outlineBox text-white p-4 col-lg-3">
              <span className="smallCaps small text-orange letterspace">{editingdata.step3}</span>
              <h4 className="thin py-3">{editingdata.part5_step3header2}</h4>
              <p>{editingdata.part5_step3para1}</p>
              <Button variant="green">{editingdata.part5_step3button1}</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-6">
          <Row>
            <Col className="text-center py-5">
              <span className="smallCaps small text-white letterspace">{editingdata.testimonials}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-lg-8 bg-brown roundedBox p-5">
              <Slide easing="ease" {...slideProperties}>
                <Row className="justify-content-center each-slide px-5">
                  <Col className="p-5 text-white">
                    <p className="text-orange large">{editingdata.part5_quote1para1}</p>
                    <span className="authorLine">{editingdata.part5_quote1para2}</span>
                    <span className="authorTitle">{editingdata.part5_quote1para3}</span>
                  </Col>
                </Row>
                <Row className="justify-content-center each-slide px-5">
                  <Col className="p-5 text-white">
                    <p className="text-orange large">{editingdata.part5_quote2para1}</p>
                    <span className="authorLine">{editingdata.part5_quote2para2}</span>
                    <span className="authorTitle">{editingdata.part5_quote2para3}</span>
                  </Col>
                </Row>
              </Slide>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-6">
          <Row>
            <Col className="text-center py-3">
              <span className="smallCaps small text-white letterspace">{editingdata.benefits}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className=" col-6">
              <p className="text-center text-orange large bold">{editingdata.part5_benefitspara1}</p>
            </Col>
          </Row>
          <Row className="py-5 align-items-stretch justify-content-center">
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3  medium">{editingdata.part5_benefitsbox1}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3 medium">{editingdata.part5_benefitsbox2}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3 medium">{editingdata.part5_benefitsbox3}</p>
              </div>
            </Col>
            <Col className="col-2">
              <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
                <p className="flex-fill pb-3  medium">{editingdata.part5_benefitsbox4}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link href="/contact">
              <Button variant="green">{editingdata.part5_button2}</Button>
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
  preview, previewData, 
}) {

  if (preview) {
    return getGithubPreviewProps({
      ...previewData, fileRelativePath: 'content/build.json', parse: parseJson,
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