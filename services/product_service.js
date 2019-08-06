var Product = require("../models/product_model");

module.exports = class ProductService {

        constructor() {}

        create(newProduct) {
            return new Promise((resolve, reject) => {
                Product.create(newProduct)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    });
            });
        }

        getAll() {
            return new Promise((resolve, reject) => {
                Product.get()
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    })
            })
        }

        getById(id) {
            return new Promise((resolve, reject) => {
                Product.getById(id)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    })
            })
        }

        getByMerchant(merchantId) {
            return new Promise((resolve, reject) => {
                Product.getByMerchant(merchantId)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    });
            })
        }

        update(id, product) {
            return new Promise((resolve, reject) => {
                Product.update(id, product)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    });
            })
        }

        delete(id) {
            return new Promise((resolve, reject) => {
                Product.delete(id)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    });
            })
        }



    } 
