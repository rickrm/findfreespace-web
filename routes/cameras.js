const express = require('express');
const router =  express.Router();
const Cameras = require('../model/cameras');


// READ ALL CAMERAS
router.get('/', async (req, res) => {
    try {
        const cameras = await Cameras.find();
        res.json(cameras);
    } catch(err) {
        res.json({ message: err });
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