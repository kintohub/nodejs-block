var express = require('express');
var router = express.Router();

/**
 * @api {get} /api/v1/user/:id Request User information
 * @apiName GetUser
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Number} id Unique id of the User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {Object} address  Address of the user.
 */
router.get('/:id', function(req, res, next) {
  res.json({'id' : req.params.id,
            'firstName' : 'John',
            'lastName' : 'John'});
});

/**
 * @api {post} /api/v1/user/:id Update User information
 * @apiName UpdateUser
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Number} id Unique id of the User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {Object} address  Address of the user.
 */
router.post('/:id', function(req, res, next) {
  res.json({'id' : req.params.id,
            'firstName' : 'John',
            'lastName' : 'John'});
});

module.exports = router;
