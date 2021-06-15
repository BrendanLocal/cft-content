import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
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


const [editingdata, form] = useGithubJsonForm(file, formOptions)
usePlugin(form)
useGithubToolbarPlugins()

const [ session, loading ] = useSession();

var Airtable = require('airtable');
var airbase = new Airtable({apiKey: 'keysTmOxkJA2tynqF'}).base('appGnInO2fkYUQc2f');

const [userData, setUserData] = React.useState({
  displayname: "",
  long: 0,
  lat: 0,
  trees: 0,
  acres: 0,
  type: "",
  status: "",
  net: 0,
  engagement: 0,
  biodiversity: 0,
  location: "",
  country: ""
});



airbase('userdata').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  filterByFormula: "{clientname} = 'gary_000001'",
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
    userData.displayname = record.get('displayname');
    userData.long = record.get('longitude');
    userData.lat = record.get('latitude');
    userData.trees = record.get('trees');
    userData.acres = record.get('acres');
    userData.type = record.get('type');
    userData.status = record.get('status');
    userData.net = record.get('net');
    userData.engagement = record.get('engagement');
    userData.biodiversity = record.get('biodiversity');
    userData.location = record.get('location');
    userData.country = record.get('country');
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  

}, function done(err) {
  if (err) { console.error(err); return; }
});




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
      <Row className="justify-content-center d-flex">
        <Col className="col-xl-10 ">
        <h1 className="h2 text-orange text-center">
          {editingdata.greeting} {userData.displayname}
        </h1>
        </Col>
      </Row>
      <Row className="flex justify-content-center">
        <Col className="col-xl-8 roundedBoxMedium bg-white outerShadow">

        <Tabs>
          <Row>
            <Col className="col-lg-3 p-5  pe-1 bg-offwhite roundedBoxMediumLeft">

            <TabList>
              <span className="smallCaps small text-green panelHead ">Profile</span>
              <Tab>
                My Smart Forest<sup>™</sup></Tab>
              <Tab>Grow My Impact</Tab>
              <br />
              <span className="smallCaps small text-green panelHead ">Campaigns</span>
              
              <Tab>

                Active
              </Tab>
              <Tab>

                Previous
              </Tab>

            </TabList>
            </Col>
            <Col className="col-lg-9 p-5">
            <TabPanel>
              <h2 className="panelHead text-center text-grey">My Smart Forest<sup>™</sup></h2>
              <Map/>
              <Row className="borderGrid pt-3">
                <Col>
                <Row>
                  <Col>
                  <span className="h3 text-green mb-0">{userData.location}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">{userData.country}</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h3 text-green mb-0">{userData.trees}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">Trees</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h3 text-green mb-0">{userData.acres}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">Acres</span>
                  </Col>
                </Row>
                </Col>
              </Row>
              <Row className="py-3">
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData.type}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">Forest Type</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData.status}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">Build Status</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData.net*100}%</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">To Net Zero</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData.engagement}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">People Engaged</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData.biodiversity*100}%</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">Biodiversity Protected</span>
                  </Col>
                </Row>
                </Col>
              </Row>
              <Row>
              <hr className="thick"/>
              </Row>
              <Row>
                <Col>
                <a className="link bold text-orange">2040 ForestCast<sup>™</sup></a></Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <h2 className="panelHead text-center text-grey">Grow My Impact</h2>
            </TabPanel>

            <TabPanel>
              <h2 className="panelHead text-center text-grey">Active Campaigns</h2>
            </TabPanel>

            <TabPanel>
              <h2 className="panelHead text-center text-grey">Previous Campaigns</h2>
            </TabPanel>
            </Col>

          </Row>

        </Tabs>
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