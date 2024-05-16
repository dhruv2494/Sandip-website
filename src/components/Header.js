import React from "react";
import logoImg from "./../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="header-main-div">
      {/* <img className="header-logo-img" src={logoImg} alt="logo" /> */}
      <div className="header-container">
        <div className="header-navbar">
          <div className="header-navbar-subitem">
            <p className="navbar-header-item">
              <a className="" href="#">
                HOME
              </a>
            </p>

            <p className="navbar-header-item">
              <a
                className="navbar-header-item navbar-submenu-toggle-item"
                href="#"
              >
                ABOUT US
              </a>
              <div className="navbar-dropdown">
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
              </div>
            </p>
            <p className="navbar-header-item">
              <a
                className="navbar-header-item navbar-submenu-toggle-item"
                href="#"
              >
                NEWS
              </a>
              <div className="navbar-dropdown">
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
              </div>
            </p>
            <p className="navbar-header-item">
              <a
                className="navbar-header-item navbar-submenu-toggle-item"
                href="#"
              >
                PAGES
              </a>
              <div className="navbar-dropdown">
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
              </div>
            </p>
          </div>
          <div className="header-navbar-subitem">
            <p className="navbar-header-item">
              <a className="" href="#">
                HOME
              </a>
            </p>
            <p className="navbar-header-item">
              <a className="" href="#">
                ABOUT US
              </a>
            </p>
            <p className="navbar-header-item">
              <a className="" href="#">
                NEWS
              </a>
            </p>
            <p className="navbar-header-item">
              <a className="" href="#">
                PAGES
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
