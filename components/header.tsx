import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useSound from 'use-sound';
import Search from '../components/search';
import { useCurrentUser } from '../hooks/index';

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
key: "navItem4",
label: "Your Smart Forest",
path: "/portal"
},
{
key: "navItem5",
label: "Carbon Calculators",
path: "/carbon-calculator"
},
{
key: "navItem6",
label: "Net-Zero Calculator",
path: "/smart-forest-calculator"
},
{
key: "navItem7",
label: "About",
path: "/about"
},
{
key: "navItem8",
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
  <Row className="pt-5"><Col className="align-content-start d-flex flex-column">
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
            {navItems.map(item =>
            <li key={item.key} className="slimlineBottom" onClick={toggleClass}>
              <Link href={item.path} >{item.label}</Link>
            </li>
            )}
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

              <li><img onClick={toggleSearch} src="/searchIcon.svg"></img>
              </li>
              <li>
                 <div  className={isPlaying ? 'mute' : null} ><img className="soundPlaying" onClick={() => toggleSound()} src="/soundIcon.svg"></img><img className="soundMute" src="/muteIcon.svg"></img></div>


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