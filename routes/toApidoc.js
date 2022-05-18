/**
 * @api {post} /pets  Create a pet
 * @apiName createPets
 * @apiGroup Pets
 *
 * @apiSuccess {Integer} code  201.
 * @apiSuccess {String} description  Null response.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "code": "201",
 *       "description": "null response"
 *     }
 *
 * @apiError 400  Unexpected error.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "400"
 *       "error": "unexpected error"
 *     }
 */

/**
 * @api {get} /pets  List all pets
 * @apiName listPets
 * @apiGroup Pets
 *
 * @apiSuccess {Integer} code  200.
 * @apiSuccess {String} description  A paged array of pets.
 * @apiSuccess {Array} content  [Pets].
 *
 * @apiSuccessExample Success-Response:
 *     "code": "200",
 *     "description": "A paged array of pets",
 *     "content":  
 *          [{
 *              "id": "1",
 *              "name": "spock",
 *              "tag": "dog"
 *          },
 *          {
 *              "id": "2",
 *              "name": "leroy",
 *              "tag": "cat"
 *          }]
 *
 * @apiError 400  Unexpected error.
 * @apiError 404  Null response.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "400"
 *       "message": "unexpected error"
 *     }
 */

/**
 * @api {get} /pets/:id  Info for a specific pet
 * @apiName showPetById
 * @apiGroup Pets
 *
 * @apiParam {Number} id  The id of the pet to retrieve.
 *
 * @apiSuccess {Integer} code  200.
 * @apiSuccess {String} description  Expected response to a valid request.
 * @apiSuccess {Object} content  {Pets}.
 *
 * @apiSuccessExample Success-Response:
 *     "code": "200",
 *     "description": "Expected response to a valid request",
 *     "content":  
 *          {
 *              "id": "1",
 *              "name": "spock",
 *              "tag": "dog"
 *          }
 *
 * @apiError 400  Unexpected error.
 * @apiError 404  Not found.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "404"
 *       "error": "not found"
 *     }
 */

/**
 * @api {put} /pets/:id  Update a specific pet
 * @apiName updatePetById
 * @apiGroup Pets
 *
 * @apiParam {Number} id  The id of the pet to update.
 * 
 * @apiSuccess {Integer} code  201.
 * @apiSuccess {String} description  Null response.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "code": "201",
 *       "description": "null response"
 *     }
 *
 * @apiError 400  Unexpected error.
 * @apiError 404  Not found.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "400"
 *       "error": "unexpected error"
 *     }
 */

/**
 * @api {delete} /pets/:id  Delete a specific pet
 * @apiName deletePetById
 * @apiGroup Pets
 * 
 * @apiParam {Number} id  The id of the pet to delete.
 *
 * @apiSuccess {Integer} code  201.
 * @apiSuccess {String} description  Null response.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "code": "201",
 *       "description": "null response"
 *     }
 *
 * @apiError 400  Unexpected error.
 * @apiError 404  Not found.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "400"
 *       "error": "unexpected error"
 *     }
 */