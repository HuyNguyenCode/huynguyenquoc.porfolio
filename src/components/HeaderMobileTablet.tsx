import React from 'react';

const HeaderMobileTablet = () => (
  <header className="header-mobile-tablet">
    <div className="logo-area">
      <a href="" className="logo">Portfolio.</a>
      <i className="menu-icon fa-solid fa-bars"></i>
    </div>
    <nav className="hide-navbar navbar-mobile-tablet">
      <a href="#" className="tab-item active">Home</a>
      <a href="#services" className="tab-item">Services</a>
      <a href="#about" className="tab-item">About</a>
      <a href="#portfolio" className="tab-item">Project</a>
      <a href="#contact" className="tab-item">Contact</a>
    </nav>
  </header>
);

export default HeaderMobileTablet; 