import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';

var router = require('express').Router();
var serialize = require('serialize-javascript');

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

var Flux = require('../../client/Flux');
var App = require('../../client/components/App');
var Layout = require('../../client/components/Layout');

router.use(function(req, res, next) {
  var flux = new Flux({baseURL: 'http://35.164.105.76', cookies: req.cookies});
  flux.getActions('NavActions')
  .navigate(req.url)
  .then(() => {
    var url = flux.getStore('NavStore').getState().url;
    var title = flux.router.getRoute(url).config.title;
    var markup = renderToString(
      <App app={flux} />
    );
    var state = `window.AppState = ${serialize(flux.takeSnapshot())};`;
    var html = renderToStaticMarkup(
      <Layout title={title} markup={markup} state={state} />
    );
    res.status(200).send(`<!DOCTYPE html>${html}`);
  })
  .catch(next);
});

module.exports = router;
