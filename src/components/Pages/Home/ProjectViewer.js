import React, { Component } from 'react';
import {cdnBase} from '../../../const';
import Video from '../../Video/Video';
import ReactTooltip from 'react-tooltip';

/**
 * ProjectViewer Component
 * @constructor
 * @prop {int} x - X Position.
 * @prop {int} y - Y Position.
 * @prop {object} mouse - Mouse Position.
 */

class ProjectViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props,
      dragging: false,
      offset: {
        x: 0,
        y: 0
      }
    }
    this.startDrag = this.startDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);
    this.clearDrag = this.clearDrag.bind(this);
  }
  componentDidMount(){
    window.addEventListener('mouseup', this.clearDrag, false);
    window.addEventListener('mouseleave', this.clearDrag, false);
  }
  shouldComponentUpdate(nextProps, nextState){
    //console.log(nextProps)
    return true
  }
  clearDrag(){
    this.setState({
      dragging: false
    });
  }
  startDrag(e){
    const { x, y } = this.props;
    const offset = {
      x: e.clientX - x,
      y: e.clientY - y
    };
    this.setState({
      dragging: true,
      offset
    });
  }
  endDrag(){
    const { dispatchProjectViewerPosition, mouse, index } = this.props;
    const { offset } = this.state;
    dispatchProjectViewerPosition(
      {
        x: mouse.clientX - offset.x,
        y: mouse.clientY - offset.y
      },
      index
    );
    this.setState({
      dragging: false
    });
  }
  getStyle(){
    const { x, y, w, h, mouse } = this.props;
    const { dragging, offset } = this.state;
    let style = {
      left: dragging ? mouse.clientX - offset.x : x,
      top: dragging ? mouse.clientY - offset.y : y,
      width: w
    }
    return style;
  }
  render() {
    const style = this.getStyle();
    const { title, project, w } = this.props;
    return (
      <div style={style} className='project-viewer' onMouseDown={this.startDrag} onMouseUp={this.endDrag}>


        <div className='viewer-controls'>
          <h2>{project.title}</h2>
          <div className='btn'>
            <svg viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
          </div>
        </div>



        <div className='project-viewer-grid'>
          <div className='viewer-toolbar'>
            <ul>
            {project.languages && project.languages.map((language, index) => (
              <li key={`language-${index}`}><img src={`${cdnBase}logos/${language.toLowerCase().replace(' ','')}.png`} alt={language.toUpperCase()} data-tip={language.toUpperCase()} data-place={'right'} /></li>
            ))}
            </ul>
          </div>
          <div>
            <Video vid={project.videos} w={w - 64} />
            <div className='viewer-contents'>
              <p>
                Role: {project.role}
              </p>
              <p>
                Completed At: {project.completedAt}
              </p>
            </div>
          </div>
        </div>




















        <ReactTooltip />
      </div>
    );
  }
}

export default ProjectViewer;
