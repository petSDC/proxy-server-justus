const express = require('express');
const path = require('path');
const axios = require('axios');
const port = process.env.port || 3000;

const app = express();
app.use(express.json());
app.use('/:id', express.static(path.resolve(__dirname + '/../public/')));

app.get('/:id/shopReviews', (req, res) => {
  axios.get(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/main.js`)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
});

app.get('/:id/reviewsCss', (req, res) => {
  axios.get(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/styles.css`)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
});

app.get('/:id/reviews', (req, res) => {
  axios.get(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`)
    .then(response => res.send(response.data))
    .catch(err => res.status(500).send(err));
});

app.post('/:id/reviews', (req, res) => {
  axios.post(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.status(500).send(err));
});

app.put('/:id/reviews', (req, res) => {
  axios.put(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.status(500).send(err));
});

app.use('/:id/products', (req, res) => {
  axios.get(`http://localhost:5000/${req.params.id}/dist/bundleShopProducts.js`)
    .then(response => res.send(response.data))
    .catch(err => res.status(500).send(err));
});

app.get('/:id/shopproducts', (req, res) => {
  axios.get(`http://localhost:5000/${req.params.id}/shopproducts`)
    .then(response => res.send(response.data))
    .catch(err => res.status(500).send(err));
});

app.get('/:id/productsCss', (req, res) => {
  axios.get(`http://localhost:5000/${req.params.id}/style.css`)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
});

app.get('/:id/buying', (req, res) => {
  axios.get(`http://localhost:8000/${req.params.id}/dist/buying.js`)
    .then(response => res.send(response.data))
    .catch(err => res.status(500).send(err));
});

app.get('/:id/buyingCss', (req, res) => {
  axios.get(`http://localhost:8000/${req.params.id}/dist/styles.css`)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
});

app.get('/:id/details', (req, res) => {
  axios.get(`http://localhost:8000/${req.params.id}/details`)
    .then(response => res.send(response.data))
    .catch(err => res.status(500).send(err));
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
