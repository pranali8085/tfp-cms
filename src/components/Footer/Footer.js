import React from 'react'
import { Link } from 'gatsby'

import './Footer.scss'


import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import twitter from '../../img/social/twitter.svg'
import linkedin from '../../img/social/linkedin.svg'

import iTunesApple from '../../img/social/apple.svg'
import soundCloud from '../../img/social/soundcloud.svg'
import youTube from '../../img/social/youtube.svg'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer-top-section">
          <div>
            <span>LISTEN TO OUR PODCAST</span>
          </div>
          <div>
            <p>If you are a business leader and have a unique story to share, please send us your information at 
              <a href='mailto:marketing@imaginovation.net'>marketing@imaginovation.net</a>
            </p>
            <div className="social-media-wrap">
              <a title="apple pod casts" href="#">
                <img
                  src={iTunesApple}
                  alt="iTunes Apple"
                />
              </a>
              <a title="soundCloud" href="#">
                <img
                  src={soundCloud}
                  alt="soundCloud"
                />
              </a>
              <a title="youtube" href="#">
                <img
                  src={youTube}
                  alt="youtube"
                />
              </a>
            </div>
          </div>
        </section>    

        <section className="footer-base-strip">
          <div className="tnc-section">
            <p>Tales from the PROS is a registered podcast network of Imaginovation, LLC © 2018 |
            <Link className="tnc-link" to="/privacy">
              Privacy
            </Link>
            </p>
          </div>
          <div className="social-links">
            <div className="column is-4 social">
              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                />
              </a>
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                />
              </a>
              <a title="linkedin" href="https://linkedin.com">
                <img
                  src={linkedin}
                  alt="Linked in"
                />
              </a>
              <a title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </section>
        <a
          className="navbar-item"
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
