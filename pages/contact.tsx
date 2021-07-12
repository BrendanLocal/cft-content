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

  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()


  function ContactForm() {
    const [state, handleSubmit] = useForm("xpzkpajl");
    if (state.succeeded) {
      return <p>{editingdata.contactSuccess}</p>;
    }

    return (
      <form onSubmit={handleSubmit}>
        <Row className="">
          <Col>
            <label htmlFor="name" className="labelCaps">{editingdata.name}</label>
            <input id="name" type="text" name="name" className="w-full" required />
          </Col>
          <Col>
            <label htmlFor="email" className="labelCaps">{editingdata.email}</label>
            <input id="email" type="email" name="email" className="w-full" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <label htmlFor="interests" className="labelCaps">{editingdata.intHeader}</label>
            <Row>
              <Col className="col-12 col-sm-6">
                <input type="checkbox" id="corporate" name="corporate" value="corporate" />
                <label htmlFor="corporate">{editingdata.intCorp}</label><br/>
                <input type="checkbox" id="legacy" name="legacy" value="legacy" />
                <label htmlFor="legacy">{editingdata.intLeg}</label>
              </Col>
              <Col className="col-12 col-sm-6">
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
            <textarea id="message" name="message" rows={6} className="w-full" placeholder={editingdata.messagePlaceholder}/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <button className="btn btn-green btn-full mt-2" type="submit" disabled={state.submitting}>{editingdata.submit}</button>
          </Col>
        </Row>
      </form>
    );
  }


  return (
    <div>
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <main className="bg-green py-5">
        <Container className="v-full pt-5 mb-5">
          <Row className="text-center  py-3">
            <Col>
            <h1 className="text-orange">{editingdata.header}</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-12 col-sm-3 col-xl-2 p2 mb-3 d-flex align-items-stretch">
              <div className="roundedBox bg-brown innerShadow text-white p-4">
                <h3>{editingdata.name}</h3>
                <p className="large">{editingdata.address}</p>
                <p>{editingdata.additionalInfo}</p>
                <Button variant="orange btn-full">{editingdata.leftEmail}</Button>
                <Button variant="orange btn-full">{editingdata.leftPhone}</Button>
              </div>
            </Col>
            <Col className="col-12 col-sm-7 col-xl-5 p2">
              <div className=" roundedBox innerShadow text-white p-4">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
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