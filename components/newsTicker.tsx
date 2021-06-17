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
  label: "Nearly half of world’s biggest companies factoring cost of carbon into business plans",
  path: "https://corporateknights.us9.list-manage.com/track/click?u=892426d3668c65028353738b1&id=02852faa6f&e=822a1e6250",
  },
  {
    key: "newsItem2",
  label: "Study finds Canadians may not take climate change as personally as their peers",
  path: "https://corporateknights.us9.list-manage.com/track/click?u=892426d3668c65028353738b1&id=011c20a181&e=822a1e6250"
  },
  {
    key: "newsItem4",
    label: "What is a Smart Forest?",
    type: "button tickerButton"
  },
  {
    key: "newsItem3",
  label: "If a tree talks in the forest, does it make a sound?",
  path: "https://ehn.us16.list-manage.com/track/click?u=73be43273a8ebb733ab2696c7&id=2a0a82f09a&e=0a6997d30d"
  },
  {
    key: "newsItem5",
  label: "Nature is critical to slowing climate change, but it can only do so if we help it first",
  path: "https://ehn.us16.list-manage.com/track/click?u=73be43273a8ebb733ab2696c7&id=2aede13c1a&e=0a6997d30d"
  },
  {
    key: "newsItem6",
    label: "What is a Smart Forest?",
    type: "button tickerButton"
  },
  {
    key: "newsItem7",
  label: "Environmentalists ‘up in arms’ about Finnish-Swedish defence of forest industry",
  path: "https://www.euractiv.com/section/politics/short_news/environmentalists-up-in-arms-about-finnish-swedish-defence-of-forest-industry/"
  },
  {
    key: "newsItem8",
  label: "B.C. announces plans to redistribute forest tenures to small operators, Indigenous communities",
  path: "https://www.cbc.ca/news/canada/british-columbia/b-c-announces-plans-to-update-and-modernize-forestry-policy-1.6049137"
  },
  {
    key: "newsItem9",
    label: "What is a Smart Forest?",
    type: "button tickerButton"
  }
  ]


const NewsTicker = ()=> {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
  
 
<React.Fragment>

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
          <Row className="justify-content-center align-items-center ps-lg-4 ms-lg-4">
            <Col className="col-12 d-flex ms-lg-4 mb-2 nudge">
            
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