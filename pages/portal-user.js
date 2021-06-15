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
import dynamic from 'next/dynamic';
import Button from 'react-bootstrap/Button';
import { useCurrentUser } from '../hooks/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';





const Map = dynamic(() => import("../components/portalMap"), {
  loading: () => "Loading...",
  ssr: false
});

export default function Portal({ file }) {

  const [user] = useCurrentUser();


  const [isUpdating, setIsUpdating] = useState(false);
  
  const [msg, setMsg] = useState({ message: '', isError: false });
  
  var location = [47.185414, -66.314062];


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
          Welcome Back, {user ? user.name : 'stranger'}
        </h1>
        {user ? user.longitude : ''}
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
              <Tab>Edit My Information</Tab>
              <br />
              <span className="smallCaps small text-green panelHead ">Campaigns</span>
              <Tab>

                New +
              </Tab>
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
              <Map location={location}/>
              <Row className="borderGrid pt-3">
                <Col>
                <Row>
                  <Col>
                  <span className="h3 text-green mb-0">{user ? user.location : ''}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="bold">{user ? user.country : ''}</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h3 text-green mb-0">{user ? user.trees : ''}</span>
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
                  <span className="h3 text-green mb-0">{user ? user.acres : ''}</span>
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
                  <span className="h4 text-green">{user ? user.type : ''}</span>
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
                  <span className="h4 text-green">{user ? user.status : ''}</span>
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
                  <span className="h4 text-green">{user ? user.next : ''}%</span>
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
                  <span className="h4 text-green">{user ? user.engagement : ''}</span>
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
                  <span className="h4 text-green">{user ? user.biodiversity : ''}%</span>
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
              <h2 className="panelHead text-center text-grey">Edit My Information</h2>
              
            </TabPanel>

            <TabPanel>
              <h2 className="panelHead text-center text-grey">New Campaign</h2>
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

