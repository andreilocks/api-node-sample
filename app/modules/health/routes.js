const express = require('express');
const router = express.Router();
const {response} = require('../../tools');
router.get('/', (req, res) => (
  response.wrapper(res, new Promise((resolve) => {
    resolve({status: "UP"})
  }))
));

module.exports = router;