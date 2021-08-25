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
    label: "IPCC report warning: what this means for Canadians",
    path: "https://www.cbc.ca/news/science/ipcc-report-canada-1.6134879"
  },
  {
    key: "newsItem3",
    label: "Calculate Your Carbon Footprint",
    path: "/carbon-calculator"
  },
  {
    key: "newsItem4",
    label: "‘This is a crisis’: Yukon minister urges action",
    path: "https://www.thestar.com/news/canada/2021/08/20/this-is-a-crisis-yukon-minister-urges-action-on-climate-change.html"
  },
  {
    key: "newsItem5",
    label: "Grow to New-Zero",
    path: "/smart-forest-calculator"
  },
  {
    key: "newsItem6",
    label: "Build a Smart Forest",
    path: "/build-your-smart-forest"
  },
  {
    key: "newsItem7",
    label: "Cancelled trips and climate change",
    path: "https://www.cbc.ca/news/canada/british-columbia/cancelled-trip-climate-change-backcountry-1.6147128"
  },
  {
    key: "newsItem8",
    label: "Polling: Canadians worry about climate change's impact on their health",
    path: "https://abacusdata.ca/extreme-weather-climate-change-choices/"
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