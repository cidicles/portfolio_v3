import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainMenu.css';
import { Link } from 'react-router';
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import { changeLanguage } from '../../../Actions/Index';
import { breakSmall } from '../../../const';
import { browserHistory } from 'react-router'
import { toggleInterstitial } from '../../../Actions/Index';

/**
 * The main application menu.
 * @constructor
 */

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      menuClass: ''
    };
  }
  /**
  * Sets the language in redux.
  * @param {event} event
  */
  setLang(event){
    this.props.dispatch(changeLanguage(event.target.value));
    browserHistory.push(`/${lang.getLanguage()}`)
  }
  render() {
    let {menuClass} = this.state;
    return (
      <header className={menuClass}>
        <div className='wrap'>
          <a className='logo' onClick={() => this.toggleMainMenu('logo')}>
            <svg viewBox="0 0 96.96 75.59">
              <path d="M7.4,55.67a1.34,1.34,0,0,1-1-.42L1.89,50.73a1.24,1.24,0,0,1-.39-1,1.34,1.34,0,0,1,.39-.91L38.33,12.42a1.36,1.36,0,0,1,1-.42,1.28,1.28,0,0,1,.94.36l4.51,4.51a1.41,1.41,0,0,1,.39,1,1.31,1.31,0,0,1-.39,1L8.35,55.3A1.28,1.28,0,0,1,7.4,55.67Z" transform="translate(-1.5 -12)"/>
              <path d="M40.32,66.56a1.71,1.71,0,0,1-.9-.51l-4.51-4.51a1.56,1.56,0,0,1-.48-.88.79.79,0,0,1,.19-.71L59.46,35.1a.81.81,0,0,1,.77-.2,1.6,1.6,0,0,1,.85.45l4.51,4.51a1.8,1.8,0,0,1,.49.88.81.81,0,0,1-.17.8L41.06,66.41A.78.78,0,0,1,40.32,66.56Z" transform="translate(-1.5 -12)"/>
              <path d="M1.54,49.82a1.34,1.34,0,0,1,.42-1l4.51-4.51a1.24,1.24,0,0,1,1-.39,1.34,1.34,0,0,1,.91.39L44.78,80.74a1.36,1.36,0,0,1,.42,1,1.28,1.28,0,0,1-.36.94l-4.51,4.51a1.41,1.41,0,0,1-1,.39,1.31,1.31,0,0,1-1-.39L1.9,50.76A1.28,1.28,0,0,1,1.54,49.82Z" transform="translate(-1.5 -12)"/>
              <path d="M92.56,43.92a1.34,1.34,0,0,1,1,.42l4.51,4.51a1.24,1.24,0,0,1,.39,1,1.34,1.34,0,0,1-.39.91L61.64,87.17a1.36,1.36,0,0,1-1,.42,1.28,1.28,0,0,1-.94-.36l-4.51-4.51a1.41,1.41,0,0,1-.39-1,1.31,1.31,0,0,1,.39-1L91.62,44.29A1.28,1.28,0,0,1,92.56,43.92Z" transform="translate(-1.5 -12)"/>
              <path d="M98.42,49.77a1.34,1.34,0,0,1-.42,1l-4.51,4.51a1.24,1.24,0,0,1-1,.39,1.34,1.34,0,0,1-.91-.39L55.18,18.85a1.36,1.36,0,0,1-.42-1,1.28,1.28,0,0,1,.36-.94l4.51-4.51a1.41,1.41,0,0,1,1-.39,1.31,1.31,0,0,1,1,.39L98.06,48.83A1.28,1.28,0,0,1,98.42,49.77Z" transform="translate(-1.5 -12)"/>
            </svg>
          </a>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
   return { lang: state.lang };
}

MainMenu.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MainMenu);
