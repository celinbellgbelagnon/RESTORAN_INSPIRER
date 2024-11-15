const express = require('express');
const router = express.Router();
const platCtrl = require('../Controllers/PlatCtrl');

router.post('/select/add', platCtrl.AddnewPlat);
router.get('/select/art', platCtrl.getPlat);

module.exports = router;
