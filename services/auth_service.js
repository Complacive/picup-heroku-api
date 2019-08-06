const User = require('../models/user_model');

//var bcrypt = require('bcryptjs');
//var jwt = require('jsonwebtoken');

module.exports = class AuthService {

    constructor() {}

    async hashPassword(password) {
        var salt = bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }


    login(authUser) {
        return new Promise((resolve, reject) => {
            User.prototype
                .get()
                .then(users => {
                    const dbUser = users.filter(user => {
                        return user.email == authUser.email;
                    });
                    if (dbUser.length == 1) {
                        if (dbUser[0].password == authUser.password) {
                            resolve(dbUser[0]);
                        } else {
                            reject('Incorrect password');
                        }
                    } else {
                        reject('User not found');
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    
    
    register(authUser) {
        return new Promise((resolve, reject) => {

            User.prototype.get().then(users => {

                const dbUser = users.filter(user => {
                    return user.email == authUser.email;

                });
                if (dbUser.length == 1) {
                    console.log('checking');
                    reject("Email exists");
                } else {
                    console.log('checking else')

                    User.prototype.create(authUser)
                        .then(user => resolve(user))
                        .catch(err => reject(err))
                }
            }).catch(err => reject(err));
            
            //const hashPassword = await this.hashPassword(authUser.password);
        });
    }

}