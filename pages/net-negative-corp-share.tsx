import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github";
import { usePlugin } from "tinacms";
import { useEffect } from "react";
import Header from "../components/header";
import randomstring from "randomstring";
import Head from "next/head";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from "react-share";

let sessionID = randomstring.generate(12);
let sharingPrefix = 'https://www.canadasforesttrust.ca';
if (typeof window !== 'undefined') {
  sharingPrefix = location.hostname;
  if (sharingPrefix.startsWith('localhost')) {
    // sharing won't allow localhost links to work
    sharingPrefix = sharingPrefix.replace('localhost', '127.0.0.1');
  }
  if (location.port !== '') {
    sharingPrefix += `:${location.port}`;
  }
  sharingPrefix = location.protocol + '//' + sharingPrefix;
}

const Lang = () => {
  var language ="en";
  const router = useRouter();
  if(router.query.lang){ 
  const lan = JSON.stringify(router.query.lang);
  language = JSON.parse(lan)
  }
  return (language)
}

export default function App({ file, href, children}) {
  const formOptions = {
    label: 'Home Page',
    fields: [
      {name: 'pageName', component: 'markdown' },
      {name: 'pageURL', component: 'markdown' },
      {name: 'title', component: 'markdown' },
      {name: 'header', component: 'markdown' },
      {name: 'select', component: 'markdown' },
      {name: 'emissionsHeader', component: 'markdown' },
      {name: 'emissionsCarbonHeader', component: 'markdown' },
      {name: 'emissionsCarbon', component: 'markdown' },
      {name: 'emissionsLink', component: 'markdown' },
      {name: 'emissionsPlaceholder', component: 'markdown' },
      {name: 'emissionsRegion', component: 'markdown' },
      {name: 'emissionsRegion1', component: 'markdown' },
      {name: 'emissionsRegion2', component: 'markdown' },
      {name: 'emissionsRegion3', component: 'markdown' },
      {name: 'emissionsRegion4', component: 'markdown' },
      {name: 'emissionsRegion5', component: 'markdown' },
      {name: 'emissionsTimeHeader', component: 'markdown' },
      {name: 'emissionsTime1', component: 'markdown' },
      {name: 'emissionsTime2', component: 'markdown' },
      {name: 'emissionsTime3', component: 'markdown' },
      {name: 'emissionsTime4', component: 'markdown' },
      {name: 'emissionsTime5', component: 'markdown' },
      {name: 'emissionsTime6', component: 'markdown' },
      {name: 'emissionsTime7', component: 'markdown' },
      {name: 'emissionsTime8', component: 'markdown' },
      {name: 'emissionsTime9', component: 'markdown' },
      {name: 'emissionsTime10', component: 'markdown' },
      {name: 'emissionsTime11', component: 'markdown' },
      {name: 'emissionsTime12', component: 'markdown' },
      {name: 'emissionsTime13', component: 'markdown' },
      {name: 'emissionsTime14', component: 'markdown' },
      {name: 'emissionsTime15', component: 'markdown' },
      {name: 'dataHeader', component: 'markdown' },
      {name: 'dataType', component: 'markdown' },
      {name: 'dataType1', component: 'markdown' },
      {name: 'dataType2', component: 'markdown' },
      {name: 'dataDisclaimer', component: 'markdown' },
      {name: 'nextHeader', component: 'markdown' },
      {name: 'nextPara', component: 'markdown' },
      {name: 'nextButton', component: 'markdown' },
      {name: 'otherHeader', component: 'markdown' },
      {name: 'otherbox1Header', component: 'markdown' },
      {name: 'otherbox1Para', component: 'markdown' },
      {name: 'otherbox1button', component: 'markdown' },
      {name: 'otherbox2Header', component: 'markdown' },
      {name: 'otherbox2Para', component: 'markdown' },
      {name: 'otherbox2button', component: 'markdown' },
      {name: 'otherbox3Header', component: 'markdown' },
      {name: 'otherbox3Para', component: 'markdown' },
      {name: 'otherbox3button', component: 'markdown' }
     ]
  }

  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()

  const regionArray = {
    carbon: {BC:500,	Prairies:252,	Ontario:347,	Quebec:347,	Atlantic:134 }
  };
 
  const [region, setRegion] = React.useState("");
  const [footprint, setFootprint] = React.useState("");
  const [duration, setDuration] = React.useState(0);
  const [negative, setNegative] = React.useState(0);

  const plantHectares = duration*Number(footprint)/regionArray.carbon[region]*(negative > 0 ? negative : 1);
  const plantAcres = plantHectares*2.47;
  const plantTrees = plantHectares*2470;

  const sharingUrlPrefix = '/net-negative-corp-share?session=';
  const [sharingUrl, setSharingUrl] = React.useState('/net-negative-corp-share');

  const router = useRouter();
  const [sessionDataError, setSessionDataError] = React.useState("");
  useEffect(() => {
    if (router.isReady) {
      setFootprint(localStorage.getItem('businessfootprint'));
      setRegion(localStorage.getItem('businessRegion'));
      setDuration(Number(localStorage.getItem('businessDuration')));

      if (router.query.session) {
        sessionID = router.query.session;
      }
      
      setSharingUrl(sharingUrlPrefix + sessionID);
  
      try {
        fetch(`/api/calc?sessionID=${sessionID}&type=net-negative-corp`).then(async (response) => {
          if (response.status === 200) {
            const sessionData = await response.json();
            const sessionCalcData = sessionData.calcData && sessionData.calcData.data ? sessionData.calcData.data : {};

            if (sessionCalcData.region !== undefined) {
              setRegion(sessionCalcData.region);
            }

            if (sessionCalcData.footprint !== undefined) {
              setFootprint(sessionCalcData.footprint);
            }

            if (sessionCalcData.duration !== undefined) {
              setDuration(sessionCalcData.duration);
            }

            if (sessionCalcData.negative !== undefined) {
              setNegative(sessionCalcData.negative);
            }
          }
          else {
            setSessionDataError(await response.text());
          }
        });
      }
      catch (error) {
        setSessionDataError('An unknown error has occurred while loading calculator session.');
      }
    }
  }, [router.query]);

  return (
    <div className="bg-corp">
      <Header/>
      <Head>
        <title>Corporate Net-Negative Calculator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="theme-color" content="#054218"/>

        <meta name="twitter:site" content="@CanadasForest" />
        <meta name="twitter:title" content="Corporate Net-Negative Calculator" />
        <meta name="twitter:description" content="Thank you for doing your part, this is your opportunity to pay it forward. Calculate how you can increase your goal to become net-negative" />
        <meta name="twitter:image" content={sharingPrefix + '/logo-share-preview-twitter.png'} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property='og:title' content="Corporate Net-Negative Calculator"/>
        <meta property='og:description' content="Thank you for doing your part, this is your opportunity to pay it forward. Calculate how you can increase your goal to become net-negative"/>
        <meta property='og:image' content={sharingPrefix + '/logo-share-preview-twitter.png'}/>
        <meta property='og:image:width' content='800'/>
        <meta property='og:image:height' content='800'/>
        <meta property='og:url' content={sharingPrefix + sharingUrl}/>
        <meta property='og:type' content='website'/>
      </Head>

      <Container className="p-4 pt-5">
        <Row className="justify-content-center">
          <Col className="col-12 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold tight-drop-light">Corporate Net-Negative Calculator</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="p-3 col-12 col-lg-7 col-xl-6">
            <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
              <p className="lead text-white m-2 calc-intro pe-lg-2">Shared results</p>
            </div>
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  {sessionDataError ? <p style={{ color: 'red' }}>{sessionDataError}</p> : null}
                  <h3 className="text-green">{editingdata.emissionsHeader}</h3>
                  <hr/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="footprint">{editingdata.emissionsCarbonHeader}</label>
                  <br />
                  <p>{footprint}</p>
                  <p className="x-small mb-3 op-7">{editingdata.emissionsPlaceholder}</p>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.emissionsRegion}</label>
                  <br />
                  <p>{region}</p>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col>
                  <label htmlFor="size">{editingdata.emissionsTimeHeader}</label>
                  <br />
                  <p>{duration}</p>
                </Col>
              </Row>
            </div>
            <div className="card roundedBox no-border bg-white p-4 card-drop cardSpacing">
              <Row>
                <Col>
                  <h3 className="text-green">{editingdata.plantforwardheader}</h3>
                  <hr/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="additional">This will calculate the carbon you want to sequester in addition to your net-zero target for years to come:</label>
                  <br />
                  <p>{negative}</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className=" p-3  col-11 col-lg-5 col-xl-4 stickyCalc mb-4">
            <div className="text-white p-5 innerShadow roundedBox bg-green">
              <h4 className="mb-0">{editingdata.dataHeader}</h4>
              <hr/>
              <Row>
                <Col className="pb-3">
                  {editingdata.dataType} {plantAcres > 0 ? plantAcres.toLocaleString('en-US', {maximumFractionDigits: 2}) : "--"} {editingdata.dataType1}
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col className="pb-3">
                  {editingdata.dataType} {plantTrees > 0 ? Math.ceil(plantTrees).toLocaleString("en-US") : "--"} {editingdata.dataType2}
                </Col>
              </Row>
              <hr className="my-4"/>
              <Row className="justify-content-center text-center">
                <Col>
                  <div className="mt-3">
                    <p className="smallCaps text-white mb-3">Share these results</p>                  
                    <FacebookShareButton url={sharingPrefix + sharingUrl} quote={editingdata.shareCorpFacebook} hashtag={editingdata.shareCorpFacebookTags} className="mx-2">
                      <FacebookIcon size={40} round />
                    </FacebookShareButton>

                    <TwitterShareButton url={sharingPrefix + sharingUrl} title={editingdata.shareCorpTwitter} className="mx-2">
                      <TwitterIcon size={40} round />
                    </TwitterShareButton>

                    {/* <LinkedinShareButton url={sharingPrefix + sharingUrl} summary={editingdata.shareCorpLinkedIn} className="mx-2">
                      <LinkedinIcon size={40} round />
                    </LinkedinShareButton> */}

                    <EmailShareButton url={sharingPrefix + sharingUrl} body={editingdata.shareCorpEmailBody} subject={editingdata.shareCorpEmailSubject} className="mx-2">
                      <EmailIcon size={40} round />
                    </EmailShareButton>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col className="col-11 col-lg-10 pt-5">
            <h2 className=" text-orange text-center pt-5 bold mb-4 tight-drop-light">Get Started With Our Carbon Calculators</h2>        
          </Col>
        </Row>

        <Row className="justify-content-center pb-5">
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
              <h4 className="text-white tight-drop-light">Corporate</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your corporation must offset to reach net-zero.</p>
              <Link href="/business-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox1button}</a>
              </Link>
            </div>
          </Col>
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
              <h4 className="text-white tight-drop-light">School</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your school must offset to reach net-zero.</p>
              <Link href="/school-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox2button}</a>
              </Link>
            </div>
          </Col>
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
              <h4 className="text-white tight-drop-light">Personal</h4>
              <p className="flex-fill pb-3 text-white tight-drop">Calculate how much carbon your school must offset to reach net-zero.</p>
              <Link href="/personal-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">SELECT</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

/**
* Fetch data with getStaticProps based on 'preview' mode
*/
export const getStaticProps: GetStaticProps = async function({preview, previewData,}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/net-negative-personal.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/net-negative-personal.json',
        data: (await import('../content/net-negative-personal.json')).default,
      },
    },
  }
}