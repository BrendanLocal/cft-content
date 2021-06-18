import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { useMarkdownForm } from 'next-tinacms-markdown'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'
import Fade from 'react-reveal/Fade';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player'
import { Parallax, Background } from 'react-parallax';
import ReactMarkdown from 'react-markdown'

const Lang = () => {
  var language ="en";
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
    fields: [
      {name: 'title', component: 'markdown' },
      {name: 'home', component: 'markdown' },
      {name: 'menu1', component: 'markdown' },
      {name: 'menu2', component: 'markdown' },
      {name: 'menu3', component: 'markdown' },
      {name: 'menu4', component: 'markdown' },
      {name: 'menu5', component: 'markdown' },
      {name: 'menu6', component: 'markdown' },
      {name: 'part1_header1', component: 'markdown' },
      {name: 'part1_header2', component: 'markdown' },
      {name: 'part1_header3', component: 'markdown' },
      {name: 'part1_header4', component: 'markdown' },
      {name: 'part1_box1para', component: 'markdown' },
      {name: 'part1_box2para', component: 'markdown' },
      {name: 'part1_box3para', component: 'markdown' },
      {name: 'part1_button1', component: 'markdown' },
      {name: 'part2_header1', component: 'markdown' },
      {name: 'part2_para1', component: 'markdown' },
      {name: 'part2_button1', component: 'markdown' },
      {name: 'part3_header1', component: 'markdown' },
      {name: 'part3_para1', component: 'markdown' },
      {name: 'part3_button1', component: 'markdown' },
      {name: 'part4_header1', component: 'markdown' },
      {name: 'part4_para1', component: 'markdown' },
      {name: 'part5_header1', component: 'markdown' },
      {name: 'part5_button1', component: 'markdown' },
      {name: 'part5_button2', component: 'markdown' },
      {name: 'part5_button3', component: 'markdown' },
      {name: 'part5_button4', component: 'markdown' },
      {name: 'part6_header1', component: 'markdown' },
      {name: 'part6_para1', component: 'markdown' },
      {name: 'part6_box1para1', component: 'markdown' },
      {name: 'part6_box1para2', component: 'markdown' },
      {name: 'part6_box1para3', component: 'markdown' },
      {name: 'part6_box1button1', component: 'markdown' },
      {name: 'part6_box2para1', component: 'markdown' },
      {name: 'part6_box2para2', component: 'markdown' },
      {name: 'part6_box2para3', component: 'markdown' },
      {name: 'part6_box2button1', component: 'markdown' },
      {name: 'part6_box3para1', component: 'markdown' },
      {name: 'part6_box3para2', component: 'markdown' },
      {name: 'part6_box3para3', component: 'markdown' },
      {name: 'part6_box3button1', component: 'markdown' }
    ]
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div className={styles.homeParallax}>
      <Head>
        <title>Canada's Forest Trust</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center align-items-center mb-0">
            <Col>
            <h3 className="text-green smallCaps text-center">THE SMART FOREST INITIATIVE</h3>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center ps-lg-4 ms-lg-3">
            <Col className="col-12 d-flex ms-lg-4 mb-2">
            
            <ReactPlayer playing playsinline controls url='./CFT_Rev8_DDC_ForApproval.mp4'/>
           
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="p-0">
        <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="justify-content-left p-0 m-0 d-none d-lg-block d-xl-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white m-2 bold op-6">{editingdata.home}</p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">{editingdata.menu1}</a>
            </li>
            <li className="p-0" data-dest="#what">
              <a href="#what" className="text-white bold no-underline">{editingdata.menu2}</a>
            </li>
            <li className="p-0" data-dest="#how">
              <a href="#how" className="text-white bold no-underline">{editingdata.menu3}</a>
            </li> 
            <li className="p-0" data-dest="#who">
              <a href="#who" className="text-white bold no-underline">{editingdata.menu4}</a>
            </li> 
            <li className="p-0" data-dest="#you">
              <a href="#you" className="text-white bold no-underline">{editingdata.menu5}</a>
            </li>
            <li className="p-0" data-dest="#calculate" >
              <a href="#calculate" className="text-white bold no-underline">{editingdata.menu6}</a>
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
            <Container id="intro" fluid className="v-full d-flex py-5 flex-column z-0">
              <Row className="justify-content-center align-items-center py-5">
                <Col className="col-10 col-lg-8 col-xl-6 py-5 p-md-1">
                  <h1 className=" text-white drop mt-3 mb-5"><ReactMarkdown>{editingdata.part1_header1}</ReactMarkdown></h1>
                  <h2 className="h1 mb-5 mt-3 text-white bold"><ReactMarkdown>{editingdata.part1_header2}</ReactMarkdown></h2>
                </Col>
              </Row>
              <Fade bottom>
              <Row className="justify-content-center  pb-5">
              <Col className="col-10 col-lg-8 col-xl-6 p-md-1 mb-5 py-5">
                <p className="intro-par text-white bold pe-5  py-3"><ReactMarkdown>{editingdata.part1_header3}</ReactMarkdown></p>
                  </Col>
                </Row>
              </Fade>
              <Fade bottom>
                <Row className="justify-content-center pb-5">
                  <Col className="col-10 col-lg-8 pe-lg-0 mb-0 p-0">
                    <h2 className="intro-par text-center text-white mb-0 bold"><ReactMarkdown>{editingdata.part1_header4}</ReactMarkdown></h2>
                  </Col>
                </Row>
                <Row className="justify-content-center pb-5 align-items-stretch mb-5">
                <Col className="col-10 col-lg-3 col-xl-2  mx-3 mb-4">
                  <div className="roundedBox card no-border bg-white p-4 h-100">
                      <p className="large text-green"><ReactMarkdown>{editingdata.part1_box1para}</ReactMarkdown></p>
                    </div>
                  </Col>
                  <Col className="col-10 col-lg-3 col-xl-2  mx-3 mb-4">
                    <div className="roundedBox card no-border bg-white p-4 h-100">
                      <p className="large text-green"><ReactMarkdown>{editingdata.part1_box2para}</ReactMarkdown></p>
                    </div>
                  </Col>
                  <Col className="col-10 col-lg-3 col-xl-2  mx-3 mb-4">
                    <div className="roundedBox card no-border bg-white p-4 h-100">
                      <p className="large text-green"><ReactMarkdown>{editingdata.part1_box3para}</ReactMarkdown></p>
                    </div>
                  </Col>
                  <Col className="text-center col-10 col-lg-12 pb-5 mt-3 ">
                    <a className="btn btn-large btn-green intro-cta" onClick={handleShow}>{editingdata.part1_button1}</a>
                  </Col>
                </Row>
              </Fade>
            </Container>
          </Parallax>
        </Parallax>
        

        <Container id="what" fluid className="v-full z-999 bg-green align-items-center p-5 container-drop-heavy">
          <Fade bottom>
            <Row className="py-5 align-items-center justify-content-center mt-5">
              <Col className="order-2 order-lg-1 col-12 p-5 col-md-4 text-white">
                <h2 className="text-orange bold"><ReactMarkdown>{editingdata.part2_header1}</ReactMarkdown></h2>
                <p className="pb-3 thin"><ReactMarkdown>{editingdata.part2_para1}</ReactMarkdown></p>
                <Link href="/what-is-a-smart-forest"><a className="btn btn-green">{editingdata.part2_button1}</a></Link>
              </Col>
              <Col className="order-1 order-lg-2 col-12 col-md-5">
                <object className="op-6" type="image/svg+xml" data="/power2-svg.svg"/>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container id="how" fluid className="v-full z-999 bg-green p-5">
          <Fade bottom>
            <Row className="py-5 align-items-center justify-content-center">
              <Col className="col-12 col-md-5 p-5">
                <object type="image/svg+xml" data="/build2-svg.svg"/>
              </Col>
              <Col className="col-12 p-5 col-md-4 text-white">
                <h2 className="text-orange bold"><ReactMarkdown>{editingdata.part3_header1}</ReactMarkdown></h2>
                <p className="pb-3 thin"><ReactMarkdown>{editingdata.part3_para1}</ReactMarkdown></p>
                <Link href="/build-your-smart-forest" >
                  <a className="btn btn-green">{editingdata.part3_button1}</a>
                </Link>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container  id="who" fluid className="v-full z-999 bg-green py-5 mb-4">
          <Fade bottom>
          <Row className="pe-5 align-items-center justify-content-center  align-items-stretch protorow pb-0 mb-0">
            <Col className="col-10 col-md-3 text-white mb-5 py-5 px-5 me-5">
                <h2 className="text-orange bold"><ReactMarkdown>{editingdata.part4_header1}</ReactMarkdown></h2>
                <p className="mb-4 thin"><ReactMarkdown>{editingdata.part4_para1}</ReactMarkdown></p>
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
              <Col className="col-10 col-lg-6 pe-lg-0 mb-2 pt-0 mt-0">
                <h2 className="text-center text-orange bold pt-0 mt-0"><ReactMarkdown>{editingdata.part5_header1}</ReactMarkdown></h2>
              </Col>
            </Row>
          <Row className="justify-content-center align-items-stretch">
            <Col className="col-11 col-md-6 col-lg-6 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border py-4 d-flex flex-column drop corporate-card">
                <Link href="/build-your-smart-forest#corporate">
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop py-1">{editingdata.part5_button1}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-11 col-md-6 col-lg-6 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border py-4 d-flex flex-column drop school-card">
                <Link href="/build-your-smart-forest#school">
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop py-1">{editingdata.part5_button2}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-11 col-md-6 col-lg-6 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border py-4 d-flex flex-column drop legacy-card">
                <Link href="/build-your-smart-forest#legacy" >
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop py-1">{editingdata.part5_button3}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-11 col-md-6 col-lg-6 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border py-4 d-flex flex-column drop communal-card">
                <Link href="/build-your-smart-forest#communal" >
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop py-1">{editingdata.part5_button4}</a>
                </Link>
              </div>
            </Col>
           </Row>
          </Fade>
        </Container>
      
        <Container id="calculate" fluid className="v-full z-999 bg-green pt-0 mt-0 mb-5">
          <Fade bottom>
            <Row className="align-items-center justify-content-center pt-0 mt-0 mb-0">
              <Col className="col-10 col-lg-7 pe-lg-0 mb-4">
                <h2 className="text-center text-orange mb-2 bold"><ReactMarkdown>{editingdata.part6_header1}</ReactMarkdown></h2>
                <p className="text-center large text-white thin op-9"><ReactMarkdown>{editingdata.part6_para1}</ReactMarkdown></p>
              </Col>
            </Row>
            <Row className="justify-content-center  align-items-stretch mx-lg-5">
                <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="h6 text-mildgreen bold"><ReactMarkdown>{editingdata.part6_box1para1}</ReactMarkdown></p>
                  <p className="large text-green mb-2"><ReactMarkdown>{editingdata.part6_box1para2}</ReactMarkdown></p>
                  <p className="text-grey mb-3"><ReactMarkdown>{editingdata.part6_box1para3}</ReactMarkdown></p>
                  <Link href="carbon-calculator">
                    <Button variant="green" className="mt-5">{editingdata.part6_box1button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="h6 text-mildgreen bold"><ReactMarkdown>{editingdata.part6_box2para1}</ReactMarkdown></p>
                  <p className="large text-green mb-2"><ReactMarkdown>{editingdata.part6_box2para2}</ReactMarkdown></p>
                  <p className="text-grey mb-4"><ReactMarkdown>{editingdata.part6_box2para3}</ReactMarkdown></p>
                  <Button variant="green mt-3">{editingdata.part6_box2button1}</Button>
                </div>
              </Col>
              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="h6 text-mildgreen bold"><ReactMarkdown>{editingdata.part6_box3para1}</ReactMarkdown></p>
                  <p className="large text-green mb-2"><ReactMarkdown>{editingdata.part6_box3para2}</ReactMarkdown></p>
                  <p className="text-grey mb-3"><ReactMarkdown>{editingdata.part6_box3para3}</ReactMarkdown></p>
                  <Button variant="green" className="mt-5">{editingdata.part6_box3button1}</Button>
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
export const getStaticProps: GetStaticProps = async function({preview, previewData,}) {
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
