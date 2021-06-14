import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import Fade from 'react-reveal/Fade';
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
    <Fade bottom>
      <Row className="justify-content-center align-items-center my-4">
        <Col className="col-11 col-lg-8 text-center text-white">
        <h2 className=" text-orange bold mb-2">The Smart Forest Action Plan</h2>
        <p className="large mt-0 mb-0">When you invest in a Smart Forest, you stay informed on its progress - from site selection to planting to ongoing maintenance and carbon footprint impact.</p>
        </Col>
      </Row>
      </Fade>
      <Fade bottom>
      <Row className="justify-content-center align-items-center px-5">
        
        <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={<span aria-hidden="false" className="carousel-control-next-icon" />} nextLabel="" prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} prevLabel="" className="col-12 col-md-11 col-lg-10 d-flex bg-brown roundedBox innerShadow-heavy px-0"> 
          
          <Carousel.Item interval={500000}>
          <div className="d-block w-100 phases"></div>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={100000}>
          <div className="d-block w-100 phase1"></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="smallCaps text-left tight-drop bold mb-1">PROCURE</h3>
              <p className="h3 text-left tight-drop mb-4">Acquire land across Canada.</p>
              
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
              <h3 className="smallCaps text-left tight-drop bold mb-1">PREPARE</h3>
              <p className="h3 text-left tight-drop mb-4">Assess, plan, and complete site preparation for planting.</p>
              
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
          <div className="d-block w-100 phase3 " ></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="smallCaps text-left tight-drop bold mb-1">PLANT</h3>
              <p className="h3 text-left tight-drop mb-4">Strategically plant seedlings to ensure optimal growth and carbon sequestration.</p>
              
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
          <div className="d-block w-100 phase4 "></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="smallCaps text-left tight-drop bold mb-1">PRESERVE</h3>
              <p className="h3 text-left tight-drop mb-4">Perform innovative forest management activities to maintain the forest and maximize its impact.</p>
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
          <div className="d-block w-100 phase5 " ></div>
            <Carousel.Caption className="col-9 col-lg-4">
              <h3 className="smallCaps text-left tight-drop bold mb-1">PROTECT</h3>
              <p className="h3 text-left tight-drop mb-4">Audit, and set a no clear-cut guarantee on every forest.</p>
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
        </Carousel>
 
      </Row>
      </Fade>
    </Container>

    
    
    <Container id="smart-forests" fluid className="v-full z-999 bg-green py-5">
      
    <Fade bottom>
      <Row className="pt-5 align-items-center justify-content-center">
        <Col className="col-12 col-lg-7 pe-lg-0 mt-5">
          <h2 className="text-center text-orange bold">Start making a difference now—and far into the future</h2>
          <p className="text-center text-white medium thin mb-4">Each Smart Forest has a <span className="bold">‘planting prescription’</span>. This is the unique mix of species that’s right for the local climate, soil conditions, drainage, and land history. This optimal habitat maximizes the positive impacts the Forest will make, including carbon sequestration, oxygen production and water absorption.</p>
        </Col>
      </Row>
    </Fade>  
    <Fade bottom>
      <Row className="justify-content-center pb-5 align-items-stretch my-4">
            <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
                <h4 className="text-white tight-drop-light">Corporate Forests</h4>
                <p className="flex-fill pb-3 text-white tight-drop">Meet ESG goals and demonstrate results</p>
                <Link href="/#corporate" >
                  <a className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">LEARN MORE</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
                <h4 className="text-white tight-drop-light">School Forests</h4>
                <p className="flex-fill pb-3 text-white tight-drop">Give students the tools to positively impact their future</p>
                <Link href="/#school" >
                  <a className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">LEARN MORE</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
                <h4 className="text-white tight-drop-light">Legacy Forests</h4>
                <p className="flex-fill pb-3 text-white tight-drop">Protect the planet for future generations</p>
                <Link href="/#legacy" >
                  <a className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">LEARN MORE</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
                <h4 className="text-white tight-drop-light">Communal Forests</h4>
                <p className="flex-fill pb-3 text-white tight-drop">Make a difference by coming together</p>
                <Link href="/#communal" >
                  <a className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">LEARN MORE</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Fade>
    </Container>

    {/* Coporate Forests */}
  <Container fluid id="corporate" className="bg-corp sectionPad">
      
    <Fade bottom>
      <Row className="text-center justify-content-center">
        <Col className="col-11 col-lg-8 text-white ">
        <h2 className="h1 bold py-3 text-white tight-drop-light my-5">
          Corporate Smart Forests<span className="text-orange">™</span></h2>
        </Col>
      </Row>
    </Fade>

    <Fade bottom>
      <Row className=" text-center  justify-content-center mb-4">
            <Col className="col-11 col-lg-7">
              <Row className=" horizTab  justify-content-center">
                <Col className="mb-3">
                <Link href="/"><Button variant="text text-orange smallCaps down-links">ABOUT</Button></Link>
                </Col>
                <Col className="mb-3">
                <Link href="/"><Button variant="text text-orange smallCaps down-links">TESTIMONIAL</Button></Link>
                </Col>
                <Col className="mb-3">
                <Link href="/"><Button variant="text text-orange smallCaps down-links">BOTTOM LINE</Button></Link>
                </Col>
                <Col className="mb-3">
                <Link href="/"><Button variant="text text-orange smallCaps down-links">CALCULATE</Button></Link>
                </Col>
              </Row>
            </Col>
        </Row>
      </Fade>

      <Fade bottom>
      <Row className="text-center justify-content-center py-5 my-5">
        <Col className="col-11 col-lg-8 pt-5">
        <p className="emphasis text-orange bold tight-drop-light mb-4">Don’t just care for the environment. Prove it.</p>
        
        </Col>
        <Col className="col-11 col-lg-8">
        <p className="lead text-white bold tight-drop-light px-5">If ESG is not a box you’d like to tick, but a change you’d like to make, work with us.</p>
        
        </Col>
      </Row>
      </Fade>

      <Fade bottom>
      <Row className="text-center justify-content-center mb-3 pb-0">
        <Col className="col-lg-7 pt-5 pb-0">
            <p className="text-white large">
              An investment in a Corporate Smart ForestTM is an opportunity for corporations across Canada to reimagine
              their sustainability strategy and invest for long-term ROI. This is a turnkey and sustainable approach for
              corporations to meet net-zero and ESG commitments, offering:
            </p>
          </Col>
      </Row>
      </Fade>

      <Fade bottom>
        <Row className="d-flex align-items-stretch px-5 justify-content-center">
  
            <Col className="col-12 col-md-3">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
              <h4 className="thin text-green">Proprietary impact calculators </h4>
              <p className="flex-fill pb-3">Calculate your net-zero carbon footprint and determine the size of forest
                needed to offset your emissions.</p>
              <Button className="modal-btn" variant="btn-text text text-left">Try the Calculators</Button>
            </div>
            </Col>
            
            <Col className="col-12 col-md-3">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
              <h4 className="thin text-green">Real-time monitoring</h4>
              <p className="flex-fill pb-3">A secure, customized portal to watch your forest grow and build engagement
                campaigns that bring the journey to life for shareholders, employees, and customers.</p>
                <Button className="modal-btn" variant="btn-text text text-left">Try the Portal</Button>
            </div>
            </Col>
            
          <Col className="col-12 col-md-3">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
              <h4 className="thin text-green">Transparency and reporting</h4>
              <p className="flex-fill pb-3">Demonstrate your commitment to sustainability and the significance of your
                impact with a no clear-cut guarantee on each Smart Forest. Keep stakeholders informed with an annual
                report on performance.</p>
                <Button className="modal-btn" variant="btn-text text text-left">Reporting</Button>
            </div>
            </Col>
        </Row>
        </Fade>
        
        <Row className="text-center justify-content-center mb-3 pb-0">

          <Col className="text-center py-5">
            <Button className="btn-large" variant="green">Build a Corporate Smart Forest™</Button>
            </Col>
      
        </Row>


        <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-5 mt-5">
              <Col className="col-11 col-lg-8 bg-brown roundedBox innerShadow p-5 m-4 blockquote-bg">
                <h3 className="text-left blockquote text-orange p-lg-5">
                  “We need 50 shades of green to catalyze and support all companies towards net zero… Companies will need to show how they plan to meet their net-zero targets through the appropriate mix of emission reductions and credible carbon offsets, including nature-based solutions such as reforestation.”
                  </h3>
                <p className="text-left text-white my-0 mx-5 bold">— Mark Carney</p>
                <p className="text-left text-white mx-5 px-3 italic op-6">UN Special Envoy for Climate Action and Finance</p>
              </Col>
            </Row>
          </Fade>


    <Fade bottom>
      <Row className="justify-content-center pt-5 mb-3">
        <Col className="col-11 col-md-8 ">
        <h2 className="text-center text-orange tight-drop-light bold mb-3">From balance sheet to bottom line.</h2>
        <p className="lead px-5 text-center tight-drop-light text-white">Corporate Smart Forests are good for the environment and for your business.</p>
        </Col>
      </Row>
      </Fade>

    <Fade bottom>
      <Row className="justify-content-center d-flex pb-5 mx-5">
          <Col className="col-11 col-lg-7 bg-green roundedBox innerShadow px-5 pt-5 pb-4 m-4">
        <p className="text-white large bold text-center">An investment in a Smart Forest allows your corporation to:
        </p>

          <ul className="text-white checkMark px-5 mx-5">
            <li>
            Support immediate CO2 reductions from the atmosphere 
            </li>
            <li>
            Secure ESG benefits that protect and foster growth throughout Canada
            </li>
            <li>
            Reduce your cumulative impacts on the environment and society
            </li>
            <li>
            Boost the economy through the creation of local jobs
            </li>
            <li>
            Add shareholder value by strengthening long-term financial and operational performance
            </li>
          </ul>
        
        </Col>      
      </Row>
    </Fade>

    

    <Fade bottom>
      <Row className="justify-content-center pt-5 mb-3">
        <Col className="col-11 col-md-8 ">
        <h2 className="text-center text-orange tight-drop-light bold mb-4">Start Calculating</h2>
        </Col>
      </Row>
    </Fade>

    
    <Fade bottom>
      <Row className="justify-content-center  align-items-stretch mx-lg-5">

           <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="h6 text-mildgreen bold">STEP 1</p>
                  <p className="large text-green mb-2">Calculate your net-zero carbon footprint</p>
                  <p className="text-grey mb-4">Learn how much carbon your corporation generates in an average year.</p>
                  <Link href="carbon-calculator">
                    <Button variant="green" className="mt-3">Calculate your carbon footprint</Button>
                  </Link>
                </div>
              </Col>

              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="h6 text-mildgreen bold">STEP 2</p>
                  <p className="large text-green mb-2">Determine your net zero Smart Forest target</p>
                  <p className="text-grey mb-4">See how many hectares your corporation must plant to reach a net-zero emissions target.</p>
                  <Button variant="green" className="mt-3">Calculate your NET ZERO target</Button>
                </div>
              </Col>
  
      </Row>
    </Fade>

  </Container>
    


    {/* School Forests */}
    <Container fluid id="school" className="bg-school sectionPad">
      <Row className="text-center justify-content-center">
        <Col className="col-lg-6 text-white ">
        <h2 className="bold py-3 text-orange">
          School Smart Forests™</h2>
        <h3>Study climate action in real time</h3>
        <h4>Student Smart ForestsTM protect our planet and teach us how to tackle climate change.</h4>
        </Col>
      </Row>
      <Row className=" text-center  justify-content-center">
        <Col className="col-lg-7">
        <Row className=" horizTab  justify-content-center">
         
        </Row>
        </Col>
      </Row>
      <Row className="text-center justify-content-center">
        <Col className="col-lg-7 pt-5">
        <p className="text-white bold">
        From climate strikes to online activism, students are taking action on climate change. With their future at stake, they’re looking for meaningful ways to steer things back on course.
        </p>
        </Col>
      </Row>


        <Row className="pt-5 align-items-stretch px-5 justify-content-center">
         
            <Col className="h-100 col-12 col-md-3">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">See the change you make </h4>
              <p className="flex-fill pb-3">A Smart Forest offers an opportunity to educate students about environmental stewardship with digital tools to track its effects in real time.</p>
            </div>
            </Col>
            
            <Col className="h-100 col-12 col-md-3">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">Local fundraising, global impact
</h4>
              <p className="flex-fill pb-3">An easy-to-execute program that taps into students’ interests and demonstrates its immediate and long-term benefits.</p>
           
            </div>
            </Col>
            
          <Col className="h-100 col-12 col-md-3">
            <div className="roundedBox bg-white p-4 h-100 d-flex flex-column">
              <h4 className="thin text-green">Be part of Canadian history
</h4>
              <p className="flex-fill pb-3">The School Smart Forest™ Ambassadors program names the environmental stewards who have created a more sustainable future for all. </p>
            </div>
            </Col>


        </Row>



      <Row>
        <Col className="text-center py-5">
        <Button variant="green">Build a School Smart Forest™</Button></Col>
      </Row>

      <Row className="justify-content-center">
        <Col className="col-lg-8 bg-brown roundedBox p-5">
          <Row className="justify-content-center bg-quote ">
            <Col className="p-5 text-white">

            <p className="text-orange large lead">
            [Younger generations] have a different kind of investment in the future…A lot of the adults in the world aren’t going to be here by the time some climate conditions start taking effect in the world.
            </p>
            <span className="authorLine">Xiuhtezcatl Martinez</span>
            <span className="authorTitle">Youth Director of Earth Guardians</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5">
        <Col className="col-lg-6">
        <h3 className="text-center text-orange bold">Students make great teachers. Give them a forest to manage.</h3>
        <p className="px-5 text-center text-white medium">Spark a life-long connection to the environment and teach valuable skills.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-white p-4 col-md-6">
        <p>The Smart Forest program empowers students to take action against the devastating effects of climate change, inspires leadership and builds organizational skills. Raising funds to build a forest is:
          <ul className="bulletList">
            <li>
            <span className="bold">Healthy.</span> Zero calories and carbon-free. No sales of chocolate bars, cookie dough or other consumable items. 
            </li>
            <li>
            <span className="bold">Sustainable.</span> No packaging or unused products. Forest stewardship reduces the carbon footprint of all Canadians.

            </li>
            <li>
            <span className="bold">Safe, Secure and Easy.</span> All transactions are online, No door-to-door sales, cash handling, or post-fundraising deliveries required.            </li>
            <li>
            <span className="bold">Impactful.</span> Supports the health of the planet, scholarships, student employment, school programs, and community needs. 
            </li>
          </ul>
</p>
        
        </Col>
       
      </Row>
      <Row className="justify-content-center">
      <Col className="outlineBox text-white p-4 col-lg-3">
        <h4 className="thin py-3">Calculate your net-zero carbon footprint</h4>
        <p>Learn how much carbon your school generates in an average year.  </p>
        <Link href="/carbon-calculator">
        <Button variant="green">Calculator</Button>
        </Link>
        </Col>
        <Col className="outlineBox text-white p-4 col-lg-3">
        <h4 className="thin py-3">Determine your net zero Smart Forest target</h4>
        <p>See how many hectares your school must plant to reach a net-zero emissions target.</p>
        <Link href="/carbon-calculator">
        <Button variant="green">Calculator</Button>
        </Link>
        </Col>
      </Row>
     
    </Container>
    
    {/* Legacy Forests */}
    <Container fluid id="legacy" className="bg-legacy sectionPad">
      <Row className="text-center justify-content-center">
        <Col className="col-lg-6 text-white ">
        <h2 className="bold py-3 text-orange">
          Legacy Smart Forests™</h2>
        <h3>Leave a legacy that will grow for centuries</h3>
        <h4>Give cleaner air, thriving wildlife habitats, and a healthier planet to future generations. </h4>
        </Col>
      </Row>
      <Row className=" text-center  justify-content-center">
        <Col className="col-lg-7">
        <Row className=" horizTab  justify-content-center">
         
        </Row>
        </Col>
      </Row>
      <Row className="text-center justify-content-center">
        <Col className="col-lg-7 pt-5">
        <p className="text-white bold">
        A Legacy Forest is your opportunity to invest in the future of our planet. Diversify your portfolio with  acres of reforested land, plentiful wildlife, cleaner air and water preservation. It's an investment that will pay off with lasting environmental, social, and economic returns for all Canadians in the years to come. 
        </p>
        </Col>
      </Row>




      <Row>
        <Col className="text-center py-5">
        <Button variant="green">Build a Legacy Smart Forest™</Button></Col>
      </Row>

      <Row className="justify-content-center">
        <Col className="col-lg-8 bg-brown roundedBox p-5">
          <Row className="justify-content-center bg-quote ">
            <Col className="p-5 text-white">

            <p className="text-orange large lead">
            We are running the most dangerous experiment in history right now, which is to see how much carbon dioxide the atmosphere can handle before there is a climate catastrophe.
            </p>
            <span className="authorLine">Elon Musk</span>
            <span className="authorTitle">CEO Tesla Motors</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5">
        <Col className="col-lg-6">
        <h3 className="text-center text-orange bold">Make a slow growth investment</h3>
        <p className="px-5 text-center text-white medium">Preserve and protect our planet now—and for future generations. 
</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-white p-4 col-md-6">
        <p>Generate remarkable returns by investing in:
          <ul className="bulletList">
            <li>
            Plant and wildlife biodiversity

            </li>
            <li>
Air purification
</li>
            <li>
            Local economies 
            </li>
            <li>
            Student programs </li>
            <li>
A proven, positive impact on climate change 
            </li>
          </ul>
</p>
        
        </Col>
       
      </Row>
      <Row className="justify-content-center">
      <Col className="outlineBox text-white p-4 col-lg-3">
        <h4 className="thin py-3">Calculate your net-zero carbon footprint</h4>
        <p>Learn how much carbon you generate in an average year.</p>
        <Link href="/carbon-calculator">
        <Button variant="green">Calculator</Button>
        </Link>
        </Col>
        <Col className="outlineBox text-white p-4 col-lg-3">
        <h4 className="thin py-3">Determine your net zero Smart Forest target</h4>
        <p>See how many hectares you need to plant to reach a net-zero emissions target. </p>
        <Link href="/carbon-calculator">
        <Button variant="green">Calculator</Button>
        </Link>
        </Col>
      </Row>
     
    </Container>
    

    {/* Communal Forests */}
    <Container fluid id="communal" className="bg-communal sectionPad">
      <Row className="text-center justify-content-center">
        <Col className="col-lg-6 text-white ">
        <h2 className="bold py-3 text-orange">
          Communal Smart Forests™</h2>
        <h3>Work together to protect future communities</h3>
        <h4>Every Canadian can take action on climate change</h4>
        </Col>
      </Row>
      <Row className=" text-center  justify-content-center">
        <Col className="col-lg-7">
        <Row className=" horizTab  justify-content-center">
         
        </Row>
        </Col>
      </Row>
      <Row className="text-center justify-content-center">
        <Col className="col-lg-7 pt-5">
        <p className="text-white bold">
        Each plant, animal, and microbe in the forest contributes something unique and essential to the ecosystem: a forest is a community that is greater than the sum of its parts. This simple, but powerful fact inspired the Communal ForestTM initiative. It’s an opportunity for every individual in Canada to play a part and help build a forest.
        </p>
        </Col>
      </Row>


       


      <Row>
        <Col className="text-center py-5">
        <Button variant="green">Build a Communal Smart Forest™</Button></Col>
      </Row>

      <Row className="justify-content-center">
        <Col className="col-lg-8 bg-brown roundedBox p-5">
          <Row className="justify-content-center bg-quote ">
            <Col className="p-5 text-white">

            <p className="text-orange large lead">
            What you do makes a difference, and you have to decide what kind of difference you want to make.
            </p>
            <span className="authorLine">Dr. Jane Goodall</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5">
        <Col className="col-lg-6">
        <h3 className="text-center text-orange bold">A forest is a community. And a community can build a forest.</h3>
        <p className="px-5 text-center text-white medium">Communal Forests are created by the thousands of Canadians who are here for change.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-white p-4 col-md-6">
        <p>A Communal Forest is:
          <ul className="bulletList">
            <li>
            <span className="bold">Accessible.</span> Anyone can take part without walking out the front door.  
            </li>
            <li>
            <span className="bold">Accountable.</span> Canada’s Forest Trust issues annual audits and reports so you can see the impact your forest makes.
            </li>
            <li>
            <span className="bold">Trackable.</span> See maintenance, preservation, growth measurements, and more through the online portal and dashboard.</li>
            <li>
            <span className="bold">Forever.</span> Every communal forest will be protected by insurance and a no clear-cut guarantee.
            </li>
          </ul>
</p>
        
        </Col>
       
      </Row>
      <Row className="justify-content-center">
      <Col className="outlineBox text-white p-4 col-lg-3">
        <h4 className="thin py-3">Calculate your net-zero carbon footprint</h4>
        <p>Learn how much carbon your school generates in an average year.  </p>
        <Link href="/carbon-calculator">
        <Button variant="green">Calculator</Button>
        </Link>
        </Col>
        <Col className="outlineBox text-white p-4 col-lg-3">
        <h4 className="thin py-3">Determine your net zero Smart Forest target</h4>
        <p>See how many hectares your school must plant to reach a net-zero emissions target.</p>
        <Link href="/carbon-calculator">
        <Button variant="green">Calculator</Button>
        </Link>
        </Col>
      </Row>
     
    </Container>

    <Container className="bg-green py-5">
    <Row className="justify-content-center pt-3">
    <Col className="col-12 col-md-4 col-lg-3  pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
        <h4 className="text-white tight-drop-light">Net-Zero Carbon Calculator</h4>
        <p className="flex-fill pb-3 text-white tight-drop">Determine your corporate, school, or individual carbon footprint and learn how you can get to net-zero.</p>
       
        <Link href="business-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">Proceed</a></Link>
        </div>
        </Col>

        <Col className="col-12 col-md-4 col-lg-3  pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
        <h4 className="text-white tight-drop-light">Smart Forest™ Calculator</h4>
        <p className="flex-fill pb-3 text-white tight-drop">Find out how many acres of Smart Forest you need to plant to get to a net-negative carbon footprint.</p>
       
        <Link href="offset-calculator"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">Proceed</a></Link>
        </div>
        </Col>

        <Col className="col-12 col-md-4 col-lg-3 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
        <h4 className="text-white tight-drop-light">Your portal</h4>
        <p className="flex-fill pb-3 text-white tight-drop">See how just how impactful Smart a Forest can be</p>
       
        <Link href="portal-demo"><a className="btn btn-text text-left text-orange bold no-underline tight-drop">Visit the Smart Forest demo portal</a></Link>
        </div>
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