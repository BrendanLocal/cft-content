import React, { useState, useEffect, MouseEvent, Component} from 'react';
import { render } from 'react-dom';
import { signIn, signOut, useSession } from 'next-auth/client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useSound from 'use-sound';
import Search from '../components/search';
import { useCurrentUser } from '../hooks/index';
import Link from 'next/link'
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";


import ReactGA from 'react-ga';
ReactGA.initialize('G-9ELPSR6C5L');
if (typeof window !== 'undefined') {
ReactGA.pageview(window.location.pathname + window.location.search);
}


const Header = ()=> {

  const [user] = useCurrentUser();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ session, loading ] = useSession()
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const navItems = [
    {
      key: "navItem1",
      label: "What is a Smart Forest?",
      path: "/what-is-a-smart-forest"
    },
    {
      key: "navItem2",
      label: "Build a Smart Forest",
      path: "/build-your-smart-forest"
    },
    {
      key: "navItem2-1",
      label: "^ Corporate",
      path: "/build-your-smart-forest"
    },
    {
      key: "navItem2-2",
      label: "^ School",
      path: "/build-your-smart-forest"
    },
    {
      key: "navItem2-3",
      label: "^ Individuals",
      path: "/build-your-smart-forest"
    },
    {
      key: "navItem2-4",
      label: "^ Communities",
      path: "/build-your-smart-forest"
    },
    {
      key: "navItem3",
      label: "Your Smart Forest",
      path: "/portal"
    },
    {
      key: "navItem4",
      label: "Carbon Calculators",
      path: "/carbon-calculator"
    },
    {
      key: "navItem4-1",
      label: "^ Corporate",
      path: "/carbon-calculator"
    },
    {
      key: "navItem4-2",
      label: "^ School",
      path: "/carbon-calculator"
    },
    {
      key: "navItem4-3",
      label: "^ Personal",
      path: "/carbon-calculator"
    },
    {
      key: "navItem5",
      label: "Net-Zero Calculator",
      path: "/smart-forest-calculator"
    },
    {
      key: "navItem5-1",
      label: "^ Corporate",
      path: "/smart-forest-calculator"
    },
    {
      key: "navItem5-2",
      label: "^ School",
      path: "/smart-forest-calculator"
    },
    {
      key: "navItem5-3",
      label: "^ Personal",
      path: "/smart-forest-calculator"
    },
    {
      key: "navItem6",
      label: "About",
      path: "/inside-cft"
    },
    {
      key: "navItem7",
      label: "Contact",
      path: "/contact"
    }
  ]

  const socialIcons = [
    {
      icon: "/fbookIcon.svg",
      label: "Facebook",
      path: "https://www.facebook.com/canadasforest"
    },
    {
      icon: "/twtIcon.svg",
      label: "Twitter",
      path: "https://twitter.com/CanadasForest"
    },
    {
      icon: "/instaIcon.svg",
      label: "Instagram",
      path: "https://www.instagram.com/canadasforest/?hl=en"
    },
    {
      icon: "/linkedinIcon.svg",
      label: "LinkedIn",
      path: "https://linkedin.com/company/canadas-forest-trust"
    }
  ]

  const [playSound, stop] = useSound('/forest-sounds.mp3');

  const [isPlaying, setPlaying] = useState(false);
  const toggleSound = () => {
    playSound();
    setPlaying(!isPlaying);
  }

  const [showSearch, setSearch] = useState(false);
  const toggleSearch = () => {
    setSearch(!showSearch);
  }




  return(
    

    <React.Fragment>
      <CookieConsent flipButtons buttonText="OK">
        <h3 className="text-center text-white">
        Use of Cookies
        </h3>
        We use cookies and other technologies to offer you the best experience online. By continuing to use our website, you agree to the use of cookies and other technologies. If you would like to know more about cookies and other technologies and how to manage them, please view our <a className="underline" href="/privacy">Privacy Policy.</a>
        </CookieConsent>
      <div id="searchComponent" className={ showSearch ? "searchOpen" : "searchClosed"}>
        <Container className="v-80 d-flex justify-content-center align-items-start pt-5">
          <Row className="pt-5">
            <Col className="align-content-start d-flex flex-column">
              <h3 className="text-white">Search</h3>
              <div className="searchBox"><img src="/searchIcon.svg"/><Search /><img className="closeSearch" onClick={toggleSearch} src="/close.svg"/></div>
            </Col>
          </Row>
        </Container>
      </div> 

      <div className="container-fluid header logoHeader">
        <div className="row ">
          <div className="col">
            <Link href="/home">
            <img className="logo" src="/cft-logo-white.svg" />
            </Link>
          </div>
          <div className="col borderLeft ms-2 text-left ps-3 d-sm-none">
            <div className="mt-2">
              <Link href={ user? "/portal-user" : "/portal" } ><a className="smallCaps textButton">{ user? "Your Portal" : "Sign in" }</a></Link>
            </div>
            <div className="mt-2">
              <a href="/portal-demo" className="smallCaps text-white no-underline textButton">DEMO PORTAL</a>
            </div>
          </div>
        </div>
      </div>

      <div id="sidebar" className={isActive ? 'open' : null}>
        <div className="container-fluid v-full sidebar bg-green text-orange pt-4 pt-md-3">
          <div className="row">
            <div className="col-9 col-md-8">
              <ul className="mb-5 ">
                <li className="pt-0" onClick={toggleClass}>
                  <Link href="/home">Home</Link>
                </li>
                <li className="slimlineBottom slimlineTop" onClick={toggleClass}>
                  <Link href="/inside-cft">Inside CFT</Link>
                </li>
                <li onClick={toggleClass}>
                  <Link href="/build-your-smart-forest">Build Your Smart Forest</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/build-your-smart-forest#corporate">Corporate</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/build-your-smart-forest#school">School</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/build-your-smart-forest#legacy">Legacy</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader mb-2" onClick={toggleClass}>
                  <Link href="/build-your-smart-forest#communal">Communal</Link>
                </li>
                <li className="slimlineTop" onClick={toggleClass}>
                  <Link href="/carbon-calculator">Carbon Calculators</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/business-calculator">Corporate</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/school-calculator">School</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader mb-2" onClick={toggleClass}>
                  <Link href="/personal-calculator">Personal</Link>
                </li>
                <li className="slimlineTop" onClick={toggleClass}>
                  <Link href="/smart-forest-calculator">Net-Zero Calculators</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/smart-forest-corp">Corporate</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/smart-forest-school">School</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader mb-2" onClick={toggleClass}>
                  <Link href="/smart-forest-personal">Personal</Link>
                </li>
                <li className="slimlineBottom slimlineTop" onClick={toggleClass}>
                  <Link href="/portal">Smart Forest Portal</Link>
                </li>
                <li className="" onClick={toggleClass}>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> 

      <div className="container-fluid header headerNav">
        <div className="row justify-content-end">
          <div className="col-12 col-md-6 d-flex flex-column gx-1 gx-lg-3 fixed">
            <div className="row align-self-top">
              <div className="col d-flex align-items-center justify-content-end menuInterface">
              <a href="/portal-demo" className="smallCaps text-white no-underline textButton me-4 d-none d-sm-block">DEMO PORTAL</a>
                <Link href={ user? "/portal-user" : "/portal" } ><a className="smallCaps textButton me-2 d-none d-sm-block">{ user? "Your Portal" : "Sign in" }</a></Link>
                <div id="menuIcon" className={isActive ? 'open' : null} onClick={toggleClass}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="row align-self-bottom d-none">
              <div className="col col d-flex align-items-end justify-content-end menuInterface">
              
                <ul className="controlIcons">
                  <li className="d-none">
                    <img onClick={toggleSearch} src="/searchIcon.svg"></img>
                  </li>
                  <li className="d-none">
                    <div className={isPlaying ? 'mute' : null} ><img className="soundPlaying" onClick={() => toggleSound()} src="/soundIcon.svg"></img><img className="soundMute" src="/muteIcon.svg"></img></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-auto align-bottom-social gx-0 gx-md-6">
        <div className="col col gx-3 gx-sm-6 px-md-3 d-flex align-items-end justify-content-end menuInterface">
          <ul className="socialIcons">
            {socialIcons.map(item =>
              <li key={item.label}>
                <a href={item.path} target="_blank"><img src={item.icon}></img></a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
