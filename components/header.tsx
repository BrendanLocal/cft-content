import React, { useState, useEffect } from 'react';

const Header = ()=> {


const [isActive, setActive] = useState(false);

const toggleClass = () => {
setActive(!isActive);
};

const navItems = [
{
label: "Power of the forest",
path: "/power-of-the-forest"
},
{
label: "Unlock the forest",
path: "/unlock-the-forest"
},
{
label: "Build your forest",
path: "/build-your-forest"
},
{
label: "Carbon calculator",
path: "/carbon-calculator"
},
{
label: "Forest calculator",
path: "/forest-calculator"
},
{
label: "About",
path: "/about"
},
{
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
  const [playing, setPlaying] = useState(false);

  const toggleSound = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.pause() : audio.play() ;
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggleSound];
};

const [playing, toggleSound] = useAudio("/forest-sounds.mp3");

const NavItems = props => (
<div className="row slimlineBottom">
  <div className="col">

    <span className="Label">{props.label}</span>
  </div>
</div>
);

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
        <div className="col-11 col-md-9">

          <ul>
            <li className="slimlineBottom">
              <span className="smallCaps">
                Menu
              </span>
            </li>
            {navItems.map(function(item){
            return (
            <li className="slimlineBottom">
              <a href={item.path}>{item.label}</a>
            </li>
            )
            })}
          </ul>


        </div>
      </div>
    </div>
  </div>


  <div className="container-fluid header">
    <div className="row justify-content-end">
      <div className="d-flex flex-column col-6 col-md-2 v-full">
        <div className="row align-self-top">
          <div className="col d-flex align-items-center justify-content-end menuInterface">
            <a className="smallCaps" href="#">Login</a>
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
                  <a  className={playing ? null : 'mute'} onClick={() => toggleSound}><img className="soundPlaying" src="/soundIcon.svg"></img><img className="soundMute" src="/muteIcon.svg"></img></a>
                  
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-auto align-self-bottom">
            <div className="col col d-flex align-items-end justify-content-end menuInterface">
              <ul className="socialIcons">
                {socialIcons.map(function(item){
                return (
                <li>
                  <a href={item.path}><img src={item.icon}></img></a>
                </li>
                )
                })}
              </ul>
            </div>
          </div>



        </div>
      </div>
    </div>



</React.Fragment>
)
}

export default Header