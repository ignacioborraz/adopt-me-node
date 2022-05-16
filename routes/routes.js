const router = require('express').Router()
const {index,listPets,showPetById,updatePetById,deletePetById,createPets} = require('../controllers/petControllers')

router.post('/pets', createPets)
router.get('/', index)
router.get('/pets', listPets)
router.get('/pets/:id', showPetById)
router.put('/pets/:id', updatePetById)
router.delete('/pets/:id', deletePetById)

module.exports = router