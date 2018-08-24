const express = require('express');

const router = express.Router();

router.get('/', require('../controllers/home').get);
router.get('/Stop', require('../controllers/home').get);
router.get('/Continue', require('../controllers/home').get);
router.get('/Go', require('../controllers/home').get);

module.exports = router;
