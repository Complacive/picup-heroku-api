const express = require('express');
const router = express.Router();

const Merchant = require('../models/merchant_model');

// string concatonate '/'
router.get('/get', function (req, res) {
    Merchant.prototype
        .get()
        .then(merchants => {
            res.send(merchants);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/create', function (req, res) {
    Merchant.prototype
        .create(req.body)
        .then(merchant => {
            res.json(merchant.insertId);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/getById', function (req, res) {
    Merchant.prototype
        .getById(req.body.id)
        .then(merchant => {
            res.send(merchant);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.patch('/updateById', function (req, res) {
    Merchant.prototype
        .updateById(req.body.id, req.body)
        .then(merchant => {
            res.send(merchant);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/removeById', function (req, res) {
    Merchant.prototype
        .removeById(req.body.id)
        .then(merchant => {
            res.send(merchant);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;


/*
const express = require('express');
const router = express.Router();
const Merchants = require('./../data/merchant_data.json');
const MerchantModel = require('../models/merchant_model');

router.get('/', (req, res) => {

    //Configure to pull from DB
    res.json(Merchants)
});

router.get('/:id', (req, res) => {
    const found = Merchants.some(merchant => merchant.id === parseInt(req.params.id));

    if (found) {
        res.json(Merchants.filter(merchant => merchant.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No merchant with the id of ${req.params.id}` });
    }
});

//create merchant
router.post('/', (req, res) => {
    const newMerchant = new MerchantModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        cell_number: req.body.cell_number,
        email: req.body.email
    });

    //Configure to push to DB
    Merchants.push(newMerchant);
    res.json(Merchants);
});

//update merchant
router.put('/:id', (req, res) => {
    const found = Merchants.some(merchant => merchant.id === parseInt(req.params.id));

    if (found) {
        const updateMerchant = req.body;
        Merchants.forEach(merchant => {
            if (merchant.id === parseInt(req.params.id)) {
                merchant.name = updateMerchant.name ? updateMerchant.name : merchant.name;
                merchant.email = updateMerchant.email ? updateMerchant.email : merchant.email;

                res.json({ msg: 'Merchant successfully updated ', merchant: merchant });
            }
        });
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }

});

//delete merchant
router.delete('/:id', (req, res) => {
    const found = Merchants.some(merchant => merchant.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: 'Member deleted',
            merchants: Merchants.filter(merchant => merchant.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No merchant with the id of ${req.params.id}` });
    }
})
module.exports = router;
*/