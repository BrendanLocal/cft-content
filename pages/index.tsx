import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'
import Fade from 'react-reveal/Fade';
import { Parallax, Background } from 'react-parallax';


const Lang = () => {
  var language = "en";
    const router = useRouter();
    if(router.query.lang){ 
    const lan = JSON.stringify(router.query.lang);
    language = JSON.parse(lan)
    }
  
    return (language)
  }
  
  
  
  export default function Home({ file, href, children}) {
  
    const router = useRouter();
  
    
  const formOptions = {
  label: 'Home Page',
  fields: [{ name: 'title', component: 'text' }],
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
    observer.observe(id);
  });
  
  }, []);
  
  
  
  return (
<div className={styles.homeParallax}>
  

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>

  <Row className="justify-content-left p-0 m-0 d-none d-lg-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white m-2 bold op-6 ">HOME</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">
               INTRO
              </a>
            </li>
            <li className="p-0" data-dest="#what" >              
              <a href="#what" className="text-white bold no-underline">
                WHAT
              </a>
            </li>
            <li className="p-0" data-dest="#how">
              <a href="#how" className="text-white bold no-underline ">
                HOW
              </a>
            </li>
            <li className="p-0" data-dest="#who">             
              <a href="#who" className="text-white bold no-underline ">
                WHO
              </a>
            </li>
            <li className="p-0" data-dest="#you">              
              <a href="#you" className="text-white bold no-underline ">
                YOU
              </a>
            </li>
            <li className="p-0" data-dest="#calculate" >  
              <a href="#calculate" className="text-white bold no-underline ">
                CALCULATE
              </a>
            </li>
          </ul>        
        </Col>
      </Row>


  <main id="intro">
  <Parallax
        bgImage='/landingSKY.png'
        bgImageAlt="SKY"
        strength={500}
        
    >
   <Parallax
        bgImage='/landingLAND.png'
        bgImageAlt="LAND"
        strength={200}
    >

 


    <Container  id="intro" fluid className="v-full d-flex py-5 flex-column z-0">
      <Row className="justify-content-center align-items-center pt-5 my-5">
        <Col className="col-12 col-lg-8 col-xl-6 pt-5 p-md-1">
        <h1 className=" text-white mb-5 tight-drop-light">
         Simply planting trees won’t save our planet.
        </h1>

        <h2 className="h1 mb-5 mt-3 text-white bold"> 
        Building forests will.
        </h2>
        </Col>
      </Row>

    <Fade bottom>
        
        <Row className="justify-content-center align-items-center mb-5 py-5">
        <Col className="col-12 col-lg-8 col-xl-6 p-md-1 mb-5 py-5">
        <p className="intro-par text-white bold pe-5 pe-lg-0 py-3">With your help, we will reforest 10 million acres of Canadian land and protect it forever. </p>
       
        
        </Col>
        </Row>
        
    </Fade>
        
        
      <Fade bottom>
      <Row className="justify-content-center  pb-5">
        <Col className="col-12 col-lg-8 pe-lg-0 mb-0 p-0">
          <h2 className="intro-par text-center text-white mb-0 bold ">Canada's Forest Trust</h2>
        </Col>
      </Row>
      <Row className="justify-content-center  pb-5 align-items-stretch mb-5">
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3">
          <div className="roundedBox card no-border bg-white p-4 h-100 ">
            <p className="large text-green">
            <span className="bold">Recognizes</span> <span className="thin">that we need bold, long-term solutions to reverse the damage caused by deforestation and emissions in Canada</span></p>
          </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3 ">
          <div className="roundedBox card no-border bg-white p-4 h-100 ">
          <p className="large text-green">
          <span className="bold">Leverages</span> <span className="thin">data-driven technologies and advanced analytics to support healthy, sustainable and biodiverse Smart Forests™</span></p>
          </div>
        </Col>
        <Col className="col-12 col-lg-3 col-xl-2 pe-5 pe-lg-0 m-3">
          <div className="roundedBox card no-border bg-white p-4 h-100 ">
          <p className="large text-green">
          <span className="bold">Guarantees</span> <span className="thin">protection and preservation through forest management practices that are based in science and designed for longevity</span></p>
          </div>
        </Col>

        <Col className="text-center col-lg-12 pb-5 pe-5 mt-5 pe-lg-0">
        <Link href="/what-is-a-smart-forest" ><a className="btn btn-large btn-green">Discover the Smart Forest initiative</a></Link>
        </Col>
      </Row>   
      </Fade>
    </Container>
    </Parallax>
    </Parallax>
    

    <Container id="what"  fluid className="v-full z-999 bg-green align-items-center p-5 container-drop-heavy">
      <Fade bottom>
      <Row className="py-5 align-items-center justify-content-center mt-5">
        
        <Col className="order-2 order-lg-1 col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">What is a Smart Forest?</h2>
        <p className="pb-3 thin">A Smart Forest combines the resilience of a natural ecosystem, developed over millennia, with the predictive capabilities of today’s technologies. Inside a Smart Forest, life thrives; outside of it, scientists, students, investors and conservationists use digital instruments to understand and activate the forest’s role in cleaning our water, purifying our air, and replenishing our lost resources.</p>
        <Link href="/what-is-a-smart-forest" ><a className="btn btn-green  ">Learn more about Smart Forests</a></Link>
      
        </Col>
        <Col className="order-1 order-lg-2 col-12 col-md-4 p-5 roundedBox innerShadow">
        
          <object type="image/svg+xml" data="/power2-svg.svg"/>
         
        </Col>

      </Row>
      </Fade>
    </Container>

    <Container id="how" fluid className="v-full z-999 bg-green p-5">
    <Fade bottom>
    <Row  className="py-5 align-items-center justify-content-center ">
    <Col className="col-12 col-md-4 p-5 roundedBox innerShadow bg-brown">

    <object type="image/svg+xml" data="/build2-svg.svg"/>
    
    
    </Col>
        <Col className="col-12 p-5 col-md-4 text-white">
        <h2 className="text-orange bold">How does a Smart Forest happen?</h2>
        <p className="pb-3 thin">To plant a tree, you need a shovel. To build a Smart Forest, you need a five-phase strategic action plan, validated by modern science and calibrated to address the needs of a healthy, thriving forest, now and for decades to come.</p>
        <Link href="/build-your-forest" ><a className="btn btn-green">
        Explore our Smart Forest action plan</a></Link>
      
        </Col>
        

      </Row>
    </Fade>
    </Container>

    <Container  id="who" fluid className="v-full z-999 bg-green pt-3 pb-5 mb-4">
    <Fade bottom>
    <Row className="pt-5 align-items-center justify-content-center  align-items-stretch protorow pb-0 mb-0">
    
        <Col className="col-12 col-md-3 text-white mb-5 py-5 px-5">
        <h2 className="text-orange bold">Who can support a Smart Forest?</h2>
        <p className="mb-4 thin">If you care about the future of our planet and the health of our natural ecosystems, you belong here. We invite youth, families, farmers, landowners, indigenous communities and Canada’s corporate leaders to collaborate on this resilient, long-term climate solution.</p>
        <svg className="down-arrow d-none" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 29.46"><path d="M73.41,13.59,60.69.86a2,2,0,0,0-2.83,2.83L67.17,13H0v4H67.17l-9.31,9.31a2,2,0,1,0,2.83,2.83L73.41,16.41A2,2,0,0,0,73.41,13.59Z"/></svg>
        
        </Col>
        <Col className="col-12 col-md-4 p-1">
                      
        </Col>
      </Row>
      </Fade>
    </Container>

    <Container id="you" fluid className="v-full z-999 bg-green pt-0 mt-0">
    <Fade bottom>
      <Row  className="align-items-center justify-content-center pt-0 mt-0">
        <Col className="col-12 col-lg-6 pe-lg-0 mb-2 pt-0 mt-0">
          <h2 className="text-center text-orange bold pt-0 mt-0">I would like to… </h2>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-stretch">
      <Col className="col-12 col-md-6 col-lg-6 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border py-4 d-flex flex-column drop corporate-card ">
       
        <Link href="/build-your-forest#corporate" ><a className="forest-choice btn btn-text text-center text-white no-underline tight-drop py-1">Meet my corporate ESG obligations</a></Link>
        </div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-6  pe-lg-0 m-3 ">
        <div className="roundedBox card bg-green no-border py-4 d-flex flex-column drop school-card ">
        
        <Link href="/build-your-forest#school" ><a className="forest-choice btn btn-text text-center text-white no-underline tight-drop py-1">Get my school involved</a></Link>
        </div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-6  pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border py-4 d-flex flex-column drop legacy-card">
        
        <Link href="/build-your-forest#legacy" ><a className="forest-choice btn btn-text text-center text-white no-underline tight-drop py-1">Establish a legacy forest</a></Link></div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-6 pe-lg-0 m-3">
        <div className="roundedBox card bg-green no-border py-4 d-flex flex-column drop communal-card ">
        <Link href="/build-your-forest#communal" ><a className="forest-choice btn btn-text text-center text-white no-underline tight-drop py-1">Contribute to a communal forest</a></Link> </div>
        </Col>
      </Row>
    </Fade>
    </Container>
    
    <Container id="calculate" fluid className="v-full z-999 bg-green pt-0 mt-0 mb-0">
    <Fade bottom>
    <Row className="align-items-center justify-content-center pt-0 mt-0 mb-0">
      <Col className="col-12 col-lg-7 pe-lg-0 mb-4">
      <h2 className="text-center text-orange mb-2 bold ">What difference can I make?</h2>
      <p className="text-center large text-white thin op-8">Use our custom-built net-zero carbon calculator and forest calculator to understand exactly how your investment in Smart Forests will offset your climate impact.</p>
      </Col>
      </Row>
      <Row className="justify-content-center  align-items-stretch mx-5">
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card op-8">
            <p className="h6 text-orange bold">
              STEP 1
            </p>
            <p className="large text-green mb-3 ">
            What is your carbon footprint?
            </p>
          <p className="text-grey mb-5 op-8">
          Calculate how much carbon you, your family, your corporation, or your school generates in an average year.
          </p>
          <Button variant="green" className="mt-4">      
          Calculate your carbon footprint
        </Button>
          </div>
        </Col>
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card op-8">
            <p className="h6 text-orange bold">
              STEP 2
            </p>
            <p className="large text-green mb-3 ">
          Your “net zero” Smart Forest target</p>
          <p className="text-grey mb-5 op-8">
          Calculate how many hectares you, your family, your corporation, or your school must invest in to reach a net-zero emissions target. </p>
          <Button variant="green">      
          Calculate your NET ZERO target
        </Button>
          </div>
        </Col>
        <Col className="col-12 col-lg-4 col-xl-3 pe-lg-0">
          <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card op-8">
            <p className="h6 text-orange bold">
              STEP 3
            </p>
            <p className="large text-green mb-3 ">
            Your “net negative” Smart Forest target</p>
          <p className="text-grey mb-5 op-8">
          Calculate how many hectares you, your corporation, or your school must invest in to reach a net-negative emissions target.</p>
          <Button variant="green" className="mt-4">      
          Calculate your NET NEGATIVE target
        </Button>
          </div>
        </Col>

        </Row>
      </Fade>
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
fileRelativePath: 'content/home.json',
parse: parseJson,
})
}
return {
props: {
sourceProvider: null,
error: null,
preview: false,
file: {
fileRelativePath: 'content/home.json',
data: (await import('../content/home.json')).default,
},
},
}
}
