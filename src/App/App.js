import React, { Component } from 'react';
import { lang } from '../il8n/lang';
import { siteMapByLocale } from '../utils';
import { browserHistory } from 'react-router';
import './App.css';

// Common Components
import MainMenu from '../components/Navs/MainMenu/MainMenu';
import Footer from '../components/Navs/Footer/Footer';

// Setting lang on HTML
import Helmet from "react-helmet";

/**
 * Main App Wrapper
 */
class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang={lang.getLanguage()} />
        </Helmet>
        <MainMenu retailersModal={() => this.retailersModal.openModal()} />
        <div className='menuSep' />
        <div ref="container">
          <div className='wrap site-frame'>
            { this.props.children }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
