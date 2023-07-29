const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');


router.get('/', homeController.home);
router.get('/projects', require('./projects'));

module.exports = router;