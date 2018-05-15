import React, { Component } from 'react';
import {cdnBase} from '../../const';
import './Desc.css';

/**
 * Desc Component
 * @constructor
 * @prop {json} project - A project.
 */

class Desc extends Component {
  render() {
    const { project } = this.props;
    return (
      <div>
        <p>{project.longdesc}</p>
        <div className='languages'>
          <h2>Tools</h2>
          <ul>
          {project.languages && project.languages.map((language, index) => (
            <li key={`language-${index}`}><img src={`${cdnBase}logos/${language.toLowerCase().replace(' ','')}.png`} /></li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Desc;
