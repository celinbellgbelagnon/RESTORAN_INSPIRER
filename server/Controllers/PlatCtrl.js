const database = require('../config/mysql');

exports.AddnewPlat = (req, res) => {
    const addnewquery = 'INSERT INTO plat (plat_name, price_plat, description_plat) VALUES (?, ?, ?)';
    database.query(addnewquery, [req.body.platName, req.body.prix, req.body.description], (error, result) => {
        if (error) throw error;
        res.status(201).json({ message: 'Nouveau plat ajouté' });
    });
};

exports.getPlat = (req, res) => {
    database.query('SELECT * FROM plat', (error, result) => {
        if (error) throw error;
        res.status(201).json({ plat: result }); // Utilisation de status 200 pour une récupération réussie
    });
}; 
