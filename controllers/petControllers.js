const db = require("../models")

const petControllers = {

    index: (req,res)=>{return res.render('index')},

    listPets: async (req,res)=>{
        try {
            let pets = await db.Pet.findAll()
            if (pets) {
                let list = {
                    summary: "List all pets",
                    operationId: "listPets",
                    tags: ["pets"],
                    parameters: {
                        name: "limit",
                        in: "query",
                        required: false,
                        description: "How many items to return at one time (max 100)",
                        schema: {type: "string"}
                    },
                    responses: {code: 200, description: "A paged array of pets", content: JSON.stringify(pets)}
                }
                return res.status(200).render('listPets',{list})
            } else {
                return res.status(404).json({code: 404, message: "null response"})
            }
        } catch(error) {
            return res.status(400).json({code: 400, message: "unexpected error"})
        }
    },

    createPets: async (req,res)=>{
        let {name,tag} = req.body
        console.log(req.body)
        try {
            let pet = await db.Pet.create({name,tag})
            let create = {
                summary: "Create a pet",
                operationId: "createPets",
                responses: {code: 201, description: "null response"}
            }
            return res.status(201).json(create.responses)
        } catch(error) {
            console.log(error)
            return res.status(400).json({code: 400, message: "unexpected error"})
        }
    },

    showPetById: async (req,res)=>{
        let id = req.params.id
        try {
            let pet = await db.Pet.findByPk(id)
            if (pet) {
                let byId = {
                    summary: "Info for a specific pet",
                    operationId: "showPetById",
                    tags: ["pets"],
                    parameters: {
                        name: "petId",
                        in: "path",
                        required: true,
                        description: "The id of the pet to retrieve",
                        schema: {type: "string"}
                    },
                    responses: {code: 200, description: "Expected response to a valid request", content: JSON.stringify(pet)}
                }
                return res.status(200).render('showPetById',{byId})
            } else {
                return res.status(404).json({code: 404, description: "not found"})
            }
        } catch(error) {
            return res.status(400).json({code: 400, message: "unexpected error"})
        }
/*     },

    modifyPetById: async (req,res)=>{
        let id = req.params.id
        try {
            let pet = await db.Pet.findByPk(id)
            if (pet) {
                let byId = {
                    summary: "Info for a specific pet",
                    operationId: "showPetById",
                    tags: ["pets"],
                    parameters: {
                        name: "petId",
                        in: "path",
                        required: true,
                        description: "The id of the pet to retrieve",
                        schema: {type: "string"}
                    },
                    responses: {code: 200, description: "Expected response to a valid request", content: JSON.stringify(pet)}
                }
                return res.status(200).render('showPetById',{byId})
            } else {
                return res.status(404).json({code: 404, description: "not found"})
            }
        } catch(error) {
            return res.status(400).json({code: 400, message: "unexpected error"})
        } */
    }

}

module.exports = petControllers