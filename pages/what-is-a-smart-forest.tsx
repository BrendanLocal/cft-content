import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Rellax from"rellax";
import ReactPlayer from 'react-player';
import Parallax from 'parallax-js'
import ReactMarkdown from 'react-markdown'

export default function Power({ file }) {
  const formOptions = {
    label: 'What is a Smart Forest',
    fields: [{ name: 'title', component: 'text' }],
  }

  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()
  useEffect(() =>{

    const observer = new IntersectionObserver(entries =>{
      entries.forEach(entry =>{
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio>0.0 ) {
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
    document.querySelectorAll('div[id]').forEach((id) =>{
      observer.observe(id);
    });
  }, []);

  return (  
    <div>
      <Head>
        <title>Canada's Forest Trust</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>
      <Row className="justify-content-left p-0 m-0 d-none d-lg-block d-xl-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <ReactMarkdown className="text-white m-2 bold op-6">{editingdata.smartForest}</ReactMarkdown>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">{editingdata.menu1}</a>
            </li>
            <li className="p-0" data-dest="#commitment">
              <a href="#commitment" className="text-white bold no-underline">{editingdata.menu2}</a>
            </li>
            <li className="p-0" data-dest="#forever">
              <a href="#forever" className="text-white bold no-underline">{editingdata.menu3}</a>
            </li>
            <li className="p-0" data-dest="#smart-forests">      
              <a href="#smart-forests" className="text-white bold no-underline">{editingdata.menu4}</a>
            </li>
            <li className="p-0" data-dest="#earth">       
              <a href="#earth" className="text-white bold no-underline">{editingdata.menu5}</a>
            </li>
          </ul>  
        </Col>
      </Row>

      <main className="bg-green py-5">
        <Container id="intro" className="bg-green py-5 px-5">
          <Row className="justify-content-center d-flex pb-5 mb-5 py-5 px-5">
            <Col className="order-2 order-lg-1 col-12 col-lg-5 text-white p-4 pb-0 intro-order">
              <h1 className="text-orange mb-5 bold">{editingdata.part1_header1}</h1>
              <ReactMarkdown className="large my-5 op-9">{editingdata.part1_para1}</ReactMarkdown>
              <ReactMarkdown className="text-white text-left smallcaps intro-links-header op-5 mt-4">{editingdata.part1_header2}</ReactMarkdown>
              <a href="#commitment" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu1}</a>
              <a href="#forever" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu2}</a>
              <a href="#smart-forests" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu3}</a>
              <a href="#earth" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu4}</a>
            </Col>
            <Col className="order-1 order-lg-2 col-12 col-lg-5 stickyTop mb-5">
              <object className="op-8" type="image/svg+xml" data="/power2-svg.svg"/>
            </Col>
          </Row>
        </Container>

        <Container id="commitment" fluid className="v-full z-999 bg-green py-5">
          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center">
              <Col className="col-10 col-lg-7 pt-3">
                <h2 className="text-center text-orange bold mb-2">{editingdata.part2_header1}:</h2>
                <ReactMarkdown className="emphasis text-center text-white bold mb-3">{editingdata.part2_header2}</ReactMarkdown>
                <ReactMarkdown className="text-center text-white thin op-9">{editingdata.part2_para1}</ReactMarkdown>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-5 px-lg-5">
              <Col className="col-12 col-lg-5 bg-brown roundedBox innerShadow px-5 pt-5 pb-4 m-4">          
                <h3 className="h2 text-orange">{editingdata.part2_box1header1}</h3>
                <ul className="text-white checkMark">
                  <li>{editingdata.part2_box1headerpara1}</li>
                  <li>{editingdata.part2_box1headerpara2}</li>
                  <li>{editingdata.part2_box1headerpara3}</li>
                  <li>{editingdata.part2_box1headerpara4}</li>
                  <li>{editingdata.part2_box1headerpara5}</li>
                </ul>
              </Col>
              <Col className="col-12 col-lg-5 roundedBox card card-drop px-5 pt-5 pb-4 m-4">
                <h3 className="h2 text-orange">{editingdata.part2_box2header1}</h3>
                <ul className="text-grey plus">
                  <li>{editingdata.part2_box2headerpara1}</li>
                  <li>{editingdata.part2_box2headerpara2}</li>
                  <li>{editingdata.part2_box2headerpara3}</li>
                  <li>{editingdata.part2_box2headerpara4}</li>
                  <li>{editingdata.part2_box2headerpara5}</li>
                  <li>{editingdata.part2_box2headerpara6}</li>
                </ul>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container id="forever" fluid className="v-full z-999 bg-green py-5">
          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center">
              <Col className="col-10 col-lg-8 pt-3">
                <h2 className="text-center text-orange bold mb-2">{editingdata.part3_header1}</h2>
                <ReactMarkdown className="text-center text-white lead op-9">{editingdata.part3_header2}</ReactMarkdown>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-5">
              <Col className="col-11 col-lg-8 bg-brown roundedBox innerShadow p-5 m-4 blockquote-bg-scale">
                <h3 className="text-left blockquote text-orange p-lg-5">{editingdata.part3_box1para1}</h3>
                <ReactMarkdown className="text-left text-white my-0 mx-5 bold">{editingdata.part3_box1para2}</ReactMarkdown>
                <ReactMarkdown className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part3_box1para3}</ReactMarkdown>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container id="smart-forests" fluid className="v-full z-999 bg-green py-5">
          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center">
              <Col className="col-10 col-lg-8 pe-lg-0 p-3">
                <h2 className="text-center text-orange bold">{editingdata.part4_header1}</h2>
              </Col>
            </Row>
            <Row className="justify-content-center pb-5 align-items-stretch">
            <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
                <h4 className="text-white tight-drop-light">{editingdata.part4_box1header1}</h4>
                <ReactMarkdown className="flex-fill pb-3 text-white tight-drop">{editingdata.part4_box1para1}</ReactMarkdown>
                <Link href="/build-your-smart-forest#corporate">
                  <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnMore}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
                <h4 className="text-white tight-drop-light">{editingdata.part4_box2header1}</h4>
                <ReactMarkdown className="flex-fill pb-3 text-white tight-drop">{editingdata.part4_box2para1}</ReactMarkdown>
                <Link href="/build-your-smart-forest#school">
                  <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnMore}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
                <h4 className="text-white tight-drop-light">{editingdata.part4_box3header1}</h4>
                <ReactMarkdown className="flex-fill pb-3 text-white tight-drop">{editingdata.part4_box3para1}</ReactMarkdown>
                <Link href="/build-your-smart-forest#legacy">
                  <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnMore}</a>
                </Link>
              </div>
            </Col>
            <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
              <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
                <h4 className="text-white tight-drop-light">{editingdata.part4_box4header1}</h4>
                <ReactMarkdown className="flex-fill pb-3 text-white tight-drop">{editingdata.part4_box4para1}</ReactMarkdown>
                <Link href="/build-your-smart-forest#communal">
                  <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.learnMore}</a>
                </Link>
              </div>
            </Col>
          </Row>
          </Fade>
        </Container>

        <Container id="earth" fluid className="v-full z-999 bg-green">
          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center">
              <Col className="col-10 p-5 col-md-4">
                <h2 className="text-left text-orange bold">{editingdata.part5_header1}</h2>
                <ReactMarkdown className="text-left text-white">{editingdata.part5_para1}</ReactMarkdown>
              </Col>
              <Col className="col-10 col-md-4 p-3 roundedBox innerShadow-heavy callout-box">
                <ReactMarkdown className="text-white text-green p-5 tight-drop-heavy">{editingdata.part5_box1para1}</ReactMarkdown>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="align-items-center justify-content-center">
              <Col className="col-10 col-lg-7 px-5 mt-5">
                <ReactMarkdown className="h3 text-center text-orange bold op-9 my-0">{editingdata.part5_header2}</ReactMarkdown>
              </Col>
              <Col className="col-10 text-center col-lg-7 my-5 pb-5">
                <Link href="/carbon-calculator" >
                  <a className="btn btn-large btn-green">{editingdata.part5_button1}</a>
                </Link>
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
      fileRelativePath: 'content/what-is-sf.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/what-is-sf.json',
        data: (await import('../content/what-is-sf.json')).default,
      },
    },
  }
}
