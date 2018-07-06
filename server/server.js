const express = require('express');
const path = require('path');
const axios = require('axios');

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('../service-config.json');
const services = require('../loader.js')(clientBundles, serverBundles, serviceConfig);

const React = require('react');
const { renderToString } = require('react-dom/server');
const Layout = require('../templates/layout');
const App = require('../templates/app');
const Scripts = require('../templates/scripts');

const port = process.env.port || 3000;
const app = express();

const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return renderToString(component);
  });
};

app.get('/:id', function(req, res) {
  let components = renderComponents(services, {itemID: req.params.id});
  res.end(Layout(
    'Petsdc',
    App(...components),
    Scripts(Object.keys(services))
  ));
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
