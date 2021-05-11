import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'
import Parallax from 'parallax-js'
import Rellax from "rellax";



export default function Home({ file }) {
const formOptions = {
label: 'Home Page',
fields: [{ name: 'title', component: 'text' }],
}

const [data, form] = useGithubJsonForm(file, formOptions)
usePlugin(form)
useGithubToolbarPlugins()

useEffect(() => {
  new Rellax(".rellax");
}, []);


return (
  
<div className={styles.homeParallax}>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218"></meta>
  </Head>

  <main>
  
    <img className="rellax parallaxLayers" src="/forestv3_layer6.jpg" alt="Wide image of the forest"
      data-rellax-speed="-10"></img>
    <img className="rellax parallaxLayers" src="/forestv3_layer5.png" alt="Wide image of the forest, layered to imply depth"
      data-rellax-speed="-8"></img>
    <img className="rellax parallaxLayers" src="/forestv3_layer3.png" alt="Wide image of the forest, layered to imply depth"
      data-rellax-speed="-5"></img>
    <img className="rellax parallaxLayers" src="/forestv3_layer1.png" alt="Wide image of the forest, layered to imply depth"
      data-rellax-speed="-2"></img>
      <img className="rellax parallaxLayers" src="/landingTemp.jpg" alt="Wide image of the forest"
      data-rellax-speed="5"></img>
    <Container className="v-full d-flex flex-column text-white">
      <Row className="v-full justify-content-center align-items-center ">
        <Col className="col-lg-7">
        <h1 className="firstBold mb-5 drop">
          <span className="bold">Unlock</span> the power of forests.
        </h1>
        <Button variant="white btn-solid btn-large">
Call to action
        </Button>
        </Col>
      </Row>
    </Container>
    <Container fluid className=" v-full bg-green">
      <Row>
        <Col>

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
export const getStaticProps: GetStaticProps = async function({
preview,
previewData,
}) {
if (preview) {
return getGithubPreviewProps({
...previewData,
fileRelativePath: 'content/home.json',
parse: parseJson,
})
}
return {
props: {
sourceProvider: null,
error: null,
preview: false,
file: {
fileRelativePath: 'content/home.json',
data: (await import('../content/home.json')).default,
},
},
}
}