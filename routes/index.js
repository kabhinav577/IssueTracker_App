const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');


router.get('/', homeController.home);

module.exports = router;