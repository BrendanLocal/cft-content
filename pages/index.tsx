import React, { useState } from 'react';

import Link from 'next/link'
import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import useBodyClass from '../components/headerClass';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github';
import { usePlugin } from 'tinacms';
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

  export default function Splash({ file, href, children}) {
  
    const formOptions = {
      label: 'Index',
      fields: [
        {name: 'pageName', component: 'markdown' },
        {name: 'pageURL', component: 'markdown' },
        {name: 'title', component: 'markdown' },
        {name: 'enter', component: 'markdown' },
       ]
    }

    const [show, setShow] = useState(false);
  
    const [editingdata, form] = useGithubJsonForm(file, formOptions)
    usePlugin(form)
    useGithubToolbarPlugins()

    useBodyClass('splash');

  return (
    <div>
      <Header/>
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <main id="intro">   
        <Container fluid className="v-full justify-content-center z-999 p-5">

            <Row className="justify-content-center mt-5 mb-2 p-sm-0 m-sm-0">
                <Col className="col-12 col-md-8 p-sm-0 m-sm-0 mt-5">
                <object className="mt-5" type="image/svg+xml" data="/intro-animation.svg"/> 
                </Col>    
            </Row>

            <Row className="justify-content-center d-none d-lg-block">
                <Col className="col-12 text-center">
                <Link href="/home" ><a className="intro-btn btn btn-text text-orange large tight-drop-light no-underline">{editingdata.enter}</a></Link>
                </Col>    
            </Row>

            <Row className="justify-content-center d-lg-none mt-5 p-5">
                <Col className="col-8 text-center">
                <a href="/home" className="intro-btn btn btn-text text-orange large tight-drop-light no-underline">{editingdata.enter}</a>
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
export const getStaticProps: GetStaticProps = async function({preview, previewData,}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/index.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/index.json',
        data: (await import('../content/index.json')).default,
      },
    },
  }
}