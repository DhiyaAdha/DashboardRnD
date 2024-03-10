const express = require('express');
const router = express.Router();
const customUI = require('../controllers/customUIControllers');

//page
router.get('/custom_dashboard', customUI.getCustomUI);

module.exports = router;