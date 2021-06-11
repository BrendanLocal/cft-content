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

const [editingdata, form] = useGithubJsonForm(file, formOptions)
usePlugin(form)
useGithubToolbarPlugins()

const slideProperties = {
  indicators: i => (<span className="sliderDot"/>)
}

return (
  
<div>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>

  <Row className="justify-content-left p-0 m-0 d-none d-lg-block">
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
        <h1 className="text-orange mb-5 bold">
        We trust in nature.
        </h1>
        <p className="lead mb-4 op-9 bold">Canada’s Forest Trust began when maritimer Gary Zed set out to reforest five hundred acres of fallow land in his home province of New Brunswick.</p> 

        <p className="large op-9 thin">The professional foresters, seedling producers, and scientific experts who collaborated on that project taught Gary an invaluable lesson: under the right conditions, a forest can become a force of nature—quite literally. As the threat of climate change closes in, forests are one of our last and best chances to save our planet before it’s too late. </p>

        <p className="large op-9 thin">And so Canada’s Forest Trust was born. Our “why” is simple: to win the fight against climate change, we must unlock the power of Canadian-built forests. You’ll find our “how” in <a href="/" className="text-orange">our five-phase Smart Forest action plan</a>, which lays out the steps we’ll take to plant 10 million acres of Smart Forests™ by 2040. </p>

        <p className="large op-9 thin">As for our “who”—well, that’s where you come in. Whether you represent <a href="/" className="text-orange">a company</a> seeking to diversify your ESG investments, <a href="/" className="text-orange">a school</a> looking for a meaningful vehicle to raise money and educate tomorrow’s climate advocates, <a href="/" className="text-orange">an individual</a> laying down roots for future generations, or <a href="/">a community member</a> searching for new ways to grow, you have a role to play in the future of Canada’s forests—a role that’s intrinsically linked to the future of our planet. </p>

        

        <p className="text-white text-left smallcaps intro-links-header op-5 mt-4">ON THIS PAGE</p>
        <a href="#commitment" className="btn btn-text text-left intro-links text-orange bold no-underline ">What Keeps Us Growing?</a>
        <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline ">Meet Our Leadership Team</a>
       

        </Col>

       
        
      </Row>
    </Container>

    <Container fluid className="bg-green py-5 z-0 px-0">
      
      <Row className="justify-content-center align-items-center pt-5 mb-3">
        <Col className="col-10 col-lg-6 text-center text-white">
        <h3 className="h2 text-orange bold">What keeps us growing? </h3>
        <p className="large">We are a values-driven organization. Our actions are rooted in a proven, science-based understanding that: </p>

        </Col>
      </Row>
      <Row className="pb-5 px-0">
        <Col className="pb-5 ">
        <Slide easing="ease" {...slideProperties}>
          <Row className="justify-content-center each-slide">
            <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox drop">
              <p className="text-green bold">
              An issue as threatening as climate change needs a solution as smart as forests.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center each-slide">
          <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox drop">
              <p className="text-green bold">
              When you invest in a Smart Forest, you invest in one of the most powerful forces against climate change: nature.
          </p>
          </Col>
          </Row>
          <Row className="justify-content-center each-slide">
          <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox card-drop">
              <p className="text-green bold">
              It’s critically important that we learn from, engage with, and consult with Indigenous communities from across Canada.  
          </p>
          </Col>
          </Row>
          <Row className="justify-content-center each-slide">
          <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox card-drop">
              <p className="text-green bold">
              As cultural attitudes towards climate change shift and become more urgent, market values will shift with them, ensuring that environmental, societal and economic interests can coexist.
          </p>
          </Col>
          </Row>
          <Row className="justify-content-center each-slide">
          <Col className="col-8 col-md-8 col-lg-6 p-4 p-lg-5 bg-white roundedBox card-drop">
              <p className="text-green bold">
              By making the green economy accessible to everyone – from individuals to schools to corporations – we can help align values and promote tangible investments into a greener, cleaner and more sustainable planet.  
          </p>
          </Col>
          </Row>
        </Slide>
        </Col>
      </Row>
    </Container>

    <Container fluid className="bg-brown innerShadow-heavy py-6">
      <Row className="justify-content-center pt-5">
        <Col className="col-10 col-lg-8 text-center pt-3 ">
        <h2 className="text-white bold mb-5">Meet Our Leadership Team</h2>
        </Col>
      </Row>
      <Row className="justify-content-center pb-5">
        <Col className="col-7">
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
          <Row>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span><Button className="modal-btn" variant="btn-text" onClick={handleShow}>
        Person Name
      </Button></span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
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
        <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span>Person Name</span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span>Person Name</span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span>Person Name</span></Col></Row>
              </div>
            </Col>
            </Row>
        </TabPanel>
        <TabPanel>
        {/* Third panel starts here */}
        <Row>
             <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span>Person Name</span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span>Person Name</span></Col></Row>
              </div>
            </Col>
            <Col className="col-4 p-3">
              <div className="roundedBox overflow-hide about-card">
              <Row><Col><img src="/placeholder-forest.jpg"></img></Col></Row>
              <Row className="bg-white p-3 text-center"><Col><span>Person Name</span></Col></Row>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
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