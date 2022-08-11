import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import sequelize from "sequelize";


//load config

dotenv.config({path: './config/config.env'});

const conn = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST
  }
);

export default conn;




// MYSQL
/*import mysql from 'mysql';

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'foodreview',
  password : 'foodreview',
  database : 'foodreview'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();


// POSTGRESQL
const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})*/