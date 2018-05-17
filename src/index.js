// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Analytics
import ReactGA from 'react-ga';
import {UA} from './const';

// Redux
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';

// Pages
import App from './App/App';
import Home from './components/Pages/Home/Home';
import NoMatch from './components/Pages/NoMatch/NoMatch';

// Global Assets
/*eslint-disable no-unused-vars*/
/*eslint-enable no-unused-vars*/

// Global CSS
import './index.css';

// Localized Overide CSS
import './localeOverrides/en_us.css';

// Create the Store
let { store, persistor } = configureStore();

// Analytics
ReactGA.initialize(UA);
function logPageView() {
  window.scrollTo(0, 0); // scroll page to top
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// Define Routes
const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/:pid',
    exact: false,
    component: Home
  },
  {
    path: '*',
    exact: false,
    component: NoMatch
  },
];

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={ browserHistory } onUpdate={logPageView}>
        <Route component={ App }>
          {routes.map((route, index) => (
            <Route
              key={ index }
              path={ route.path }
              exact={ route.exact }
              component={ route.component }
            />
          ))}
        </Route>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
