const fs = require('fs');
const path = require('path');
const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
const writeUsers = (data) => fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(data), 'utf-8');

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


module.exports = {
    index: (req, res) => {
        res.render('form');
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);
        /* Hola nombreUsuario, elegiste el color: colorSelecionado, tu email es:
        emailUsuario y tu edad es: edadUsuario */

        if(errors.isEmpty()) {
            req.session.user = { ...req.body };

            if(req.body.remember) {
            const TIME_IN_MILISECONDS = 60000;
            res.cookie("cookieComision13", req.session.user.color, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
             });
            }
            res.render("form", {
                session: req.session,
            })
        } else{
            res.render("form", {
                errors: errors.mapped(),
                old: req.body,
            })
        }
    },
    confirm: (req, res) => {
        res.render('confirm', {
            session: req.session,
        })
    },
    forget: (req, res) => {
    }
};