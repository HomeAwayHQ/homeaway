import babelPolyfill from 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Flux from './Flux';
import App from './components/App';

const flux = new Flux({baseURL: 'http://35.164.105.76'});

flux.bootstrap(window.AppState);

var url = flux.getStore('NavStore').getState().url;

if (document.location.pathname != url) {
  history.pushState(null, '', url);
}

const {component} = flux.router.getRoute(url).config;

ReactDOM.render(<App app={flux} component={component} />,
  document.querySelector('[data-app]'));
