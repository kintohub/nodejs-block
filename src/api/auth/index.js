import { Router } from 'express'
import { login } from './controller'
import { password, master } from '../../services/passport'

const router = new Router()

/**
 * @api {post} /auth Authenticate
 * @apiName Authenticate
 * @apiGroup Auth
 * @apiParam (Body) {String} access_token Master access_token.
 */
router.post('/',
  master(),
  password(),
  login)

export default router
