import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import { toggleInterstitial, setShortcutPosition, setProjectViewerPosition, setProject } from '../../../Actions/Index';
import Video from '../../Video/Video';
import Desc from '../../Desc/Desc';
//import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll } from 'react-scroll';
import Carousel from 'nuka-carousel';
import { CSSTransitionGroup } from 'react-transition-group';
import _ from 'lodash';
import './Home.css';

import Shortcut from './Shortcut';
import ProjectViewer from './ProjectViewer';

/**
 * Home
 * @constructor
 */

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props,
      mouse: {
        clientX: 0,
        clientY: 0
      },
      project: {
        videos: 'http://s3-us-west-1.amazonaws.com/ejs-portfolio/videos/test.mp4'
      }
    }
    this.dispatchShortcutPosition = this.dispatchShortcutPosition.bind(this);
    this.dispatchProjectViewerPosition = this.dispatchProjectViewerPosition.bind(this);
    this.dispatchProject = this.dispatchProject.bind(this);
  }
  componentDidMount(){
    this.throttledMouseMove = _.throttle(this.throttledMouseMove.bind(this), 50);
  }
  onMouseMove = (e) => {
    e.persist();
    this.throttledMouseMove(e);
  }
  throttledMouseMove = (e) => {
    this.setState({
      mouse: {
        clientX: e.clientX,
        clientY: e.clientY
      }
    });
  }
  dispatchShortcutPosition(pos,index){
    this.props.dispatch(setShortcutPosition(pos,index));
  }
  dispatchProjectViewerPosition(pos){
    this.props.dispatch(setProjectViewerPosition(pos));
  }
  dispatchProject(project){
    this.props.dispatch(setProject(project));
  }
  render() {
    const {shortcuts, projectViewer, project} = this.props;
    return (
      <div className='wrap'>
        <Helmet title={ lang.home.title + lang.helmet.siteTitle } />




        <div className='desktop' onMouseMove={this.onMouseMove}>
          {shortcuts.map((shortcut, index) => (
            <Shortcut
              project={shortcut}
              title={shortcut.title}
              dispatchShortcutPosition={this.dispatchShortcutPosition}
              dispatchProject={this.dispatchProject}
              mouse={this.state.mouse}
              index={index}
              x={shortcut.position.x}
              y={shortcut.position.y}
              key={`shortcut-${index}`} />
          ))}

          <ProjectViewer
            project={project}
            dispatchProjectViewerPosition={this.dispatchProjectViewerPosition}
            mouse={this.state.mouse}
            w={projectViewer.dim.w}
            h={projectViewer.dim.h}
            x={projectViewer.position.x}
            y={projectViewer.position.y} />


        </div>


        {/*

        <Video vid={project.videos}/>


        <CSSTransitionGroup
          transitionName='example'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <Desc project={project}/>
        </CSSTransitionGroup>






        <div className='site-content'>






        {lang.home.projects.map((project_list, index) => (
          <div className='project'>
            <a style={{backgroundColor: project_list.color}} key={`project-${index}`} onClick={(e) => this.setProject(e, project_list)} className={project_list.videos === project.videos ? 'slidr-active slidr' : 'slidr'}>
              <h2>{project_list.title}</h2>

              <video width='400' loop>
                <source src={project_list.videos} type='video/mp4' />
              </video>

            </a>
          </div>
        ))}







          <Carousel
            renderBottomCenterControls={false}
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>Previous</button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}>Next</button>
            )}
            slidesToShow={5}>
          {lang.home.projects.map((project_list, index) => (
            <div className='project'>
              <a style={{backgroundColor: project_list.color}} key={`project-${index}`} onClick={(e) => this.setProject(e, project_list)} className={project_list.videos === project.videos ? 'slidr-active slidr' : 'slidr'}>
                <h2>{project_list.title}</h2>

                <video width='400' loop>
                  <source src={project_list.videos} type='video/mp4' />
                </video>

              </a>
            </div>
          ))}
          </Carousel>


        </div>


*/}




      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.lang,
    shortcuts: state.shortcuts,
    projectViewer: state.projectViewer,
    project: state.project
  };
}

export default connect(mapStateToProps)(Home);
