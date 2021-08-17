import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
let hostname = '';
if (typeof window !== 'undefined') {
  hostname = location.hostname;
  if (hostname.startsWith('localhost')) {
    // sharing won't allow localhost links to work
    hostname = hostname.replace('localhost', '127.0.0.1');
  }

  if (location.port !== '') {
    hostname += `:${location.port}`;
  }
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
      {name: 'para1', component: 'markdown' },
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

  const changeRegion = (event) => {
    setRegion(event.target.value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('personalRegion', String(event.target.value));
    }
  }

  const changeFootprint = (event) => {
    setFootprint(event.target.value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('personalfootprint', String(event.target.value));
    }
  }

  const changeDuration = (event) => {
    setDuration(event.target.value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('personalDuration', String(event.target.value));
    }
  }

  const changeNegative = (event) => {
    setNegative(event.target.value);
  }

  const editUrlPrefix = '/net-negative-personal?session=';
  const sharingUrlPrefix = '/net-negative-personal-share?session=';
  const [editUrl, setEditUrl] = React.useState('/net-negative-personal');
  const [sharingUrl, setSharingUrl] = React.useState('/net-negative-personal-share');

  const router = useRouter();
  const [sessionDataError, setSessionDataError] = React.useState("");
  useEffect(() => {
    if (router.isReady) {
      setFootprint(localStorage.getItem('personalfootprint'));
      setRegion(localStorage.getItem('personalRegion'));
      setDuration(Number(localStorage.getItem('personalDuration')));

      if (router.query.session) {
        sessionID = router.query.session;
      }
      
      setEditUrl(editUrlPrefix + sessionID);
      setSharingUrl(sharingUrlPrefix + sessionID);
  
      try {
        fetch(`/api/calc?sessionID=${sessionID}&type=net-negative-personal`).then(async (response) => {
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

  const saveSession = async (successCallback: () => void, failureCallback: (error) => void) => {
    const body = {
      sessionID: sessionID,
      type: 'net-negative-personal',
      data: {
        region,
        footprint,
        duration,
        negative
      }
    };

    try {
      const res = await fetch('/api/calc', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        successCallback();
      }
      else {
        const error_message = await res.text();
        failureCallback(error_message);
      }
    }
    catch (error) {
      failureCallback('An unknown error has occurred while saving calculator session.');
    }
  };

  const [editUrlError, setEditUrlError] = React.useState("");
  const editUrlClick = (e) => {
    e.preventDefault();

    saveSession(() => {
      setEditUrlError("");
      router.push(e.target.getAttribute('href'));
    }, (error) => {
      setEditUrlError(error);
    });
  };

  const [shareError, setShareError] = React.useState("");
  const shareBeforeClick = () => {
    return new Promise<void>((resolve, reject) => {
      saveSession(() => {
        setShareError("");
        resolve();
      }, (error) => {
        setShareError(error);
        reject(error);
      });
    })
  };

  const [nextStepError, setNextStepError] = React.useState("");
  const nextStepClick = (e) => {
    e.preventDefault();

    saveSession(() => {
      setNextStepError("");
      router.push("/contact");
    }, (error) => {
      setNextStepError(error);
    });
  };

  return (
    <div className="bg-legacy">
      <Header/>
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <Container className="p-4 pt-5">
        <Row className="justify-content-center">
          <Col className="col-12 col-lg-10 pt-5 align-items-center my-4 pt-5">
            <h1 className="emphasis text-orange text-center bold tight-drop-light">{editingdata.title}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="p-3 col-12 col-lg-7 col-xl-6">
            <div className="card roundedBox no-border bg-green p-4 innerShadow cardSpacing">
              <p className="lead text-white m-2 calc-intro pe-lg-2">{editingdata.para1}</p>
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
                  <input value={footprint} onChange={changeFootprint} name="type" type="number" min="0" placeholder={editingdata.emissionsPlaceholder}/>
                  <p className="x-small mb-3 op-7">{editingdata.emissionsPlaceholder}</p>
                  {editingdata.emissionsCarbon}<Link href="/personal-calculator"><a className="underline modal-btn">{editingdata.emissionsLink}</a></Link>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col>
                  <label htmlFor="type">{editingdata.emissionsRegion}</label>
                  <br />
                  <select name="type" value={region} onChange={changeRegion}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='BC'>{editingdata.emissionsRegion1}</option>			
                    <option value='Prairies'>{editingdata.emissionsRegion2}</option>
                    <option value='Ontario'>{editingdata.emissionsRegion3}</option>
                    <option value='Quebec'>{editingdata.emissionsRegion4}</option>
                    <option value='Atlantic'>{editingdata.emissionsRegion5}</option>
                  </select>
                </Col>
              </Row>
              <hr/> 
              <Row>
                <Col>
                  <label htmlFor="size">{editingdata.emissionsTimeHeader}</label>
                  <br />
                  <select name="size" value={duration} onChange={changeDuration}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='1'>{editingdata.emissionsTime1}</option>
                    <option value='2'>{editingdata.emissionsTime2}</option>
                    <option value='3'>{editingdata.emissionsTime3}</option>
                    <option value='4'>{editingdata.emissionsTime4}</option>
                    <option value='5'>{editingdata.emissionsTime5}</option>
                    <option value='10'>{editingdata.emissionsTime6}</option>
                    <option value='15'>{editingdata.emissionsTime7}</option>
                    <option value='20'>{editingdata.emissionsTime8}</option>
                    <option value='25'>{editingdata.emissionsTime9}</option>
                    <option value='30'>{editingdata.emissionsTime10}</option>
                    <option value='40'>{editingdata.emissionsTime11}</option>
                    <option value='50'>{editingdata.emissionsTime12}</option>
                    <option value='60'>{editingdata.emissionsTime13}</option>
                    <option value='80'>{editingdata.emissionsTime14}</option>
                    <option value='100'>{editingdata.emissionsTime15}</option>
                  </select>
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
                  <select name="additional" value={negative} onChange={changeNegative}>
                    <option value="" hidden>{editingdata.select}</option>
                    <option value='1'>None</option>
                    <option value='1.05'>Add 5%</option>
                    <option value='1.1'>Add 10%</option>
                    <option value='1.15'>Add 15%</option>
                    <option value='1.2'>Add 20%</option>
                    <option value='1.25'>Add 25%</option>
                  </select>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className=" p-3  col-11 col-lg-5 col-xl-4 stickyCalc mb-4">
            <div className="text-white p-5 innerShadow roundedBox bg-green">
              <h4 className="mb-0">{editingdata.dataHeader}</h4>
              <hr/>
              <Row><Col className="pb-3">{editingdata.dataType} {plantAcres > 0 ? plantAcres.toLocaleString('en-US', {maximumFractionDigits: 2}) : "--"} {editingdata.dataType1}</Col></Row>
              <hr/>
              <Row><Col className="pb-3">{editingdata.dataType} {plantTrees > 0 ? Math.ceil(plantTrees).toLocaleString("en-US") : "--"} {editingdata.dataType2}</Col></Row>

              <Row>
                <Col className="whiteBorder rounded mt-3 p-3 mb-5">
                  <p className="text-small">To continue editing your results in the future, save or bookmark this link:</p>
                  <p className="pt-2 text-small">
                    {editUrlError ? <p style={{ color: 'red' }}>{editUrlError}</p> : null}
                    <a href={editUrl} onClick={editUrlClick}>{editUrl}</a>
                  </p>
                </Col>
              </Row>

              <Row className="justify-content-center text-center">
              <Col>
              <div className="">
                <p className="smallCaps text-white mb-3">Share your results</p>
                {shareError ? <p style={{color: 'red' }}>{shareError}</p> : null}

                {/* todo - change these to use sharingUrl instead of editUrl when the sharing page is implemented */}
                
                <FacebookShareButton url={hostname + editUrl} beforeOnClick={shareBeforeClick} quote={editingdata.shareBusiness} className="mx-2">
                  <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton url={hostname + editUrl} beforeOnClick={shareBeforeClick} title={editingdata.shareBusiness} className="mx-2">
                  <TwitterIcon size={40} round />
                </TwitterShareButton>

                <LinkedinShareButton url={hostname + editUrl} beforeOnClick={shareBeforeClick} summary={editingdata.shareBusiness} className="mx-2">
                  <LinkedinIcon size={40} round />
                </LinkedinShareButton>

                <EmailShareButton url={hostname + editUrl} beforeOnClick={shareBeforeClick} body={editingdata.shareBusiness} className="mx-2">
                  <EmailIcon size={40} round />
                </EmailShareButton>
              </div>
              </Col>
            </Row>


            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col className="col-11 col-lg-10 align-items-center text-center p-3">
            <div className="bg-brown p-4 innerShadow roundedBox">
              <p className="smallCaps text-orange mb-3">{editingdata.nextHeader}</p>
              <h3 className="text-white">Build Your Smart Forest</h3>
              {nextStepError ? <p style={{color: 'red' }}>{nextStepError}</p> : null}
              <Button className="btn-large mt-1" variant="green" onClick={nextStepClick}>Contact Us</Button>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col className="col-11 col-lg-10 pt-5">
            <h2 className=" text-orange text-center pt-5 bold mb-4 tight-drop-light">{editingdata.otherHeader}</h2>
          </Col>
        </Row>

        <Row className="justify-content-center pb-5">
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop corporate-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox1Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox1Para}</p>
              <Link href="/business-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox1button}</a>
              </Link>
            </div>
          </Col>
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop school-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox2Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox2Para}</p>
              <Link href="/school-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox2button}</a>
              </Link>
            </div>
          </Col>
          <Col className="col-11 col-md-10 col-lg-3 pe-lg-0 m-3">
            <div className="roundedBox card bg-green no-border p-4 h-100 d-flex flex-column drop legacy-card">
              <h4 className="text-white tight-drop-light">{editingdata.otherbox3Header}</h4>
              <p className="flex-fill pb-3 text-white tight-drop">{editingdata.otherbox3Para}</p>
              <Link href="/personal-calculator">
                <a className="btn btn-text text-left text-orange bold no-underline tight-drop">{editingdata.otherbox3button}</a>
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