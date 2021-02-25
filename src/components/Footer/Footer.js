import React from 'react'
import { Link } from 'gatsby'

import './Footer.scss'


import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import twitter from '../../img/social/twitter.svg'
import linkedin from '../../img/social/linkedin.svg'

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
          <div className="social-links column">
            <a title="facebook" href="https://facebook.com" className="social-link">
              <svg className="icon social-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg>
            </a>
            <a title="twitter" href="https://twitter.com" className="social-link">
              <svg className="icon social-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
            </a>
            <a title="linkedin" href="https://linkedin.com" className="social-link">
              <svg className="icon social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Linked in icon</title><g ><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/><path d="m.396 7.977h4.976v16.023h-4.976z"/><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/></g></svg>
            </a>
            <a title="instagram" href="https://instagram.com" className="social-link">
              <svg className="icon social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.00096 512.00096"><path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm-117.40625 395.996094c-77.195312 0-139.996094-62.800782-139.996094-139.996094s62.800782-139.996094 139.996094-139.996094 139.996094 62.800782 139.996094 139.996094-62.800782 139.996094-139.996094 139.996094zm143.34375-246.976563c-22.8125 0-41.367188-18.554687-41.367188-41.367187s18.554688-41.371094 41.367188-41.371094 41.371094 18.558594 41.371094 41.371094-18.558594 41.367187-41.371094 41.367187zm0 0"/><path d="m256 146.019531c-60.640625 0-109.980469 49.335938-109.980469 109.980469 0 60.640625 49.339844 109.980469 109.980469 109.980469 60.644531 0 109.980469-49.339844 109.980469-109.980469 0-60.644531-49.335938-109.980469-109.980469-109.980469zm0 0"/><path d="m399.34375 96.300781c-6.257812 0-11.351562 5.09375-11.351562 11.351563 0 6.257812 5.09375 11.351562 11.351562 11.351562 6.261719 0 11.355469-5.089844 11.355469-11.351562 0-6.261719-5.09375-11.351563-11.355469-11.351563zm0 0"/></svg>
            </a>
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
