import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Rellax from "rellax";
import Parallax from 'parallax-js'
import { Slide } from 'react-slideshow-image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
          <p className="text-white m-2 bold op-6 mt-4">ABOUT</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">
               INTRO
              </a>
            </li>
            <li className="p-0" data-dest="#growing" >              
              <a href="#growing" className="text-white bold no-underline">
                GROWING
              </a>
            </li>
            <li className="p-0" data-dest="#team">
              <a href="#team" className="text-white bold no-underline ">
                OUR TEAM
              </a>
            </li>

          </ul>        
        </Col>
      </Row>

  <main className="">
  <Container id="intro" className="bg-green z-999 py-5 px-5">
      <Row className="justify-content-center d-flex mb-5 py-5 px-5">
        
        <Col className="col-12 col-lg-5 stickyTop roundedBox innerShadow-heavy m-3 p-0 about-hero">
         
        
        </Col> 
      
      <Col className="col-12 col-lg-5 text-white p-4 pb-0 intro-order ">
        <h1 className="text-orange mb-3 bold">
        We trust in nature.
        </h1>
        <p className="lead bold mb-5">Forests are one of our last and best chances to save our planet before it’s too late. </p> 

        <p className="large op-9 pt-3">A forest conjures images of sun dappled leaves, chirping birds, and fresh air. We see much more: a powerful investment in our future, managed with the goal of maximizing impact, delivering a real solution to mitigate climate change, and protected for generations.</p>

        <p className="large op-9">Under the right conditions, a forest can become a force of nature—quite literally. And that means driving corporations, students, and individuals across our country to invest in a large-scale plan that will see 10 million acres of new forests built by 2040.</p>        

        <p className="text-white text-left smallcaps intro-links-header op-5 mt-5">ON THIS PAGE</p>
        <a href="#commitment" className="btn btn-text text-left intro-links text-orange bold no-underline ">What Keeps Us Growing?</a>
        <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline ">Meet Our Leadership Team</a>
       

        </Col>

       
        
      </Row>
    </Container>

    <Container fluid id="growing" className="bg-green py-5 z-0 px-0">
      
      <Row className="justify-content-center align-items-center pt-5 mb-3">
        <Col className="col-10 col-lg-6 text-center text-white">
        <h2 className=" text-orange bold mb-3">What keeps us growing? </h2>
        <p className="large mb-3 mt-0">We are a values-driven organization. Our actions are rooted in a proven, science-based understanding that: </p>

        </Col>
      </Row>

      <Fade bottom>
            <Row className="justify-content-center align-items-center ">
            <Carousel className="col-11 col-lg-7 bg-brown roundedBox  innerShadow p-5 mx-4 px-0 mb-4" activeIndex={index} onSelect={handleSelect} nextIcon={<span aria-hidden="false" className="carousel-control-next-icon" />} nextLabel="" prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} prevLabel="" > 
          
          <Carousel.Item interval={100000} className="justify-content-center">
          
              <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                <div className="px-lg-5 pt-lg-4 mx-5">
                <p className="lead text-center center text-white bold">
              An issue as threatening as climate change needs a solution as smart as forests.
              </p>
                  </div>
                  </div>
                  
              </Carousel.Item>

                <Carousel.Item interval={100000}>

                <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                  <div className="px-lg-5 pt-lg-4 mx-5">
                  <p className="lead text-center center text-white bold">
                    When you invest in a Smart Forest, you invest in one of the most powerful forces against climate change: nature.
                </p>                   
                </div>
                </div>
                  
                </Carousel.Item>

                <Carousel.Item interval={100000}>

                <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                  <div className="px-lg-5 pt-lg-4 mx-5">
                  <p className="lead text-center center text-white bold">
                  As cultural attitudes towards climate change shift, environmental, societal and economic interests align.
                   </p>                   
                </div>
                </div>
                  
                </Carousel.Item>

                <Carousel.Item interval={100000}>

                <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                  <div className="px-lg-5 pt-lg-4 mx-5">
                  <p className="lead text-center center text-white bold">
                  It’s critically important that we learn from, engage with, and consult with Indigenous communities across Canada.
                  </p>
                  </div>
                </div>
                  
                </Carousel.Item>

                <Carousel.Item interval={100000}>

                <div className="d-block w-100 about-bg mb-4 align-items-center d-flex">
                  <div className="px-lg-5 pt-lg-4 mx-5">
                  <p className="lead text-center center text-white bold">
                  By making the green economy accessible to everyone – from individuals to schools to corporations, we create a greener, cleaner and more sustainable planet.
                  </p>
                  </div>
                </div>
                  
                </Carousel.Item>
              
              </Carousel>
            </Row>
          </Fade>


    <Fade bottom>
      <Row className="align-items-center justify-content-center my-2">
        <Col className="col-10 col-lg-7 pe-lg-0">
          <h3 className="text-center text-orange bold">Ready to have a smart impact?</h3>
        </Col>
      </Row>
      <Row className="text-center justify-content-center mb-5 ">

          <Col className="col-10 text-center pb-5 pe-lg-0">
            <Button variant="green">Reach out to us</Button>
            </Col>
      
        </Row>
    </Fade>  

    </Container>

    <Container fluid id="team" className="bg-brown innerShadow-heavy py-6">
      <Row className="justify-content-center pt-5 mb-4">
        <Col className="col-10 col-lg-7 text-center pt-3 ">
        <h2 className="text-orange bold">Meet Our Leadership Team</h2>
        <p className="text-white px-3 px-lg-5">
          CFT was established by Gary Zed, an entrepreneur with a reputation for taking on tough challenges and getting things done. A leader with a national vision, Gary heads up a team that is committed to making CFT the most talked about climate success story in the decades ahead.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center pb-5">
        <Col className="col-11 col-lg-7">
        <Tabs>
        <TabList className="horizTab px-3">
        <Tab className="text-orange btn-text smallCaps small letterspace no-underline">
        OPTION 1
        </Tab>
        <Tab className="text-orange btn-text smallCaps small letterspace no-underline">
        OPTION 2
        </Tab>
        <Tab className="text-orange btn-text smallCaps small letterspace no-underline">
        OPTION 3
        </Tab>
        </TabList>
        <TabPanel>

        {/* First panel starts here */}
        <Row className="justify-content-center align-items-center">
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
          </Row>

        </TabPanel>
        <TabPanel>
          <Row>
        {/* Second panel starts here */}
        <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            </Row>
        </TabPanel>
        <TabPanel>
        {/* Third panel starts here */}
        <Row>
        <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-10 col-md-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
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
             <p className="h3 text-grey mt-4 mb-0">PERSON NAME</p>
             <p className="h3 smallCaps text-grey thin italic mb-4">Title</p>
             <p className="large text-greyx">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <p className="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Col>
          </Row>
        </Modal.Body>
             
        <Modal.Footer className="p-0">
        <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    
   

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