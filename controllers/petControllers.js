const db = require("../models")
const Pet = db.Pet

const petControllers = {

    index: (req,res)=>{return res.render('index')},

    createPets: async (req,res)=>{
        let {name,tag} = req.body
        try {
            let pet = await Pet.create({name,tag})
            let responses = {
                code: 201,
                description: "null response"
            }
            return res.status(201).json(responses)
        } catch(error) {
            console.log(error)
            return res.status(400).json({code: 400, message: "unexpected error"})
        }
    },

    listPets: async (req,res)=>{
        try {
            let pets = await Pet.findAll()
            if (pets) {
                let responses = {
                    code: 200,
                    description: "A paged array of pets",
                    content: pets
                }
                return res.status(200).json(responses)
            } else {
                return res.status(404).json({code: 404, message: "null response"})
            }
        } catch(error) {
            return res.status(400).json({code: 400, message: "unexpected error"})
        }
    },

    showPetById: async (req,res)=>{
        let id = req.params.id
        try {
            let pet = await Pet.findOne({where: {id:id}})
            if (pet) {
                let responses = {
                    code: 200,
                    description: "Expected response to a valid request",
                    content: pet
                }
                return res.status(200).json(responses)
            } else {
                return res.status(404).json({code: 404, description: "not found"})
            }
        } catch(error) {
            return res.status(400).json({code: 400, message: "unexpected error"})
        }
    },

    updatePetById: async (req,res)=>{
        let id = req.params.id
        try {
            let pet = await Pet.findOne({where: {id:id}})
            if (pet) {
                await Pet.update(req.body, {where: {id:id}})
                let responses = {
                    code: 201,
                    description: "null response"
                }
                return res.status(201).json(responses)
            } else {
                return res.status(404).json({code: 404, description: "not found"})
            }
        } catch(error) {
            return res.status(400).json({code: 400, message: "unexpected error"})
        }
    },

    deletePetById: async (req,res)=>{
        let id = req.params.id
        try {
            let pet = await Pet.findOne({where: {id:id}})
            if (pet) {
                await Pet.destroy({where: {id:id}})
                let responses = {
                    code: 201,
                    description: "null response"
                }
                return res.status(201).json(responses)
            } else {
                return res.status(404).json({code: 404, description: "not found"})
            }
        } catch(error) {
            return res.status(400).json({code: 400, message: "unexpected error"})
        }
    }

}

module.exports = petControllers