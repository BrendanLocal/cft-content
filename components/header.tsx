import React, { useState, useEffect, MouseEvent} from 'react';
import { render } from 'react-dom';
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

const Header = ()=> {
  const [ session, loading ] = useSession()

const [isActive, setActive] = useState(false);

const toggleClass = () => {
setActive(!isActive);
};

const navItems = [
{
key: "navItem1",
label: "What is a Smart Forest",
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
label: "Net-Zero Carbon Calculator",
path: "/carbon-calculator"
},
{
key: "navItem6",
label: "Smart Forest Calculator",
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


const useAudio = url => {
const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
const [playing, setPlaying] = useState(true);


const toggleSound = () => {
  setPlaying(!playing);
  };
   
useEffect(() => {
playing ? audio.pause() : audio.play() ;
},
[playing]
);

useEffect(() => {
audio.addEventListener('ended', function () {
this.currentTime = 0;
this.play();
}, false);
audio.addEventListener('ended', () => setPlaying(false));
return () => {
audio.removeEventListener('ended', () => setPlaying(false));
};
}, []);

return [playing, toggleSound];
};

const [playing, toggleSound] = useAudio("/forest-sounds.mp3");


return(
<React.Fragment>

  <div className="container-fluid header logoHeader">
    <div className="row ">
      <div className="col">
        <Link href="/">
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
          
      <Link href="/portal" ><a className="smallCaps textButton">Sign in</a></Link>
    
            
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
                <Link href=""><img src="/searchIcon.svg"></img></Link>
              </li>
              <li>
                 <div  className={playing ? null : 'mute'} ><img className="soundPlaying" src="/soundIcon.svg"></img><img className="soundMute" src="/muteIcon.svg"></img></div>


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