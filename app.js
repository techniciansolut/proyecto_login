const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const app = express()

//Seteamos motor de plantillas ejs
app.set("view engine", "ejs")

//Seteamos la carpeta public para archivos estáticos
app.use(express.static("public"))

//Para procesar datos enviados desde Forms
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//Configurando dotenv para las variables de entorno
dotenv.config({ path: "./env/.env" })

//Para poder trabajar con los cookies
// app.use(cookieParser)

//Llamar al router de Express
app.use("/", require("./routes/router"))

app.listen(3000, () => {
  console.log("Servidor Generado! en el Puerto http://localhost:3000")
})
