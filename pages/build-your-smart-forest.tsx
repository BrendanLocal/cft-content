import React, { useState, useEffect } from"react";
import Head from"next/head";
import Dropdown from "react-bootstrap/Dropdown";
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
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from"swiper";
import Modal from 'react-bootstrap/Modal';
import ReactMarkdown from"react-markdown";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from"react-tinacms-github";
import DigitalSign from "../components/digitalSign";
import { useRouter } from "next/router";
import Header from "../components/header";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Build({ file }) {

  const Lang = () => {
    var language ="en";
      const router = useRouter();
      if(router.query.lang){ 
      const lan = JSON.stringify(router.query.lang);
      language = JSON.parse(lan)
      }
      return (language)
    } 

  const formOptions = {
    label:"Build Your Forest",
    fields: [
      {name: 'pageName', component: 'markdown' },
      {name: 'pageURL', component: 'markdown' },
      {name: 'title', component: 'markdown' },
      {name: 'buildForest', component: 'markdown' },
      {name: 'menu1', component: 'markdown' },
      {name: 'menu2', component: 'markdown' },
      {name: 'menu3', component: 'markdown' },
      {name: 'menu4', component: 'markdown' },
      {name: 'menu5', component: 'markdown' },
      {name: 'menu6', component: 'markdown' },
      {name: 'menu7', component: 'markdown' },
      {name: 'step1', component: 'markdown' },
      {name: 'step2', component: 'markdown' },
      {name: 'step3', component: 'markdown' },
      {name: 'testimonials', component: 'markdown' },
      {name: 'benefits', component: 'markdown' },
      {name: 'learnMore', component: 'markdown' },
      {name: 'watchVideo', component: 'markdown' },
      {name: 'startBuilding', component: 'markdown' },
      {name: 'tryIt', component: 'markdown' },
      {name: 'part1_header1', component: 'markdown' },
      {name: 'part1_para1', component: 'markdown' },
      {name: 'part1_header2', component: 'markdown' },
      {name: 'part1_menu1', component: 'markdown' },
      {name: 'part1_menu2', component: 'markdown' },
      {name: 'part2_header3', component: 'markdown' },
      {name: 'part2_para2', component: 'markdown' },
      {name: 'part2_step1header1', component: 'markdown' },
      {name: 'part2_step1para1', component: 'markdown' },
      {name: 'part2_step1box1', component: 'markdown' },
      {name: 'part2_step1box2', component: 'markdown' },
      {name: 'part2_step2header1', component: 'markdown' },
      {name: 'part2_step2para1', component: 'markdown' },
      {name: 'part2_step2box1', component: 'markdown' },
      {name: 'part2_step2box2', component: 'markdown' },
      {name: 'part2_step3header1', component: 'markdown' },
      {name: 'part2_step3para1', component: 'markdown' },
      {name: 'part2_step3box1', component: 'markdown' },
      {name: 'part2_step3box2', component: 'markdown' },
      {name: 'part2_step4header1', component: 'markdown' },
      {name: 'part2_step4para1', component: 'markdown' },
      {name: 'part2_step4box1', component: 'markdown' },
      {name: 'part2_step4box2', component: 'markdown' },
      {name: 'part2_step5header1', component: 'markdown' },
      {name: 'part2_step5para1', component: 'markdown' },
      {name: 'part2_step5box1', component: 'markdown' },
      {name: 'part2_step5box2', component: 'markdown' },
      {name: 'part3_header1', component: 'markdown' },
      {name: 'part3_para1', component: 'markdown' },
      {name: 'part3_box1header1', component: 'markdown' },
      {name: 'part3_box1para1', component: 'markdown' },
      {name: 'part3_box2header1', component: 'markdown' },
      {name: 'part3_box2para1', component: 'markdown' },
      {name: 'part3_box3header1', component: 'markdown' },
      {name: 'part3_box3para1', component: 'markdown' },
      {name: 'part3_box4header1', component: 'markdown' },
      {name: 'part3_box4para1', component: 'markdown' },
      {name: 'part3_box5header1', component: 'markdown' },
      {name: 'part3_box5para1', component: 'markdown' },
      {name: 'part3_box5button', component: 'markdown' },
      {name: 'corp_header1', component: 'markdown' },
      {name: 'corp_menu1', component: 'markdown' },
      {name: 'corp_menu2', component: 'markdown' },
      {name: 'corp_menu3', component: 'markdown' },
      {name: 'corp_menu4', component: 'markdown' },
      {name: 'corp_para1', component: 'markdown' },
      {name: 'corp_para2', component: 'markdown' },
      {name: 'corp_button1', component: 'markdown' },
      {name: 'corp_para3', component: 'markdown' },
      {name: 'corp_box1header', component: 'markdown' },
      {name: 'corp_box1para', component: 'markdown' },
      {name: 'corp_box1button', component: 'markdown' },
      {name: 'corp_box2header', component: 'markdown' },
      {name: 'corp_box2para', component: 'markdown' },
      {name: 'corp_box2button', component: 'markdown' },
      {name: 'corp_box3header', component: 'markdown' },
      {name: 'corp_box3para', component: 'markdown' },
      {name: 'corp_box3button', component: 'markdown' },
      {name: 'corp_quote1para', component: 'markdown' },
      {name: 'corp_quote1name', component: 'markdown' },
      {name: 'corp_quote1title', component: 'markdown' },
      {name: 'corp_quote2para', component: 'markdown' },
      {name: 'corp_quote2name', component: 'markdown' },
      {name: 'corp_quote2tile', component: 'markdown' },
      {name: 'corp_header2', component: 'markdown' },
      {name: 'corp_para4', component: 'markdown' },
      {name: 'corp_pointsheader', component: 'markdown' },
      {name: 'corp_pointspara1', component: 'markdown' },
      {name: 'corp_pointspara2', component: 'markdown' },
      {name: 'corp_pointspara3', component: 'markdown' },
      {name: 'corp_pointspara4', component: 'markdown' },
      {name: 'corp_pointspara5', component: 'markdown' },
      {name: 'corp_header3', component: 'markdown' },
      {name: 'corp_para5', component: 'markdown' },
      {name: 'corp_button', component: 'markdown' },
      {name: 'corp_calcbox1header', component: 'markdown' },
      {name: 'corp_calcbox1para', component: 'markdown' },
      {name: 'corp_calcbox1button', component: 'markdown' },
      {name: 'corp_calcbox2header', component: 'markdown' },
      {name: 'corp_calcbox2para', component: 'markdown' },
      {name: 'corp_calcbox2button', component: 'markdown' },
      {name: 'school_header1', component: 'markdown' },
      {name: 'school_menu1', component: 'markdown' },
      {name: 'school_menu2', component: 'markdown' },
      {name: 'school_menu3', component: 'markdown' },
      {name: 'school_menu4', component: 'markdown' },
      {name: 'school_para1', component: 'markdown' },
      {name: 'school_para2', component: 'markdown' },
      {name: 'school_button1', component: 'markdown' },
      {name: 'school_para3', component: 'markdown' },
      {name: 'school_box1header', component: 'markdown' },
      {name: 'school_box1para', component: 'markdown' },
      {name: 'school_box1button', component: 'markdown' },
      {name: 'school_box2header', component: 'markdown' },
      {name: 'school_box2para', component: 'markdown' },
      {name: 'school_box2button', component: 'markdown' },
      {name: 'school_box3header', component: 'markdown' },
      {name: 'school_box3para', component: 'markdown' },
      {name: 'school_box3button', component: 'markdown' },
      {name: 'school_quote1para', component: 'markdown' },
      {name: 'school_quote1name', component: 'markdown' },
      {name: 'school_quote1title', component: 'markdown' },
      {name: 'school_quote2para', component: 'markdown' },
      {name: 'school_quote2name', component: 'markdown' },
      {name: 'school_quote2tile', component: 'markdown' },
      {name: 'school_header2', component: 'markdown' },
      {name: 'school_para4', component: 'markdown' },
      {name: 'school_pointsheader', component: 'markdown' },
      {name: 'school_pointspara1', component: 'markdown' },
      {name: 'school_pointspara2', component: 'markdown' },
      {name: 'school_pointspara3', component: 'markdown' },
      {name: 'school_pointspara4', component: 'markdown' },
      {name: 'school_pointspara5', component: 'markdown' },
      {name: 'school_header3', component: 'markdown' },
      {name: 'school_para5', component: 'markdown' },
      {name: 'school_button', component: 'markdown' },
      {name: 'school_calcbox1header', component: 'markdown' },
      {name: 'school_calcbox1para', component: 'markdown' },
      {name: 'school_calcbox1button', component: 'markdown' },
      {name: 'school_calcbox2header', component: 'markdown' },
      {name: 'school_calcbox2para', component: 'markdown' },
      {name: 'school_calcbox2button', component: 'markdown' },
      {name: 'part6_header1', component: 'markdown' },
      {name: 'part6_menu1', component: 'markdown' },
      {name: 'part6_menu2', component: 'markdown' },
      {name: 'part6_menu3', component: 'markdown' },
      {name: 'part6_menu4', component: 'markdown' },
      {name: 'part6_para1', component: 'markdown' },
      {name: 'part6_para2', component: 'markdown' },
      {name: 'part6_button1', component: 'markdown' },
      {name: 'part6_para3', component: 'markdown' },
      {name: 'part6_quote1para', component: 'markdown' },
      {name: 'part6_quote1name', component: 'markdown' },
      {name: 'part6_quote1title', component: 'markdown' },
      {name: 'part6_quote2para', component: 'markdown' },
      {name: 'part6_quote2name', component: 'markdown' },
      {name: 'part6_quote2tile', component: 'markdown' },
      {name: 'part6_header2', component: 'markdown' },
      {name: 'part6_para4', component: 'markdown' },
      {name: 'part6_pointsheader', component: 'markdown' },
      {name: 'part6_pointspara1', component: 'markdown' },
      {name: 'part6_pointspara2', component: 'markdown' },
      {name: 'part6_pointspara3', component: 'markdown' },
      {name: 'part6_pointspara4', component: 'markdown' },
      {name: 'part6_pointspara5', component: 'markdown' },
      {name: 'part6_pointspara6', component: 'markdown' },
      {name: 'part6_header3', component: 'markdown' },
      {name: 'part6_button', component: 'markdown' },
      {name: 'part6_calcbox1header', component: 'markdown' },
      {name: 'part6_calcbox1para', component: 'markdown' },
      {name: 'part6_calcbox1button', component: 'markdown' },
      {name: 'part6_calcbox2header', component: 'markdown' },
      {name: 'part6_calcbox2para', component: 'markdown' },
      {name: 'part6_calcbox2button', component: 'markdown' },
      {name: 'part7_header1', component: 'markdown' },
      {name: 'part7_menu1', component: 'markdown' },
      {name: 'part7_menu2', component: 'markdown' },
      {name: 'part7_menu3', component: 'markdown' },
      {name: 'part7_menu4', component: 'markdown' },
      {name: 'part7_para1', component: 'markdown' },
      {name: 'part7_para2', component: 'markdown' },
      {name: 'part7_button1', component: 'markdown' },
      {name: 'part7_para3', component: 'markdown' },
      {name: 'part7_quote1para', component: 'markdown' },
      {name: 'part7_quote1name', component: 'markdown' },
      {name: 'part7_quote1title', component: 'markdown' },
      {name: 'part7_quote2para', component: 'markdown' },
      {name: 'part7_quote2name', component: 'markdown' },
      {name: 'part7_quote2tile', component: 'markdown' },
      {name: 'part7_header2', component: 'markdown' },
      {name: 'part7_para4', component: 'markdown' },
      {name: 'part7_pointsheader', component: 'markdown' },
      {name: 'part7_pointspara1', component: 'markdown' },
      {name: 'part7_pointspara2', component: 'markdown' },
      {name: 'part7_pointspara3', component: 'markdown' },
      {name: 'part7_pointspara4', component: 'markdown' },
      {name: 'part7_header3', component: 'markdown' },
      {name: 'part7_para5', component: 'markdown' },
      {name: 'part7_button', component: 'markdown' },
      {name: 'part7_calcbox1header', component: 'markdown' },
      {name: 'part7_calcbox1para', component: 'markdown' },
      {name: 'part7_calcbox1button', component: 'markdown' },
      {name: 'part7_calcbox2header', component: 'markdown' },
      {name: 'part7_calcbox2para', component: 'markdown' },
      {name: 'part7_calcbox2button', component: 'markdown' },
      {name: 'part8_box1header', component: 'markdown' },
      {name: 'part8_box1para', component: 'markdown' },
      {name: 'part8_box2header', component: 'markdown' },
      {name: 'part8_box2para', component: 'markdown' },
      {name: 'part8_box3header', component: 'markdown' },
      {name: 'part8_box3para', component: 'markdown' }],
  };

  const [showCorporateModal1, setShowCorporateModal1] = useState(false);
  const handleCloseCorporateModal1 = () => setShowCorporateModal1(false);
  const handleShowCorporateModal1 = () => setShowCorporateModal1(true);

  const [showCorporateModal2, setShowCorporateModal2] = useState(false);
  const handleCloseCorporateModal2 = () => setShowCorporateModal2(false);
  const handleShowCorporateModal2 = () => setShowCorporateModal2(true);

  const [showCorporateModal3, setShowCorporateModal3] = useState(false);
  const handleCloseCorporateModal3 = () => setShowCorporateModal3(false);
  const handleShowCorporateModal3 = () => setShowCorporateModal3(true);

  const [showSchoolModal1, setShowSchoolModal1] = useState(false);
  const handleCloseSchoolModal1 = () => setShowSchoolModal1(false);
  const handleShowSchoolModal1 = () => setShowSchoolModal1(true);

  const [showSchoolModal2, setShowSchoolModal2] = useState(false);
  const handleCloseSchoolModal2 = () => setShowSchoolModal2(false);
  const handleShowSchoolModal2 = () => setShowSchoolModal2(true);

  const [showSchoolModal3, setShowSchoolModal3] = useState(false);
  const handleCloseSchoolModal3 = () => setShowSchoolModal3(false);
  const handleShowSchoolModal3 = () => setShowSchoolModal3(true);

  const [showLegacyModal1, setShowLegacyModal1] = useState(false);
  const handleCloseLegacyModal1 = () => setShowLegacyModal1(false);
  const handleShowLegacyModal1 = () => setShowLegacyModal1(true);

  const [showLegacyModal2, setShowLegacyModal2] = useState(false);
  const handleCloseLegacyModal2 = () => setShowLegacyModal2(false);
  const handleShowLegacyModal2 = () => setShowLegacyModal2(true);

  const [showLegacyModal3, setShowLegacyModal3] = useState(false);
  const handleCloseLegacyModal3 = () => setShowLegacyModal3(false);
  const handleShowLegacyModal3 = () => setShowLegacyModal3(true);

  const [showCommunalModal1, setShowCommunalModal1] = useState(false);
  const handleCloseCommunalModal1 = () => setShowCommunalModal1(false);
  const handleShowCommunalModal1 = () => setShowCommunalModal1(true);

  const [showCommunalModal2, setShowCommunalModal2] = useState(false);
  const handleCloseCommunalModal2 = () => setShowCommunalModal2(false);
  const handleShowCommunalModal2 = () => setShowCommunalModal2(true);

  const [showCommunalModal3, setShowCommunalModal3] = useState(false);
  const handleCloseCommunalModal3 = () => setShowCommunalModal3(false);
  const handleShowCommunalModal3 = () => setShowCommunalModal3(true);


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
    document.querySelectorAll("div.page-section").forEach((id) => {
      observer.observe(id);
    });

    const hash = window.location.hash;
    if (hash) {
      const container = document.getElementById(hash.substring(1));
      if (container) {
        container.scrollIntoView();
      }
    }
  }, []);

  return (
    <div>
      <Header/>
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      {/* MODAL */}

      <Modal show={showCorporateModal1} className="d-flex align-items-center" onHide={handleCloseCorporateModal1}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
      {/* EACH ROW IS ITS OWN CONTENT SECTION TO BE DISPLAYED INDIVIDUALLY */}

          {/* CORPORATE MODALS */}

        <Row id="corp-about" className="p-4 justify-content-center align-items-center">
          <Col>
          <h6 className="text-orange text-small mb-4">
          CORPORATE SMART FORESTS / ABOUT
          </h6>
          <h5 className="text-green mb-0">
          <ReactMarkdown>
          {editingdata.corpdropdown_box1header1}
          </ReactMarkdown>
          </h5>
            <ReactMarkdown className="text-grey mt-0 mb-4 dropdown-text">
            {editingdata.corpdropdown_box1para1}
            </ReactMarkdown>
            <h5 className="text-green mb-0">
          <ReactMarkdown>
          {editingdata.corpdropdown_box1header2}
          </ReactMarkdown>
          </h5>
            <ReactMarkdown className="text-grey mt-0 mb-4 dropdown-text">
            {editingdata.corpdropdown_box1para2}
            </ReactMarkdown>
            <h5 className="text-green mb-0">
          <ReactMarkdown>
          {editingdata.corpdropdown_box1header3}
          </ReactMarkdown>
          </h5>
            <ReactMarkdown className="text-grey mt-0 dropdown-text">
            {editingdata.corpdropdown_box1para3}
            </ReactMarkdown>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseCorporateModal1}>CLOSE</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCorporateModal2} className="d-flex align-items-center" onHide={handleCloseCorporateModal2}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Row id="corp-quotes" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          CORPORATE SMART FORESTS / QUOTES
          </h6>
          <h5 className="text-green medium mb-0">
          <ReactMarkdown>
          {editingdata.corpdropdown_quote1para}
          </ReactMarkdown>
          </h5>
          <ReactMarkdown>
          {editingdata.corpdropdown_quote1name}
          </ReactMarkdown>
          <ReactMarkdown className="text-small mb-4">
          {editingdata.corpdropdown_quote1title}
          </ReactMarkdown>
          <h5 className="text-green medium mb-0">
          <ReactMarkdown>
          {editingdata.corpdropdown_quote2para}
          </ReactMarkdown>
          </h5>
          <ReactMarkdown>
          {editingdata.corpdropdown_quote2name}
          </ReactMarkdown>
          <ReactMarkdown className="text-small">
          {editingdata.corpdropdown_quote2title}
          </ReactMarkdown>
          </Col>
        </Row>
         
        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseCorporateModal2}>CLOSE</Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={showCorporateModal3} className="d-flex align-items-center" onHide={handleCloseCorporateModal3}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row id="corp-bottom" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          CORPORATE SMART FORESTS / BOTTOM LINE
          </h6>
          <h5 className="text-green medium mb-0"><ReactMarkdown>{editingdata.corpdropdown_pointsheader}</ReactMarkdown></h5>
          <ul className="text-grey dropdown-text checkMark px-1 mx-3">
            <li><ReactMarkdown>{editingdata.corpdropdown_pointspara1}</ReactMarkdown></li>
            <li><ReactMarkdown>{editingdata.corpdropdown_pointspara2}</ReactMarkdown></li>
            <li><ReactMarkdown>{editingdata.corpdropdown_pointspara3}</ReactMarkdown></li>
            <li><ReactMarkdown>{editingdata.corpdropdown_pointspara4}</ReactMarkdown></li>
            <li><ReactMarkdown>{editingdata.corpdropdown_pointspara5}</ReactMarkdown></li>
            <li><ReactMarkdown>{editingdata.corpdropdown_pointspara6}</ReactMarkdown></li>
          </ul>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseCorporateModal3}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showSchoolModal1} className="d-flex align-items-center" onHide={handleCloseSchoolModal1}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {/* SCHOOL MODALS */}

        <Row id="school-about" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          SCHOOL SMART FORESTS / ABOUT
          </h6>
            <h5 className="text-green mb-0">
              <ReactMarkdown>
              {editingdata.schooldropdown_box1header1}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown className="text-grey mt-0 mb-4 dropdown-text">
              {editingdata.schooldropdown_box1para1}
            </ReactMarkdown>
            <h5 className="text-green mb-0">
              <ReactMarkdown>
                {editingdata.schooldropdown_box1header2}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown className="text-grey mt-0 mb-4 dropdown-text">
              {editingdata.schooldropdown_box1para2}
            </ReactMarkdown>
            <h5 className="text-green mb-0">
              <ReactMarkdown>
                {editingdata.schooldropdown_box1header3}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown className="text-grey mt-0 dropdown-text">
              {editingdata.schooldropdown_box1para3}
            </ReactMarkdown>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseSchoolModal1}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showSchoolModal2} className="d-flex align-items-center" onHide={handleCloseSchoolModal2}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row id="school-quotes" className="p-4 ">
          <Col>
          <h6 className="text-orange text-small mb-4">
          SCHOOL SMART FORESTS / QUOTES
          </h6>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.schooldropdown_quote1para}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown>
              {editingdata.schooldropdown_quote1name}
            </ReactMarkdown>
            <ReactMarkdown className="text-small mb-4">
              {editingdata.schooldropdown_quote1title}
            </ReactMarkdown>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.schooldropdown_quote2para}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown>
              {editingdata.schooldropdown_quote2name}
            </ReactMarkdown>
            <ReactMarkdown className="text-small">
              {editingdata.schooldropdown_quote2title}
            </ReactMarkdown>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseSchoolModal2}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showSchoolModal3} className="d-flex align-items-center" onHide={handleCloseSchoolModal3}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row id="school-involved" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          SCHOOL SMART FORESTS / GET INVOLVED
          </h6>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
              {editingdata.schooldropdown_box1para0}
              </ReactMarkdown>
            </h5>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.schooldropdown_pointsheader}
              </ReactMarkdown>
            </h5>
            <ul className="text-grey dropdown-text checkMark px-1 mx-3">
              <li><ReactMarkdown>{editingdata.schooldropdown_pointspara1}</ReactMarkdown></li>
              <li><ReactMarkdown>{editingdata.schooldropdown_pointspara2}</ReactMarkdown></li>
              <li><ReactMarkdown>{editingdata.schooldropdown_pointspara3}</ReactMarkdown></li>
              <li><ReactMarkdown>{editingdata.schooldropdown_pointspara4}</ReactMarkdown></li>
              <li><ReactMarkdown>{editingdata.schooldropdown_pointspara5}</ReactMarkdown></li>
            </ul>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseSchoolModal3}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showLegacyModal1} className="d-flex align-items-center" onHide={handleCloseLegacyModal1}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {/* LEGACY MODALS */}

        <Row id="legacy-about" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          LEGACY SMART FORESTS / ABOUT
          </h6>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.legacydropdown_box1header1}
              </ReactMarkdown>
            </h5>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseLegacyModal1}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showLegacyModal2} className="d-flex align-items-center" onHide={handleCloseLegacyModal2}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row id="legacy-quotes" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          LEGACY SMART FORESTS / QUOTES
          </h6>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.legacydropdown_quote1para}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown>
              {editingdata.legacydropdown_quote1name}
            </ReactMarkdown>
            <ReactMarkdown className="text-small mb-4">
              {editingdata.legacydropdown_quote1title}
            </ReactMarkdown>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.legacydropdown_quote2para}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown>
              {editingdata.legacydropdown_quote2name}
            </ReactMarkdown>
            <ReactMarkdown className="text-small">
              {editingdata.legacydropdown_quote2title}
            </ReactMarkdown>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseLegacyModal2}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showLegacyModal3} className="d-flex align-items-center" onHide={handleCloseLegacyModal3}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row id="legacy-investing" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          LEGACY SMART FORESTS / IMPACT INVESTING
          </h6>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.legacydropdown_pointsheader0}
              </ReactMarkdown>
            </h5>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.legacydropdown_pointsheader}
              </ReactMarkdown>
            </h5>
            <ul className="text-grey dropdown-text checkMark px-1 mx-3">
              <li className="pe-5"><ReactMarkdown>{editingdata.legacydropdown_pointspara1}</ReactMarkdown></li>
              <li className="pe-5"><ReactMarkdown>{editingdata.legacydropdown_pointspara2}</ReactMarkdown></li>
              <li className="pe-5"><ReactMarkdown>{editingdata.legacydropdown_pointspara3}</ReactMarkdown></li>
              <li className="pe-5"><ReactMarkdown>{editingdata.legacydropdown_pointspara4}</ReactMarkdown></li>
              <li className="pe-5"><ReactMarkdown>{editingdata.legacydropdown_pointspara5}</ReactMarkdown></li>
              <li className="pe-5"><ReactMarkdown>{editingdata.legacydropdown_pointspara6}</ReactMarkdown></li>
            </ul>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseLegacyModal3}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showCommunalModal1} className="d-flex align-items-center" onHide={handleCloseCommunalModal1}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {/* COMMUNAL MODALS */}

        <Row id="communal-about" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          COMMUNAL SMART FORESTS / ABOUT
          </h6>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.communaldropdown_box1header1}
              </ReactMarkdown>
            </h5>
          </Col>
        </Row>    

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseCommunalModal1}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showCommunalModal2} className="d-flex align-items-center" onHide={handleCloseCommunalModal2}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row id="communal-quotes" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          COMMUNAL SMART FORESTS / QUOTES
          </h6>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.communaldropdown_quote1para}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown>
              {editingdata.communaldropdown_quote1name}
            </ReactMarkdown>
            <ReactMarkdown className="text-small mb-4">
              {editingdata.communaldropdown_quote1title}
            </ReactMarkdown>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.communaldropdown_quote2para}
              </ReactMarkdown>
            </h5>
            <ReactMarkdown>
              {editingdata.communaldropdown_quote2name}
            </ReactMarkdown>
            <ReactMarkdown className="text-small">
              {editingdata.communaldropdown_quote2title}
            </ReactMarkdown>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseCommunalModal2}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showCommunalModal3} className="d-flex align-items-center" onHide={handleCloseCommunalModal3}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Row id="communal-impact" className="p-4">
          <Col>
          <h6 className="text-orange text-small mb-4">
          COMMUNAL SMART FORESTS / IMPACT
          </h6>
            <h5 className="text-green medium mb-0">
              <ReactMarkdown>
                {editingdata.communaldropdown_pointsheader}
              </ReactMarkdown>
            </h5>
            <ul className="text-grey dropdown-text checkMark px-1 mx-3">
              <li><ReactMarkdown>{editingdata.communaldropdown_pointspara1}</ReactMarkdown></li>
              <li><ReactMarkdown>{editingdata.communaldropdown_pointspara2}</ReactMarkdown></li>
              <li><ReactMarkdown>{editingdata.communaldropdown_pointspara3}</ReactMarkdown></li>
              <li><ReactMarkdown>{editingdata.communaldropdown_pointspara4}</ReactMarkdown></li>
            </ul>
          </Col>
        </Row>

        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleCloseCommunalModal3}>CLOSE</Button>
        </Modal.Footer>
      </Modal>


      <Row className="justify-content-left p-0 m-0 d-none d-lg-block d-xl-block">
        <Col className="col-lg-2 pe-lg-0 p-0 m-0 left-sidenav">
          <p className="text-white mx-2 mt-0 mb-0 bold op-6 pe-5 caps d-none">
            {editingdata.pageName}
          </p>
          <ul className="mt-4">
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

      <main className="bg-green pt-5">
        <Container id="intro" className="bg-green py-5 px-4 page-section">
          <Row className="justify-content-center d-flex mt-xl-0 mt-lg-5 mb-5 ms-xl-5 ms-lg-4 py-5 px-5">
            <Col className="col-12 col-lg-5 stickyTop mb-5 p-3 pe-2 d-none d-lg-block">
              <object type="image/svg+xml" data="/build2-svg.svg" />
            </Col>
            <Col className="col-12 d-md-none d-lg-none">
              <object type="image/svg+xml" data="/build2-svg.svg" />
            </Col>
            <Col className="col-8 mb-3 d-none d-md-block d-lg-none d-xl-none">
              <object type="image/svg+xml" data="/build2-svg.svg" />
            </Col>
            <Col className="col-12 col-lg-5 text-white pe-xl-5 p-3 pb-0 intro-order">
              <h1 className="text-orange mb-5 bold">{editingdata.part1_header1}</h1>
              <p className="large my-5 op-9 pe-lg-3 pe-xl-5">{editingdata.part1_para1}</p>
              <ReactMarkdown className="text-white text-left smallcaps intro-links-header op-5 mt-4 mb-3">{editingdata.part1_header2}</ReactMarkdown>
              <a href="#the-plan" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">{editingdata.part1_menu1}</a>
              <br/>
              <a href="#our-forests" className="btn btn-text text-left intro-links text-orange bold no-underline me-4">{editingdata.part1_menu2}</a>
              <br/>
            </Col>
          </Row>
        </Container>

        <Container id="the-plan" className="v-full z-999 bg-green p-5 page-section">
          <Fade bottom>
            <Row className="justify-content-center align-items-center my-4">
              <Col className="col-12 col-md-11 col-lg-10 col-xl-8 text-center text-white">
                <h2 className="text-orange bold mb-2 px-md-3 px-lg-0">{editingdata.part2_header3}</h2>
                <p className="medium mt-0 mb-0 px-lg-4 mb-2">{editingdata.part2_para2}</p>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center align-items-center px-3">
              <Carousel className="col-12 col-lg-10 d-flex bg-brown roundedBox px-0"
                activeIndex={index} onSelect={handleSelect} 
                nextIcon={ <span aria-hidden="false" className="carousel-control-next-icon"/>}
                nextLabel=""
                prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon"/>}
                prevLabel="">
                <Carousel.Item interval={500000}>
                  <div className="d-block w-100 phases"></div>
                  <Carousel.Caption><p></p></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase1"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step1header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step1para1}</p>

                    
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase2"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step2header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step2para1}</p>

                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase3"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step3header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step3para1}</p>

                  
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase4"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step4header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step4para1}</p>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                  <div className="d-block w-100 phase5"></div>
                  <Carousel.Caption className="col-9 col-md-6 col-xl-4">
                    <h3 className="smallCaps text-left tight-drop bold mb-1">{editingdata.part2_step5header1}</h3>
                    <p className="h3 text-left tight-drop mb-4">{editingdata.part2_step5para1}</p>
                    
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Fade>
        </Container>

        <Container id="our-forests" fluid className="v-full z-999 bg-green py-5 page-section">
          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center">
              <Col className="col-10 col-md-9 col-xl-7 pe-lg-0 mt-5">
                <h2 className="text-center text-orange bold px-md-3 px-lg-0">{editingdata.part3_header1}</h2>
                <ReactMarkdown className="text-center text-white medium mb-2">{editingdata.part3_para1}</ReactMarkdown>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="justify-content-center pb-5 align-items-stretch my-4 px-md-5 mx-lg-5 px-lg-5 mx-xl-0 px-xl-0">
              <Col className="col-10 col-md-5 col-xl-2 pe-lg-0 m-3">
                <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
                  <h4 className="text-white tight-drop-light">{editingdata.part3_box1header1}</h4>
                  <p className="flex-fill pb-3 text-white tight-drop mb-3">{editingdata.part3_box1para1}</p>
                  <a href="#corporate" className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">
                    {editingdata.learnMore}
                  </a>
                </div>
              </Col>
              <Col className="col-10 col-md-5 col-xl-2 pe-lg-0 m-3">
                <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
                  <h4 className="text-white tight-drop-light">{editingdata.part3_box2header1}</h4>
                  <p className="flex-fill pb-3 text-white tight-drop mb-3">{editingdata.part3_box2para1}</p>
                  <a href="#school" className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">{editingdata.learnMore}</a>
                </div>
              </Col>
              <Col className="col-10 col-md-5 col-xl-2 pe-lg-0 m-3">
                <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
                  <h4 className="text-white tight-drop-light">{editingdata.part3_box3header1}</h4>
                  <p className="flex-fill pb-3 text-white tight-drop mb-3">{editingdata.part3_box3para1}</p>
                  <a href="#legacy" className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">{editingdata.learnMore}</a>
                </div>
              </Col>
              <Col className="col-10 col-md-5 col-xl-2 pe-lg-0 m-3">
                <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop communal-card">
                  <h4 className="text-white tight-drop-light">{editingdata.part3_box4header1}</h4>
                  <p className="flex-fill pb-3 text-white tight-drop mb-3">{editingdata.part3_box4para1}</p>
                  <a href="#communal" className="btn btn-text text-left text-orange bold no-underline tight-drop down-links">{editingdata.learnMore}</a>
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>

        {/* Corporate Forests */}
        
        <Container fluid id="corporate" className="bg-corp sectionPad page-section">
          <Fade bottom>
            <Row className="text-center justify-content-center">
              <Col className="col-11 col-md-9 text-white">
                <h2 className="emphasis-2 bold pt-3 text-white tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.corp_header1}
                  </ReactMarkdown>
                </h2>
              </Col>
            </Row>
          </Fade>

          {/* CORPORATE MODAL BUTTONS */}
          
          <Fade bottom>
            <Row className="text-center justify-content-center mb-4">
              <Col className="col-11 col-md-8 mb-4">
                <Row className="horizTab justify-content-center">
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowCorporateModal1}>
                      ABOUT
                    </a>                 
                  </Col>
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowCorporateModal2}>
                      QUOTES
                    </a>                 
                  </Col>
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowCorporateModal3}>
                      BOTTOM LINE
                    </a>                 
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center justify-content-center py-3 mt-5">
              <Col className="col-11 col-md-10 col-lg-9">
                <h2 className="text-orange tight-drop-light mb-4 bold px-2">{editingdata.corp_header2}</h2>
                
              {/* FTU units */}

              {/* Desktop */}

              <Container className="d-none d-lg-block">
                <Row className="roundedBox card-drop-heavy">
                  <Col className="col-12 col-lg-8 col-xl-9 px-0 bg-offwhite roundedBoxLeft">
                    <div className="p-5 pb-4 bg-brown roundedBoxTopLeft">
                      
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col className="col-lg-4 col-xl-3 d-flex">
                          <img src="../../cft-icon-white.svg"/>
                        </Col>
                        <Col className="col-lg-8 col-xl-9 d-flex">
                          <h3 className="text-left x-large mt-3 text-white bold d-none d-xl-block">
                          ESG BENEFITS FOR CORPORATIONS
                          </h3>

                          <h3 className="text-left lead mt-3 text-white bold d-xl-none">
                          ESG BENEFITS FOR CORPORATIONS
                          </h3>
                        </Col>
                      </Row>
                      <p className="text-white text-left">
                      The number of FTUs purchased determines the packages available.
                      </p>
                    </div>
                    <div className="p-5 py-4 bg-offwhite roundedBoxBottomLeft">
                    <h5 className="text-left text-green medium">
                    WITH OVER 50 CHOICES, YOUR CUSTOMIZED PACKAGE MAY INCLUDE:
                      </h5>
                      <ul className="text-grey dropdown-text checkMark px-1 mx-3">
                        <li className="py-1">Supporting carbon sequestration & biodiversity</li>
                        <li className="py-1">Proprietary Net-Zero Calculator and Forestcaster™</li>
                        <li className="py-1">National recognition as an investor in a nature-based solution to climate change</li>
                        <li className="py-1">Turnkey solutions to engage employees and shareholders</li>
                        <li className="py-1">PR packages including signage, advertising & branded content</li>
                        <li className="py-1">Community and school sponsorship opportunities</li>
                        <li className="py-1">A personalized Smart Forest Intelligence Dashboard</li>
                        <li className="py-1">A dynamic private portal with curated programming and resources</li>
                        <li className="py-1">Website and social media placements</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-lg-4 col-xl-3 bg-mildgreen text-white text-left p-4 roundedBoxRight">
                    <h6 className="bold mt-lg-5 mt-xl-4">WHAT IS A FOREST TRUST UNIT (FTU)?</h6>
                    <p>1 FTU</p>
                    <p>= 5 acres</p>
                    <p className="mb-2">= 5000+ seedlings</p>
                    <p className="ftu-par mb-2">
                      A FTU is a 5 acre Smart Forest that contains 5000+ planted seedlings. This is an ecologically biodiverse area that is under joint stewardship between CFT and the designated environmental steward.
                   </p>
                   <p className="ftu-par">Every FTU is:</p>
                   <ul className="ftu-list">
                     <li>supported by a 5-phase strategic action plan</li>
                     <li>validated by modern science</li>
                     <li>protected under the forever no clear-cut guarantee</li>
                   </ul>
                   <p className="ftu-par">We will engage Indigenous land knowledge holders in our decisions.</p>
                  </Col>
                </Row>
              </Container>

              {/* Mobile */}

              <Container className="d-lg-none">
                <Row className="roundedBox card-drop-heavy">
                  <Col className="col-12 px-0">
                    <div className="p-4 p-md-5 pb-4 bg-brown roundedBoxTop">
                      
                      <Row className="justify-content-center align-items-center mb-2 mb-md-3">
                        <Col className="col-12 col-md-3 d-flex">
                          <img src="../../cft-icon-white.svg"/>
                        </Col>
                        <Col className="col-12 col-md-9 col-xl-9 d-flex">
                          <p className="text-left lead text-white bold d-none d-md-block">
                          ESG BENEFITS FOR CORPORATIONS
                          </p>
                          <h3 className="text-left text-white mt-3 bold d-md-none">
                          ESG BENEFITS FOR CORPORATIONS
                          </h3>
                        </Col>
                      </Row>
                      <p className="text-white text-left">
                      The number of FTUs purchased determines the packages available.
                      </p>
                    </div>
                    <div className="px-4 px-md-5 pt-4 pb-3 bg-offwhite">
                    <h5 className="text-left text-green medium">
                    WITH OVER 50 CHOICES, YOUR CUSTOMIZED PACKAGE MAY INCLUDE:
                      </h5>
                      <ul className="text-grey dropdown-text checkMark px-1 mx-3">
                        <li className="py-1">Supporting carbon sequestration & biodiversity</li>
                        <li className="py-1">Proprietary Net-Zero Calculator and Forestcaster™</li>
                        <li className="py-1">National recognition as an investor in a nature-based solution to climate change</li>
                        <li className="py-1">Turnkey solutions to engage employees and shareholders</li>
                        <li className="py-1">PR packages including signage, advertising & branded content</li>
                        <li className="py-1">Community and school sponsorship opportunities</li>
                        <li className="py-1">A personalized Smart Forest Intelligence Dashboard</li>
                        <li className="py-1">A dynamic private portal with curated programming and resources</li>
                        <li className="py-1">Website and social media placements</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-12 bg-mildgreen text-white text-left p-4 p-md-5 roundedBoxBottom">
                    <h6 className="bold ">WHAT IS A FOREST TRUST UNIT (FTU)?</h6>
                    <p>1 FTU</p>
                    <p>= 5 acres</p>
                    <p className="mb-2">= 5000+ seedlings</p>
                    <p className="ftu-par mb-2">
                      A FTU is a 5 acre Smart Forest that contains 5000+ planted seedlings. This is an ecologically biodiverse area that is under joint stewardship between CFT and the designated environmental steward.
                   </p>
                   <p className="ftu-par">Every FTU is:</p>
                   <ul className="ftu-list">
                     <li>supported by a 5-phase strategic action plan</li>
                     <li>validated by modern science</li>
                     <li>protected under the forever no clear-cut guarantee</li>
                   </ul>
                   <p className="ftu-par">We will engage Indigenous land knowledge holders in our decisions.</p>
                  </Col>
                </Row>
              </Container>

              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="corp-calc-steps" className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">How to get your forest started</h2>
              </Col>
            </Row>
            <Row className="justify-content-center px-lg-5 mx-lg-5 px-xl-5 mx-xl-5 mb-5 pb-5">
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.corpcalc_box1para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.corpcalc_box1para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.corpcalc_box1para3}</ReactMarkdown>
                  <Link href="/business-calculator">
                    <Button variant="green" className="calc-btn">{editingdata.corpcalc_box1button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.corpcalc_box2para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.corpcalc_box2para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.corpcalc_box2para3}</ReactMarkdown>
                  <Link href="/smart-forest-corp">
                    <Button variant="green" className="calc-btn">{editingdata.corpcalc_box2button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.corpcalc_box3para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.corpcalc_box3para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.corpcalc_box3para3}</ReactMarkdown>
                  <Link href="/net-negative-corp">
                    <Button variant="green" className="calc-btn">{editingdata.corpcalc_box3button1}</Button>
                  </Link>
                </div>
              </Col>
            </Row> 
          </Fade>

          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 col-md-8 col-lg-9 col-xl-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">{editingdata.corp_header3}</h2>
                <p className="text-center px-lg-4 text-white large mb-2">{editingdata.corp_para5}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-4">
              <Col className="col-10 text-center pb-5 pe-lg-0">
              <Link href="/contact">
                <Button className="btn-large px-5" variant="green">
                  {editingdata.corp_button}
                </Button>
                </Link>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="pt-4 align-items-center justify-content-center mb-1">
              <Col className="col-10 col-lg-9 col-xl-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light ">See Your Forest</h2>
              </Col>
            </Row>
            <DigitalSign/>
          </Fade>

          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 col-md-8 col-lg-9 col-xl-7 pe-lg-0">
                <h3 className="text-center text-orange bold tight-drop-light mt-5">
                  Find out whose Indigenous Territory your corporation is on and see the Indigenous territory and community leaders to build relations.
                  </h3>
              </Col>
            </Row>
            <Row className="text-center justify-content-center">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <a href="https://native-land.ca/" target="_blank">
                  <Button className="btn-large px-5" variant="green">
                    NATIVELAND.CA
                  </Button>
                </a>
              </Col>
            </Row>
          </Fade>
        </Container>

        {/* School Forests */}
        <Container fluid id="school" className="bg-school sectionPad page-section">
          <Fade bottom>
            <Row className="text-center justify-content-center">
              <Col className="col-11 col-md-9 text-white">
                <h2 className="emphasis-2 bold pt-3 text-white tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.school_header1}
                  </ReactMarkdown>
                </h2>
              </Col>
            </Row>
          </Fade>

          {/* SCHOOL MODAL BUTTONS */}

          <Fade bottom>
            <Row className="text-center justify-content-center mb-4">
              <Col className="col-11 col-md-8 mb-4">
                <Row className="horizTab justify-content-center">
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowSchoolModal1} data-dest="school-about">
                      ABOUT
                    </a>                 
                  </Col>
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowSchoolModal2} data-dest="school-quotes">
                      QUOTES
                    </a>                 
                  </Col>
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowSchoolModal3} data-dest="school-involved">
                      GET INVOLVED
                    </a>                 
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>
          
          <Fade bottom>
            <Row className="text-center justify-content-center py-3 mt-5">
              <Col className="col-11 col-md-10 col-lg-9">
                <h2 className="text-orange tight-drop-light mb-4 bold px-2 px-lg-4">{editingdata.school_para1}</h2>
                
              {/* FTU units */}

              {/* Desktop */}

              <Container className="d-none d-lg-block">
                <Row className="roundedBox card-drop-heavy">
                  <Col className="col-12 col-lg-8 col-xl-9 px-0 bg-offwhite roundedBoxLeft">
                    <div className="p-5 pb-4 bg-brown roundedBoxTopLeft">
                      
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col className="col-lg-4 col-xl-3 d-flex">
                          <img src="../../cft-icon-white.svg"/>
                        </Col>
                        <Col className="col-lg-8 col-xl-9 d-flex">
                        <h3 className="text-left x-large mt-3 text-white bold d-none d-xl-block">
                          ECOSYSTEM & ESG BENEFITS FOR SCHOOLS
                          </h3>
                          <h3 className="text-left lead mt-3 text-white bold d-xl-none">
                          ECOSYSTEM & ESG BENEFITS FOR SCHOOLS
                          </h3>
                        </Col>
                      </Row>
                      <p className="text-white text-left">
                      The number of FTUs purchased determines the packages available.
                      </p>
                    </div>
                    <div className="p-5 py-4 bg-offwhite roundedBoxBottomLeft">
                    <h5 className="text-left text-green medium">
                    WITH OVER 30 CHOICES, YOUR CUSTOMIZED PACKAGE MAY INCLUDE:
                      </h5>
                      <ul className="text-grey dropdown-text checkMark px-1 mx-3">
                        <li className="py-1">Nationwide Student Forest Ambassador Program</li>
                        <li className="py-1">Scholarship, employment & fundraising opportunities</li>
                        <li className="py-1">Recognized as an investor in a nature-based solution to climate change</li>
                        <li className="py-1">Student education and engagement modules</li>
                        <li className="py-1">Student networking opportunities across Canada</li>
                        <li className="py-1">Online and in-person events with high profile environmentalists</li>
                        <li className="py-1">A dynamic private portal with curated programming and resources</li>
                        <li className="py-1">Proprietary Net-Zero Calculator and Forestcaster™</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-lg-4 col-xl-3 bg-mildgreen text-white text-left p-4 roundedBoxRight">
                    <h6 className="bold mt-lg-5 mt-xl-4">WHAT IS A FOREST TRUST UNIT (FTU)?</h6>
                    <p>1 FTU</p>
                    <p>= 5 acres</p>
                    <p className="mb-2">= 5000+ seedlings</p>
                    <p className="ftu-par mb-2">
                      A FTU is a 5 acre Smart Forest that contains 5000+ planted seedlings. This is an ecologically biodiverse area that is under joint stewardship between CFT and the designated environmental steward.
                   </p>
                   <p className="ftu-par">Every FTU is:</p>
                   <ul className="ftu-list">
                     <li>supported by a 5-phase strategic action plan</li>
                     <li>validated by modern science</li>
                     <li>protected under the forever no clear-cut guarantee</li>
                   </ul>
                   <p className="ftu-par">We will engage Indigenous land knowledge holders in our decisions.</p>
                  </Col>
                </Row>
              </Container>

              {/* Mobile */}

              <Container className="d-lg-none">
                <Row className="roundedBox card-drop-heavy">
                  <Col className="col-12 px-0">
                    <div className="p-4 p-md-5 pb-4 bg-brown roundedBoxTop">
                      
                      <Row className="justify-content-center align-items-center mb-2 mb-md-3">
                        <Col className="col-12 col-md-3 d-flex">
                          <img src="../../cft-icon-white.svg"/>
                        </Col>
                        <Col className="col-12 col-md-9 col-xl-9 d-flex">
                          <p className="text-left lead text-white bold d-none d-md-block">
                          ECOSYSTEM & ESG BENEFITS FOR SCHOOLS
                          </p>
                          <h3 className="text-left text-white mt-3 bold d-md-none">
                          ECOSYSTEM & ESG BENEFITS FOR SCHOOLS
                          </h3>
                        </Col>
                      </Row>
                      <p className="text-white text-left">
                      The number of FTUs purchased determines the packages available.
                      </p>
                    </div>
                    <div className="px-4 px-md-5 pt-4 pb-3 bg-offwhite">
                    <h5 className="text-left text-green medium">
                    WITH OVER 30 CHOICES, YOUR CUSTOMIZED PACKAGE MAY INCLUDE:
                      </h5>
                      <ul className="text-grey dropdown-text checkMark px-1 mx-3">
                      <li className="py-1">Nationwide Student Forest Ambassador Program</li>
                        <li className="py-1">Scholarship, employment & fundraising opportunities</li>
                        <li className="py-1">Recognized as an investor in a nature-based solution to climate change</li>
                        <li className="py-1">Student education and engagement modules</li>
                        <li className="py-1">Student networking opportunities across Canada</li>
                        <li className="py-1">Online and in-person events with high profile environmentalists</li>
                        <li className="py-1">A dynamic private portal with curated programming and resources</li>
                        <li className="py-1">Proprietary Net-Zero Calculator and Forestcaster™</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-12 bg-mildgreen text-white text-left p-4 p-md-5 roundedBoxBottom">
                    <h6 className="bold ">WHAT IS A FOREST TRUST UNIT (FTU)?</h6>
                    <p>1 FTU</p>
                    <p>= 5 acres</p>
                    <p className="mb-2">= 5000+ seedlings</p>
                    <p className="ftu-par mb-2">
                      A FTU is a 5 acre Smart Forest that contains 5000+ planted seedlings. This is an ecologically biodiverse area that is under joint stewardship between CFT and the designated environmental steward.
                   </p>
                   <p className="ftu-par">Every FTU is:</p>
                   <ul className="ftu-list">
                     <li>supported by a 5-phase strategic action plan</li>
                     <li>validated by modern science</li>
                     <li>protected under the forever no clear-cut guarantee</li>
                   </ul>
                   <p className="ftu-par">We will engage Indigenous land knowledge holders in our decisions.</p>
                  </Col>
                </Row>
              </Container>

              </Col>
            </Row>
          </Fade>
          
          <Fade bottom>
            <Row id="school-calc-steps" className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">How to get your forest started</h2>
              </Col>
            </Row>
            <Row className="justify-content-center px-lg-5 mx-lg-5 px-xl-5 mx-xl-5 mb-5 pb-5">
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.schoolcalc_box1para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.schoolcalc_box1para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.schoolcalc_box1para3}</ReactMarkdown>
                  <Link href="/school-calculator">
                    <Button variant="green" className="calc-btn">{editingdata.schoolcalc_box1button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.schoolcalc_box2para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.schoolcalc_box2para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.schoolcalc_box2para3}</ReactMarkdown>
                  <Link href="/smart-forest-school">
                    <Button variant="green" className="calc-btn">{editingdata.schoolcalc_box2button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.schoolcalc_box3para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.schoolcalc_box3para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.schoolcalc_box3para3}</ReactMarkdown>
                  <Link href="/net-negative-school">
                    <Button variant="green" className="calc-btn">{editingdata.schoolcalc_box3button1}</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 col-md-8 col-lg-9 col-xl-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">Get Involved Today</h2>
                <p className="text-center text-white large mb-2">Our team is available to meet with you to discuss your custom School Smart Forest program. Our agreements range in length, and carbon sequestration starts as soon as the land is prepared and planting begins.</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-4">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <Link href="/contact">
                  <Button className="btn-large px-5" variant="green">
                    {editingdata.school_button3}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="pt-4 align-items-center justify-content-center mb-1">
              <Col className="col-10 col-lg-9 col-xl-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">See Your Forest</h2>
              </Col>
            </Row>
            <DigitalSign/>
          </Fade>

          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 col-md-8 col-lg-9 col-xl-7 pe-lg-0">
                <h3 className="text-center text-orange bold tight-drop-light mt-5">
                  Find out whose Indigenous Territory your school is on and see the Indigenous territory and community leaders to build relations.
                </h3>
              </Col>
            </Row>
            <Row className="text-center justify-content-center">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <a href="https://native-land.ca/" target="_blank">
                  <Button className="btn-large px-5" variant="green">
                    NATIVELAND.CA
                  </Button>
                </a>
              </Col>
            </Row>
          </Fade>
        </Container>

        {/* Legacy Forests */}
        <Container fluid id="legacy" className="bg-legacy sectionPad page-section">
          <Fade bottom>
            <Row className="text-center justify-content-center">
              <Col className="col-11 col-md-9 text-white">
                <h2 className="emphasis-2 bold pt-3 text-white tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.legacy_header1}
                  </ReactMarkdown>
                </h2>
              </Col>
            </Row>
          </Fade>

          {/* LEGACY MODAL BUTTONS */}

          <Fade bottom>
            <Row className="text-center justify-content-center mb-4">
              <Col className="col-11 col-md-8 mb-4">
                <Row className="horizTab justify-content-center">
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowLegacyModal1} data-dest="legacy-about">
                      ABOUT
                    </a>                 
                  </Col>
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowLegacyModal2} data-dest="legacy-quotes">
                      QUOTES
                    </a>                 
                  </Col>
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowLegacyModal3} data-dest="legacy-investing">
                      IMPACT INVESTING
                    </a>                 
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="text-center justify-content-center py-3 mt-5">
              <Col className="col-11 col-md-10 col-lg-9">
                <h2 className="text-orange tight-drop-light mb-4 bold px-2 px-xl-5">{editingdata.legacy_para1}</h2>
                
              {/* FTU units */}

              {/* Desktop */}

              <Container className="d-none d-lg-block">
                <Row className="roundedBox card-drop-heavy">
                  <Col className="col-12 col-lg-8 col-xl-9 px-0 bg-offwhite roundedBoxLeft">
                    <div className="p-5 pb-4 bg-brown roundedBoxTopLeft">
                      
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col className="col-lg-4 col-xl-3 d-flex">
                          <img src="../../cft-icon-white.svg"/>
                        </Col>
                        <Col className="col-lg-8 col-xl-9 d-flex">
                        <h3 className="text-left x-large mt-3 text-white bold d-none d-xl-block">
                          IMPACT BENEFITS FOR LEGACY BUILDERS
                          </h3>
                          
                          <h3 className="text-left lead mt-3 text-white bold d-xl-none">
                          IMPACT BENEFITS FOR LEGACY BUILDERS
                          </h3>
                        </Col>
                      </Row>
                      <p className="text-white text-left">
                      The number of FTUs purchased determines the packages available.
                      </p>
                    </div>
                    <div className="p-5 py-4 bg-offwhite roundedBoxBottomLeft">
                    <h5 className="text-left text-green medium">
                    WITH OVER 40 CHOICES, YOUR CUSTOMIZED PACKAGE MAY INCLUDE:
                      </h5>
                      <ul className="text-grey dropdown-text checkMark px-1 mx-3">
                        <li className="py-1">Supporting carbon sequestration & biodiversity</li>
                        <li className="py-1">Official recognition as Canada’s Forest Stewards</li>
                        <li className="py-1">Proprietary Net-Zero Calculator and Forestcaster™</li>
                        <li className="py-1">National recognition as an investor in a nature-based solution to climate change</li>
                        <li className="py-1">Community and School sponsorship opportunities</li>
                        <li className="py-1">A dynamic private portal with curated programming and resources</li>
                        <li className="py-1">A personalized Smart Forest Intelligence Dashboard</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-lg-4 col-xl-3 bg-mildgreen text-white text-left p-4 roundedBoxRight">
                    <h6 className="bold mt-lg-5 mt-xl-4">WHAT IS A FOREST TRUST UNIT (FTU)?</h6>
                    <p>1 FTU</p>
                    <p>= 5 acres</p>
                    <p className="mb-2">= 5000+ seedlings</p>
                    <p className="ftu-par mb-2">
                      A FTU is a 5 acre Smart Forest that contains 5000+ planted seedlings. This is an ecologically biodiverse area that is under joint stewardship between CFT and the designated environmental steward.
                   </p>
                   <p className="ftu-par">Every FTU is:</p>
                   <ul className="ftu-list">
                     <li>supported by a 5-phase strategic action plan</li>
                     <li>validated by modern science</li>
                     <li>protected under the forever no clear-cut guarantee</li>
                   </ul>
                   <p className="ftu-par">We will engage Indigenous land knowledge holders in our decisions.</p>
                  </Col>
                </Row>
              </Container>

              {/* Mobile */}

              <Container className="d-lg-none">
                <Row className="roundedBox card-drop-heavy">
                  <Col className="col-12 px-0">
                    <div className="p-4 p-md-5 pb-4 bg-brown roundedBoxTop">
                      
                      <Row className="justify-content-center align-items-center mb-2 mb-md-3">
                        <Col className="col-12 col-md-3 d-flex">
                          <img src="../../cft-icon-white.svg"/>
                        </Col>
                        <Col className="col-12 col-md-9 col-xl-9 d-flex">
                          <p className="text-left lead text-white bold d-none d-md-block">
                          IMPACT BENEFITS FOR LEGACY BUILDERS
                          </p>
                          <h3 className="text-left text-white mt-3 bold d-md-none">
                          IMPACT BENEFITS FOR LEGACY BUILDERS
                          </h3>
                        </Col>
                      </Row>
                      <p className="text-white text-left">
                      The number of FTUs purchased determines the packages available.
                      </p>
                    </div>
                    <div className="px-4 px-md-5 pt-4 pb-3 bg-offwhite">
                    <h5 className="text-left text-green medium">
                    WITH OVER 40 CHOICES, YOUR CUSTOMIZED PACKAGE MAY INCLUDE:
                      </h5>
                      <ul className="text-grey dropdown-text checkMark px-1 mx-3">
                      <li className="py-1">Supporting carbon sequestration & biodiversity</li>
                        <li className="py-1">Official recognition as Canada’s Forest Stewards</li>
                        <li className="py-1">Proprietary Net-Zero Calculator and Forestcaster™</li>
                        <li className="py-1">National recognition as an investor in a nature-based solution to climate change</li>
                        <li className="py-1">Community and School sponsorship opportunities</li>
                        <li className="py-1">A dynamic private portal with curated programming and resources</li>
                        <li className="py-1">A personalized Smart Forest Intelligence Dashboard</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-12 bg-mildgreen text-white text-left p-4 p-md-5 roundedBoxBottom">
                    <h6 className="bold ">WHAT IS A FOREST TRUST UNIT (FTU)?</h6>
                    <p>1 FTU</p>
                    <p>= 5 acres</p>
                    <p className="mb-2">= 5000+ seedlings</p>
                    <p className="ftu-par mb-2">
                      A FTU is a 5 acre Smart Forest that contains 5000+ planted seedlings. This is an ecologically biodiverse area that is under joint stewardship between CFT and the designated environmental steward.
                   </p>
                   <p className="ftu-par">Every FTU is:</p>
                   <ul className="ftu-list">
                     <li>supported by a 5-phase strategic action plan</li>
                     <li>validated by modern science</li>
                     <li>protected under the forever no clear-cut guarantee</li>
                   </ul>
                   <p className="ftu-par">We will engage Indigenous land knowledge holders in our decisions.</p>
                  </Col>
                </Row>
              </Container>

              </Col>
            </Row>
          </Fade>
          

          <Fade bottom>
            <Row id="legacy-calc-steps" className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">How to get your forest started</h2>
              </Col>
            </Row>
            <Row className="justify-content-center px-lg-5 mx-lg-5 px-xl-5 mx-xl-5 mb-5 pb-5">
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.legacycalc_box1para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.legacycalc_box1para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.legacycalc_box1para3}</ReactMarkdown>
                  <Link href="/personal-calculator">
                    <Button variant="green" className="calc-btn">{editingdata.legacycalc_box1button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.legacycalc_box2para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.legacycalc_box2para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.legacycalc_box2para3}</ReactMarkdown>
                  <Link href="/smart-forest-personal">
                    <Button variant="green" className="calc-btn">{editingdata.legacycalc_box2button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.legacycalc_box3para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.legacycalc_box3para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.legacycalc_box3para3}</ReactMarkdown>
                  <Link href="/net-negative-personal">
                    <Button variant="green" className="calc-btn">{editingdata.legacycalc_box3button1}</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 col-md-8 col-lg-9 col-xl-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">{editingdata.legacy_header3}</h2>
                <p className="text-center px-lg-4 text-white large mb-2">{editingdata.legacy_para3}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-4">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <Link href="/contact">
                  <Button className="btn-large px-5" variant="green">
                    {editingdata.legacy_button3}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="pt-4 align-items-center justify-content-center mb-1">
              <Col className="col-10 col-lg-9 col-xl-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">See Your Forest</h2>
              </Col>
            </Row>
            <DigitalSign/>
          </Fade>

          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 col-md-8 col-lg-9 col-xl-7 pe-lg-0">
                <h3 className="text-center text-orange bold tight-drop-light mt-5">
                  Find out whose Indigenous Territory your home is on and see the Indigenous territory and community leaders to build relations.
                  </h3>
              </Col>
            </Row>
            <Row className="text-center justify-content-center">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <a href="https://native-land.ca/" target="_blank">
                  <Button className="btn-large px-5" variant="green">
                    NATIVELAND.CA
                  </Button>
                </a>
              </Col>
            </Row>
          </Fade>
        </Container>

        {/* Communal Forests */}
        <Container fluid id="communal" className="bg-communal sectionPad page-section">
          <Fade bottom>
            <Row className="text-center justify-content-center">
              <Col className="col-11 col-md-9 text-white">
                <h2 className="emphasis-2 bold pt-3 text-white tight-drop-light">
                  <ReactMarkdown>
                    {editingdata.communal_header1}
                  </ReactMarkdown>
                </h2>
              </Col>
            </Row>
          </Fade>

          {/* COMMUNAL MODAL BUTTONS */}

          <Fade bottom>
            <Row className="text-center justify-content-center mb-4">
              <Col className="col-11 col-md-8 mb-4">
                <Row className="horizTab justify-content-center">
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowCommunalModal1} data-dest="communal-about">
                      ABOUT
                    </a>                 
                  </Col>
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowCommunalModal2} data-dest="communal-quotes">
                      QUOTES
                    </a>                 
                  </Col>
                  <Col className="col-10 col-lg-4 my-2">
                    <a className="text-orange dropdown-links tight-drop-light" onClick={handleShowCommunalModal3} data-dest="communal-impact">
                      IMPACT
                    </a>                 
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>


          <Fade bottom>
            <Row className="text-center justify-content-center py-3 mt-5">
              <Col className="col-11 col-md-10 col-lg-9">
                <h2 className="text-orange tight-drop-light mb-4 bold px-2">{editingdata.communal_para1}</h2>
                
              {/* FTU units */}

              {/* Desktop */}

              <Container className="d-none d-lg-block">
                <Row className="roundedBox card-drop-heavy">
                  <Col className="col-12 col-lg-8 col-xl-9 px-0 bg-offwhite roundedBoxLeft">
                    <div className="p-5 pb-4 bg-brown roundedBoxTopLeft">
                      
                      <Row className="justify-content-center align-items-center mb-3">
                        <Col className="col-lg-4 col-xl-3 d-flex">
                          <img src="../../cft-icon-white.svg"/>
                        </Col>
                        <Col className="col-lg-8 col-xl-9 d-flex">
                        <h3 className="text-left x-large mt-3 text-white bold d-none d-xl-block">
                          IMPACT BENEFITS FOR COMMUNITY BUILDERS
                          </h3>
                          <h3 className="text-left lead mt-3 text-white bold d-xl-none">
                          IMPACT BENEFITS FOR COMMUNITY BUILDERS
                          </h3>
                        </Col>
                      </Row>
                      <p className="text-white text-left">
                      The number of FTUs purchased determines the packages available.
                      </p>
                    </div>
                    <div className="p-5 py-4 bg-offwhite roundedBoxBottomLeft">
                    <h5 className="text-left text-green medium">
                    WITH OVER 40 CHOICES, YOUR CUSTOMIZED PACKAGE MAY INCLUDE:
                      </h5>
                      <ul className="text-grey dropdown-text checkMark px-1 mx-3">
                        <li className="py-1">Supporting carbon sequestration & biodiversity</li>
                        <li className="py-1">Proprietary Net-Zero Calculator and Forestcaster™</li>
                        <li className="py-1">Access to a nation-wide connected community</li>
                        <li className="py-1">National recognition as an investor in a nature-based solution to climate change</li>
                        <li className="py-1">A dynamic private portal and digital assets</li>
                        <li className="py-1">A personalized Smart Forest Intelligence Dashboard</li>
                        <li className="py-1">Participate in the only Communal Smart Forest in Canada</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-lg-4 col-xl-3 bg-mildgreen text-white text-left p-4 roundedBoxRight">
                    <h6 className="bold mt-lg-5 mt-xl-4">WHAT IS A FOREST TRUST UNIT (FTU)?</h6>
                    <p>1 FTU</p>
                    <p>= 5 acres</p>
                    <p className="mb-2">= 5000+ seedlings</p>
                    <p className="ftu-par mb-2">
                      A FTU is a 5 acre Smart Forest that contains 5000+ planted seedlings. This is an ecologically biodiverse area that is under joint stewardship between CFT and the designated environmental steward.
                   </p>
                   <p className="ftu-par">Every FTU is:</p>
                   <ul className="ftu-list">
                     <li>supported by a 5-phase strategic action plan</li>
                     <li>validated by modern science</li>
                     <li>protected under the forever no clear-cut guarantee</li>
                   </ul>
                   <p className="ftu-par">We will engage Indigenous land knowledge holders in our decisions.</p>
                  </Col>
                </Row>
              </Container>

              {/* Mobile */}

              <Container className="d-lg-none">
                <Row className="roundedBox card-drop-heavy">
                  <Col className="col-12 px-0">
                    <div className="p-4 p-md-5 pb-4 bg-brown roundedBoxTop">
                      
                      <Row className="justify-content-center align-items-center mb-2 mb-md-3">
                        <Col className="col-12 col-md-3 d-flex">
                          <img src="../../cft-icon-white.svg"/>
                        </Col>
                        <Col className="col-12 col-md-9 col-xl-9 d-flex">
                          <p className="text-left lead text-white bold d-none d-md-block">
                          IMPACT BENEFITS FOR COMMUNITY BUILDERS
                          </p>
                          <h3 className="text-left text-white mt-3 bold d-md-none">
                          IMPACT BENEFITS FOR COMMUNITY BUILDERS
                          </h3>
                        </Col>
                      </Row>
                      <p className="text-white text-left">
                      The number of FTUs purchased determines the packages available.
                      </p>
                    </div>
                    <div className="px-4 px-md-5 pt-4 pb-3 bg-offwhite">
                    <h5 className="text-left text-green medium">
                    WITH OVER 40 CHOICES, YOUR CUSTOMIZED PACKAGE MAY INCLUDE:
                      </h5>
                      <ul className="text-grey dropdown-text checkMark px-1 mx-3">
                        <li className="py-1">Supporting carbon sequestration & biodiversity</li>
                        <li className="py-1">Proprietary Net-Zero Calculator and Forestcaster™</li>
                        <li className="py-1">Access to a nation-wide connected community</li>
                        <li className="py-1">National recognition as an investor in a nature-based solution to climate change</li>
                        <li className="py-1">A dynamic private portal and digital assets</li>
                        <li className="py-1">A personalized Smart Forest Intelligence Dashboard</li>
                        <li className="py-1">Participate in the only Communal Smart Forest in Canada</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-12 bg-mildgreen text-white text-left p-4 p-md-5 roundedBoxBottom">
                    <h6 className="bold">WHAT IS A FOREST TRUST UNIT (FTU)?</h6>
                    <p>1 FTU</p>
                    <p>= 5 acres</p>
                    <p className="mb-2">= 5000+ seedlings</p>
                    <p className="ftu-par mb-2">
                      A FTU is a 5 acre Smart Forest that contains 5000+ planted seedlings. This is an ecologically biodiverse area that is under joint stewardship between CFT and the designated environmental steward.
                   </p>
                   <p className="ftu-par">Every FTU is:</p>
                   <ul className="ftu-list">
                     <li>supported by a 5-phase strategic action plan</li>
                     <li>validated by modern science</li>
                     <li>protected under the forever no clear-cut guarantee</li>
                   </ul>
                   <p className="ftu-par">We will engage Indigenous land knowledge holders in our decisions.</p>
                  </Col>
                </Row>
              </Container>

              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row id="communal-calc-steps" className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">How to get your forest started</h2>
              </Col>
            </Row>
            <Row className="justify-content-center px-lg-5 mx-lg-5 px-xl-5 mx-xl-5 mb-5 pb-5">
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.communalcalc_box1para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.communalcalc_box1para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.communalcalc_box1para3}</ReactMarkdown>
                  <Link href="/personal-calculator">
                    <Button variant="green" className="calc-btn">{editingdata.communalcalc_box1button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.communalcalc_box2para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.communalcalc_box2para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.communalcalc_box2para3}</ReactMarkdown>
                  <Link href="/smart-forest-personal">
                    <Button variant="green" className="calc-btn">{editingdata.communalcalc_box2button1}</Button>
                  </Link>
                </div>
              </Col>
              <Col className="col-10 col-md-9 col-lg-4 px-xl-3 mb-4">
                <div className="card bg-offwhite p-4 mx-2 h-100 calculate-card">
                  <ReactMarkdown className="h6 text-mildgreen bold">{editingdata.communalcalc_box3para1}</ReactMarkdown>
                  <ReactMarkdown className="large text-green mb-3">{editingdata.communalcalc_box3para2}</ReactMarkdown>
                  <ReactMarkdown className="text-grey mb-3">{editingdata.communalcalc_box3para3}</ReactMarkdown>
                  <Link href="/net-negative-personal">
                    <Button variant="green" className="calc-btn">{editingdata.communalcalc_box3button1}</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 col-md-8 col-lg-9 col-xl-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">{editingdata.communal_header3}</h2>
                <p className="text-center px-lg-4 text-white large mb-2">{editingdata.communal_para3}</p>
              </Col>
            </Row>
            <Row className="text-center justify-content-center mb-5 pb-4">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <Link href="/contact">
                  <Button className="btn-large px-5" variant="green">
                    {editingdata.communal_button3}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Fade>

          <Fade bottom>
            <Row className="pt-4 align-items-center justify-content-center mb-1">
              <Col className="col-10 col-lg-9 col-xl-7 pe-lg-0">
                <h2 className="text-center text-orange bold tight-drop-light">See Your Forest</h2>
              </Col>
            </Row>
            <DigitalSign/>
          </Fade>

          <Fade bottom>
            <Row className="pt-5 align-items-center justify-content-center mt-5 mb-3">
              <Col className="col-10 col-md-8 col-lg-9 col-xl-7 pe-lg-0">
                <h3 className="text-center text-orange bold tight-drop-light mt-5">
                  Find out whose Indigenous Territory your community is on and see the Indigenous territory and community leaders to build relations.
                  </h3>
              </Col>
            </Row>
            <Row className="text-center justify-content-center">
              <Col className="col-10 text-center pb-5 pe-lg-0">
                <a href="https://native-land.ca/" target="_blank">
                  <Button className="btn-large px-5" variant="green">
                    NATIVELAND.CA
                  </Button>
                </a>
              </Col>
            </Row>
          </Fade>
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
