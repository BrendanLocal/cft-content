import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';
import { signIn, signOut, useSession } from 'next-auth/client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useSound from 'use-sound';
import Search from '../components/search';
import { useCurrentUser } from '../hooks/index';
import Link from 'next/link'
//import { HashLink } from 'react-router-hash-link';


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
      path: "/about"
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
      path: "#"
    },
    {
      icon: "/twtIcon.svg",
      label: "Twitter",
      path: "#"
    },
    {
      icon: "/ytubeIcon.svg",
      label: "YouTube",
      path: "#"
    },
    {
      icon: "/instaIcon.svg",
      label: "Instagram",
      path: "#"
    },
    {
      icon: "/tiktokIcon.svg",
      label: "TikTok",
      path: "#"
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
      <div id="searchComponent" className={ showSearch ? "searchOpen" : "searchClosed"}>
        <Container className="v-80 d-flex justify-content-center align-items-start pt-5">
          <Row className="pt-5">
            <Col className="align-content-start d-flex flex-column">
              <h3 className="text-white">Search</h3>
              <div className="searchBox"><img src="/searchIcon.svg"/><img className="closeSearch" onClick={toggleSearch} src="/close.svg"/></div>
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
        </div>
      </div>

      <div id="sidebar" className={isActive ? 'open' : null}>
        <div className="container-fluid v-full sidebar bg-green text-orange">
          <div className="row">
            <div className="col-10 col-md-9">
              <ul className="py-5 py-sm-0">
                <li className="slimlineBottom slimlineTop" onClick={toggleClass}>
                  <Link href="/about">About</Link>
                </li>
                <li onClick={toggleClass}>
                  <Link href="/build-your-smart-forest">Build a Smart Forest</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  {/* <HashLink smooth to="/build-your-smart-forest#corporate">Corporate Smart Forest</HashLink> */}
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/build-your-smart-forest#school">School Smart Forest</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/build-your-smart-forest#legacy">Legacy Smart Forest</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader mb-2" onClick={toggleClass}>
                  <Link href="/build-your-smart-forest#communal">Communal Smart Forest</Link>
                </li>
                <li className="slimlineTop" onClick={toggleClass}>
                  <Link href="/carbon-calculator">Carbon Calculators</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/carbon-calculator#corporate">Corporate</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/carbon-calculator#school">School</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader mb-2" onClick={toggleClass}>
                  <Link href="/carbon-calculator#personal">Personal</Link>
                </li>
                <li className="slimlineTop" onClick={toggleClass}>
                  <Link href="/carbon-calculator">Net-Zero Calculators</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/smart-forest-calculator#personal">Corporate</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader" onClick={toggleClass}>
                  <Link href="/smart-forest-calculator#school">School</Link>
                </li>
                <li className="ms-4 ms-md-5 subheader mb-2" onClick={toggleClass}>
                  <Link href="/smart-forest-calculator#personal">Personal</Link>
                </li>
                <li className="slimlineBottom slimlineTop" onClick={toggleClass}>
                  <Link href="/portal">Your Smart Forest Portal</Link>
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
          <div className="col-6 col-md-2 d-flex flex-column gx-1 gx-lg-3 fixed">
            <div className="row align-self-top">
              <div className="col d-flex align-items-center justify-content-end menuInterface">
                <Link href={ user? "/portal-user" : "/portal" } ><a className="smallCaps textButton">{ user? "Your Portal" : "Sign in" }</a></Link>
                <div id="menuIcon" className={isActive ? 'open' : null} onClick={toggleClass}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="row align-self-bottom">
              <div className="col col d-flex align-items-end justify-content-end menuInterface">
                <ul className="controlIcons">
                  <li>
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
                <Link href={item.path}><img src={item.icon}></img></Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header