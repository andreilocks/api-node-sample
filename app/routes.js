const express = require('express');
const router = express.Router();

router.use('/card', require('./modules/card/routes'));
router.use('/health', require('./modules/health/routes'));

module.exports = router;