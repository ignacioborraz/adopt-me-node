/**
 * @api {get} /pets  List all pets
 * @apiName listPets
 * @apiGroup Pets
 *
 * @apiSuccess {Array} pets  A paged array of pets.
 *
 * @apiSuccessExample Success-Response:
 *     [{
 *       "id": "1",
 *       "name": "spock",
 *       "tag": "dog"
 *     },
 *     {
 *       "id": "2",
 *       "name": "leroy",
 *       "tag": "cat"
 *     }]
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
 * @api {get} /pets/:id  Info for a specific pet
 * @apiName showPetById
 * @apiGroup Pets
 *
 * @apiParam {Number} id  The id of the pet to retrieve.
 *
 * @apiSuccess {String} name  The name of the pet to retrieve.
 * @apiSuccess {String} tag  The tag of the pet to retrieve.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "id": "1",
 *       "name": "spock",
 *       "tag": "dog"
 *     }
 *
 * @apiError 400  Unexpected error.
 * @apiError 404  The id of the pet was not found.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "404"
 *       "error": "not found"
 *     }
 */