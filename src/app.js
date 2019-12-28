const express = require('express');
const app = express();

// Database
require('./connection/database');

// Settings
app.use( express.urlencoded({ extended : false }) );
app.use( express.json() );

// Routes
app.use('/user', require('./routes/user.routes'));

// Listen Server
app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});