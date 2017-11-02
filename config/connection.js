var mysql = require('mysql');
//connection details. Modified for online usage.
var connection = mysql.createConnection({
	port: 8889,
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//export to other files. like server.
module.exports = connection;
