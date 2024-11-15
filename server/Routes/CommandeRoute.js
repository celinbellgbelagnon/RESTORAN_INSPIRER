const express = require('express');
const router = express.Router();
const commandeCtrl = require('../Controllers/CommandeCtrl');

router.post('/select/add', commandeCtrl.addNewCommande);
router.get('/select/recu', commandeCtrl.getCommande);
router.post('/update/statut', commandeCtrl.updateCommandeStatus);
router.get('/select/servie', commandeCtrl.getCommandeServie);

module.exports = router;
