const { check } = require('express-validator');

module.exports = [
    check("name").notEmpty().withMessage("Campo requerido"),
    check("color").notEmpty().withMessage("Campo requerido"),
    check("email").notEmpty().withMessage("Campo requerido")
    .bail()
    .isEmail()
    .withMessage("Email inválido"),
];
