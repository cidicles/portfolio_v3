import React, { Component } from 'react';

/**
 * Shortcut Component
 * @constructor
 * @prop {int} x - X Position.
 * @prop {int} y - Y Position.
 * @prop {object} mouse - Mouse Position.
 */

class Shortcut extends Component {
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
    const { dispatchShortcutPosition, mouse, index } = this.props;
    const { offset } = this.state;
    dispatchShortcutPosition(
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
  updateProject(project){
    const {dispatchProject} = this.props;
    dispatchProject(project);
  }
  getStyle(){
    const { x, y, mouse } = this.props;
    const { dragging, offset } = this.state;
    let style = {
      left: dragging ? mouse.clientX - offset.x : x,
      top: dragging ? mouse.clientY - offset.y : y
    }
    return style;
  }
  render() {
    const style = this.getStyle();
    const { project } = this.props;
    return (
      <div style={style} className='shortcut' onTouchEnd={this.updateProject.bind(this, project)} onDoubleClick={this.updateProject.bind(this, project)} onMouseDown={this.startDrag} onMouseUp={this.endDrag}>
        <div className='shortcut-contents'>
          <img src={project.logo} alt={project.title} className='shortcut-icon' />
          {project.title}
        </div>
      </div>
    );
  }
}

export default Shortcut;
