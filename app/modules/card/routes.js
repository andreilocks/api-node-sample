const express = require('express');
const router = express.Router();
const service = require('./service');
const { response } = require('../../tools');
const { verify } = require('../http-interceptor');

router.post('/', verify, (req, res) => (
  response.wrapper(res, service.on(req.user).create(req.body))
));

router.get('/', verify, (req, res) => (
  response.wrapper(res, service.on(req.user).retrieve())
));

module.exports = router;