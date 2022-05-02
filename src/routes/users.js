const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validator = require('../validations/registerValidator');

// get - form
router.get('/', controller.index);
// post - send data
router.post('/', validator, controller.processRegister);
// get - confirm
router.get('/confirm', controller.confirm);
// get - forget
router.get('/forget', controller.forget);



module.exports = router