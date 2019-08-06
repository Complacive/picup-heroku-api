var mysqlConn = require("../database/database");

var Product = function (product) {}

Product.create = function (newProduct) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("INSERT INTO product set ?", newProduct, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

Product.get = function () {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from product", (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
}

Product.getById = function (id) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from product where id = ?", id, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
}

Product.getByMerchant = function (merchantId) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from product where merchantId = ?", merchantId, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

//TO DO
Product.update = function (id, product) {

}

Product.delete = function (id) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("DELETE FROM user WHERE id = ?", id, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

module.exports = Product;