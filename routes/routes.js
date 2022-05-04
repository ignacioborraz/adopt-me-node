const router = require('express').Router()
const {index,listPets,showPetById,createPets} = require('../controllers/petControllers')

router.get('/', index)
router.get('/pets', listPets)
router.get('/pets/:id', showPetById)
router.post('/pets', createPets)

module.exports = router