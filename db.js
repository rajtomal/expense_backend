const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'http://sql12.freemysqlhosting.net/',
    user: 'sql12749811',
    password: '5lhZ4J87KU',
    database: 'sql12749811',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;