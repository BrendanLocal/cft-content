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


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function Portal({ file }) {
const formOptions = {
label: 'User Portal',
fields: [{ name: 'title', component: 'text' }],
}


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
        original: '/landing-image.png',
        thumbnail: '/landing-image-thumb.png',
        description: '10:10PM 10/10/2025'
        
      },
      {
        original: '/landing-image.png',
        thumbnail: '/landing-image-thumb.png',
        description: '10:15PM 10/10/2025'
      },
      {
        original: '/landing-image.png',
        thumbnail: '/landing-image-thumb.png',
        description: '10:20PM 10/10/2025'
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

  <main className="bg-green">
    <Container className="bg-green py-5 my-5">
      <Row className="justify-content-center d-flex mb-3 pt-lg-5">
        <Col className="col-xl-10 ">
        <h1 className="h2 bold text-orange text-center">
          {editingdata.greeting} {userData.displayname}
        </h1>
        </Col>
      </Row>
      <Row className="flex justify-content-center">
        <Col className="col-xl-8 roundedBox bg-white card-drop">

        <Tabs>
          <Row>
            <Col className="col-lg-3 p-4 pe-1 bg-offwhite roundedBoxLeft">

            <TabList>
              <span className="smallCaps small text-green panelHead ">Profile</span>
              <Tab>
                My Smart Forest</Tab>
                
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
            
            <Col className="col-lg-9 p-5 pt-4">
           
            <TabPanel>
            <h2 className="panelHead text-center text-green mb-2 ">My Smart Forest</h2>
            <Tabs>
              <TabList className="tabRow mb-0">
            <Tab className="link bold text-orange">
                Dashboard
                </Tab>
              <Tab className="link bold text-orange">
                ForestCast
                </Tab>
                <Tab className="link bold text-orange">
                Image Gallery
                </Tab>
            </TabList>
            
            <TabPanel className="mt-3">
              
              <Map location={location}/>
              <Row className="borderGrid pt-3">
                <Col>
                <Row>
                  <Col className="ps-1">
                  <span className="h2 bold text-green ps-0 mb-0">{userData ? userData.location : ''}</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="ps-1">
                  <span className="p text-small">{userData ? userData.country : ''}</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h2 bold text-green mb-0">{userData ? userData.trees : ''}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Trees</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h2 bold text-green mb-0">{userData ? userData.acres : ''}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Acres</span>
                  </Col>
                </Row>
                </Col>
              </Row>
              <Row className="py-3">
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData ? userData.type : ''}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Forest Type</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData ? userData.status : ''}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Build Status</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData ? userData.net : ''}%</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">To Net Zero</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData ? userData.engagement : ''}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">People Engaged</span>
                  </Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col>
                  <span className="h4 text-green">{userData ? userData.biodiversity : ''}%</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Biodiversity Protected</span>
                  </Col>
                </Row>
                </Col>
              </Row>
              <Row>
              <hr className="thick"/>
              </Row>
              </TabPanel>

            <TabPanel className="pt-0">
            <div className="forestImages"><img src="/trees-platform.png"/><img className="overlay" src={"/trees-year-"+state.x+".png"}/></div>
             <p className="smallCaps small text-center text-green">{state.x} years</p>
      <Slider 
      styles={{
        track: {
          margin: "0 3%",
  width: "94% !important"
        },
        active: {
          backgroundColor: '#054218'
        },
        thumb: { backgroundColor: '#00823B'
        },
        disabled: {
          opacity: 0.5
        }
      }}

        x={state.x}
        xstep={5}
        onChange={({ x }) => setState(state => ({ ...state, x }))}
      />
   
      
      <Row className="numRow">
      <Col>0</Col>
      <Col>10</Col>
      <Col>20</Col>
      <Col>30</Col>
      <Col>40</Col>
      <Col>50</Col>
      <Col>60</Col>
      <Col>70</Col>
      <Col>80</Col>
      <Col>90</Col>
      <Col>100</Col>
      </Row>
      <Row className="pt-5">
      <Col className="px-4">
                <Row>
                  <Col >
                  <span className="h4 text-green">{sliderData[state.x].height} meters</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Average Height</span>
                  </Col>
                </Row>
      </Col>
      <Col className="px-4">
                <Row>
                  <Col>
                  <span className="h4 text-green">{sliderData[state.x].volume} m3/ha</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Estimated Volume</span>
                  </Col>
                </Row>
      </Col>
      <Col className="px-4">
                <Row>
                  <Col>
                  <span className="h4 text-green">{sliderData[state.x].carbon} T/ha</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Estimated CO2 Sequestered</span>
                  </Col>
                </Row>
      </Col>

      <Col className="px-4">
                <Row>
                  <Col>
                  <span className="h4 text-green">{sliderData[state.x].jobs}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <span className="p text-small">Estimated Jobs</span>
                  </Col>
                </Row>
      </Col>
      </Row>
   
              </TabPanel>
              
              <TabPanel className="mt-3 justify-content-center">

                  <ImageGallery items={images} showPlayButton={false} showIndex={true} />
                    
              </TabPanel>

              </Tabs>
            </TabPanel>
            <TabPanel>
              <h2 className="panelHead text-center text-green mb-2 ">Grow My Impact</h2>
            </TabPanel>

            <TabPanel>
              <h2 className="panelHead text-center text-green mb-2 ">Active Campaigns</h2>
            </TabPanel>

            <TabPanel>
              <h2 className="panelHead text-center text-green mb-2 ">Previous Campaigns</h2>
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