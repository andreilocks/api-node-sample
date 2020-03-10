const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes'));

app.use(function(req, res, next) {
  var err = new Error('Recurso não encontrado! URL: ' + req.url);
  err.status = 404;
  next(err);
});

app.use(function (err, req, res) {
  const status = err.status || 500;
  const message = err.message || DEFAULT_MESSAGE_ERROR;

  req.user ? console.error(`[USER ${req.user.id}]`, err.stack) : console.error(err.stack);
  res.status(status).send({ message });
});

module.exports = app;