import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import Header from "../components/header";
import PDFViewer from '../components/PDFViewer';
import PDFJSBackend from '../middlewares/pdfjs';
import ReactPlayer from 'react-player';
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'

export default function Power({ file }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formOptions = {
    label: "Inside CFT",
    fields: [
      {name: 'pageName', component: 'markdown' },
      {name: 'pageURL', component: 'markdown' },
      {name: 'title', component: 'markdown' },
      {name: 'home', component: 'markdown' },
      {name: 'menu1', component: 'markdown' },
      {name: 'menu2', component: 'markdown' },
      {name: 'menu3', component: 'markdown' },
      {name: 'header1', component: 'markdown' },
      {name: 'para1', component: 'markdown' },
      {name: 'para2', component: 'markdown' },
      {name: 'para3', component: 'markdown' },
      {name: 'para4', component: 'markdown' },
      {name: 'header2', component: 'markdown' },
      {name: 'link1', component: 'markdown' },
      {name: 'link2', component: 'markdown' },
      {name: 'part1_header1', component: 'markdown' },
      {name: 'part1_header2', component: 'markdown' },
      {name: 'part1_para1', component: 'markdown' },
      {name: 'part1_para2', component: 'markdown' },
      {name: 'part1_para3', component: 'markdown' },
      {name: 'part1_para4', component: 'markdown' },
      {name: 'part1_para5', component: 'markdown' },
      {name: 'part2_header1', component: 'markdown' },
      {name: 'part2_para1', component: 'markdown' },
      {name: 'part2_header2', component: 'markdown' },
      {name: 'part2_button', component: 'markdown' },
      {name: 'Option1', component: 'markdown' },
      {name: 'Option2', component: 'markdown' },
      {name: 'Option3', component: 'markdown' },
      {name: 'person1', component: 'markdown' },
      {name: 'person2', component: 'markdown' },
      {name: 'person3', component: 'markdown' },
      {name: 'person4', component: 'markdown' },
      {name: 'person5', component: 'markdown' },
      {name: 'person6', component: 'markdown' },
      {name: 'person7', component: 'markdown' },
      {name: 'person8', component: 'markdown' },
      {name: 'person9', component: 'markdown' },
      {name: 'person10', component: 'markdown' },
      {name: 'person11', component: 'markdown' },
      {name: 'person12', component: 'markdown' },
      {name: 'person13', component: 'markdown' },
      {name: 'person13_title', component: 'markdown' },
      {name: 'person13_para1', component: 'markdown' },
      {name: 'person13_para2', component: 'markdown' }],
  };

  const [editingdata, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();

  const slideProperties = {
    indicators: (i) => <span className="sliderDot" />,
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0.0) {
          if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)) {
            document.querySelector(`.left-sidenav li[data-dest="#${id}"]`).classList.add("active");
          }
        } else {
          if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)) {
            document.querySelector(`.left-sidenav li[data-dest="#${id}"]`).classList.remove("active");
          }
        }
      });
    });

    // Track all div containers that have an `id` applied
    document.querySelectorAll("div.page-section").forEach((id) => {
      observer.observe(id);
    });

    const hash = window.location.hash;
    if (hash) {
      const container = document.getElementById(hash.substring(1));
      if (container) {
        container.scrollIntoView();
      }
    }
  }, []);

  return (
    <div>
      <Header/>
      <Head>
        <title>Canada's Forest Trust</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <Row className="justify-content-left p-0 m-0 d-none d-lg-block d-xl-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white m-2 bold op-6 mt-4 d-none">{editingdata.home}</p>
          <ul className="mt-4">
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">INTRO</a>
            </li>
            <li className="p-0" data-dest="#video">
              <a href="#video" className="text-white bold no-underline">VIDEO</a>
            </li>
            <li className="p-0" data-dest="#the-plan">
              <a href="#the-plan" className="text-white bold no-underline">5 PHASES</a>
            </li>
            <li className="p-0" data-dest="#what">
              <a href="#what" className="text-white bold no-underline">SMART FOREST?</a>
            </li>
            <li className="p-0" data-dest="#team">
              <a href="#team" className="text-white bold no-underline">OUR TEAM</a>
            </li>
            <li className="p-0" data-dest="#qna">
              <a href="#qna" className="text-white bold no-underline">Q & A</a>
            </li>
          </ul>
        </Col>
      </Row>

      <main>
        <Container id="intro" className="bg-green z-999 py-5 px-5 page-section">
          <Row className="justify-content-center d-flex mt-xl-0 mt-lg-4 mb-5 ms-xl-5 ms-lg-2 py-5 px-3">
            <Col className="col-12 col-md-11 col-lg-5 stickyTop roundedBox innerShadow-heavy mt-5 m-3 p-0 about-hero"></Col>
            <Col className="col-12 col-lg-5 text-white p-0 p-md-4 pb-0 intro-order ">
              <h1 className="text-orange hero-alt bold mb-5 mt-2">{editingdata.header1}</h1>
              <p className="large mb-3">{editingdata.para1}</p>
              <ul className="intro-list text-white">
                <li className="large mb-3">{editingdata.para2}</li>
                <li className="large mb-3">{editingdata.para3}</li>
                <li className="large mb-3">{editingdata.para4}</li>
                <li className="large mb-3">{editingdata.para5}</li>
                <li className="large mb-3">{editingdata.para6}</li>
              </ul>
              <p className="text-white text-left smallcaps intro-links-header op-5 mt-5 mb-3">{editingdata.header2}</p>
              <a href="#video" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">{editingdata.link1}</a>
              <br/>
              <a href="#the-plan" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">{editingdata.link2}</a>
              <br/>
              <a href="#what" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">{editingdata.link3}</a>
              <br/>
              <a href="#team" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">{editingdata.link4}</a>
              <br/>
              <a href="#qna" className="btn btn-text text-left intro-links text-orange bold no-underline me-5">{editingdata.link5}</a>
            </Col>
          </Row>
        </Container>

        <Container id="video" className="v-full z-999 bg-green py-5 page-section">
          <Fade bottom>
            <Row className="justify-content-center align-items-center my-4">
              <Col className="col-12 col-md-11 col-lg-10 col-xl-8 text-center text-white">
                <h2 className="text-orange bold px-md-3 px-lg-0">
                  <ReactMarkdown>
                    {editingdata.header3}
                  </ReactMarkdown>
                </h2>
              </Col>
            </Row>
          </Fade>
          <Fade bottom> 
          <Row className="justify-content-center align-items-center pb-5 mb-5">
              <Col className="col-11 col-lg-7 col-xl-6 d-flex">      
                <ReactPlayer playsinline controls url='./CFT_Rev8_DDC_ForApproval.mp4' className="video-size"/> 
              </Col>
              <Col className="col-10 col-lg-3 col-xl-3 d-flex">
                
              <ReactMarkdown className="text-white d-none d-lg-block d-xl-none">
              {editingdata.header3para}
              </ReactMarkdown>
                <ReactMarkdown className="text-white d-none d-xl-block d-xxl-none medium">
                {editingdata.header3para}
                </ReactMarkdown>
                <ReactMarkdown className="text-white d-none d-xxl-block spec-lg">
                {editingdata.header3para}
                </ReactMarkdown>
                <ReactMarkdown className="text-white text-center mt-3 large d-lg-none">
                {editingdata.header3para}
                </ReactMarkdown>
              </Col>
            </Row>
          </Fade> 
        </Container>

        <Container id="the-plan" className="v-full z-999 bg-green p-5 mb-5 page-section">
          <Fade bottom>
            <Row className="justify-content-center align-items-center my-4">
              <Col className="col-12 col-md-11 col-lg-10 col-xl-9 text-center text-white">
                <h2 className="text-orange bold mb-2 px-md-3 px-lg-0">
                  <ReactMarkdown>
                    {editingdata.header4}
                  </ReactMarkdown>
                </h2>
                <ReactMarkdown className="medium mt-0 mb-0 px-lg-4 mb-2">
                  {editingdata.header4para}
                </ReactMarkdown>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center align-items-center px-3 px-md-4 px-lg-3">
              <Carousel className="col-12 col-lg-10 d-flex bg-brown roundedBox px-0"
                activeIndex={index} onSelect={handleSelect} 
                nextIcon={ <span aria-hidden="false" className="carousel-control-next-icon"/>}
                nextLabel=""
                prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon"/>}
                prevLabel=""
              >
                <Carousel.Item interval={500000}>
                  <div className="d-block w-100 phases"></div>
                  <Carousel.Caption><p></p></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase1"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">
                      <ReactMarkdown>
                        {editingdata.phase1header}
                      </ReactMarkdown>
                    </h3>
                    <ReactMarkdown className="h3 text-left tight-drop mb-4">
                      {editingdata.phase1para}
                    </ReactMarkdown>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase2"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                  <h3 className="smallCaps text-left tight-drop bold mb-1">
                      <ReactMarkdown>
                        {editingdata.phase2header}
                      </ReactMarkdown>
                    </h3>
                    <ReactMarkdown className="h3 text-left tight-drop mb-4">
                      {editingdata.phase2para}
                    </ReactMarkdown>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase3"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                  <h3 className="smallCaps text-left tight-drop bold mb-1">
                      <ReactMarkdown>
                        {editingdata.phase3header}
                      </ReactMarkdown>
                    </h3>
                    <ReactMarkdown className="h3 text-left tight-drop mb-4">
                      {editingdata.phase3para}
                    </ReactMarkdown>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase4"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">
                      <ReactMarkdown>
                        {editingdata.phase4header}
                      </ReactMarkdown>
                    </h3>
                    <ReactMarkdown className="h3 text-left tight-drop mb-4">
                      {editingdata.phase4para}
                    </ReactMarkdown>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase5"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                  <h3 className="smallCaps text-left tight-drop bold mb-1">
                      <ReactMarkdown>
                        {editingdata.phase5header}
                      </ReactMarkdown>
                    </h3>
                    <ReactMarkdown className="h3 text-left tight-drop mb-4">
                      {editingdata.phase5para}
                    </ReactMarkdown>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Fade>
        </Container>

        <Container id="what" fluid className="v-full z-999 bg-green py-5 page-section">
          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center">
              <Col className="col-10 col-lg-8 col-xl-7 pt-3 px-lg-4 px-xl-0">
                <h2 className="text-center text-orange bold mb-2">
                  <ReactMarkdown>
                    {editingdata.header5}
                  </ReactMarkdown>
                </h2>
                <ReactMarkdown className="text-center text-white mb-3">
                  {editingdata.header5para}
                </ReactMarkdown>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-4 px-lg-5">
              <Col className="col-12 col-md-5 bg-brown roundedBox innerShadow px-5 pt-5 pb-4 m-4">          
                <h3 className="lead text-orange tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.subheader1}
                  </ReactMarkdown>
                </h3>
                <ul className="text-white checkMark ms-3">
                  <li className="mb-3">{editingdata.subheader1list1}</li>
                  <li className="mb-3">{editingdata.subheader1list2}</li>
                  <li className="mb-3">{editingdata.subheader1list3}</li>
                  <li className="mb-3">{editingdata.subheader1list4}</li>
                </ul>
              </Col>
              <Col className="col-12 col-md-5 roundedBox card card-drop px-5 pt-5 pb-4 m-4">
                <h3 className="lead text-orange mb-0">
                  <ReactMarkdown>
                    {editingdata.subheader2}
                  </ReactMarkdown>
                </h3>
                <ul className="text-grey plus ms-3">
                  <li className="mb-3"><ReactMarkdown className="mb-0">{editingdata.subheader2list1}</ReactMarkdown></li>
                  <li className="mb-3">{editingdata.subheader2list2}</li>
                  <li className="mb-3">{editingdata.subheader2list3}</li>
                  <li className="mb-3">{editingdata.subheader2list4}</li>
                  <li className="mb-3">{editingdata.subheader2list5}</li>
                  <li className="mb-3">{editingdata.subheader2list6}</li>
                  <li className="mb-3">{editingdata.subheader2list7}</li>
                </ul>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container fluid id="team" className="bg-brown innerShadow-heavy py-6 page-section">
          <Row className="justify-content-center pt-5 mb-2">
            <Col className="col-11 col-lg-8 text-center pt-3 ">
              <h2 className="text-orange bold tight-drop-light">
                <ReactMarkdown>
                    {editingdata.header6}
                </ReactMarkdown>
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center pb-5">
            <Col className="col-11 col-lg-7">
              <Tabs>
                <TabList className="horizTab px-3">
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline mx-3 my-2 text-drop-tight">
                    {editingdata.tab1}
                  </Tab>
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline mx-3 my-2 text-drop-tight">
                    {editingdata.tab2}
                  </Tab>
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline mx-3 my-2 text-drop-tight">
                    {editingdata.tab3}
                  </Tab>
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline mx-3 my-2 text-drop-tight">
                    {editingdata.tab4}
                  </Tab>
                </TabList>
                <TabPanel>
                  {/* First panel starts here */}
                  <Row className="justify-content-center align-items-center">
                    <Col className="col-12 pt-5">
                      <h2 className="text-center bold text-white mb-1">
                      <ReactMarkdown>  
                        {editingdata.founderName}
                      </ReactMarkdown>
                      </h2>
                      <ReactMarkdown className="text-center text-white mb-4">
                        {editingdata.founderTitle}
                      </ReactMarkdown>
                    </Col>
                  </Row>
                  <Row className="justify-content-center align-items-center">
                  <Col className="col-11 col-md-6 col-lg-7 col-xl-5">
                    <img className="card-drop-heavy roundedBox" src="../../Gary-Zed_Headshot.jpg"/>
                    </Col>
                  </Row>
                  <Row className="justify-content-center align-items-stretch">
                  <Col className="mt-4">
                    <div className="text-orange smallCaps text-center bold intro-cta no-drop">
                      <a className="crsr-pntr text-drop-tight" onClick={handleShow}>{editingdata.founderCTA}</a>
                    </div>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row>
                    {/* Second panel starts here */}
                    <Col className="col-12 p-5">
                    <h2 className="text-center bold text-white mb-1">
                      <ReactMarkdown>
                        {editingdata.teamName1}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4 ">
                      {editingdata.teamTitle1}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.teamName2}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.teamTitle2}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.teamName3}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.teamTitle3}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.teamName4}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.teamTitle4}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.teamName5}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.teamTitle5}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.teamName6}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.teamTitle6}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.teamName7}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.teamTitle7}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.teamName8}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.teamTitle8}
                    </ReactMarkdown>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  {/* Third panel starts here */}
                  <Row>
                    <Col className="col-12 p-5">
                    <h2 className="text-center bold text-white">
                      <ReactMarkdown>
                        {editingdata.advisorName1}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.advisorTitle1}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.advisorName2}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.advisorTitle2}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.advisorName3}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.advisorTitle3}
                    </ReactMarkdown>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                        {editingdata.advisorName4}
                      </ReactMarkdown>
                    </h2>
                    <ReactMarkdown className="text-center text-white mb-4">
                      {editingdata.advisorTitle4}
                    </ReactMarkdown>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  {/* Fourth panel starts here */}
                  <Row>
                    <Col className="col-12 p-5">
                    <h2 className="text-center bold text-white ">
                      <ReactMarkdown>
                        {editingdata.growing1}
                      </ReactMarkdown>
                    </h2>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                      {editingdata.growing2}
                      </ReactMarkdown>
                    </h2>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                      {editingdata.growing3}
                      </ReactMarkdown>
                    </h2>
                    <h2 className="text-center bold text-white mb-0 mt-5">
                      <ReactMarkdown>
                      {editingdata.growing4}
                      </ReactMarkdown>
                    </h2>
                    </Col>
                  </Row>
                </TabPanel>
              </Tabs>
            </Col>
          </Row>
        </Container>

        <Container id="qna" fluid className="v-full z-999 bg-green py-5 page-section">
          <Fade bottom>
            <Row className="align-items-center justify-content-center pt-5 mb-4 ">
              <Col className="col-10 col-lg-8 col-xl-7 pt-3">
                <h2 className="text-center text-orange bold mb-2">
                  <ReactMarkdown>
                    {editingdata.header7}
                  </ReactMarkdown>
                </h2>
                <ReactMarkdown className="text-center text-white">
                  {editingdata.header7para}
                </ReactMarkdown>
              </Col>
            </Row>
          </Fade>
          
          {/* BEGINNING OF Q&A */}
          <Row className="justify-content-center">
            <Col className="col-10 col-lg-8 roundedBox innerShadow bg-brown p-4 p-md-5"> 
              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q1}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown className="text-white medium mb-3 bold ms-lg-4 ms-xl-0">
                  {editingdata.a1}
                  </ReactMarkdown>

                  <ul className="checkMark text-white ms-5 ms-xl-3 pe-3">
                    <li className="py-2">{editingdata.a1list1}</li>
                    <li className="py-2">{editingdata.a1list2}</li>
                    <li className="py-2">{editingdata.a1list3}</li>
                    <li className="py-2">{editingdata.a1list4}</li>           
                    <li className="py-2">{editingdata.a1list5}</li>
                    <li className="py-2">{editingdata.a1list6}</li>
                    <li className="py-2">{editingdata.a1list7}</li>
                  </ul>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q2}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 bold ms-lg-4 ms-xl-0">
                  {editingdata.a2}
                  </ReactMarkdown>
                  <ul className="checkMark text-white ms-5  ms-xl-3 pe-3">
                    <li className="py-2">{editingdata.a2list1}</li>
                    <li className="py-2">{editingdata.a2list2}</li>
                    <li className="py-2">{editingdata.a2list3}</li>
                  </ul>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q3}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  {editingdata.a3a}
                  </ReactMarkdown>
                  <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  {editingdata.a3b}
                  </ReactMarkdown>
                  <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  {editingdata.a3c}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q4}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown className="text-white medium mb-3 bold ms-lg-4 ms-xl-0">
                  {editingdata.a4}
                  </ReactMarkdown>
                  <ul className="text-white ms-lg-4 ms-xl-0 pe-3">
                    <li className="py-2">1. <span className="bold">{editingdata.a4list1title}</span><br/> {editingdata.a4list1para}</li>
                    <li className="py-2">2. <span className="bold">{editingdata.a4list2title}</span><br/> {editingdata.a4list2para}</li>
                    <li className="py-2">3. <span className="bold">{editingdata.a4list3title}</span><br/> {editingdata.a4list3para}</li>
                    <li className="py-2">4. <span className="bold">{editingdata.a4list4title}</span><br/> {editingdata.a4list4para}</li>
                    <li className="py-2">5. <span className="bold">{editingdata.a4list5title}</span><br/> {editingdata.a4list5para}</li>
                  </ul>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q5}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  {editingdata.a5a}
                  </ReactMarkdown>
                  <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  {editingdata.a5b}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q6}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a6}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row className="mb-lg-4" >
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q7}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a7}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q8}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a8}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q9}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a9}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q10}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a10}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q11}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  {editingdata.a11}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q12}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a12a}
                  </ReactMarkdown>
                  <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a12b}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q13}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a13}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q14}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a14}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q15}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a15a}
                  </ReactMarkdown>
                  <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a15b}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q16}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  {editingdata.a16}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q17}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a17}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q18}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a18}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q19}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a19}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q20}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                <ReactMarkdown className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a20}
                  </ReactMarkdown>
                </Col>
              </Row>
              <hr className="white mb-5 mt-4"/>
              <Row>
                <Col className="col-12 col-lg-4">
                <h3 className="text-orange bold tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.q21}
                  </ReactMarkdown>
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                    {editingdata.a21}
                  </ReactMarkdown>
                </Col>
              </Row>              
            </Col>
          </Row>
          {/* END OF Q&A */}
        </Container>
        <Modal show={show} className="d-flex align-items-center" onHide={handleClose}>
          <Modal.Header className="d-none" closeButton>
            <Modal.Title className="d-none"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-center align-items-center mb-0">
              <Col>
                <h3 className="text-green smallCaps text-center">A MESSAGE FROM OUR FOUNDER</h3>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <Col className="col-12 d-flex">
                <ReactPlayer playing playsinline controls url='./ceo-message.mp4' className="video-size"/>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="p-0">
            <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleClose}>CLOSE</Button>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  );
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/inside.json",
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/inside.json",
        data: (await import("../content/inside.json")).default,
      },
    },
  };
};
