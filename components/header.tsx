import React, { useState } from 'react';




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

<div id="sidebar" className={isActive ? 'open': null}>
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
    <div className="col-6 col-md-2 ">
      
      <div className="row">
      <div className="col  d-flex align-items-center justify-content-end menuInterface">
      <a className="smallCaps" href="#">Login</a>
      <div id="menuIcon" className={isActive ? 'open': null} 
      onClick={toggleClass} >
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</div>
      </div>
      
        

    </div>
  </div>
</div>


  
  </React.Fragment>
)
}

export default Header