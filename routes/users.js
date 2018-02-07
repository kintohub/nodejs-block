var express = require('express');
var router = express.Router();

/**
 * @api {get} /api/v1/user/{id} Request User information
 * @apiName GetUser
 *
 * @apiParam (Body) {Number} id Users unique ID.
 */
router.get('/:id', function(req, res, next) {
  res.json({'id' : req.params.id,
            'firstName' : 'John',
            'lastName' : 'John'});
});

/**
 * @api {post} /api/v1/user/{id} Update User information
 * @apiName UpdateUser
 *
 * @apiParam (Body) {Number} id Users unique ID.
 */
router.post('/:id', function(req, res, next) {
  res.json({'id' : req.params.id,
            'firstName' : 'John',
            'lastName' : 'John'});
});

module.exports = router;
