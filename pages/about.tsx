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
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { Slide } from 'react-slideshow-image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactMarkdown from 'react-markdown';

export default function Power({ file }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formOptions = {
    label: 'About',
    fields: [{ name: 'title', component: 'text' }],
  }

const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slideProperties = {
    indicators: i => (<span className="sliderDot"/>)
  }

const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0.0 ) {
          if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)){
            document.querySelector(`.left-sidenav li[data-dest="#${id}"]`).classList.add('active');
          }
        } else {
          if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)){
            document.querySelector(`.left-sidenav li[data-dest="#${id}"]`).classList.remove('active');
          }
        }
      });
    });
    
    // Track all div containers that have an `id` applied
    document.querySelectorAll('div[id]').forEach((id) => {
      observer.observe(id);});
  },[]);

return (
  
<div>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>

  <Row className="justify-content-left p-0 m-0 d-none d-lg-block d-xl-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <ReactMarkdown className="text-white m-2 bold op-6 mt-4">{editingdata.home}</ReactMarkdown>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">{editingdata.menu1}</a>
            </li>
            <li className="p-0" data-dest="#growing" >              
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
            <Col className="col-12 col-lg-5 stickyTop roundedBox innerShadow-heavy m-3 p-0 about-hero">
              {/* this col makes the image on the left side of the page */}
            </Col>
            <Col className="col-12 col-lg-5 text-white p-4 pb-0 intro-order ">
              <h1 className="text-orange mb-5 bold">{editingdata.header1}</h1>
              <ReactMarkdown className="lead mb-4 op-9 bold">{editingdata.para1}</ReactMarkdown> 
              <ReactMarkdown className="large op-9 thin">{editingdata.para2}</ReactMarkdown>
              <ReactMarkdown className="large op-9 thin">{editingdata.para3_1}<a href="/" className="text-orange">{editingdata.para3_link}</a>{editingdata.para3_2}</ReactMarkdown>
              <ReactMarkdown className="large op-9 thin">{editingdata.para4_1} <a href="/" className="text-orange">{editingdata.para4_link1}</a> {editingdata.para4_2}<a href="/" className="text-orange">{editingdata.para4_link2}</a>{editingdata.para4_3}<a href="/" className="text-orange">{editingdata.para4_link3}</a>{editingdata.para4_4}<a href="/">{editingdata.para4_link4}</a>{editingdata.para4_5}</ReactMarkdown>
              <ReactMarkdown className="text-white text-left smallcaps intro-links-header op-5 mt-4">{editingdata.header2}</ReactMarkdown>
              <a href="#commitment" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.link1}</a>
              <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.link2}</a>
            </Col>
          </Row>
        </Container>

        <Container fluid className="bg-green py-5 z-0 px-0">
          <Row className="justify-content-center align-items-center pt-5 mb-3">
            <Col className="col-10 col-lg-6 text-center text-white">
              <h3 className="h2 text-orange bold">{editingdata.part1_header1}</h3>
              <ReactMarkdown className="large">{editingdata.part1_header2}</ReactMarkdown>
            </Col>
          </Row>
          <Row className="pb-5 px-0">
            <Col className="pb-5 ">
              <Slide easing="ease" {...slideProperties}>
                <Row className="justify-content-center each-slide">
                  <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox drop">
                    <ReactMarkdown className="text-green bold">{editingdata.part1_para1}</ReactMarkdown>
                  </Col>
                </Row>
                <Row className="justify-content-center each-slide">
                  <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox drop">
                    <ReactMarkdown className="text-green bold">{editingdata.part1_para2}</ReactMarkdown>
                  </Col>
                </Row>
                <Row className="justify-content-center each-slide">
                  <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox card-drop">
                    <ReactMarkdown className="text-green bold">{editingdata.part1_para3}</ReactMarkdown>
                  </Col>
                </Row>
                <Row className="justify-content-center each-slide">
                  <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox card-drop">
                    <ReactMarkdown className="text-green bold">{editingdata.part1_para4}</ReactMarkdown>
                  </Col>
                </Row>
                <Row className="justify-content-center each-slide">
                  <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox card-drop">
                    <ReactMarkdown className="text-green bold">{editingdata.part1_para5}</ReactMarkdown>
                  </Col>
                </Row>
              </Slide>
            </Col>
          </Row>
        </Container>

        <Container fluid className="bg-brown innerShadow-heavy py-6">
          <Row className="justify-content-center pt-5">
            <Col className="col-10 col-lg-8 text-center pt-3 ">
              <h2 className="text-white bold mb-5">{editingdata.part2_header1}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center pb-5">
            <Col className="col-7">
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
                  <Row>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>{editingdata.PLACEHOLDERNAME1}</Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>{editingdata.PLACEHOLDERNAME2}</Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>{editingdata.PLACEHOLDERNAME3}</Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>{editingdata.PLACEHOLDERNAME4}</Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>{editingdata.PLACEHOLDERNAME5}</Button>
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>
                              <Button className="modal-btn" variant="btn-text" onClick={handleShow}>{editingdata.PLACEHOLDERNAME6}</Button>
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
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>{editingdata.PLACEHOLDERNAME7}</span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>{editingdata.PLACEHOLDERNAME8}</span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>{editingdata.PLACEHOLDERNAME9}</span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </TabPanel>

                <TabPanel>
                {/* Third panel starts here */}
                  <Row>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>{editingdata.PLACEHOLDERNAME10}</span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>{editingdata.PLACEHOLDERNAME11}</span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col className="col-4 p-3">
                      <div className="roundedBox overflow-hide about-card">
                        <Row>
                          <Col>
                            <img src="/placeholder-forest.jpg"></img>
                          </Col>
                        </Row>
                        <Row className="bg-white p-3 text-center">
                          <Col>
                            <span>{editingdata.PLACEHOLDERNAME12}</span>
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
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleClose}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  )
}

/**
* Fetch data with getStaticProps based on 'preview' mode
*/
export const getStaticProps: GetStaticProps = async function({preview, previewData,}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData, fileRelativePath: 'content/about.json', parse: parseJson,
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
