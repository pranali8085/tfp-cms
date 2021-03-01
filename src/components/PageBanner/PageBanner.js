import React from 'react'

import './PageBanner.scss'

export default function PageBanner({children, title, description, background}) {

    return (
        <div 
            className="tfp-page-banner"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="inner-wrap">
                {/* <h1 className="tfp-title">{title}</h1>
                <p className="tfp-description">{description}</p> */}
                {children}
            </div>
            <div className="triangle"></div>
        </div>
    );
}