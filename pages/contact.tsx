import React, { useState, useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Header from "../components/header";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from 'react-player';

const Lang = () => {
  var language ="en";
    const router = useRouter();
    if(router.query.lang){ 
    const lan = JSON.stringify(router.query.lang);
    language = JSON.parse(lan)
    }
    return (language)
  }
 
  export default function Contact({ file, href, children}) {
  const formOptions = {
    label: 'Contact Page',
    fields: [
      { name: 'title', component: 'text' }
    ],
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()
  
  const socialIcons = [
    {
      icon: "/fbookIcon.svg",
      label: "Facebook",
      path: "https://www.facebook.com/canadasforest",
      alt: "facebook icon"
    },
    {
      icon: "/twtIcon.svg",
      label: "Twitter",
      path: "https://twitter.com/CanadasForest",
      alt: "Twitter Icon"
    },
    {
      icon: "/instaIcon.svg",
      label: "Instagram",
      path: "https://www.instagram.com/canadasforest/?hl=en",
      alt: "Instagram Icon"
    },
    {
      icon: "/linkedinIcon.svg",
      label: "LinkedIn",
      path: "https://linkedin.com/company/canadas-forest-trust",
      alt: "LinkedIn Icon"
    }
  ]

  function ContactForm() {
    const [state, handleSubmit] = useForm("xpzkpajl");
    if (state.succeeded) {
      return (
        <Row className="justify-content-center align-items-center">
          <Col className="p-4">
            <h3 className="text-white text-center">Thank you for contacting us!</h3>
            <p className="text-white large text-center mb-4 px-2 px-md-4">A member of our team will reach out to you shortly. In the meantime, please watch this video from our founder:</p>          
            <ReactPlayer playsinline controls url='./ceo-message.mp4' className="video-size mb-4"/>
            <p className="text-white large text-center mb-3">Follow us on social media:</p>
            
            <div className="socialIcons text-center">
              {socialIcons.map(item =>
                <a key={item.label} href={item.path} target="_blank" className="text-center mx-2 mx-md-3"><img src={item.icon} alt={item.alt}></img></a>
              )}
            </div>
          </Col>
        </Row>
      );
    }

    return (
      <form onSubmit={handleSubmit}>
        <Header/>
        <Row className="">
          <Col className="col-12 col-md-6">
            <label htmlFor="name" className="labelCaps">{editingdata.name}</label>
            <input id="name" type="text" name="name" className="w-full" required />
          </Col>
          <Col className="col-12 col-md-6">
            <label htmlFor="email" className="labelCaps">{editingdata.email}</label>
            <input id="email" type="email" name="email" className="w-full" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <label htmlFor="interests" className="labelCaps">{editingdata.intHeader}</label>
            <Row>
              <Col className="col-12 col-md-6">
                <input type="checkbox" id="corporate" name="corporate" value="corporate" />
                <label htmlFor="corporate">{editingdata.intCorp}</label><br/>
                <input type="checkbox" id="legacy" name="legacy" value="legacy" />
                <label htmlFor="legacy">{editingdata.intLeg}</label>
              </Col>
              <Col className="col-12 col-md-6">
                <input type="checkbox" id="school" name="school" value="school" />
                <label htmlFor="school">{editingdata.intSchool}</label><br/>
                <input type="checkbox" id="communal" name="communal" value="communal" />
                <label htmlFor="communal">{editingdata.intComm}</label>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <label htmlFor="message"  className="labelCaps">{editingdata.messageHeader}</label><br/>
            <textarea id="message" name="message" rows={4} className="w-full" placeholder={editingdata.messagePlaceholder}/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <button className="btn btn-green btn-full mt-2" type="submit" disabled={state.submitting}>{editingdata.submit}</button>
          </Col>
        </Row>
      </form>
    );
  }

  return (
    <div>
      <Header/>
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <main className="bg-green py-5">
        <Container className="v-full pt-5">
          <Row className="text-center py-3 justify-content-center">
            <Col className="col-11 col-lg-8 col-xl-6" >
              <h1 className="bold emphasis text-orange">{editingdata.header}</h1>
              <p className="medium text-white">
                Interested in buying and building a Smart Forest with Canada's Forest Trust? Please complete the form so that we can plan your path to net-zero carbon emissions.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-11 col-lg-8 col-xl-6">
              <div className="roundedBox innerShadow text-white p-4">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>

        <Modal show={show} className="d-flex align-items-center" onHide={handleClose}>
          <Modal.Header className="d-none" closeButton>
            <Modal.Title className="d-none"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-center align-items-center mb-0">
              <Col>
                <h3 className="text-green smallCaps text-center">A MESSAGE FROM OUR FOUNDER</h3>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer className="p-0">
            <Button className="modal-btn mt-2 me-3 p-0" variant="text-btn" onClick={handleClose}>CLOSE</Button>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  )
}

/**
* Fetch data with getStaticProps based on 'preview' mode
*/
export const getStaticProps: GetStaticProps = async function({ preview, previewData,}) {

  if (preview) {
    return getGithubPreviewProps({ 
      ...previewData, 
      fileRelativePath: 'content/contact.json', 
      parse: parseJson,
    })  
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/contact.json',
        data: (await import('../content/contact.json')).default,
      },
    },
  }
}