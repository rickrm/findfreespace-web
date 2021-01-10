const express = require('express');
const router =  express.Router();
const Cameras = require('../model/cameras');


// READ ALL CAMERAS/ READ BY QUERIES
router.get('/', async (req, res) => {

    if (Object.keys(req.query).length !== 0) {
        const { building } = req.query;
        try {
            const cameras = await Cameras.find({ building });
            res.json(cameras);
        } catch(err) {
            res.json({ message: err });
        }
    } else {
        try {
            const cameras = await Cameras.find();
            res.json(cameras);
        } catch(err) {
            res.json({ message: err });
        }
    }
});

// READ A CAMERA
router.get('/:id', async (req, res) => {
    try {
        const cameras = await Cameras.findById(req.params.id);
        res.json(cameras);
    } catch(err) {
        res.json({ message: err });
    }
});


module.exports = router;