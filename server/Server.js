const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const platRoute = require('./Routes/PlatRoute');
const boissonRoute = require('./Routes/boissonRoute');
const commandeRoute = require('./Routes/CommandeRoute');


app.use(express.json());
app.use(cors());
app.use('/plat' ,platRoute);
app.use('/boisson', boissonRoute);
app.use('/commande', commandeRoute); 



app.listen(5000,()=>{
    console.log('server is runing on port 5000'); 
})