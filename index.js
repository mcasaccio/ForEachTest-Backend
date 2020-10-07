const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./database/config')
const bodyParser = require('body-parser')
// Crear el servidor de express
const app = express()

// Base de datos
dbConnection()

// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') )

// Lectura y parseo del body


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rutas
app.use('/api/viajes', require('./routes/viajes') )


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})