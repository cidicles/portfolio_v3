import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import { setShortcutPosition, setProjectViewerPosition, setProject } from '../../../Actions/Index';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import _ from 'lodash';
import './Home.css';

import StartMenu from '../../StartMenu/StartMenu';
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
        videos: 'http://s3-us-west-1.amazonaws.com/ejs-portfolio/videos/test.mp4',
        color: '#000'
      },
      projectOpen: false,
      startOpen: false
    }
    this.dispatchShortcutPosition = this.dispatchShortcutPosition.bind(this);
    this.dispatchProjectViewerPosition = this.dispatchProjectViewerPosition.bind(this);
    this.dispatchProject = this.dispatchProject.bind(this);
    this.closeProjectViewer = this.closeProjectViewer.bind(this);
    this.toggleStartMenu = this.toggleStartMenu.bind(this);
  }
  componentWillMount(){
    if(this.props.params.pid){
      this.openProjectViewer();
      this.props.dispatch(setProject(lang.home.projects[this.props.params.pid]));
    }
  }
  componentDidMount(){
    this.throttledMouseMove = _.throttle(this.throttledMouseMove.bind(this), 50);
    /*
    let timer;
    window.addEventListener('resize', function () {
      console.log('sdsd');
      timer = setTimeout(() => {
        console.log('sdsd');
      }, 300);
    });
    */
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
    //const { shortcuts } = this.props;
    //this.props.router.push(shortcuts.indexOf(shortcuts.find(x => x.title === project.title)).toString()); // :/ so sloppy
    this.openProjectViewer();
    this.props.dispatch(setProject(project));
  }
  closeProjectViewer(){
    this.setState({
      projectOpen: false
    });
  }
  openProjectViewer(){
    this.setState({
      projectOpen: true
    });
  }
  toggleStartMenu(){
    const { startOpen } = this.state;
    this.setState({
      startOpen: !startOpen
    });
  }
  render() {
    const { shortcuts, projectViewer, project } = this.props;
    const { projectOpen, startOpen } = this.state;
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
          <TransitionGroup>
            { projectOpen &&
              <ProjectViewer
                project={project}
                closeProjectViewer={this.closeProjectViewer}
                dispatchProjectViewerPosition={this.dispatchProjectViewerPosition}
                mouse={this.state.mouse}
                w={projectViewer.dim.w}
                h={projectViewer.dim.h}
                x={projectViewer.position.x}
                y={projectViewer.position.y} />
            }
          </TransitionGroup>
          <StartMenu startOpen={startOpen} toggleStartMenu={this.toggleStartMenu} />
        </div>
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
