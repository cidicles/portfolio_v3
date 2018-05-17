import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import { truncate } from '../../../utils';
import {cdnBase} from '../../../const';
import ReactTooltip from 'react-tooltip';
import Video from '../../Video/Video';
import './Project.css';

/**
 * Videos
 * @constructor
 */

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      project: lang.home.projects[this.props.params.pid]
    }
    console.log(this.props.params.pid)
  }
  render() {
    const {activeVid} = this.props;
    const {project} = this.state;
    return (
      <div className='wrap-project'>
        <Helmet title={ lang.videos.title + lang.helmet.siteTitle } />
        <Video vid={project.videos}/>
        <h1>{project.title}</h1>
        <p>{project.longdesc}</p>
        <div className='languages'>
          <h2>Tools</h2>
          <ul>
          {project.languages && project.languages.map((language, index) => (
            <li key={`language-${index}`}><img src={`${cdnBase}logos/${language.toLowerCase().replace(' ','')}.png`} alt={language.toUpperCase()} data-tip={language.toUpperCase()} /></li>
          ))}
          </ul>
        </div>
        <ReactTooltip />
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

export default connect(mapStateToProps)(Project);
