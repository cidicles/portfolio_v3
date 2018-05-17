import React, { Component } from 'react';
import { lang } from '../il8n/lang';
import './App.css';

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
        <div ref="container">
          <div className='wrap site-frame'>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
