const { response } = require('express')
const Viajes = require('../models/Viajes')

const listarViajes = async (req, res = response) => {

    const viajes = await Viajes.find()

    res.json({
        ok: true,
        viajes
    });
}

const publicarViaje = async (req, res = response) => {

    try {
        const nuevoViaje = await new Viajes(req.body)
        await nuevoViaje.save()

        res.json({
            ok: true,
            data: nuevoViaje
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


module.exports = {
    listarViajes,
    publicarViaje
}