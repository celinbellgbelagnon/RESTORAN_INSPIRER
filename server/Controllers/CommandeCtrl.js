const database = require('../config/mysql');

// Ajouter une nouvelle commande
exports.addNewCommande = (req, res) => {
    const addnewquery = 'INSERT INTO commande(client_name, client_numero, plat_commande, boisson_commande, date_commande, quantite_commande, commentaire) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    database.query(
        addnewquery,
        [
            req.body.clientnom,
            req.body.clientnumero,
            req.body.plat,
            req.body.boisson,
            req.body.date,
            req.body.platNombre,
            req.body.commentaire
        ],
        (error, result) => {
            if (error) throw error;
            res.status(201).json({ message: 'Nouvelle commande ajoutée' });
        }
    );
};

// Obtenir les commandes non servies
exports.getCommande = (req, res) => {
    const getCommandeQuery = 'SELECT * FROM commande WHERE status = "reçue"';
    
    database.query(getCommandeQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json({ commande: result });
    });
};

// Mettre à jour le statut d'une commande
exports.updateCommandeStatus = (req, res) => {
    const { commande_id } = req.body;
    const updateStatusQuery = 'UPDATE commande SET status = "servie" WHERE commande_id = ?';
    
    database.query(updateStatusQuery, [commande_id], (error, result) => {
        if (error) throw error;
        res.status(200).json({ message: 'Commande marquée comme servie' });
    });
};

// Obtenir les commandes servies
exports.getCommandeServie = (req, res) => {
    const getCommandeServieQuery = 'SELECT * FROM commande WHERE status = "servie"';
    
    database.query(getCommandeServieQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json({ commande: result });
    });
};
