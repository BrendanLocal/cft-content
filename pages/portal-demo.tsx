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
import ImageGallery from 'react-image-gallery';
import Slider from 'react-input-slider';
import Button from 'react-bootstrap/Button';
import Header from "../components/header";
import Link from 'next/link';

import { useCurrentUser } from '../hooks/index';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function Portal({ file }) {
const formOptions = {
label: 'User Portal',
fields: [{ name: 'title', component: 'text' }],
}


const [user] = useCurrentUser();

const [isActive, setActive] = useState(false);
const toggleClass = () => {
  setActive(!isActive);
};
const [state, setState] = useState({ x: 0 });

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


var location = [47.185414, -66.314062];

/* slider data */

const [sliderData,setSliderData] = React.useState({
  0	:	{	"height"	: 	0	, 	"volume"	:	0	,	"jobs"	:	2	, "carbon":	0	}	,
5	:	{	"height"	: 	0.4	, 	"volume"	:	0.8	,	"jobs"	:	2	, "carbon":	6	}	,
10	:	{	"height"	: 	1.2	, 	"volume"	:	5.4	,	"jobs"	:	2	, "carbon":	11	}	,
15	:	{	"height"	: 	2.6	, 	"volume"	:	9.6	,	"jobs"	:	4	, "carbon":	17	}	,
20	:	{	"height"	: 	3.8	, 	"volume"	:	15.3	,	"jobs"	:	4	, "carbon":	22	}	,
25	:	{	"height"	: 	6	, 	"volume"	:	24.2	,	"jobs"	:	4	, "carbon":	28	}	,
30	:	{	"height"	: 	8.3	, 	"volume"	:	34	,	"jobs"	:	4	, "carbon":	33	}	,
35	:	{	"height"	: 	10.6	, 	"volume"	:	50	,	"jobs"	:	4	, "carbon":	44	}	,
40	:	{	"height"	: 	12.9	, 	"volume"	:	71	,	"jobs"	:	4	, "carbon":	61	}	,
45	:	{	"height"	: 	15.1	, 	"volume"	:	93	,	"jobs"	:	4	, "carbon":	75	}	,
50	:	{	"height"	: 	17.1	, 	"volume"	:	114	,	"jobs"	:	4	, "carbon":	99	}	,
55	:	{	"height"	: 	18.9	, 	"volume"	:	131	,	"jobs"	:	4	, "carbon":	123	}	,
60	:	{	"height"	: 	20.6	, 	"volume"	:	149	,	"jobs"	:	3	, "carbon":	224	}	,
65	:	{	"height"	: 	22.1	, 	"volume"	:	157	,	"jobs"	:	3	, "carbon":	238	}	,
70	:	{	"height"	: 	23.4	, 	"volume"	:	162	,	"jobs"	:	3	, "carbon":	250	}	,
75	:	{	"height"	: 	24.5	, 	"volume"	:	167	,	"jobs"	:	3	, "carbon":	128	}	,
80	:	{	"height"	: 	25.5	, 	"volume"	:	172	,	"jobs"	:	3	, "carbon":	268	}	,
85	:	{	"height"	: 	26.5	, 	"volume"	:	180	,	"jobs"	:	3	, "carbon":	273	}	,
90	:	{	"height"	: 	27.3	, 	"volume"	:	188	,	"jobs"	:	3	, "carbon":	286	}	,
95	:	{	"height"	: 	28.1	, 	"volume"	:	194	,	"jobs"	:	3	, "carbon":	293	}	,
100	:	{	"height"	: 	28.8	, 	"volume"	:	196	,	"jobs"	:	3	, "carbon":	168	}	
})


    const images = [
      {
        original: '/portal-gallery-3.jpg',
        thumbnail: '/portal-gallery-tb-3.jpg',
        description: ''
      },
      {
        original: '/portal-gallery-4.jpg',
        thumbnail: '/portal-gallery-tb-4.jpg',
        description: ''
      },
      {
        original: '/portal-gallery-9.jpg',
        thumbnail: '/portal-gallery-tb-9.jpg',
        description: ''
      },
      {
        original: '/portal-gallery-10.jpg',
        thumbnail: '/portal-gallery-tb-10.jpg',
        description: ''
      },
      {
        original: '/portal-gallery-1.jpg',
        thumbnail: '/portal-gallery-tb-1.jpg',
        description: ''
      },
      {
        original: '/portal-gallery-2.jpg',
        thumbnail: '/portal-gallery-tb-2.jpg',
        description: ''
      },
      {
        original: '/portal-gallery-5.jpg',
        thumbnail: '/portal-gallery-tb-5.jpg',
        description: ''
      },
      {
        original: '/portal-gallery-7.jpg',
        thumbnail: '/portal-gallery-tb-7.jpg',
        description: ''
      },      
      {
        original: '/portal-gallery-8.jpg',
        thumbnail: '/portal-gallery-tb-8.jpg',
        description: ''
      },
      {
        original: '/portal-gallery-6.jpg',
        thumbnail: '/portal-gallery-tb-6.jpg',
        description: ''
      }

    ]


return (

<div>
  <Head>
    <title>Canada's Forest Trust</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#054218">
    </meta>
  </Head>

  <main className="bg-green ">
    <Container fluid className="portalLogo">
        <Row>
          <Col className="p-4">
            <Link href="/home">
            <img className="logo" src="/cft-logo-white.svg" />
            </Link>
          </Col>
          <Col className="text-right p-4">
              
                <Link href={ user? "/portal-user" : "/portal" } ><a className="smallCaps textButton">{ user? "Your Portal" : "Sign in" }</a></Link>
                
          </Col>
          </Row>
     </Container>
    <Container fluid className="bg-green px-0">
      <Row className="justify-content-center d-flex mb-3 pt-lg-5">
        <Col className="col-10 mt-5 mt-lg-0 mt-xl-0">
        <h1 className="h2 bold text-orange text-center">
          {editingdata.greeting} {userData.displayname}
        </h1>
        </Col>
      </Row>

      <Row className="flex bg-white  justify-content-center p-0 m-0">
       <Col className="col-12 card-drop p-0 m-0">
        <Tabs className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col className="col-12 col-lg-3 p-5 bg-offwhite d-none d-lg-block">
            <TabList>
              <span className="smallCaps small text-green panelHead mb-1">Profile</span>
              <Tab className="my-2">Smart Forest Intelligence Dashboard</Tab>       
              <Tab className="op-5 my-2" disabled>Grow My Impact</Tab>
              <Tab className="op-5 my-2" disabled>Edit My Information</Tab>
              <br />
              <span className="smallCaps small text-green panelHead mb-1">Campaigns</span> 
              <Tab className="op-5 my-2" disabled>New +</Tab>
              <Tab className="op-5 my-2" disabled>Active</Tab>
              <Tab className="op-5 my-2" disabled>Previous</Tab>
            </TabList>
            </Col>
            
            <Col className="col-12 col-lg-9 p-5 pt-4">    
            <TabPanel>
              <h3 className="text-center text-grey mt-3 mb-2 px-3">Smart Forest Intelligence Dashboard</h3>
              <Tabs>
                <TabList className="tabRow mb-0 px-0">
                  <Tab className="link bold text-orange my-2 mx-5 mx-md-3">
                  YOUR FOREST
                  </Tab>
                  <Tab className="link bold text-orange my-2 mx-5 mx-md-3">
                  GALLERY
                  </Tab>
                  <Tab className="link bold text-orange my-2 mx-5 mx-md-3">
                  FORESTCASTER
                  </Tab>
              </TabList>

       {/* Dashboard */}
            <TabPanel >
              <Row className="flex justify-content-center mt-3">
                <Col className="col-12 col-md-4 col-lg-4 py-3 px-2">
                <img src="/dashboard1.svg"/> 
                </Col>
                <Col className="col-12 col-md-4 col-lg-4 py-3 px-2">
                <img src="/dashboard2.svg"/> 
                </Col>
                <Col className="col-12 col-md-4 col-lg-4 py-3 px-2">
                <img src="/dashboard3.svg"/> 
                </Col>
              </Row>
                          
              </TabPanel>

        {/* Image Gallery */}      

            <TabPanel className="py-3">

                  <ImageGallery items={images} showPlayButton={false} showIndex={true} /> 
            
              </TabPanel>
              
        {/* Forestcaster */}      
              <TabPanel>
                <Row>
                  <Col className="col-12 col-md-8 col-xl-8 p-0">
                    <img src="/portal-gallery-forestcast-grid.svg"/> 
                  </Col>
                  <Col className="col-12 col-md-4 col-xl-4 p-0 px-">
                    <img src="/portal-gallery-forestcast-data.svg"/> 
                  </Col>
                </Row>
                
              </TabPanel>

              </Tabs>
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