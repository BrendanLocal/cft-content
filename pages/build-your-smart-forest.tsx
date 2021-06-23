import React, { useState, useRef, useEffect } from"react";
import Head from"next/head";
import Fade from"react-reveal/Fade";
import Link from"next/link";
import { getGithubPreviewProps, parseJson } from"next-tinacms-github";
import { GetStaticProps } from"next";
import { usePlugin } from"tinacms";
import Container from"react-bootstrap/Container";
import Row from"react-bootstrap/Row";
import Col from"react-bootstrap/Col";
import Button from"react-bootstrap/Button";
import Carousel from"react-bootstrap/Carousel";
import Rellax from"rellax";
import Parallax from"parallax-js";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from"swiper";
import { Swiper, SwiperSlide } from"swiper/react";
import { Slide } from"react-slideshow-image";
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from"react-markdown";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from"react-tinacms-github";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Build({ file }) {
  const formOptions = {
    label:"Build Your Forest",
    fields: [{ name:"title", component:"text" }],
  };

  const [editingdata, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();

  const slideProperties = {
    indicators: (i) => <span className="sliderDot" />,
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0.0) {
          if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)) {
            document.querySelector(`.left-sidenav li[data-dest="#${id}"]`).classList.add("active");
          }
        } else {
          if (document.querySelector(`.left-sidenav li[data-dest="#${id}"]`)) {
            document.querySelector(`.left-sidenav li[data-dest="#${id}"]`).classList.remove("active");
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
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <Row className="justify-content-left p-0 m-0 d-none d-lg-block d-xl-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white mx-2 mt-0 mb-0 bold op-6 pe-5">
            {editingdata.pageName}
          </p>
          <ul>
            <li className="p-0" data-dest="#intro">
              <a href="#intro" className="text-white bold no-underline">
                {editingdata.menu1}
              </a>
            </li>
            <li className="p-0" data-dest="#the-plan">
              <a href="#the-plan" className="text-white bold no-underline">
                {editingdata.menu2}
              </a>
            </li>
            <li className="p-0" data-dest="#our-forests">
              <a href="#our-forests" className="text-white bold no-underline">
                {editingdata.menu3}
              </a>
            </li>
            <li className="p-0" data-dest="#corporate">
              <a href="#corporate" className="text-white bold no-underline">
                {editingdata.menu4}
              </a>
            </li>
            <li className="p-0" data-dest="#school">
              <a href="#school" className="text-white bold no-underline">
                {editingdata.menu5}
              </a>
            </li>
            <li className="p-0" data-dest="#legacy">
              <a href="#legacy" className="text-white bold no-underline">
                {editingdata.menu6}
              </a>
            </li>
            <li className="p-0" data-dest="#communal">
              <a href="#communal" className="text-white bold no-underline">
                {editingdata.menu7}
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <main className="bg-green py-5">
        <Container id="intro" className="bg-green py-5 px-5">
          <Row className="justify-content-center d-flex pb-5 mb-5 py-5 px-5">
            <Col className="col-12 col-lg-5 stickyTop mb-5 p-3">
              <object type="image/svg+xml" data="/build2-svg.svg" />
            </Col>
            <Col className="col-12 col-lg-5 text-white p-4 pb-0 intro-order">
              <h1 className="text-orange mb-5 bold">{editingdata.part1_header1}</h1>
              <p className="large my-5 op-9">{editingdata.part1_para1}</p>
              <p className="text-white text-left smallcaps intro-links-header op-5 mt-4 mb-3">{editingdata.part1_header2}</p>
              <a href="#the-plan" className="btn btn-text text-left intro-links text-orange bold no-underline">{editingdata.part1_menu1}</a>
              <a href="#our-forests" className="btn btn-text text-left text-orange intro-links  no-underline">{editingdata.part1_menu2}</a>
            </Col>
          </Row>
        </Container>

        <Container id="the-plan" className="v-full z-999 bg-green p-5">
          <Fade bottom>
            <Row className="justify-content-center align-items-center my-4">
              <Col className="col-sm-11 col-md-10 col-lg-9 text-center text-white">
                <h2 className="text-orange bold mb-2">{editingdata.part2_header3}</h2>
                <p className="medium mt-0 mb-0 px-lg-4 mb-2">{editingdata.part2_para2}</p>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center align-items-center px-3">
              <Carousel className="col-12 col-md-12 col-lg-11 col-xl-10  d-flex bg-brown roundedBox innerShadow-heavy px-0"
                activeIndex={index} onSelect={handleSelect} 
                nextIcon={ <span aria-hidden="false" className="carousel-control-next-icon"/>}
                nextLabel=""
                prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon"/>}
                prevLabel="">
                <Carousel.Item interval={500000}>
                  <div className="d-block w-100 phases"></div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase1"></div>
                  <Carousel.Caption className="col-9 col-md-8 col-lg-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step1header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step1para1}</p>

                    <div className="card card-drop no-border bg-white px-4 py-2 op-8 mb-2">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step1box1}</li>
                      </ul>
                    </div>

                    <div className="card card-drop no-border bg-white px-4 py-2 op-8">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step1box2}</li>
                      </ul>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase2"></div>
                  <Carousel.Caption className="col-9 col-md-8 col-lg-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step2header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step2para1}</p>

                    <div className="card card-drop no-border bg-white px-4 py-2 op-8 mb-2">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step2box1}</li>
                      </ul>
                    </div>

                    <div className="card card-drop no-border bg-white px-4 py-2 op-8">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step2box2}</li>
                      </ul>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase3"></div>
                  <Carousel.Caption className="col-9 col-md-8 col-lg-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step3header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step3para1}</p>

                    <div className="card card-drop no-border bg-white px-4 py-2 op-8 mb-2">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step3box1}</li>
                      </ul>
                    </div>

                    <div className="card card-drop no-border bg-white px-4 py-2 op-8">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step3box2}</li>
                      </ul>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase4"></div>
                  <Carousel.Caption className="col-9 col-md-8 col-lg-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step4header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step4para1}</p>
                    <div className="card card-drop no-border bg-white px-4 py-2 op-8 mb-2">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step4box1}</li>
                      </ul>
                    </div>

                    <div className="card card-drop no-border bg-white px-4 py-2 op-8">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step4box2}</li>
                      </ul>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase5"></div>
                  <Carousel.Caption className="col-9 col-md-8 col-lg-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step5header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step5para1}</p>
                    <div className="card card-drop no-border bg-white px-4 py-2 op-8 mb-2">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step5box1}</li>
                      </ul>
                    </div>

                    <div className="card card-drop no-border bg-white px-4 py-2 op-8">
                      <ul className="text-grey text-left checkMark pe-3 pb-0">
                        <li className="pb-0">{editingdata.part2_step5box2}</li>
                      </ul>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Fade>
        </Container>
        <Container id="our-forests" fluid className="v-full z-999 bg-green py-5">
          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center">
              <Col className="col-10 col-lg-7 pe-lg-0 mt-5">
                <h2 className="text-center text-orange bold">{editingdata.part3_header1}</h2>
                <ReactMarkdown className="text-center text-white medium mb-4">{editingdata.part3_para1}</ReactMarkdown>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center pb-5 align-items-stretch my-4">
              <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
                <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
                  <h4 className="text-white tight-drop-light">{editingdata.part3_box1header1}</h4>
                  <p className="flex-fill pb-3 text-white tight-drop mb-3">{editingdata.part3_box1para1}</p>
                  <a href="#corporate" className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">
                    {editingdata.learnMore}
                  </a>
                </div>
              </Col>
              <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
                <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
                  <h4 className="text-white tight-drop-light">{editingdata.part3_box2header1}</h4>
                  <p className="flex-fill pb-3 text-white tight-drop mb-3">{editingdata.part3_box2para1}</p>
                  <a href="#school" className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">{editingdata.learnMore}</a>
                </div>
              </Col>
              <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
                <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
                  <h4 className="text-white tight-drop-light">{editingdata.part3_box3header1}</h4>
                  <p className="flex-fill pb-3 text-white tight-drop mb-3">{editingdata.part3_box3para1}</p>
                  <a href="#legacy" className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">{editingdata.learnMore}</a>
                </div>
              </Col>
              <Col className="col-10 col-md-4 col-lg-3 col-xl-2 pe-lg-0 m-3">
                <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
                  <h4 className="text-white tight-drop-light">{editingdata.part3_box4header1}</h4>
                  <p className="flex-fill pb-3 text-white tight-drop mb-3">{editingdata.part3_box4para1}</p>
                  <a href="#communal" className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">{editingdata.learnMore}</a>
                </div>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="pb-5 align-items-center justify-content-center my-5">
              <Col className="col-10 col-lg-7 p-5 bg-brown roundedBox innerShadow">
                <Row className="justify-content-center my-3">
                  <Col className="text-center">
                    <h3 className="text-orange bold mb-2">{editingdata.part3_box5header1}</h3>
                    <p className="text-white medium mb-2">{editingdata.part3_box5para1}</p>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="text-center">
                    <Button className="px-5" variant="green">
                      {editingdata.part3_box5button}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>
        </Container>

        {/* Corporate Forests */}
        <Container fluid id="corporate" className="bg-corp sectionPad">
          <Fade bottom>
            <Row className="text-center justify-content-center">
              <Col className="col-11 col-lg-8 text-white">
                <h2 className="bold py-3 text-white tight-drop-light">
                  {editingdata.part4_header1}
                </h2>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center  justify-content-center mb-4">
              <Col className="col-11 col-lg-7">
                <Row className="horizTab  justify-content-center">
                  <Col className="col-5 col-md-3 mb-3">
                    <Button href="#corp-about" variant="text text-orange tight-drop-light smallCaps down-links">
                      {editingdata.part4_menu1}
                    </Button>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Button href="#corp-testimonial" variant="text text-orange tight-drop-light smallCaps down-links">
                      {editingdata.part4_menu2}
                    </Button>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Button href="#corp-bottom-line" variant="text text-orange tight-drop-light smallCaps down-links" >
                      {editingdata.part4_menu3}
                    </Button>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Button href="#corp-contact" variant="text text-orange tight-drop-light smallCaps down-links">
                      {editingdata.part4_menu4}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="corp-about" className="text-center justify-content-center py-4 px-5 mt-5">
              <Col className="col-12 col-lg-7">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} className="emphasis-2 text-orange tight-drop-light mb-3">
                  {editingdata.part4_para1}
                </ReactMarkdown>
              </Col>
              <Col className="col-12 col-lg-7">
                <p className="lead text-white bold mb-2">{editingdata.part4_para2}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-0">
              <Col className="col-10 text-center pb-3">
                <Button className="btn-large" variant="green">
                  {editingdata.part4_button1}
                </Button>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center align-items-center my-5">
              <Col className="col-1 horizTab"></Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center justify-content-center mb-3 p-4 pb-0">
              <Col className="col-11 col-lg-7 pb-0">
                <p className="text-white large mb-3">{editingdata.part4_para3}</p>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="d-flex align-items-stretch px-5 justify-content-center pb-5">
              <Col className="col-12 col-md-3 mb-3">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
                  <h4 className="thin text-green">{editingdata.part4_box1header}</h4>
                  <p className="flex-fill pb-3">{editingdata.part4_box1para}</p>
                  <Button className="modal-btn" variant="btn-text text text-left">
                    {editingdata.part4_box1button}
                  </Button>
                </div>
              </Col>

              <Col className="col-12 col-md-3 mb-3">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
                  <h4 className="thin text-green">{editingdata.part4_box2header}</h4>
                  <p className="flex-fill pb-3">{editingdata.part4_box2para}</p>
                  <Button className="modal-btn" variant="btn-text text text-left">
                    {editingdata.part4_box2button}
                  </Button>
                </div>
              </Col>

              <Col className="col-12 col-md-3 mb-3">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
                  <h4 className="thin text-green">{editingdata.part4_box3header}</h4>
                  <p className="flex-fill pb-3">{editingdata.part4_box3para}</p>
                  <Button className="modal-btn" variant="btn-text text text-left">
                    {editingdata.part4_box3button}
                  </Button>
                </div>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="corp-testimonial" className="justify-content-center align-items-center my-5">
              <Carousel
                className="col-11 col-lg-8 bg-brown roundedBox innerShadow p-5 m-4 px-0"
                activeIndex={index}
                onSelect={handleSelect}
                nextIcon={ <span aria-hidden="false" className="carousel-control-next-icon"/>}
                nextLabel=""
                prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon"/>}
                prevLabel="">
                <Carousel.Item interval={100000} className="justify-content-center">
                  <div className="d-block w-100 blockquote-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <h3 className="text-left blockquote text-orange">{editingdata.part4_quote1para}</h3>
                      <p className="text-left text-white my-0 mx-5 bold">{editingdata.part4_quote1name}</p>
                      <p className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part4_quote1title}</p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={100000} className="justify-content-center">
                  <div className="d-block w-100 blockquote-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <h3 className="text-left blockquote text-orange">{editingdata.part4_quote2para}</h3>
                      <p className="text-left text-white my-0 mx-5 bold">{editingdata.part4_quote2name}</p>
                      <p className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part4_quote2tile}</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="corp-bottom-line" className="justify-content-center pt-5 mb-3">
              <Col className="col-10 col-md-8">
                <h2 className="text-center text-orange tight-drop-light bold mb-3">{editingdata.part4_header2}</h2>
                <p className="lead px-lg-4 text-center tight-drop-light text-white mb-2">{editingdata.part4_para4}</p>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-5 mb-3">
              <Col className="col-12 col-md-7 col-lg-7 bg-green roundedBox innerShadow px-3 pt-5 pb-4 m-4 mt-2">
                <p className="text-white large bold text-center">
                  {editingdata.part4_pointsheader}
                </p>
                <ul className="text-white checkMark px-5 mx-3">
                  <li>{editingdata.part4_pointspara1}</li>
                  <li>{editingdata.part4_pointspara2}</li>
                  <li>{editingdata.part4_pointspara3}</li>
                  <li>{editingdata.part4_pointspara4}</li>
                  <li>{editingdata.part4_pointspara5}</li>
                </ul>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="corp-contact" className="pt-4 align-items-center justify-content-center mb-3">
              <Col className="col-10 col-lg-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">{editingdata.part4_header3}</h2>
                <p className="text-center px-lg-4 text-white large mb-2">{editingdata.part4_para5}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-5">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <Button className="btn-large px-5" variant="green">
                  {editingdata.part4_button}
                </Button>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center  align-items-stretch mx-lg-5 mb-4">
              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="large text-green mb-2">{editingdata.part4_calcbox1header}</p>
                  <p className="text-grey mb-4">{editingdata.part4_calcbox1para}</p>
                  <Link href="carbon-calculator">
                    <Button variant="green" className="mt-3">
                      {editingdata.part4_calcbox1button}
                    </Button>
                  </Link>
                </div>
              </Col>

              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="large text-green mb-2">{editingdata.part4_calcbox2header}</p>
                  <p className="text-grey mb-4">{editingdata.part4_calcbox2para}</p>
                  <Button variant="green" className="mt-3">
                    {editingdata.part4_calcbox2button}
                  </Button>
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>

        {/* School Forests */}
        <Container fluid id="school" className="bg-school sectionPad">
          <Fade bottom>
            <Row className="text-center justify-content-center">
              <Col className="col-11 col-lg-8 text-white">
                <h2 className="bold py-3 text-white tight-drop-light">
                  {editingdata.part5_header1}
                </h2>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center  justify-content-center mb-4">
              <Col className="col-11 col-lg-7">
                <Row className="horizTab  justify-content-center">
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#school-1">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part5_menu1}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#school-2">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part5_menu2}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#school-3">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part5_menu3}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#school-4">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part5_menu4}
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="school-1" className="text-center justify-content-center py-4 px-4 mt-5">
              <Col className="col-11 col-lg-7">
                <p className="emphasis text-orange tight-drop-light mb-4">{editingdata.part5_para1}</p>
              </Col>
              <Col className="col-11 col-lg-7">
                <p className="lead text-white bold mb-3">{editingdata.part5_para2}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-0">
              <Col className="col-10 text-center pb-3">
                <Button className="btn-large" variant="green">
                  {editingdata.part5_button1}
                </Button>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center align-items-center my-5">
              <Col className="col-1 horizTab"></Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center justify-content-center mb-3 p-4 pb-0">
              <Col className="col-11 col-lg-7 pb-0">
                <p className="text-white large mb-3">{editingdata.part5_para3}</p>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="d-flex align-items-stretch px-5 justify-content-center pb-5">
              <Col className="col-12 col-md-3 mb-3">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
                  <h4 className="thin text-green">{editingdata.part5_box1header}</h4>
                  <p className="flex-fill pb-3">{editingdata.part5_box1para}</p>
                  <Button className="modal-btn" variant="btn-text text text-left">
                    {editingdata.part5_box1button}
                  </Button>
                </div>
              </Col>

              <Col className="col-12 col-md-3 mb-3">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
                  <h4 className="thin text-green">{editingdata.part5_box2header}</h4>
                  <p className="flex-fill pb-3">{editingdata.part5_box2para}</p>
                  <Button className="modal-btn" variant="btn-text text text-left" >
                    {editingdata.learnMore}
                  </Button>
                </div>
              </Col>

              <Col className="col-12 col-md-3 mb-3">
                <div className="roundedBox bg-white p-4 h-100 d-flex flex-column align-self-stretch card-hover">
                  <h4 className="thin text-green">{editingdata.part5_box3header}</h4>
                  <p className="flex-fill pb-3">{editingdata.part5_box3para}</p>
                  <Button className="modal-btn" variant="btn-text text text-left">
                    {editingdata.learnMore}
                  </Button>
                </div>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="school-2" className="justify-content-center align-items-center my-5">
              <Carousel className="col-11 col-lg-8 bg-brown roundedBox  innerShadow p-5 m-4 px-0"
                activeIndex={index}
                onSelect={handleSelect}
                nextIcon={ <span aria-hidden="false" className="carousel-control-next-icon"/>}
                nextLabel=""
                prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon"/>}
                prevLabel="">
                <Carousel.Item interval={100000} className="justify-content-center">
                  <div className="d-block w-100 blockquote-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <h3 className="text-left blockquote text-orange">{editingdata.part5_quote1para}</h3>
                      <p className="text-left text-white my-0 mx-5 bold">{editingdata.part5_quote1name}</p>
                      <p className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part5_quote1title}</p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 blockquote-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <h3 className="text-left blockquote text-orange">{editingdata.part5_quote2para}</h3>
                      <p className="text-left text-white my-0 mx-5 bold">{editingdata.part5_quote2name}</p>
                      <p className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part5_quote2tile}</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="school-3" className="justify-content-center pt-5 mb-3">
              <Col className="col-11 col-md-7">
                <h2 className="text-center text-orange tight-drop-light bold mb-3">{editingdata.part5_header2}</h2>
                <p className="lead px-3 text-center tight-drop-light text-white mb-2">{editingdata.part5_para4}</p>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-5 mb-5">
              <Col className="col-12 col-md-7 col-lg-7 bg-green roundedBox innerShadow px-5 pt-5 pb-4 m-4 mt-2">
                <p className="text-white large bold text-center mb-3">{editingdata.part5_pointsheader}</p>
                <ul className="text-white checkMark px-3 mx-3">
                  <li><ReactMarkdown>{editingdata.part5_pointspara1}</ReactMarkdown></li>
                  <li><ReactMarkdown>{editingdata.part5_pointspara2}</ReactMarkdown></li>
                  <li><ReactMarkdown>{editingdata.part5_pointspara3}</ReactMarkdown></li>
                  <li><ReactMarkdown>{editingdata.part5_pointspara4}</ReactMarkdown></li>
                  <li><ReactMarkdown>{editingdata.part5_pointspara5}</ReactMarkdown></li>
                </ul>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="school-4" className="pt-4 align-items-center justify-content-center mb-3">
              <Col className="col-10 col-lg-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">{editingdata.part5_header3}</h2>
                <p className="text-center px-lg-5 text-white large mb-2">{editingdata.part5_para5}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-5">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <Button className="btn-large px-5" variant="green">
                  {editingdata.part5_button}
                </Button>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center  align-items-stretch mx-lg-5  mb-4">
              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="large text-green mb-2">{editingdata.part5_calcbox1header}</p>
                  <p className="text-grey mb-4">{editingdata.part5_calcbox1para}</p>
                  <Link href="carbon-calculator">
                    <Button variant="green" className="mt-3">
                      {editingdata.part5_calcbox1button}
                    </Button>
                  </Link>
                </div>
              </Col>

              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="large text-green mb-2">{editingdata.part5_calcbox2header}</p>
                  <p className="text-grey mb-4">{editingdata.part5_calcbox2para}</p>
                  <Button variant="green" className="mt-3">
                    {editingdata.part5_calcbox2button}
                  </Button>
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>

        {/* Legacy Forests */}
        <Container fluid id="legacy" className="bg-legacy sectionPad">
          <Fade bottom>
            <Row className="text-center justify-content-center">
              <Col className="col-11 col-lg-8 text-white">
                <h2 className="bold py-3 text-white tight-drop-light">{editingdata.part6_header1}</h2>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center  justify-content-center mb-4">
              <Col className="col-11 col-lg-7">
                <Row className="horizTab  justify-content-center">
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#legacy-1">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part6_menu1}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#legacy-2">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part6_menu2}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#legacy-3">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part6_menu3}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#legacy-4">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part6_menu4}
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="legacy-1" className="text-center justify-content-center py-4 px-3 mt-5">
              <Col className="col-11 col-lg-7">
                <p className="emphasis text-orange tight-drop-light mb-4">{editingdata.part6_para1}</p>
              </Col>
              <Col className="col-11 col-lg-7">
                <p className="lead text-white bold mb-2">{editingdata.part6_para2}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-0">
              <Col className="col-10 text-center pb-3">
                <Button className="btn-large" variant="green">
                  {editingdata.part6_button1}
                </Button>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center align-items-center my-5">
              <Col className="col-1 horizTab"></Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center justify-content-center mb-3 p-4 pb-5">
              <Col className="col-10 col-lg-7 pb-0">
                <p className="text-white large mb-3">{editingdata.part6_para3}</p>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="legacy-2" className="justify-content-center align-items-center my-5">
              <Carousel className="col-11 col-lg-8 bg-brown roundedBox  innerShadow p-5 m-4 px-0"
                activeIndex={index}
                onSelect={handleSelect}
                nextIcon={ <span aria-hidden="false" className="carousel-control-next-icon"/>}
                nextLabel=""
                prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon"/>}
                prevLabel="">
                <Carousel.Item interval={100000} className="justify-content-center">
                  <div className="d-block w-100 blockquote-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <h3 className="text-left blockquote text-orange">{editingdata.part6_quote1para}</h3>
                      <p className="text-left text-white my-0 mx-5 bold">{editingdata.part6_quote1name}</p>
                      <p className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part6_quote1title}</p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 blockquote-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <h3 className="text-left blockquote text-orange">{editingdata.part6_quote2para}</h3>
                      <p className="text-left text-white my-0 mx-5 bold">{editingdata.part6_quote2name}</p>
                      <p className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part6_quote2tile}</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="legacy-3" className="justify-content-center pt-5 mb-3">
              <Col className="col-11 col-md-7">
                <h2 className="text-center text-orange tight-drop-light bold mb-3">{editingdata.part6_header2}</h2>
                <p className="lead px-3 text-center tight-drop-light text-white mb-2">{editingdata.part6_para4}</p>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-5 mb-5">
              <Col className="justify-content-center align-items-center col-12 col-lg-7 bg-green roundedBox innerShadow px-3 pt-5 pb-4 m-4 mt-2">
                <p className="text-white large bold text-center mb-3">{editingdata.part6_pointsheader}</p>
                <ul className="text-white checkMark px-5 mx-5">
                  <li className="ms-lg-5">{editingdata.part6_pointspara1}</li>
                  <li className="ms-lg-5">{editingdata.part6_pointspara2}</li>
                  <li className="ms-lg-5">{editingdata.part6_pointspara3}</li>
                  <li className="ms-lg-5">{editingdata.part6_pointspara4}</li>
                  <li className="ms-lg-5">{editingdata.part6_pointspara5}</li>
                  <li className="ms-lg-5">{editingdata.part6_pointspara6}</li>
                </ul>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="legacy-4" className="pt-4 align-items-center justify-content-center mb-3">
              <Col className="col-10 col-lg-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">{editingdata.part6_header3}</h2>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-5">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <Button className="btn-large px-5" variant="green">
                  {editingdata.part6_button}
                </Button>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center  align-items-stretch mx-lg-5  mb-4">
              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="large text-green mb-2">{editingdata.part6_calcbox1header}</p>
                  <p className="text-grey mb-5">{editingdata.part6_calcbox1para}</p>
                  <Link href="carbon-calculator">
                    <Button variant="green" className="mt-3">
                      {editingdata.part6_calcbox1button}
                    </Button>
                  </Link>
                </div>
              </Col>

              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="large text-green mb-2">{editingdata.part6_calcbox2header}</p>
                  <p className="text-grey mb-4">{editingdata.part6_calcbox2para}</p>
                  <Button variant="green" className="mt-3">
                    {editingdata.part6_calcbox2button}
                  </Button>
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>

        {/* Communal Forests */}
        <Container fluid id="communal" className="bg-communal sectionPad">
          <Fade bottom>
            <Row className="text-center justify-content-center">
              <Col className="col-11 col-lg-8 text-white">
                <h2 className="bold py-3 text-white tight-drop-light">{editingdata.part7_header1}</h2>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center  justify-content-center mb-4">
              <Col className="col-11 col-lg-7">
                <Row className="horizTab  justify-content-center">
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#comm-1">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part7_menu1}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#comm-2">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part7_menu2}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#comm-3">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part7_menu3}
                      </Button>
                    </Link>
                  </Col>
                  <Col className="col-5 col-md-3 mb-3">
                    <Link href="#comm-4">
                      <Button variant="text text-orange smallCaps tight-drop-light down-links">
                        {editingdata.part7_menu4}
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="comm-1" className="text-center justify-content-center py-4 px-5 mt-5">
              <Col className="col-12 col-lg-8">
                <p className="emphasis text-orange tight-drop-light mb-4">{editingdata.part7_para1}</p>
              </Col>
              <Col className="col-12 col-lg-8">
                <p className="lead text-white bold mb-2">{editingdata.part7_para2}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-0">
              <Col className="col-10 text-center pb-3">
                <Button className="btn-large" variant="green">
                  {editingdata.part7_button1}
                </Button>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center align-items-center my-5">
              <Col className="col-1 horizTab"></Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center justify-content-center mb-3 p-4 pb-5">
              <Col className="col-10 col-lg-7 pb-0">
                <p className="text-white large mb-3">{editingdata.part7_para3}</p>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="comm-2" className="justify-content-center align-items-center my-5">
              <Carousel className="col-11 col-lg-8 bg-brown roundedBox  innerShadow p-5 m-4 px-0" 
                activeIndex={index}
                onSelect={handleSelect}
                nextIcon={ <span aria-hidden="false" className="carousel-control-next-icon"/>}
                nextLabel=""
                prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon"/>}
                prevLabel=""
              >
                <Carousel.Item
                  interval={100000}
                  className="justify-content-center"
                >
                  <div className="d-block w-100 blockquote-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <h3 className="text-left blockquote text-orange">{editingdata.part7_quote1para}</h3>
                      <p className="text-left text-white my-0 mx-5 bold">{editingdata.part7_quote1name}</p>
                      <p className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part7_quote1title}</p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 blockquote-bg mb-4 align-items-center d-flex">
                    <div className="px-lg-5 pt-lg-4 mx-5">
                      <h3 className="text-left blockquote text-orange">{editingdata.part7_quote2para}</h3>
                      <p className="text-left text-white my-0 mx-5 bold">{editingdata.part7_quote2name}</p>
                      <p className="text-left text-white mx-5 px-3 italic op-6">{editingdata.part7_quote2tile}</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="comm-3" className="justify-content-center pt-5 px-5 mb-3">
              <Col className="col-11 col-md-8">
                <h2 className="text-center text-orange tight-drop-light bold mb-3">{editingdata.part7_header2}</h2>
                <p className="lead px-3 px-lg-5 text-center tight-drop-light text-white mb-2">{editingdata.part7_para4}</p>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center d-flex pb-5 mx-5 mb-5">
              <Col className="col-12 col-lg-7 bg-green roundedBox innerShadow px-3 pt-5 pb-4 m-4 mt-2">
                <p className="text-white large bold text-center mb-3">{editingdata.part7_pointsheader}</p>
                <ul className="text-white checkMark px-5 mx-3">
                  <li><ReactMarkdown>{editingdata.part7_pointspara1}</ReactMarkdown></li>
                  <li><ReactMarkdown>{editingdata.part7_pointspara2}</ReactMarkdown></li>
                  <li><ReactMarkdown>{editingdata.part7_pointspara3}</ReactMarkdown></li>
                  <li><ReactMarkdown>{editingdata.part7_pointspara4}</ReactMarkdown></li>
                </ul>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="comm-4" className="pt-4 align-items-center justify-content-center mb-3">
              <Col className="col-10 col-lg-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">{editingdata.part7_header3}</h2>
                <p className="text-center px-lg-5 text-white large mb-2">{editingdata.part7_para5}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-5">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <Button className="btn-large px-5" variant="green">
                  {editingdata.part7_button}
                </Button>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="justify-content-center  align-items-stretch mx-lg-5  mb-4">
              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="large text-green mb-2">{editingdata.part7_calcbox1header}</p>
                  <p className="text-grey mb-5">{editingdata.part7_calcbox1para}</p>
                  <Link href="carbon-calculator">
                    <Button variant="green" className="mt-3">
                      {editingdata.part7_calcbox1button}
                    </Button>
                  </Link>
                </div>
              </Col>

              <Col className="col-10 col-lg-4 col-xl-3 pe-lg-0 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <p className="large text-green mb-2">{editingdata.part7_calcbox2header}</p>
                  <p className="text-grey mb-4">{editingdata.part7_calcbox2para}</p>
                  <Button variant="green" className="mt-3">
                    {editingdata.part7_calcbox2button}
                  </Button>
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>

        <Container fluid className="bg-green p-5 section-pad my-0">
          <Row className="justify-content-center pt-3">
            <Col className="col-12 col-md-4 col-lg-3  pe-lg-0 m-3">
              <div className="roundedBox card bg-white no-border p-4 h-100 d-flex flex-column card-hover">
                <h4 className="text-green">{editingdata.part8_box1header}</h4>
                <p className="flex-fill pb-3 text-grey">{editingdata.part8_box1para}</p>
                <Link href="business-calculator">
                  <a className="btn btn-text modal-btn text-left text-orange bold no-underline">{editingdata.tryIt}</a>
                </Link>
              </div>
            </Col>

            <Col className="col-12 col-md-4 col-lg-3  pe-lg-0 m-3">
              <div className="roundedBox card bg-white no-border p-4 h-100 d-flex flex-column card-hover">
                <h4 className="text-green">{editingdata.part8_box2header}</h4>
                <p className="flex-fill pb-3 text-grey">{editingdata.part8_box2para}</p>
                <Link href="offset-calculator">
                  <a className="btn btn-text modal-btn text-left text-orange bold no-underline">{editingdata.tryIt}</a>
                </Link>
              </div>
            </Col>

            <Col className="col-12 col-md-4 col-lg-3 pe-lg-0 m-3">
              <div className="roundedBox card bg-white no-border p-4 h-100 d-flex flex-column card-hover">
                <h4 className="text-green">{editingdata.part8_box3header}</h4>
                <p className="flex-fill pb-3 text-grey">{editingdata.part8_box3para}</p>
                <Link href="portal-demo">
                  <a className="btn btn-text modal-btn text-left text-orange bold no-underline me-5">{editingdata.tryIt}</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
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
      fileRelativePath:"content/build.json",
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath:"content/build.json",
        data: (await import("../content/build.json")).default,
      },
    },
  };
};
