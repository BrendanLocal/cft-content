import React, { useState, useEffect, MouseEvent} from 'react';

const Header = ()=> {

const [isActive, setActive] = useState(false);

const toggleClass = () => {
setActive(!isActive);
};

const navItems = [
{
key: "navItem1",
label: "Power of the forest",
path: "/power-of-the-forest"
},
{
key: "navItem2",
label: "Unlock the forest",
path: "/unlock-the-forest"
},
{
key: "navItem3",
label: "Build your forest",
path: "/build-your-forest"
},
{
key: "navItem4",
label: "Carbon calculator",
path: "/carbon-calculator"
},
{
key: "navItem5",
label: "Forest calculator",
path: "/forest-calculator"
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
}
]


const useAudio = url => {
const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
const [playing, setPlaying] = useState(true);


const toggleSound = (event: MouseEvent) => setPlaying(!playing);

useEffect(() => {
playing ? audio.play() : audio.pause() ;
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

  <div className="container-fluid header">
    <div className="row ">
      <div className="col-6 col-md-4">
        <img className="logo" src="/cft-logo-white.svg" />
      </div>
    </div>
  </div>



  <div id="sidebar" className={isActive ? 'open' : null}>
    <div className="container-fluid v-full sidebar bg-brown">

      <div className="row">
        <div className="col-10 col-md-9">

          <ul className="py-5 py-sm-0">
            <li className="slimlineBottom d-sm-block d-none">
              <span className="smallCaps">
                Menu
              </span>
            </li>
            {navItems.map(item =>
            <li key={item.key} className="slimlineBottom">
              <a href={item.path}>{item.label}</a>
            </li>
            )}
          </ul>


        </div>
      </div>
    </div>
  </div>


  <div className="container-fluid header">
    <div className="row justify-content-end">
      <div className="col-6 col-md-2 d-flex flex-column v-100 gx-1 gx-lg-3">
        <div className="row align-self-top">
          <div className="col d-flex align-items-center justify-content-end menuInterface">
            <a className="smallCaps " href="#">Login</a>
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
                <a href=""><img src="/searchIcon.svg"></img></a>
              </li>
              <li>
                 <a  className={playing ? null : 'mute'} onClick={() => toggleSound()}><img className="soundPlaying" src="/soundIcon.svg"></img><img className="soundMute" src="/muteIcon.svg"></img></a>


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
                <a href={item.path}><img src={item.icon}></img></a>
              </li>
              )}
            </ul>
          </div>
        </div>



</React.Fragment>
)
}

export default Header