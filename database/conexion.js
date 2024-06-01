const mysql2 = require('mysql2');
const dotenv = require('dotenv');

// Configura DotEnv
dotenv.config();

// Crear pool de conexiones a la base de datos MySQL
const pool = mysql2.createPool({
    host: process.env.ACCESS_DB_HOST,
    user: process.env.ACCESS_DB_USER,
    password: process.env.ACCESS_DB_PASSWORD,
    database: process.env.ACCESS_DB_DATABASE,
    port: process.env.ACCESS_DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Obtener una conexión del pool
function obtenerConexion() {
    return pool.promise().getConnection();
}

module.exports = {
    obtenerConexion
};