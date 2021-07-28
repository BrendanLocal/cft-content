import React, { useState, useRef, useEffect } from "react";
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
import { Document } from 'react-pdf';
import Rellax from "rellax";
import Parallax from "parallax-js";
import { Slide } from "react-slideshow-image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import Header from "../components/header";
import PDFViewer from '../components/PDFViewer';
import PDFJSBackend from '../middlewares/pdfjs';
import ReactPlayer from 'react-player'
import ScrollableAnchor from "react-scrollable-anchor";

import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: 20, scrollDuration: 200, scrollUrlHashUpdate: false})

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

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slideProperties = {
    indicators: (i) => <span className="sliderDot" />,
  };

  const [editingdata, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0.0) {
          if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)) {
            document
              .querySelector(`.left-sidenav li[data-dest="#${id}"]`)
              .classList.add("active");
          }
        } else {
          if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)) {
            document
              .querySelector(`.left-sidenav li[data-dest="#${id}"]`)
              .classList.remove("active");
          }
        }
      });
    });

    // Track all div containers that have an `id` applied
    document.querySelectorAll("div[id]").forEach((id) => {
      observer.observe(id);
    });
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
      <ScrollableAnchor id={"intro"}>
        <Container id="intro" className="bg-green z-999 py-5 px-5">
          <Row className="justify-content-center d-flex mt-xl-0 mt-lg-4 mb-5 ms-xl-5 ms-lg-2 py-5 px-3">
            <Col className="col-12 col-md-11 col-lg-5 stickyTop roundedBox innerShadow-heavy mt-5 m-3 p-0 about-hero"></Col>
            <Col className="col-12 col-lg-5 text-white p-4 pb-0 intro-order ">
              <h1 className="text-orange hero-alt bold mb-5 mt-2">{editingdata.header1}</h1>
              <p className="mb-5 large">{editingdata.para1}</p>
              <p className="large bold mb-5">{editingdata.para2}</p>
              <p className="large bold mb-5">{editingdata.para3}</p>
              <p className="large bold mb-5">{editingdata.para4}</p>
              <p className="large bold mb-5">{editingdata.para5}</p>
              <p className="large bold mb-5">{editingdata.para6}</p>
              <p className="text-white text-left smallcaps intro-links-header op-5 mt-5 mb-3">{editingdata.header2}</p>
              <a href="#video" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">Watch our video</a>
              <br/>
              <a href="#the-plan" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">5 Phase Approach</a>
              <br/>
              <a href="#what" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">What is a Smart Forest?</a>
              <br/>
              <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">Meet our team</a>
              <br/>
              <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline me-5">Q & A</a>
            </Col>
          </Row>
        </Container>
</ScrollableAnchor>
<ScrollableAnchor id={"video"}>
        <Container id="video" className="v-full z-999 bg-green py-5">
        <Fade bottom>
            <Row className="justify-content-center align-items-center my-4">
              <Col className="col-12 col-md-11 col-lg-10 col-xl-8 text-center text-white">
                <h2 className="text-orange bold px-md-3 px-lg-0">Watch our video</h2>
              </Col>
            </Row>
        </Fade>
        <Fade bottom> 
        <Row className="justify-content-center pb-5 mb-5">
            <Col className="col-10 col-lg-7 col-xl-6 mb-3">      
              <ReactPlayer playsinline controls url='./CFT_Rev8_DDC_ForApproval.mp4' className="video-size"/> 
            </Col>
            <Col className="col-10 col-lg-3 col-xl-3 ">
              <p className="text-white d-none d-lg-block">
              CFT was established by <span className="bold">Gary Zed</span>, an entrepreneur with a reputation for taking on tough challenges and getting things done. A leader with a national vision, Gary heads up a team that is committed to making CFT the most talked about climate success story in the decades ahead.
              </p>
              <p className="text-white text-center large d-lg-none">
              CFT was established by <span className="bold">Gary Zed</span>, an entrepreneur with a reputation for taking on tough challenges and getting things done. A leader with a national vision, Gary heads up a team that is committed to making CFT the most talked about climate success story in the decades ahead.
              </p>
            </Col>
          </Row>
        </Fade> 
      </Container>
      </ScrollableAnchor>
<ScrollableAnchor id={"the-plan"}>
        <Container id="the-plan" className="v-full z-999 bg-green p-5 pe-lg-3 mb-5">
          <Fade bottom>
            <Row className="justify-content-center align-items-center my-4">
              <Col className="col-12 col-md-11 col-lg-8 col-xl-9 text-center text-white">
                <h2 className="text-orange bold mb-2 px-md-3 px-lg-0">CFT’s Smart Forest Action Plan</h2>
                <p className="medium mt-0 mb-0 px-lg-4 mb-2">When you invest in a Smart Forest, we keep you informed on its progress - from site selection to planting to ongoing maintenance and carbon and biodiversity footprint impact as well as building meaningful relationships with our Indigenous peoples. CFT manages the forest landscape from the moment you buy your forest.</p>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center align-items-center px-4">
              
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
        </ScrollableAnchor>
<ScrollableAnchor id={"what"}>
        <Container id="what" fluid className="v-full z-999 bg-green py-5">
          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center">
              <Col className="col-10 col-lg-7 pt-3">
                <h2 className="text-center text-orange bold mb-2">What is a Smart Forest?</h2>
                <p className="text-center text-white mb-3">A Smart Forest combines the resilience of a natural ecosystem, developed over millennia, with the predictive capabilities of today’s technologies and Canada’s first peoples. Inside a Smart Forest, biodiversity thrives; outside of it, scientists, students, investors, and conservationists use digital instruments to understand and activate the forest’s role in cleaning our water, purifying our air, and restoring our country’s vast and vital ecosystems.</p>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-4 px-lg-5">
              <Col className="col-12 col-md-5 bg-brown roundedBox innerShadow px-5 pt-5 pb-4 m-4">          
                <h3 className="h2 text-orange">A forest</h3>
                <ul className="text-white checkMark">
                  <li className="mb-3">Mitigates climate change by sequestering carbon</li>
                  <li className="mb-3">Purifies the air and improves soil quality Regulates, filters, and moderates water flow</li>
                  <li className="mb-3">Supports wildlife and plant species that would otherwise disappear</li>
                  <li className="mb-3">Helps mitigate and prevent natural disasters</li>
                </ul>
              </Col>
              <Col className="col-12 col-md-5 roundedBox card card-drop px-5 pt-5 pb-4 m-4">
                <h3 className="h2 text-orange">A <span className="italic">Smart</span> Forest</h3>
                <ul className="text-grey plus">
                  <li className="mb-3">Is a forest and an investment in the health of our planet</li>
                  <li className="mb-3">Offers a tangible way to offset a large carbon footprints</li>
                  <li className="mb-3">Maximizes its impact through expert forest management and indigenous oversight</li>
                  <li className="mb-3">Proves its effectiveness via proprietary digital tools</li>
                  <li className="mb-3">Boosts the green economy</li>
                  <li className="mb-3">Empower the Indigenous economy</li>
                  <li className="mb-3">Is protected forever with a no clear-cut guarantee</li>
                </ul>
              </Col>
            </Row>
          </Fade>
        </Container>
        </ScrollableAnchor>
<ScrollableAnchor id={"team"}>
        <Container fluid id="team" className="bg-brown innerShadow-heavy py-6">
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
                  <Row className="justify-content-center align-items-center">
                  <Col className="mt-4">
                    <div className="text-orange large text-center text-orange bold intro-cta">
                      <a href="/contact-us">A message from our founder</a>
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
        </ScrollableAnchor>
<ScrollableAnchor id={"qna"}>
        <Container id="qna" fluid className="v-full z-999 bg-green py-5">
          <Fade bottom>
            <Row className="align-items-center justify-content-center py-5 ">
              <Col className="col-10 col-lg-7 pt-3">
                <h2 className="text-center text-orange bold mb-2">Q & A</h2>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="align-items-center justify-content-center">
              <Col className="col-8">          
              <PDFViewer 
          backend={PDFJSBackend}
          src='../../CFT-QA.pdf'
        />
              </Col>
            </Row>
          </Fade>
        </Container>
        </ScrollableAnchor>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="d-none" closeButton>
            <Modal.Title className="d-none"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-center align-items-center ">
              <Col className="col-10 col-md-3 col-lg-4 p-0 mb-lg-5 p-3">
                <img src="/placeholder-forest.jpg"></img>
              </Col>
              <Col className="col-10 col-md-7 col-lg-6 p-4">
                <p className="h3 text-grey mt-4 mb-0">{editingdata.person13}</p>
                <p className="h3 smallCaps text-grey thin italic mb-4">{editingdata.person13_title}</p>
                <p className="large text-greyx">{editingdata.person13_para1}</p>
                <p className="text-grey">{editingdata.person13_para2}</p>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer className="p-0">
            <Button
              className="modal-btn mt-2 me-3 p-0"
              variant="text-btn"
              onClick={handleClose}
            >
              Close
            </Button>
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
