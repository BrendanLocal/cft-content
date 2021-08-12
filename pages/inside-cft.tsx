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
              <a href="#video" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">Watch our video</a>
              <br/>
              <a href="#the-plan" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">5 Phase Approach</a>
              <br/>
              <a href="#what" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">What is a Smart Forest?</a>
              <br/>
              <a href="#team" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">Meet our team</a>
              <br/>
              <a href="#qna" className="btn btn-text text-left intro-links text-orange bold no-underline me-5">Q & A</a>
            </Col>
          </Row>
        </Container>

        <Container id="video" className="v-full z-999 bg-green py-5 page-section">
          <Fade bottom>
              <Row className="justify-content-center align-items-center my-4">
                <Col className="col-12 col-md-11 col-lg-10 col-xl-8 text-center text-white">
                  <h2 className="text-orange bold px-md-3 px-lg-0">Watch our video</h2>
                </Col>
              </Row>
          </Fade>
          <Fade bottom> 
          <Row className="justify-content-center align-items-center pb-5 mb-5">
              <Col className="col-11 col-lg-7 col-xl-6 d-flex">      
                <ReactPlayer playsinline controls url='./CFT_Rev8_DDC_ForApproval.mp4' className="video-size"/> 
              </Col>
              <Col className="col-10 col-lg-3 col-xl-3 d-flex">
                
              <p className="text-white d-none d-lg-block d-xl-none">
                CFT was established <br/>by <span className="bold">Gary Zed</span>, an entrepreneur with a reputation for taking on tough challenges and getting things done. A leader with a national vision, Gary heads up a team that is committed to making CFT the most talked about climate success story in the decades ahead.
                </p>
                <p className="text-white d-none d-xl-block d-xxl-none medium">
                CFT was established by <span className="bold">Gary Zed</span>, an entrepreneur with a reputation for taking on tough challenges and getting things done. A leader with a national vision, Gary heads up a team that is committed to making CFT the most talked about climate success story in the decades ahead.
                </p>
                <p className="text-white d-none d-xxl-block spec-lg">
                CFT was established <br/>by <span className="bold">Gary Zed</span>, an entrepreneur with a reputation for taking on tough challenges and getting things done. A leader with a national vision, Gary heads up a team that is committed to making CFT the most talked about climate success story in the decades ahead.
                </p>
                <p className="text-white text-center mt-3 large d-lg-none">
                CFT was established by <span className="bold">Gary Zed</span>, an entrepreneur with a reputation for taking on tough challenges and getting things done. A leader with a national vision, Gary heads up a team that is committed to making CFT the most talked about climate success story in the decades ahead.
                </p>
              </Col>
            </Row>
          </Fade> 
        </Container>

        <Container id="the-plan" className="v-full z-999 bg-green p-5 mb-5 page-section">
          <Fade bottom>
            <Row className="justify-content-center align-items-center my-4">
              <Col className="col-12 col-md-11 col-lg-10 col-xl-9 text-center text-white">
                <h2 className="text-orange bold mb-2 px-md-3 px-lg-0">CFT’s Smart Forest Action Plan</h2>
                <p className="medium mt-0 mb-0 px-lg-4 mb-2">When you invest in a Smart Forest, we keep you informed on its progress - from site selection to planting to ongoing maintenance and carbon and biodiversity footprint impact as well as building meaningful relationships with our Indigenous peoples. CFT manages the forest landscape from the moment you buy your forest.</p>
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
                prevLabel="">
                <Carousel.Item interval={500000}>
                  <div className="d-block w-100 phases"></div>
                  <Carousel.Caption><p></p></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase1"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">PROCURE</h3>
                    <p className="h3 text-left tight-drop mb-4">Acquire land across Canada.</p>

                    
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase2"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">PREPARE</h3>
                    <p className="h3 text-left tight-drop mb-4">Assess, plan, and complete site preparation for planting.</p>

                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase3"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">PLANT</h3>
                    <p className="h3 text-left tight-drop mb-4">Strategically plant seedlings to ensure optimal growth and carbon sequestration.</p>

                  
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase4"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">PRESERVE</h3>
                    <p className="h3 text-left tight-drop mb-4">Perform innovative forest management activities to maintain the forest and maximize its impact</p>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase5"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">PROTECT</h3>
                    <p className="h3 text-left tight-drop mb-4">Audit, and set a no clear-cut guarantee on every forest.</p>
                    
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
                <h2 className="text-center text-orange bold mb-2">What is a Smart Forest?</h2>
                <p className="text-center text-white mb-3">A Smart Forest combines the resilience of a natural ecosystem, developed over millennia, with the predictive capabilities of today’s technologies and Canada’s First Peoples. Inside a Smart Forest, biodiversity thrives; outside of it, scientists, students, investors, and conservationists use digital instruments to understand and activate the forest’s role in cleaning our water, purifying our air, and restoring our country’s vast and vital ecosystems.</p>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-4 px-lg-5">
              <Col className="col-12 col-md-5 bg-brown roundedBox innerShadow px-5 pt-5 pb-4 m-4">          
                <h3 className="h2 text-orange">A forest</h3>
                <ul className="text-white checkMark ms-3">
                  <li className="mb-3">Mitigates climate change by sequestering carbon</li>
                  <li className="mb-3">Purifies the air and improves soil quality Regulates, filters, and moderates water flow</li>
                  <li className="mb-3">Supports wildlife and plant species that would otherwise disappear</li>
                  <li className="mb-3">Helps mitigate and prevent natural disasters</li>
                </ul>
              </Col>
              <Col className="col-12 col-md-5 roundedBox card card-drop px-5 pt-5 pb-4 m-4">
                <h3 className="h2 text-orange">A <span className="italic">Smart</span> Forest</h3>
                <ul className="text-grey plus ms-3">
                  <li className="mb-3">Is a forest and an investment in the health of our planet</li>
                  <li className="mb-3">Offers a tangible way to offset a large carbon footprints</li>
                  <li className="mb-3">Maximizes its impact through expert forest management and Indigenous oversight</li>
                  <li className="mb-3">Proves its effectiveness via proprietary digital tools</li>
                  <li className="mb-3">Boosts the green economy</li>
                  <li className="mb-3">Empowers the Indigenous economy</li>
                  <li className="mb-3">Is protected forever with a no clear-cut guarantee</li>
                </ul>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container fluid id="team" className="bg-brown innerShadow-heavy py-6 page-section">
          <Row className="justify-content-center pt-5 mb-2">
            <Col className="col-11 col-lg-8 text-center pt-3 ">
              <h2 className="text-orange bold">{editingdata.part2_header1}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center pb-5">
            <Col className="col-11 col-lg-7">
              <Tabs>
                <TabList className="horizTab px-3">
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline mx-3 my-2">
                    LEADERSHIP
                  </Tab>
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline mx-3 my-2">
                    TEAM
                  </Tab>
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline mx-3 my-2">
                    ADVISORS
                  </Tab>
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline mx-3 my-2">
                    GROWING WITH US
                  </Tab>
                </TabList>
                <TabPanel>
                  {/* First panel starts here */}
                  <Row className="justify-content-center align-items-center">
                    <Col className="col-12 pt-5">
                      <h2 className="text-center bold text-white mb-1">Gary Zed</h2>
                      <p className="text-center text-white mb-4">Founder & CEO</p>

                    </Col>
                  </Row>
                  <Row className="justify-content-center align-items-center">
                  <Col className="col-12 col-md-9">
                    <img className="card-drop-heavy" src="../../Gary-Zed_Headshot.jpg"/>
                    </Col>
                  </Row>
                  <Row className="justify-content-center align-items-stretch">
                  <Col className="mt-4">
                    <div className="text-orange large text-center text-orange bold intro-cta ">
                      <a className="crsr-pntr" onClick={handleShow}>A message from our founder</a>
                    </div>
                    </Col>
                  </Row>

                </TabPanel>
                <TabPanel>
                  <Row>
                    {/* Second panel starts here */}
                    <Col className="col-12 p-5">
                    <h2 className="text-center bold text-white mb-1">Don Finless</h2>
                    <p className="text-center text-white mb-4">Land Acquisition & Planning</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Zoebelle Flores</h2>
                    <p className="text-center text-white mb-4">Research & Analytics</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Neeraj Joshi</h2>
                    <p className="text-center text-white mb-4">Information Technology</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">John Jussup</h2>
                    <p className="text-center text-white mb-4">General Counsel</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Farah Mohamed</h2>
                    <p className="text-center text-white mb-4">Operations & Strategy</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Taylor Piotrowski</h2>
                    <p className="text-center text-white mb-4">Communications & Creative</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Nicholas Tanton</h2>
                    <p className="text-center text-white mb-4">Forester</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Laura Wukitsch</h2>
                    <p className="text-center text-white mb-4">Forester</p>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  {/* Third panel starts here */}
                  <Row>
                    <Col className="col-12 p-5">
                    <h2 className="text-center bold text-white mb-1">JP Gladu</h2>
                    <p className="text-center text-white mb-4">Indigenous People & Communities</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Tam Matthews</h2>
                    <p className="text-center text-white mb-4">School Leadership & Engagement</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Laura Zizzo</h2>
                    <p className="text-center text-white mb-4">Climate Strategy</p>
                    <h2 className="text-center bold text-white mb-1 mt-5">Jasen Golding</h2>
                    <p className="text-center text-white mb-4">Forestry and Environmental Management</p>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  {/* Fourth panel starts here */}
                  <Row>
                    <Col className="col-12 p-5">
                    <h2 className="text-center bold text-white mb-1">KPMG</h2>
                    <h2 className="text-center bold text-white mb-1 mt-5">PRT</h2>
                    <h2 className="text-center bold text-white mb-1 mt-5">MT Ventures</h2>
                    <h2 className="text-center bold text-white mb-1 mt-5">Ferguson Tree Nursery</h2>
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
                <h2 className="text-center text-orange bold mb-2">Questions & Answers</h2>
                <p className="text-center text-white">
              Canada’s Forest Trust will plant millions of acres of Smart Forests across Canada by 2040. We will build on deforested land located in ecologically diverse regions across the country, and will protect some of our nation’s most imperilled plants and animals.
              </p>
              </Col>
            </Row>
          </Fade>
          

          {/* BEGINNING OF Q&A */}
            <Row className="justify-content-center">
              <Col className="col-10 col-lg-8 roundedBox innerShadow bg-brown p-4 p-md-5"> 

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  What is a Smart Forest?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 bold ms-lg-4 ms-xl-0">
                  A Smart Forest is more than a collection of trees. It has a significant impact on climate change.
                  </p>

                  <ul className="checkMark text-white ms-5 ms-xl-3 pe-3">
                     <li className="py-2">Supports wildlife, improves air quality, and regulates water flow</li>
                     <li className="py-2">Offers a tangible way to offset a large carbon footprint</li>
                     <li className="py-2">Maximizes its impact through expert forest management</li>
                     <li className="py-2">Proves its effectiveness via proprietary digital tools</li>           
                     <li className="py-2">Boosts the green economy</li>
                     <li className="py-2">Promotes the health and wellbeing of all Canadians</li>
                     <li className="py-2">Is protected forever with a no-clear-cut harvest guarantee</li>
                   </ul>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  Who can build a Smart Forest?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 bold ms-lg-4 ms-xl-0">
                  Anyone can build a Smart Forest:
                  </p>

                  <ul className="checkMark text-white ms-5  ms-xl-3 pe-3">
                     <li className="py-2">Corporations looking to meet ESG goals</li>
                     <li className="py-2">Students who want to make a positive impact on their future</li>
                     <li className="py-2">Individuals and families with a goal of protecting the planet for future generations or building a memorial in someone’s honour</li>
                     
                   </ul>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold mb-3">
                  Why did we establish Canada’s Forest Trust?
                  </h3>
                
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  We saw a gap to do something truly impactful and sustainable in an area that needs resources, patience and bold action to combat climate change.
                  </p>

                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Under the right conditions, a forest will become a force of nature—quite literally. As the threat of climate change closes in, forests are one of our last and best chances to save our planet before it’s too late.
                  </p>

                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Our Smart Forests will capture millions of tonnes of CO2, rehabilitate ecosystems and create jobs, country-wide. And we will never clear-cut.
                  </p>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  How do you build a Smart Forest?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 bold ms-lg-4 ms-xl-0">
                  We build Smart Forests with our 5 Phase Action Plan:
                  </p>

                  <ul className="text-white ms-lg-4 ms-xl-0 pe-3">
                     <li className="py-2">1. <span className="bold">PROCURE</span><br/> Acquire land across Canada </li>
                     <li className="py-2">2. <span className="bold">PREPARE</span><br/> Assess, plan, and complete site preparation for planting</li>
                     <li className="py-2">3. <span className="bold">PLANT</span><br/> Strategically plant seedlings to ensure optimal growth and carbon sequestration</li>
                     <li className="py-2">4. <span className="bold">PRESERVE</span><br/> Perform innovative forest management activities to maintain the forest and maximize its impact</li>
                     <li className="py-2">5. <span className="bold">PROTECT</span><br/> Audit, and set a no clear-cut guarantee on every forest</li>
                   </ul>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  How is Canada’s Forest Trust different from other tree planting organizations?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  CFT takes a holistic approach to forestry that doesn't stop at planting trees. We ensure the long term health of our forests with certifiable monitoring and expert management. And we will protect our forests forever. We will tell you exactly where in Canada your seedlings are planted, the health of the land, the impact your seedlings / forest is having on biodiversity, etc.
                  </p>

                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  We provide all of this information through a private portal with state of the art monitoring and measuring technology.
                  </p>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  Is CFT a Charitable Organization?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  No. We believe that the private sector has a responsibility to play in fighting climate change.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row className="mb-lg-4" >
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  When does a Smart Forest start to offset carbon?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Within the first year of planting, forests will have already begun sequestering carbon in their roots and stems. The younger the tree, the more carbon it sequesters.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  What is a carbon offset?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  You offset your Carbon Footprint by making the amount of carbon you release in a year equal to the amount of carbon stored in your CFT Smart Forest.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  What does it cost to buy a Smart Forest?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Using our <a href="/carbon-calculator" className="text-orange">carbon calculator</a>, we help you understand your carbon footprint. Then, using our <a href="/smart-forest-calculator" className="text-orange">net-zero calculator</a>, you can determine the size of forest you will need to build and over what period of time. This is measured in Forest Trust Units (FTUs). An FTU is 5 acres. The cost will be calculated based on the number of FTUs you need. For more information please contact <a href="mailto:grow@canadasforesttrust.ca" className="text-orange">grow@canadasforesttrust.ca</a>
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  Is there a minimum amount to ‘own’ a Smart Forest?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Yes. 1 Forest Trust Unit is measured in 5 acres, or at least 5,000 seedlings trees. Our communal forest allows for much lower than 5 acres so you are part of a forest.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  Can I buy a Smart Forest as a gift?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Yes. You can create a <a href="/build-your-smart-forest#legacy" className="text-orange">Legacy or Memorial Forest</a> or you can contribute to a <a href="/build-your-smart-forest#communal" className="text-orange">Communal Forest</a> in someone’s name.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  Where does my money go?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  CFT uses funds to acquire land, prepare it for planting, purchase seedlings, hire planters, perform forest management, insure the land and pay land tax, provide reporting and annual audits.
                  </p>

                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  When you invest in a Smart Forest, you stay informed on its progress - from site selection to planting to ongoing maintenance and carbon footprint impact.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  How do you choose where to build Smart Forests?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  CFT sources lands across the country that are suitable for reforestation and will have maximum impact on the environmental.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  How many trees will Canada’s Forest Trust plant per acre?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  The ideal number for a successful forest is approximately 1,000 seedlings per acre. Depending on the species and land, we can plant up to 1200 seedlings per acre. CFT is proud to pledge a no clear cut guarantee on every acre of forest we build.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  How do you choose where to build Smart Forests?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Our forestry experts will advise on the right mix of species for the soil and climate of each forest location.
                  </p>

                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  As a common practice, CFT Smart Forests will be built with softwood species (conifers). These species are fast-growing and have needles that are kept year-round. Some examples of softwood species include: douglas fir, lodgepole pine, and whitespruce. We will also implement management practices that will promote hardwood growth.
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  Can I visit my Smart Forest?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Absolutely. Given that not everyone can physically visit a forest and in the first few years there is not much to see, you can see and monitor your forest in real time via your personal portal. If you wish to visit your forest, contact <a href="mailto:grow@canadasforesttrust.ca" className="text-orange">grow@canadasforesttrust.ca</a>
                  </p>

                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  Will you cut down a Smart Forest
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  CFT will NEVER clear cut a forest or sell the land. We will manage our forests to create healthy ecosystems.
                  </p>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  How will you protect the forests?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  CFT has hired experts to plan and build our forests and provide extensive monitoring systems.
                  </p>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  How many jobs will Canada’s Forest Trust create?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  Our business plan is to create thousands of jobs across Canada. Each phase of our 5 Phase Action Plan will require person-power. There will be opportunities for nursery workers, truck drivers, tree planters, crew managers, auditors, monitoring/silviculture workers, brush saw operators, foresters for assessment, planning block layout (marking boundaries) workers, site prep operators, and more.
                  </p>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  Why should I invest with CFT and not a charity?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  We encourage all Canadians to find a way to combat climate change. There is an important role for private sector companies to play. CFT is pleased to offer turnkey solutions that engage all individuals, families, schools and corporations to reach net-zero.
                  </p>
                </Col>
              </Row>

              <hr className="white mb-5 mt-4"/>

              <Row>
                <Col className="col-12 col-lg-4">
                  <h3 className="text-orange bold">
                  What corporate benefits does CFT offer?
                  </h3>
                </Col>
                <Col className="col-12 col-lg-8">
                  <p className="text-white medium mb-3 ms-lg-4 ms-xl-0">
                  CFT offers a variety of benefits that can be customized to meet your needs. Contact us at <a href="mailto:grow@canadasforesttrust.ca" className="text-orange">grow@canadasforesttrust.ca</a> for more information.
                  </p>
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
