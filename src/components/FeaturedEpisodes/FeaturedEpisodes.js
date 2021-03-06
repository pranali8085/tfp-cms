import React, {useState} from 'react'
import { Link } from 'gatsby'

import './FeaturedEpisodes.scss'

import tempImg from '../../img/pros_man.png'
import playButton from '../../img/play.svg'

import Episode1 from '../../img/temp-images/MichaelaAlexis.png'
import Episode2 from '../../img/temp-images/JBImg.png'
import Episode3 from '../../img/temp-images/spiros-margarisImg.png'
import Episode4 from '../../img/temp-images/SeanImg.png'
import Episode5 from '../../img/temp-images/KatyJohns.png'


export default function FeaturedEpisodes(param) {
    

    return (
        <section className="tfp-featured-episodes-section">
            <h3 className="section-title">Featured Episodes</h3>
            
            <div className="episodes-wrap">
                <div 
                    className="single-episode episode-1" 
                    style={{ backgroundImage: `url(${Episode1})` }}
                >
                    <div className="pros-content-small">
                        <div className="pros-info-wrap">
                            <div className="pros-info">
                                <h3 className="pros-name">Neil Patel</h3>
                                <p className="pros-position">
                                    Co-Founder of Crazy Egg, Hello Bar and Kissmetrics
                                </p>
                                <p className="pros-desc">
                                    Named top 10 best marketers in the world, Serial entrepreneur, and much more. 
                                </p>
                            </div>
                            <a href="#" className="read-more">
                                <span className="play-icon-wrap">
                                    <img src={playButton} alt="play button" className="icon play-icon" />
                                </span>
                                <span>Hear His</span> 
                                <span className="line2">Story</span>
                            </a>
                        </div>
                    </div>                    
                </div>

                <div 
                    className="single-episode episode-2"
                    style={{ backgroundImage: `url(${Episode2})` }}
                >
                    <div className="pros-content-small">
                        <div className="pros-info-wrap">
                            <div className="pros-info">
                                <h3 className="pros-name">Neil Patel</h3>
                                <p className="pros-position">
                                    Co-Founder of Crazy Egg, Hello Bar and Kissmetrics
                                </p>
                                <p className="pros-desc">
                                    Named top 10 best marketers in the world, Serial entrepreneur, and much more. 
                                </p>
                            </div>
                            <a href="#" className="read-more">
                                <span className="play-icon-wrap">
                                    <img src={playButton} alt="play button" className="icon play-icon" />
                                </span>
                                <span>Hear His</span> 
                                <span className="line2">Story</span>
                            </a>
                        </div>
                    </div>
                </div>
            
                <div 
                    className="single-episode episode-3"
                    style={{ backgroundImage: `url(${Episode3})` }}
                >
                    <div className="pros-content-small">
                        <div className="pros-info-wrap">
                            <div className="pros-info">
                                <h3 className="pros-name">Neil Patel</h3>
                                <p className="pros-position">
                                    Co-Founder of Crazy Egg, Hello Bar and Kissmetrics
                                </p>
                                <p className="pros-desc">
                                    Named top 10 best marketers in the world, Serial entrepreneur, and much more. 
                                </p>
                            </div>
                            <a href="#" className="read-more">
                                <span className="play-icon-wrap">
                                    <img src={playButton} alt="play button" className="icon play-icon" />
                                </span>
                                <span>Hear His</span> 
                                <span className="line2">Story</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    className="single-episode episode-4"
                    style={{ backgroundImage: `url(${Episode4})` }}
                >
                    <div className="pros-content-small">
                        <div className="pros-info-wrap">
                            <div className="pros-info">
                                <h3 className="pros-name">Neil Patel</h3>
                                <p className="pros-position">
                                    Co-Founder of Crazy Egg, Hello Bar and Kissmetrics
                                </p>
                                <p className="pros-desc">
                                    Named top 10 best marketers in the world, Serial entrepreneur, and much more. 
                                </p>
                            </div>
                            <a href="#" className="read-more">
                                <span className="play-icon-wrap">
                                    <img src={playButton} alt="play button" className="icon play-icon" />
                                </span>
                                <span>Hear His</span> 
                                <span className="line2">Story</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    className="single-episode episode-5"
                    style={{ backgroundImage: `url(${Episode5})` }}
                >
                    <div className="pros-content-small">
                        <div className="pros-info-wrap">
                            <div className="pros-info">
                                <h3 className="pros-name">Neil Patel</h3>
                                <p className="pros-position">
                                    Co-Founder of Crazy Egg, Hello Bar and Kissmetrics
                                </p>
                                <p className="pros-desc">
                                    Named top 10 best marketers in the world, Serial entrepreneur, and much more. 
                                </p>
                            </div>
                            <a href="#" className="read-more">
                                <span className="play-icon-wrap">
                                    <img src={playButton} alt="play button" className="icon play-icon" />
                                </span>
                                <span>Hear His</span> 
                                <span className="line2">Story</span>
                            </a>
                        </div>
                    </div>
                </div>

                
            </div>

            {/* <div class="longDashedBorder"></div> */}

            {/* <div class="filtered">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/sara-shirt-example.jpg" />
            </div> */}
        </section>
    );
}