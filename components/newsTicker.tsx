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
    label: "Costs of Climate Tipping Points ",
    path: "https://insideclimatenews.org/news/16082021/climate-tipping-points/"
  },
  {
    key: "newsItem3",
  label: "Carbon Calculators",
  path: "/carbon-calculator"
  },
  {
    key: "newsItem4",
  label: "A 'preview' of Earth's coming climate crisis",
  path: "https://www.nbcnews.com/science/environment/heat-wave-2021-climate-scientists-warn-new-normal-rcna1664"
  },
  {
    key: "newsItem5",
    label: "Net-Zero Calculators",
    path: "/smart-forest-calculator"
  },
  {
    key: "newsItem6",
  label: "Build a Smart Forest",
  path: "/build-your-smart-forest"
  },
  {
    key: "newsItem7",
  label: "Can healthcare save the public from climate change?",
  path: "https://www.corporateknights.com/channels/climate-and-carbon/after-covid-can-healthcare-save-the-public-from-climate-change-16273026/"
  },
  {
    key: "newsItem8",
    label: "No Part of the Planet Will be Spared",
    path: "https://insideclimatenews.org/news/09082021/global-climate-panels-report-no-part-of-the-planet-will-be-spared-ipcc-science-cop-extremes/"
  }
  ]


const NewsTicker = ()=> {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <Ticker>
      
    {({ index }) => (
              <><p className=" d-flex align-items-center v-10 justify-content-center">
              {newsItems.map(function(item){
                return (
                  
                  <a className={item.type? item.type+" newsItem" : "newsItem"} key={item.key} href={item.path? item.path : null} target="_blank" onClick={item.type? handleShow : null} >{item.label}</a>
                  
                )
                })}
                </p>
              </>
          )}
    </Ticker>
    </div>
  </div>
</div>
</React.Fragment>
)
}


export default NewsTicker