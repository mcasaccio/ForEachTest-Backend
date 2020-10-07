const { Router } = require('express')

const { listarViajes, publicarViaje} = require('../controllers/viajes')

const router = Router()


router.get('/', listarViajes )

router.post('/', publicarViaje )


module.exports = router