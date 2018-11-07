const express = require('express');
const router = express.Router();
const storage = require('../models/marketModel');

// Get existing crypto pairs data
router.get('/get', (req, res, next) => {
    if (req.query.name != undefined) {
        storage.findOne({ 'pair.name': req.query.name }).then((records) => {
            if (records === null)
                return res.send({ result: 'Requested data was not found' });
            else
                res.status(200).send(records);
        }).catch(next);
    }
    else {
        storage.find().then((records) => {
            res.status(200).send(records);
        }).catch(next);
    }
});

// Add new crypto pairs data
router.post('/post', (req, res, next) => {
    storage.create(req.body).then((record) => {
        res.status(201).send(record);
    }).catch(next);
});

// Update existing crypto pairs data
router.put('/put/:id', (req, res, next) => {
    storage.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        storage.findOne({ _id: req.params.id }).then((record) => {
            res.status(200).send(record);
        });
    }).catch(next);
});

// Update existing crypto pairs data
router.delete('/delete/:id', (req, res, next) => {
    storage.findByIdAndRemove({ _id: req.params.id }).then((record) => {
        res.send(record);
    }).catch(next);
});

module.exports = router;