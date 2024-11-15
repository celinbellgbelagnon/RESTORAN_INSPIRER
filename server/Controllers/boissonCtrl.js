const database = require('../config/mysql');

exports.AddNewBeverage = (req, res) => {
    let addnewquery = 'insert into boisson(boisson_name, boisson_price, description_boisson) values (?,?,?)'

    database.query(
        addnewquery,
        [
            req.body.nomBoisson,
            req.body.prix,
            req.body.description
        ],
        (error, result) =>{
            if(error) throw error;
            res.status(201).json({message: 'Nouvelle Boisson ajoutee'});
        }
    )
}

exports.getboisson = (req, res) =>{
    database.query('select * from boisson', (error, result) =>{
        if (error) throw error;
        res.status(201).json({boisson: result}); 
    })
}