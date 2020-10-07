const { Schema, model } = require('mongoose');

const ViajesSchema = Schema({
    puntoInicio: {
        type: String,
        required: true
    },
    puntoTermino: {
        type: String,
        required: true,
    },
    kilometros: {
        type: String,
        required: true
    },
    idaVuelta: {
        type: String,
        required: true
    },
    cantidadPersonas: {
        type: String,
        required: true
    },
    nombrePasajeros: {
        type: String,
        required: true
    },
    medioDeTransporte: {
        type: String,
        required: true
    },
    carbono: {
        type: String,
        required: true
    }

},
    
{timestamps: true})


module.exports = model('Viajes', ViajesSchema )

