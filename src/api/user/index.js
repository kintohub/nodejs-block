import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { password as passwordAuth, master, token } from '../../services/passport'
import { index, showMe, show, create, update, updatePassword, destroy } from './controller'
import { schema } from './model'
export User, { schema } from './model'

const router = new Router()
const { email, password, name, picture, role } = schema.tree

/**
 * @api {get} /users Retrieve users
 * @apiName RetrieveUsers
 * @apiParam (Body) {String} access_token User access_token.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /users/me Retrieve current user
 * @apiName RetrieveCurrentUser
 * @apiParam (Body) {String} access_token User access_token.
 */
router.get('/me',
  token({ required: true }),
  showMe)

/**
 * @api {get} /users/:id Retrieve user
 * @apiName RetrieveUser
 */
router.get('/:id',
  show)

/**
 * @api {post} /users Create user
 * @apiName CreateUser
 * @apiParam (Body) {String} access_token Master access_token.
 * @apiParam (Body) {String} email User's email.
 * @apiParam (Body) {String} password User's password.
 * @apiParam (Body) {String} [name] User's name.
 * @apiParam (Body) {String} [picture] User's picture.
 * @apiParam (Body) {String} [role] User's role.
 */
router.post('/',
  master(),
  body({ email, password, name, picture, role }),
  create)

/**
 * @api {put} /users/{id} Update user
 * @apiName UpdateUser
 * @apiParam (Body) {String} access_token User access_token.
 * @apiParam (Body) {String} [name] User's name.
 * @apiParam (Body) {String} [picture] User's picture.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, picture }),
  update)

/**
 * @api {put} /users/{id}/password Update password
 * @apiName UpdatePassword
 * @apiParam (Body) {String} password User's new password.
 */
router.put('/:id/password',
  passwordAuth(),
  body({ password }),
  updatePassword)

/**
 * @api {delete} /users/{id} Delete user
 * @apiName DeleteUser
 * @apiParam (Body) {String} access_token User access_token.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
