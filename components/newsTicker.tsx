import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Ticker from 'react-ticker'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player';

const newsItems = [
  {
    key: "newsItem1",
    label: "What is a Smart Forest?",
    type: "button tickerButton"
  },
  {
    key: "newsItem2",
    label: "Announcing IMI as a Smart Forest Builder",
    path: "https://youtu.be/eCMCqScS0XM"
  },
  {
    key: "newsItem3",
    label: "When the Climate Crisis Becomes Unignorable",
    path: "https://www.theatlantic.com/science/archive/2021/09/summer-climate-disaster/620004/?utm_source=ActiveCampaign&utm_medium=email&utm_content=Top+news%3A&utm_campaign=ATF+Daily"
  },
  {
    key: "newsItem4",
    label: "Toronto is designed for a climate that doesn't exist",
    path: "https://www.cbc.ca/news/canada/toronto/climate-change-toronto-adaptation-1.6138067"
  },
  {
    key: "newsItem5",
    label: "Calculate Your Carbon Footprint",
    path: "/carbon-calculator"
  },
  {
    key: "newsItem6",
    label: "Global warming spares no country says UN climate chief",
    path: "https://www.nationalobserver.com/2021/09/07/news/un-climate-chief-country-global-warming"
  },
  {
    key: "newsItem7",
    label: "Why climate change matters in Election 2021",
    path: "https://globalnews.ca/news/8140651/wildfires-drought-and-record-heat-why-climate-change-matters-in-election-2021/"
  },
  {
    key: "newsItem8",
    label: "Sequester carbon emissions - grow to net-zero",
    path: "/smart-forest-calculator"
  },
  {
    key: "newsItem9",
    label: "Climate change: Animals shapeshifting to stay cool",
    path: "https://www.bbc.com/news/newsbeat-58487050"
  },
  {
    key: "newsItem10",
    label: "Oil patch workers believe Canada needs to pivot to a net-zero economy",
    path: "https://www.corporateknights.com/energy/just-transition/"
  },
  {
    key: "newsItem11",
    label: "Climate change puts a source of Arctic life in imminent danger",
    path: "https://www.cbc.ca/news/canada/north/north-water-polynya-under-threat-1.6140307"
  },
  {
    key: "newsItem12",
    label: "Build a Smart Forest",
    path: "/build-your-smart-forest"
  }
];

const NewsTicker = ()=> {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showTicker, setShowTicker] = useState(false);
  const [moveTicker, setMoveTicker] = useState(false);
  useEffect(() => {
    const WebFont = require('webfontloader');
    WebFont.load({
      custom: {
        families: ['GT-America'],
        urls: [
          '/GT-America-Extended-Bold.woff',
          '/GT-America-Extended-Light.woff',
          '/GT-America-Extended-Medium.woff',
          '/GT-America-Extended-Thin.woff',
          '/GT-America-Standard-Medium.woff'
        ]
      },
      active: () => {
        setShowTicker(true);

        setTimeout(() => {
          setMoveTicker(true);
        }, 500);
      }
    });
  }, []);

  return(
    <React.Fragment>
      <Modal show={show} className=" d-flex align-items-center" onHide={handleClose}>
        <Modal.Header className="d-none" closeButton>
          <Modal.Title className="d-none"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center align-items-center mb-0">
            <Col>
              <h3 className="text-green smallCaps text-center">THE SMART FOREST INITIATIVE</h3>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="col-12 d-flex">
              <ReactPlayer playing playsinline controls url='./CFT_Rev8_DDC_ForApproval.mp4' className="video-size"/>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="p-0">
          <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleClose}>CLOSE</Button>
        </Modal.Footer>
      </Modal>

      <div id="ticker" className="container-fluid">
        <div className="row">
          <div className="tickerHead v-10 col-3 col-sm-2 col-md-2 col-lg-1 px-4">
            <span className="tickerTitle smallCaps">Latest News</span>
          </div>
          <div className="tickerMain col p-0">
          {
            showTicker &&
            <Ticker move={moveTicker}>
              {({ index }) => (
                <>
                  <p className=" d-flex align-items-center v-10 justify-content-center">
                  {
                    newsItems.map(function(item){
                      return (
                        <a className={item.type? item.type+" newsItem" : "newsItem"} key={item.key} href={item.path? item.path : null} target="_blank" onClick={item.type? handleShow : null} >{item.label}</a>
                      )
                    })
                  }
                  </p>
                </>
              )}
            </Ticker>
          }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NewsTicker