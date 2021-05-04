import React, { useState } from 'react';

const Header = ()=> {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

return(
  <React.Fragment>


<div id="sidebar" className={isActive ? 'open': null}><div className="container-fluid v-full sidebar bg-brown">
  
  </div>
  </div>

  
<div className="container-fluid header">
  <div className="row justify-content-between">
    <div className="col-6 col-md-4">
      <img className="logo" src="/cft-logo-white.svg" />
    </div>
    <div className="col-6 col-md-2 ">
      
      <div className="row">
      <div className="col  d-flex align-items-center justify-content-end">
      <a className="loginButton" href="#">Login</a>
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