const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth_service')

router.post('/login', (req, res) => {
    //console.log('logging in');
    AuthService.prototype
        .login(req.body)
        .then(user => {
            //console.log(user);
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.post('/register', (req, res) => {
    //console.log('registering user');
    AuthService.prototype
        .register(req.body)
        .then(user => {
            //console.log(req.body);
            res.json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
})

module.exports = router;