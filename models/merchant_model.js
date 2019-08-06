const mysqlConn = require('../database/database');

module.exports = class Merchant {

    constructor(id, first_name, last_name, cell_number, email) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.cell_number = cell_number;
        this.email = email;
    }

    get() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM merchant", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    create(newMerchant) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO merchant set ?", newMerchant, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.insertId);
                }
            });
        });
    };

    getById(merchantId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from merchant where id = ? ", merchantId, function (
                err,
                res
            ) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    updateById(merchantId, merchant) {
        return new Promise((resolve, reject) => {
            mysqlConn.query(
                "UPDATE merchant SET name = ?, address = ?, cell_phone = ?, email = ?, instruction = ? WHERE id = ?",
                [merchant.name,
                    merchant.address,
                    merchant.cell_phone,
                    merchant.email,
                    merchant.instruction,
                    merchantId
                ],
                function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    };

    removeById(merchantId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM merchant WHERE id = ?", merchantId, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };


}