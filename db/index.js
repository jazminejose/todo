const mysql = require('mysql2')

const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/to_do_list_db')

module.exports = db
