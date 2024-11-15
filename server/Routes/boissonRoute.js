const express = require('express');
const router = express.Router();
const boissonCtrl = require('../Controllers/boissonCtrl');

router.post('/select/add', boissonCtrl.AddNewBeverage);
router.get('/select/art', boissonCtrl.getboisson);

module.exports = router;