import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from '../components/portalMap'

import Button from 'react-bootstrap/Button';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function Portal({ file }) {
const formOptions = {
label: 'User Portal',
fields: [{ name: 'title', component: 'text' }],
}



return (

<div>

  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218">
    </meta>
  </Head>

  <main className="bg-green">
    <Container className="bg-green py-5">
      <Row className="justify-content-center d-flex pt-5">
        <Col className="col-xl-10 ">
        <h1 className="h2 text-orange text-center py-3">
          Customer Portal
        </h1>
        </Col>
      </Row>
      <Row className="flex justify-content-center pb-5">
        <Col className="col-12 col-md-5 col-xl-4 p-3">
          <div className="roundedBoxMedium outerShadow p-5 bg-offwhite">

        <h3>Log In</h3>
        <label>Username</label>
        <input type="text"></input>

        <label>Password</label>
        <input type="text"></input>
        <a className="text-orange textButton" href="/become-a-customer">Become a customer</a></div>
        </Col>
        <Col className="col-12 col-md-5 col-xl-4 p-3">

        <div className="roundedBoxMedium outerShadow p-5 bg-offwhite">

        <h3>Demo Portal</h3>
        <p>Try out the customer portal for yourself, using some data from our founder's own portal.</p>
<Link href="portal-demo">
        <Button variant="green">Enter the demo portal</Button></Link>
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
export const getStaticProps: GetStaticProps = async function({
preview,
previewData,
}) {
if (preview) {
return getGithubPreviewProps({
...previewData,
fileRelativePath: 'content/portal.json',
parse: parseJson,
})
}
return {
props: {
sourceProvider: null,
error: null,
preview: false,
file: {
fileRelativePath: 'content/portal.json',
data: (await import('../content/portal.json')).default,
},
},
}
}