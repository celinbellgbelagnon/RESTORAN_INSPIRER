const mysql = require('mysql2')

const databse = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'restoran'
})

databse.connect((error) =>{
    if(error) throw error;
    console.log('Databse Connect succeffully');
})

module.exports = databse