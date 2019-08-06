const express = require('express');
const router = express.Router();

const orderService = require('../services/order_service');

router.get('/get', function (req, res) {
    orderService.getOrders()
        .then(orders => {
            res.send(orders);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/get/id', function (req, res) {
    orderService.getOrderById(req.body.id)
    .then(order => {
        res.send(order);
    })
    .catch(err => {
        res.status(400).send(err);
    })
})

router.post('/get/userid', function (req, res) {
    orderService.getOrdersByUserId(req.body.id)
    .then(orders => {
        res.send(orders)
    })
    .catch(err => {
        res.status(400).send(err);
    })
})

router.post('/create', function (req, res) {
    orderService.createOrder(req.body)
    .then(id => {
        res.send(id)
    })
    .catch(err => {
        res.status(400).send(err);
    })
})

module.exports = router;