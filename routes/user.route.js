const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const isAuth = require('../middlewares/isAuth');
const validator = require('../middlewares/validator');
const userValidation = require('../validations/user.validation');

/**
 * @typedef {object} updateProfile
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {object} updatePassword
 * @property {string} password
 * @property {string} confirmPassword
 */

/**
 * @typedef {object} signIn
 * @property {string} email.required
 * @property {string} password.required
 */

/**
 * @typedef {object} signUp
 * @property {string} name.required
 * @property {string} email.required
 * @property {string} password.required
 * @property {string} confirmPassword.required
 */

/**
 * GET /api/user/profile
 * @summary 取得個人資料
 * @tags user
 * @security apiKeyAuth
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get('/profile', isAuth, userController.getProfile);

/**
 * PATCH /api/user/profile
 * @summary 更新個人資料
 * @tags user
 * @security apiKeyAuth
 * @param {updateProfile} request.body.required
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.patch(
	'/profile',
	isAuth,
	validator(userValidation.updateProfile),
	userController.updateProfile,
);

/**
 * POST /api/user/updatePassword
 * @summary 重設密碼
 * @tags user
 * @security apiKeyAuth
 * @param {updatePassword} request.body.required
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.post(
	'/updatePassword',
	isAuth,
	validator(userValidation.updatePassword),
	userController.updatePassword,
);

/**
 * POST /api/user/sign_in
 * @summary 登入
 * @tags user
 * @security apiKeyAuth
 * @param {signIn} request.body.required
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.post(
	'/sign_in',
	validator(userValidation.signIn),
	userController.signIn,
);

/**
 * POST /api/user/sign_up
 * @summary 註冊
 * @tags user
 * @security apiKeyAuth
 * @param {signUp} request.body.required
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.post(
	'/sign_up',
	validator(userValidation.signUp),
	userController.signUp,
);

module.exports = router;
