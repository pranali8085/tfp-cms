import React from 'react'
import { Link } from 'gatsby'

import './FeaturedOn.scss'

import VBLogo from '../../img/featured-on/VBLogo.png'
import Entrepreneur from '../../img/featured-on/Entrepreneur.png'
import mixergy from '../../img/featured-on/mixergy.png'
import SEJ from '../../img/featured-on/SEJ.png'
import CClogo from '../../img/featured-on/CClogo.png'
import ABCNews from '../../img/featured-on/ABCNews.png'



export default function FeaturedOn(param) {

    return (
        <section className="featured-on-section section-padding" >
            <h3 className="section-title">Featured On</h3>
            <div className="featured-wrap">
                <div className="single-featured-img-wrap">
                    <a href="#" title="VBLogo" className="featured-link">
                        <img 
                            src={VBLogo}
                            alt="VBLogo"
                            className="featured-logo"
                        />
                    </a>
                </div>
                <div className="single-featured-img-wrap">
                    <a href="#" title="Entrepreneur" className="featured-link">
                        <img 
                            src={Entrepreneur}
                            alt="Entrepreneur"
                            className="featured-logo"
                        />
                    </a>
                </div>
                <div className="single-featured-img-wrap">
                    <a href="#" title="mixergy" className="featured-link">
                        <img 
                            src={mixergy}
                            alt="mixergy"
                            className="featured-logo"
                        />
                    </a>
                </div>

                <hr className="tfp-separator"/>

                <div className="single-featured-img-wrap">
                    <a href="#" title="SEJ" className="featured-link">
                        <img 
                            src={SEJ}
                            alt="SEJ"
                            className="featured-logo"
                        />
                    </a>
                </div>
                <div className="single-featured-img-wrap">
                    <a href="#" title="CClogo" className="featured-link">
                        <img 
                            src={CClogo}
                            alt="CClogo"
                            className="featured-logo"
                        />
                    </a>
                </div>
                <div className="single-featured-img-wrap">
                    <a href="#" title="ABCNews" className="featured-link">
                        <img 
                            src={ABCNews}
                            alt="ABCNews"
                            className="featured-logo"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}