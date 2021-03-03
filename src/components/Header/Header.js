import React, {useState} from 'react'
import { Link } from 'gatsby'

import './Header.scss'
import NavMenu from '../NavMenu/NavMenu'

import SocialConnect from '../SocialConnect/SocialConnect'


import TFPLogo from '../../img/TFP-logo.svg'
// import MenuIcon from '../../img/menu.svg'


export default function Header(param) {
    const [showPrompt, setShowPrompt] = useState(false)


    const showNavMenu = () => {
        setShowPrompt(!showPrompt)
    }

    const closeNavMenu = () => {
        setShowPrompt(!showPrompt)
    }

    return (
        <header className="tfp-header">
            <div className="header-right">
                <Link to="/" className="tfp-logo home-link" title="Tales from the PROS - A Podcast Network of Imaginovation">
                    <img
                        src={TFPLogo}
                        alt="Tales from the PROS logo"
                    />
                </Link>
                <button className="nav-menu-button " onClick={showNavMenu} >
                    <svg className="icon menu-icon" height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                        <path fill="#FFFFFF" d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                        <path fill="#FFFFFF" d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                        Click to open Menu
                    </svg>
                </button>

            </div>
            
            <div className="header-left">
                <SocialConnect />
                <button className="btn-subscribe button">Subscribe</button>
            </div>
                
            {showPrompt ? <NavMenu onClose={closeNavMenu} /> : null}
        </header>
    );
}