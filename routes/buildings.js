const express = require('express');
const router =  express.Router();
const Buildings = require('../model/buildings');

// CREATE A BUILDING
router.post('/create', (req, res) => {
    const building = new Buildings({
        _id: req.body._id,
        name: req.body.name
    });
    
    console.log(req.body);

    building.save()
    .then(data => res.json(data))
    .catch(err => res.json({ message: err }));
});

// READ ALL BUILDINGS
router.get('/', async (req, res) => {

    try {
        const buildings = await Buildings.find();
        res.json(buildings);
    } catch(err) {
        res.json({ message: err });
    }
});

// READ A BUILDING
router.get('/:id', async (req, res) => {
    try {
        const buildings = await Buildings.find({ name: req.params.id});
        res.json(buildings);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;



