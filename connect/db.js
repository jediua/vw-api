var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'miuser',
    password : '1234',
    database : 'visibilidad'
  });
}

