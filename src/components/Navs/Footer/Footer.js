import React, { Component } from 'react';
import './Footer.css';
import { lang } from '../../../il8n/lang';
import { Link } from 'react-router';

/**
 * The main application footer.
 * @constructor
 */

class Footer extends Component {
  render() {
    return (
    <footer>
      <div className="content">
        <span className="copy">
          { lang.footer.copy }
        </span>
      </div>
    </footer>
    );
  }
}

export default Footer;
