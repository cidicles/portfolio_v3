import React, { Component } from 'react';
import Helmet from "react-helmet";
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import { truncate } from '../../../utils';
import './Videos.css';

/**
 * Videos
 * @constructor
 */

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  /**
  * Render all video thumbs.
  * @return {jsx} Video Thumbs.
  */
  getVideoThumb(video, index){
    if(video.type === 'youtube'){
      return(
        <span>
          <img src={`https://img.youtube.com/vi/${video.video}/mqdefault.jpg`} alt={video.title} className='thumb'/>
          <h2>{video.title}</h2>
          <p>{truncate(video.desc, 60)}</p>
        </span>
      );
    } else {
      return(
        <span>
          <img src={video.poster} alt={video.title} className='thumb'/>
          <h2>{video.title}</h2>
          <p>{truncate(video.desc, 60)}</p>
        </span>
      );
    }
  }
  render() {
    let {activeVid} = this.props;
    return (
      <div className="videos">
        <Helmet title={ lang.videos.title + lang.helmet.siteTitle } />
        <VideoPlayer
          ref={player => { this.videoPlayer = player; }}
          type={activeVid.type}
          activeVid={activeVid.video}
          warn={lang.warnings.enableIframes}
          autoPlay='true'
          loop = 'true'
          poster={activeVid.poster}
        />
          <div className='row'>
            <div className="video-grid">
              {lang.videos.videoList.map((video) => (
                <a key={video.title} href='#player' className='item' onClick={() => this.changeVid(video)} >
                  {this.getVideoThumb(video)}
                </a>
              ))}
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { lang, activeVid } = state;
  return {
    lang,
    activeVid
  };
}

export default connect(mapStateToProps)(Videos);
