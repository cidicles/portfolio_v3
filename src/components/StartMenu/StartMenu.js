import React, { Component } from 'react';
import './StartMenu.css';

/**
 * StartMenu Component
 * @constructor
 * @prop {json} project - A project.
 */

class StartMenu extends Component {
  render() {
    const { startOpen, toggleStartMenu } = this.props;
    return (
      <div className='start-menu'>
        <div className='start' onClick={toggleStartMenu}>
          <svg viewBox='0 0 96.96 75.59'>
            <path d='M7.4,55.67a1.34,1.34,0,0,1-1-.42L1.89,50.73a1.24,1.24,0,0,1-.39-1,1.34,1.34,0,0,1,.39-.91L38.33,12.42a1.36,1.36,0,0,1,1-.42,1.28,1.28,0,0,1,.94.36l4.51,4.51a1.41,1.41,0,0,1,.39,1,1.31,1.31,0,0,1-.39,1L8.35,55.3A1.28,1.28,0,0,1,7.4,55.67Z' transform='translate(-1.5 -12)'/>
            <path d='M40.32,66.56a1.71,1.71,0,0,1-.9-.51l-4.51-4.51a1.56,1.56,0,0,1-.48-.88.79.79,0,0,1,.19-.71L59.46,35.1a.81.81,0,0,1,.77-.2,1.6,1.6,0,0,1,.85.45l4.51,4.51a1.8,1.8,0,0,1,.49.88.81.81,0,0,1-.17.8L41.06,66.41A.78.78,0,0,1,40.32,66.56Z' transform='translate(-1.5 -12)'/>
            <path d='M1.54,49.82a1.34,1.34,0,0,1,.42-1l4.51-4.51a1.24,1.24,0,0,1,1-.39,1.34,1.34,0,0,1,.91.39L44.78,80.74a1.36,1.36,0,0,1,.42,1,1.28,1.28,0,0,1-.36.94l-4.51,4.51a1.41,1.41,0,0,1-1,.39,1.31,1.31,0,0,1-1-.39L1.9,50.76A1.28,1.28,0,0,1,1.54,49.82Z' transform='translate(-1.5 -12)'/>
            <path d='M92.56,43.92a1.34,1.34,0,0,1,1,.42l4.51,4.51a1.24,1.24,0,0,1,.39,1,1.34,1.34,0,0,1-.39.91L61.64,87.17a1.36,1.36,0,0,1-1,.42,1.28,1.28,0,0,1-.94-.36l-4.51-4.51a1.41,1.41,0,0,1-.39-1,1.31,1.31,0,0,1,.39-1L91.62,44.29A1.28,1.28,0,0,1,92.56,43.92Z' transform='translate(-1.5 -12)'/>
            <path d='M98.42,49.77a1.34,1.34,0,0,1-.42,1l-4.51,4.51a1.24,1.24,0,0,1-1,.39,1.34,1.34,0,0,1-.91-.39L55.18,18.85a1.36,1.36,0,0,1-.42-1,1.28,1.28,0,0,1,.36-.94l4.51-4.51a1.41,1.41,0,0,1,1-.39,1.31,1.31,0,0,1,1,.39L98.06,48.83A1.28,1.28,0,0,1,98.42,49.77Z' transform='translate(-1.5 -12)'/>
          </svg>
        </div>
        <div className={`start-panel ${startOpen ? 'active': ''}`}>
          I am Eric J Seaton.<br /><br />
          I make web things. You can find me at any of the places below.
          <ul>
            <li><a rel='noopener noreferrer' href='https://www.linkedin.com/in/eric-seaton-3695718' target='_blank'>Linked In</a></li>
            <li><a rel='noopener noreferrer' href='https://github.com/cidicles' target='_blank'>Github</a></li>
            <li><a rel='noopener noreferrer' href='https://stackoverflow.com/users/5124641/cidicles' target='_blank'>Stack Overflow</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StartMenu;
