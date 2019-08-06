var Order = require("../models/order_model");

module.exports = class OrderService {
    constructor() { }

    getOrders() {
        return new Promise((resolve, reject) => {
            Order.get()
            .then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err); 
            })
        });
    }

    getOrderById(orderId) {
        return new Promise((resolve, reject) => {
            Order.getById(orderId)
            .then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    getOrdersByUserId(userId) {
        return new Promise((resolve, reject) => {
            Order.getByUserId(userId)
            .then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    createOrder(newOrder) {
        return new Promise((resolve, reject) => {
            Order.createOrder(newOrder)
            .then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    deleteOrder(orderId) {
        return new Promise((resolve, reject) => {
            Order.removeById(orderId)
            .then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            })
        })
    }
}