const express = require('express');
const router = express.Router();
const Sneaker = require('../models/Sneaker');

// GET all sneakers
router.get('/', async (req, res) => {
  try {
    const sneakers = await Sneaker.find();
    res.status(200).json(sneakers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET single sneaker by id
router.get('/:id', async (req, res) => {
  try {
    const sneaker = await Sneaker.findOne({ id: req.params.id });
    if (!sneaker) {
      return res.status(404).json({ message: 'Sneaker not found' });
    }
    res.status(200).json(sneaker);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;