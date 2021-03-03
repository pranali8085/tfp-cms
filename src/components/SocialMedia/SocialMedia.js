import React from 'react'

import './SocialMedia.scss'

import AppleInCircle from '../../img/social/Apple-in-Circle.svg'
import soundCloudInCircle from '../../img/social/soundCloud-in-Circle.svg'
import youTubeInCircle from '../../img/social/Youtube-in-Circle.svg'

import Apple from '../../img/social/Apple.svg'
import soundCloud from '../../img/social/Sc.svg'
import youTube from '../../img/social/YT.svg'
import Spotify from '../../img/social/Spotify.svg'
import stitcher from '../../img/social/stitcher.png'


export default function SocialMedia({withTitle}) {

    if (withTitle === "FALSE") {

      return (
        <div className="social-media-wrap">
        <a title="apple pod casts" href="#" className="social-link">
          <img
            className="icon social-media-icon"
            src={AppleInCircle}
            alt = "apple pod casts"
          />
        </a>
        <a title="soundCloud" href="#" className="social-link">
          <img
            className="icon social-media-icon"
            src={soundCloudInCircle}
            alt = "soundCloud"
          />
        </a>
        <a title="youtube" href="#" className="social-link">
          <img
            className="icon social-media-icon"
            src={youTubeInCircle}
            alt = "youtube"
          />
        </a>
        <a title="youtube" href="#" className="social-link">
          <img
            className="icon social-media-icon"
            src={youTubeInCircle}
            alt = "youtube"
          />
        </a>
        <a title="youtube" href="#" className="social-link">
          <img
            className="icon social-media-icon"
            src={youTubeInCircle}
            alt = "youtube"
          />
        </a>
      </div>
      );
    } else {
      return (
        <div className="social-media-wrap with-title">
          <div className="social-media">
            <a title="apple pod casts" href="#" className="social-link">
              <img
                className="icon social-media-icon"
                src={Apple}
                alt = "apple pod casts"
              />
              <span className="media-title">iTunes</span>
            </a>
          </div>
          <div className="social-media">
            <a title="soundCloud" href="#" className="social-link">
              <img
                className="icon social-media-icon"
                src={soundCloud}
                alt = "soundCloud"
              />
              <span className="media-title">SoundCloud</span>
            </a>
          </div>
          <div className="social-media">
            <a title="youtube" href="#" className="social-link">
              <img
                className="icon social-media-icon"
                src={youTube}
                alt = "youtube"
              />
              <span className="media-title">Youtube</span>
            </a>
          </div>
          <div className="social-media">
            <a title="stitcher" href="#" className="social-link">
              <img
                className="icon social-media-icon"
                src={stitcher}
                alt = "stitcher"
              />
              <span className="media-title">Stichers</span>
            </a>
          </div>
          <div className="social-media">
            <a title="Spotify" href="#" className="social-link">
              <img
                className="icon social-media-icon"
                src={Spotify}
                alt = "Spotify"
              />
              <span className="media-title">Spotify</span>
            </a>
          </div>
        </div>
      );
    }
}