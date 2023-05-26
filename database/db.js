const mysql = require("mysql")

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

conexion.connect((error) => {
    if (error) {
        console.log("Error de Conexión"+error)
        return
    }
    console.log("Conexión exitosa a la base de datos MySQL")
})

module.exports = conexion