import React from 'react';

import Link from 'next/link'
import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import useBodyClass from '../components/headerClass';

export default function Splash() {

    useBodyClass('splash');

  return (

    <div>
      <Head>
        <title>Canada's Forest Trust</title>
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
                <Link href="/" ><a className="intro-btn btn btn-text text-orange large tight-drop-light no-underline">ENTER THE FOREST</a></Link>
                </Col>    
            </Row>

            <Row className="justify-content-center d-lg-none mt-5 p-5">
                <Col className="col-8 text-center">
                <a href="/" className="intro-btn btn btn-text text-orange large tight-drop-light no-underline">ENTER THE FOREST</a>
                </Col>    
            </Row>

        </Container>
      </main>
    </div>  

  )
}
