const mysqlConn = require('../database/database');

module.exports = class Order {

    constructor(id, isRoundTrip, dateCreated, dateScheduled, userId, merchantId, parcelSize, numParcels, status) {
        this.id = id;
        this.isRoundTrip = isRoundTrip;
        this.dateCreated = dateCreated;
        this.dateScheduled = dateScheduled;
        this.userId = userId;
        this.merchantId = merchantId;
        this.parcelSize = parcelSize;
        this.numParcels = numParcels;
        this.status = status;
    }

    get() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM order", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    create(newOrder) {
        //console.log(newUser);
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO order set ?", newOrder, function(err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.insertId);
                }
            });
        });
    };

    getById(orderId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from order where id = ? ", orderId, function(
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

    getByUserId(userId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from order where user_id = ? ", userId, function(
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

    removeById(orderId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM order WHERE id = ?", orderId, function(err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };


}