const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'db_post'
});

mysqlConnection.connect((err, result) => {
    if(err){
        console.log('Error: '+err);
    }else{
        console.log('DB is connected!');
    }
});

module.exports = mysqlConnection;