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
import Rellax from "rellax";
import Parallax from "parallax-js";
import { Slide } from "react-slideshow-image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import Header from "../components/header";

import ReactPlayer from 'react-player'

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
          <p className="text-white m-2 bold op-6 mt-4">{editingdata.home}</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">{editingdata.menu1}</a>
            </li>
            <li className="p-0" data-dest="#growing">
              <a href="#growing" className="text-white bold no-underline">{editingdata.menu2}</a>
            </li>
            <li className="p-0" data-dest="#team">
              <a href="#team" className="text-white bold no-underline ">{editingdata.menu3}</a>
            </li>
          </ul>
        </Col>
      </Row>

      <main className="">
        <Container id="intro" className="bg-green z-999 py-5 px-5">
          <Row className="justify-content-center d-flex mb-5 py-5 px-5">
            <Col className="col-12 col-lg-5 stickyTop roundedBox innerShadow-heavy m-3 p-0 about-hero"></Col>
            <Col className="col-12 col-lg-5 text-white p-4 pb-0 intro-order ">
              <h1 className="text-orange mb-3 bold">{editingdata.header1}</h1>
              <p className="lead bold mb-5">{editingdata.para1}</p>
              <p className="large op-9 pt-3">{editingdata.para2}</p>
              <p className="large op-9">{editingdata.para3}</p>
              <p className="text-white text-left smallcaps intro-links-header op-5 mt-5 mb-3">{editingdata.header2}</p>
              <a href="#commitment" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.link1}</a>
              <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.link2}</a>
            </Col>
          </Row>
        </Container>

        <Container fluid id="growing" className="bg-green py-5 z-0 px-0">
          <Row className="justify-content-center align-items-center pt-5 mb-3">
            <Col className="col-10 col-lg-6 text-center text-white">
              <h2 className=" text-orange bold mb-3">{editingdata.part1_header1}</h2>
              <p className="large mb-3 mt-0">{editingdata.part1_header2}</p>
            </Col>
          </Row>

            <Row className="justify-content-center align-items-center ">
              <Carousel
                className="col-11 col-lg-7 bg-brown roundedBox  innerShadow p-5 mx-4 px-0 mb-4"
                activeIndex={index}
                onSelect={handleSelect}
                nextIcon={ <span aria-hidden="false" className="carousel-control-next-icon"/> }
                nextLabel=""
                prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon"/> }
                prevLabel=""
              >
                <Carousel.Item interval={100000} className="justify-content-center">
                  <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <p className="lead text-center center text-white bold">{editingdata.part1_para1}</p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <p className="lead text-center center text-white bold">{editingdata.part1_para2}</p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <p className="lead text-center center text-white bold">{editingdata.part1_para3}</p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <p className="lead text-center center text-white bold">{editingdata.part1_para4}</p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <p className="lead text-center center text-white bold">{editingdata.part1_para5}</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Row>
          

            <Row className="align-items-center justify-content-center my-2">
              <Col className="col-10 col-lg-7 pe-lg-0">
                <h3 className="text-center text-orange bold">{editingdata.part1_para6}</h3>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 ">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <Button variant="green">{editingdata.part1_button}</Button>
              </Col>
            </Row>
        </Container>

        <Container fluid id="video" className="bg-green">
        <Row className="justify-content-center align-items-center ps-lg-4 ms-lg-4">
            <Col className="col-12 col-lg-5 d-flex ms-lg-4 mb-2 nudge">
            
            <ReactPlayer playing playsinline controls url='./CFT_Rev8_DDC_ForApproval.mp4'/>
           
            </Col>
            <Col className="col-12 col-lg-3 d-flex ms-lg-4 mb-2 nudge">
              <p className="text-white">
              CFT was established by Gary Zed, an entrepreneur with a reputation for taking on tough challenges and getting things done. A leader with a national vision, Gary heads up a team that is committed to making CFT the most talked about climate success story in the decades ahead.
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid id="team" className="bg-brown innerShadow-heavy py-6">
          <Row className="justify-content-center pt-5 mb-4">
            <Col className="col-10 col-lg-7 text-center pt-3 ">
              <h2 className="text-orange bold">{editingdata.part2_header1}</h2>
              <p className="text-white px-3 px-lg-5 mb-3">{editingdata.part2_para1}</p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center pb-5">
            <Col className="col-11 col-lg-7">
              <Tabs>
                <TabList className="horizTab px-3">
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline">
                    {editingdata.Option1}
                  </Tab>
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline">
                    {editingdata.Option2}
                  </Tab>
                  <Tab className="text-orange btn-text smallCaps small letterspace no-underline">
                    {editingdata.Option3}
                  </Tab>
                </TabList>
                <TabPanel>
                  {/* First panel starts here */}
                  <Row className="justify-content-center align-items-center">
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person1}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person2}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person3}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person4}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person5}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person6}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row>
                    {/* Second panel starts here */}
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person7}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person8}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person9}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  {/* Third panel starts here */}
                  <Row>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person10}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person11}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-10 col-md-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>
                                {editingdata.person12}
                              </Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </TabPanel>
              </Tabs>
            </Col>
          </Row>
        </Container>

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
