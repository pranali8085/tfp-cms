import React from 'react'
import { Link } from 'gatsby'

import './NavMenu.scss'

import SocialMedia from '../SocialMedia/SocialMedia'

import TFPLogo from '../../img/TFP-logo.svg'
// import close from '../../img/close.svg'


export default function NavMenu(props) {
  
    return (
      <nav
        className="tfp-nav-menu"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="header-right">
            <Link to="/" className="tfp-logo home-link" title="Tales from the PROS - A Podcast Network of Imaginovation">
                <img
                    src={TFPLogo}
                    alt="Tales from the PROS logo"
                />
            </Link>
            <button className="nav-menu-button" onClick={props.onClose}>
              <svg className="icon menu-icon" height="311pt" viewBox="0 0 311 311.07733" width="311pt" xmlns="http://www.w3.org/2000/svg">
                <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/>
                <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/>
                Click to Close Menu
              </svg>
            </button>
          </div>
            
          <div
            id="navMenu"
            className="nav-menu"
          >
            <div className="nav-menu-items-wrap">

              <Link className="nav-item" to="/">
                Home
              </Link>
              <Link className="nav-item" to="/Interviews">
                Interviews
              </Link>
              <Link className="nav-item" to="/about">
                About
              </Link>
              <Link className="nav-item" to="/blog">
                Blog
              </Link>
              <Link className="nav-item" to="/contact">
                Contact
              </Link>
              <Link className="nav-item" to="/products">
                Products
              </Link>
              <Link className="nav-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="nav-end">
              <SocialMedia withTitle="TRUE" />    
            </div>
          </div>
        </div>
      </nav>
    );
  
}
