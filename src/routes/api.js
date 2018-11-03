
const express = require('express');
const router = express.Router();
const Kuna = require('../models/kunaModel');

// Get existing crypto pairs data
router.get('/get', (req, res, next) => {
    if (req.query.name != undefined) {
        Kuna.findOne({ 'pair.name': req.query.name }).then((records) => {
            if (records === null)
                return res.send({ result: 'Requested data was not found' });
            else
                res.status(200).send(records);
        }).catch(next);
    }
    else {
        Kuna.find().then((records) => {
            console.log(records);
            res.status(200).send(records);
        }).catch(next);
    }
});

// Add new crypto pairs data
router.post('/post', (req, res, next) => {
    Kuna.create(req.body).then((record) => {
        res.status(201).send(record);
    }).catch(next);
});

// Update existing crypto pairs data
router.put('/put/:id', (req, res, next) => {
    Kuna.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Kuna.findOne({ _id: req.params.id }).then((record) => {
            res.status(200).send(record);
        });
    }).catch(next);
});

// Update existing crypto pairs data
router.delete('/delete/:id', (req, res, next) => {
    Kuna.findByIdAndRemove({ _id: req.params.id }).then((record) => {
        res.send(record);
    }).catch(next);
});

module.exports = router;