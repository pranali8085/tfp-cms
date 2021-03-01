import React from 'react'
import { Link } from 'gatsby'

import './Footer.scss'

import SocialConnect from '../SocialConnect/SocialConnect'

// import facebook from '../../img/social/facebook.svg'
// import instagram from '../../img/social/instagram.svg'
// import twitter from '../../img/social/twitter.svg'
// import linkedin from '../../img/social/linkedin.svg'

import iTunesApple from '../../img/social/itunes.png'
import soundCloud from '../../img/social/sound_cloud.png'
import youTube from '../../img/social/Youtube.png'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="tfp-footer">
        <section className="footer-top-section">
          <div className="bg-text">
            LISTEN TO OUR PODCAST
          </div>
          <div className="marketing-text">
            <p>
              If you are a business leader and have a unique story to share, please send us your information at 
              <a href='mailto:marketing@imaginovation.net' className="email-link tfp-red"> marketing@imaginovation.net</a>
            </p>
          </div>
          <div className="social-media-wrap">
              <a title="apple pod casts" href="#" className="social-link">
                <img
                  className="icon social-media-icon"
                  src={iTunesApple}
                  alt = "apple pod casts"
                />
              </a>
              <a title="soundCloud" href="#" className="social-link">
                <img
                  className="icon social-media-icon"
                  src={soundCloud}
                  alt = "soundCloud"
                />
              </a>
              <a title="youtube" href="#" className="social-link">
                <img
                  className="icon social-media-icon"
                  src={youTube}
                  alt = "youtube"
                />
              </a>
              <a title="youtube" href="#" className="social-link">
                <img
                  className="icon social-media-icon"
                  src={youTube}
                  alt = "youtube"
                />
              </a>
              <a title="youtube" href="#" className="social-link">
                <img
                  className="icon social-media-icon"
                  src={youTube}
                  alt = "youtube"
                />
              </a>
            </div>
        </section>    

        <section className="footer-base-strip columns section-padding">
          <div className="tnc-section column">
            <p>Tales from the PROS is a registered podcast network of Imaginovation, LLC © 2018 | 
              <Link className="tnc-link" to="/privacy"> Privacy</Link>
            </p>
          </div>
          
          <SocialConnect />
        </section>
        <a
          className="admin-link"
          href="/admin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin
        </a>
      </footer>
    )
  }
}

export default Footer
