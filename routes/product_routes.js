//Router
const express = require('express');
const router = express.Router();

//Product Service
const PS = require('../services/product_service');
const productService = new PS();


router.post("/create", (req, res) => {
    productService.create(req.body)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.get("/getAll", (req, res) => {
    productService.getAll()
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.post("/getById", (req, res) => {
    productService.getById(req.body.id)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.post("/getByMerchant", (req, res) => {
    productService.getByMerchant(req.body.merchantId)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.post("/update", (req, res) => {
    productService.update(req.body.id, req.body)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.post("/delete", (req, res) => {
    productService.delete(req.body.id)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

module.exports = router;