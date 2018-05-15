import React, { Component } from 'react';
import Helmet from "react-helmet";
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import './Support.css';

/**
 * Support
 * @constructor
 */

class Support extends Component {
  render() {
    return (
      <div>
        <Helmet title={ lang.support.subTitle + lang.helmet.siteTitle } />
        <h1>{lang.support.subTitle}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { lang: state.lang };
}

export default connect(mapStateToProps)(Support);
