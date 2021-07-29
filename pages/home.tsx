import React, { useState, useRef, useEffect, Component } from 'react';
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
import Header from "../components/header";

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
      {name: 'modal1_header', component: 'markdown' },
      {name: 'modal1_close', component: 'markdown' },
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
      <Header/>
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <Modal show={show} className=" d-flex align-items-center" onHide={handleClose}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center align-items-center mb-0">
            <Col>
              <h3 className="text-green smallCaps text-center">{editingdata.modal1_header}</h3>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="col-12 d-flex">
              <ReactPlayer playing playsinline controls url='./CFT_Rev8_DDC_ForApproval.mp4' className="video-size"/>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleClose}>{editingdata.modal1_close}</Button>
        </Modal.Footer>
      </Modal>

      <Row className="justify-content-left p-0 m-0 d-none d-lg-block d-xl-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <ReactMarkdown className="text-white m-2 bold op-6 d-none">{editingdata.home}</ReactMarkdown>
          <ul className="mt-5">
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">{editingdata.menu1}</a>
            </li>
            <li className="p-0 d-none" data-dest="#what">
              <a href="#what"  className="text-white bold no-underline">{editingdata.menu2}</a>
            </li>
            <li className="p-0 d-none" data-dest="#how">
              <a href="#how" className="text-white bold no-underline">{editingdata.menu3}</a>
            </li> 
            <li className="p-0 d-none" data-dest="#who">
              <a href="#who" className="text-white bold no-underline">{editingdata.menu4}</a>
            </li> 
            <li className="p-0" data-dest="#you">
              <a href="#you" className="text-white bold no-underline">{editingdata.menu5}</a>
            </li>
            <li className="p-0 d-none" data-dest="#calculate" >
              <a href="#calculate" className="text-white bold no-underline">{editingdata.menu6}</a>
            </li>
          </ul>
        </Col>
      </Row>
      <main>
        <Parallax className="fadein"
          bgImage='/landingSKY.png'
          bgImageAlt="SKY"
          strength={500}
        >
          <Parallax className="fadein"
            bgImage='/landingLAND.png'
            bgImageAlt="LAND"
            strength={200}
          >
            <Container id="intro" fluid className="v-full d-flex py-5 flex-column z-0">
              <Row className="justify-content-center align-items-center py-6">
                <Col className="col-11 col-lg-8 col-xl-6 py-5 p-md-1">
                  <h1 className="text-center text-white drop hero mt-5 mb-4"><ReactMarkdown>{editingdata.part1_header1}</ReactMarkdown></h1>
                  <h2 className="h1 text-center mb-5 pb-5 text-white hero bold"><ReactMarkdown>{editingdata.part1_header2}</ReactMarkdown></h2>
                </Col>
              </Row>
              <Fade bottom>
                <Row className="justify-content-center pb-4">
                  <Col className="col-10 col-md-6 col-lg-8 pe-lg-0 p-0">
                    <h2 className="intro-par text-center text-white bold pb-0"><ReactMarkdown>{editingdata.part1_header4}</ReactMarkdown></h2>
                  </Col>
                </Row>
                <Row className="justify-content-center pb-5 align-items-stretch mb-5 mb-sm-0 px-lg-3 mx-lg-3 px-xl-5 mx-xl-5">
                <Col className="col-10 col-md-8 col-lg-5 col-xl-3 mb-4">
                  <div className="roundedBox card no-border bg-white mx-1 p-4 h-100">
                  <ReactMarkdown className="text-grey m-2">{editingdata.part1_box1para}</ReactMarkdown>
                    </div>
                  </Col>
                  <Col className="col-10 col-md-8 col-lg-5 col-xl-3 mb-4">
                    <div className="roundedBox card no-border bg-white mx-1 p-4 h-100">
                    <ReactMarkdown className="text-grey m-2">{editingdata.part1_box2para}</ReactMarkdown>
                    </div>
                  </Col>
                  <Col className="col-10 col-md-8 col-lg-5 col-xl-3 mb-4">
                    <div className="roundedBox card no-border bg-white mx-1 p-4 h-100">
                    <ReactMarkdown className="text-grey m-2">{editingdata.part1_box3para}</ReactMarkdown>
                    </div>
                  </Col>
                  <Col className="col-10 col-md-8 col-lg-5 col-xl-3 mb-4">
                    <div className="roundedBox card no-border bg-white mx-1 p-4 h-100">
                    <ReactMarkdown className="text-grey m-2">{editingdata.part1_box4para}</ReactMarkdown>
                    </div>
                  </Col>
                  <Col className="text-center col-10 col-lg-12 pb-5 mt-4">
                    <a className="btn btn-xl btn-green intro-cta" onClick={handleShow}>{editingdata.part1_button1}</a>
                  </Col>
                </Row>
              </Fade>
            </Container>
          </Parallax>
        </Parallax>
        

        <Container id="what" fluid className="v-full z-999 bg-green align-items-center p-5 container-drop-heavy d-none">
          <Fade bottom>
            <Row className="py-5 align-items-center justify-content-center mt-2 ms-lg-1">
              <Col className="order-2 order-lg-1 col-12 p-5 col-md-4 text-white ms-lg-5 pe-lg-2">
                <h2 className="text-orange bold pe-lg-4"><ReactMarkdown>{editingdata.part2_header1}</ReactMarkdown></h2>
                <ReactMarkdown className="pb-3 mb-2 thin pe-lg-5">{editingdata.part2_para1}</ReactMarkdown>
                <Link href="/what-is-a-smart-forest"><a className="btn btn-green">{editingdata.part2_button1}</a></Link>
              </Col>
              <Col className="order-1 order-lg-2 col-12 col-md-5 p-4 ps-lg-0">
                <object className="op-8" type="image/svg+xml" data="/power2-svg.svg"/>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container id="how" fluid className="v-full z-999 bg-green p-5 d-none">
          <Fade bottom>
            <Row className="py-5 align-items-center justify-content-center p-4">
              <Col className="col-12 col-md-5 p-5">
                <object type="image/svg+xml" data="/build2-svg.svg"/>
              </Col>
              <Col className="col-12 p-5 ps-lg-2 col-md-4 text-white">
                <h2 className="text-orange bold"><ReactMarkdown>{editingdata.part3_header1}</ReactMarkdown></h2>
                <ReactMarkdown className="pb-3 mb-2 thin">{editingdata.part3_para1}</ReactMarkdown>
                <Link href="/build-your-smart-forest" >
                  <a className="btn btn-green px-lg-5">{editingdata.part3_button1}</a>
                </Link>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container  id="who" fluid className="v-full z-999 bg-green py-5 mt-4 mb-4 d-none">
          <Fade bottom>
          <Row className="pe-5 align-items-center justify-content-center  align-items-stretch protorow pb-0 mb-0 ms-lg-5">
            <Col className="col-10 col-md-3 text-white mb-5 py-5 px-5 me-5 ms-5">
                <h2 className="text-orange bold"><ReactMarkdown>{editingdata.part4_header1}</ReactMarkdown></h2>
                <ReactMarkdown className="mb-4 thin">{editingdata.part4_para1}</ReactMarkdown>
                <svg className="down-arrow d-none" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 29.46"><path d="M73.41,13.59,60.69.86a2,2,0,0,0-2.83,2.83L67.17,13H0v4H67.17l-9.31,9.31a2,2,0,1,0,2.83,2.83L73.41,16.41A2,2,0,0,0,73.41,13.59Z"/></svg>
              </Col>
              <Col className="col-12 col-md-4 p-1">
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container id="you" fluid className="v-full z-999 bg-green py-6 container-drop-heavy">
          <Fade bottom>
          <Row  className="align-items-center justify-content-center pt-5 mt-0">
              <Col className="col-10 col-lg-6 pe-lg-0 mb-2 pt-0 mt-0">
                <h2 className="text-center text-orange bold pt-0 mt-0"><ReactMarkdown>{editingdata.part5_header1}</ReactMarkdown></h2>
              </Col>
            </Row>
          <Row className="justify-content-center align-items-stretch pb-5">
            <Col className="col-10 col-md-8 pe-lg-0 m-3">
              <div className="roundedBox card bg-mildgreen no-border py-3 d-flex flex-column drop action-card">
                <Link href="/build-your-smart-forest">
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop">{editingdata.part5_button1}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-8 pe-lg-0 m-3">
              <div className="roundedBox card bg-mildgreen no-border py-3 d-flex flex-column drop action-card">
                <Link href="/build-your-smart-forest#corporate">
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop">{editingdata.part5_button2}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-8 pe-lg-0 m-3">
              <div className="roundedBox card  bg-mildgreen  no-border py-3 d-flex flex-column drop action-card">
                <Link href="/build-your-smart-forest#school">
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop">{editingdata.part5_button3}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-8 pe-lg-0 m-3">
              <div className="roundedBox card bg-mildgreen no-border py-3 d-flex flex-column drop action-card">
                <Link href="/build-your-smart-forest#legacy" >
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop">{editingdata.part5_button4}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-8 pe-lg-0 m-3">
              <div className="roundedBox card bg-mildgreen no-border py-3 d-flex flex-column drop action-card">
                <Link href="/build-your-smart-forest#communal" >
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop 1">{editingdata.part5_button5}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-8 pe-lg-0 m-3 d-none">
              <div className="roundedBox card bg-mildgreen no-border py-3 d-flex flex-column drop action-card">
                <Link href="/build-your-smart-forest#school">
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop">{editingdata.part5_button6}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-8 pe-lg-0 m-3">
              <div className="roundedBox card bg-mildgreen no-border py-3 d-flex flex-column drop action-card">
                <Link href="/carbon-calculator">
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop">{editingdata.part5_button7}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-8 pe-lg-0 m-3">
              <div className="roundedBox card bg-mildgreen no-border py-3 d-flex flex-column drop action-card">
                <Link href="/about">
                  <a className="forest-choice btn btn-text text-center text-white no-underline tight-drop">{editingdata.part5_button8}</a>
                </Link>
              </div>
            </Col>
           </Row>
          </Fade>
        </Container>
      
        <Container id="calculate" fluid className="v-full z-999 bg-green pt-5 mt-0 mb-5 d-none">
          <Fade bottom>
            <Row className="align-items-center justify-content-center pt-4">
              <Col className="col-10 col-lg-7 pe-lg-0 mb-4">
                <h2 className="text-center text-orange bold"><ReactMarkdown>{editingdata.part6_header1}</ReactMarkdown></h2>
                <ReactMarkdown className="text-center large my-2 text-white">{editingdata.part6_para1}</ReactMarkdown>
              </Col>
            </Row>
            <Row className="justify-content-center  align-items-stretch mx-lg-5">
                <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.part6_box1para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.part6_box1para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.part6_box1para3}</ReactMarkdown>
                  <Link href="carbon-calculator">
                    <Button variant="green" className="mt-5">{editingdata.part6_box1button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.part6_box2para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.part6_box2para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-4">{editingdata.part6_box2para3}</ReactMarkdown>
                  <Button variant="green mt-3">{editingdata.part6_box2button1}</Button>
                </div>
              </Col>
              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.part6_box3para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.part6_box3para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.part6_box3para3}</ReactMarkdown>
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
