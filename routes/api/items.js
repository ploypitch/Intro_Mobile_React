const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/item');

// @route GET api/items
// @desc GET all Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route Post api/items
// @desc Create A Item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete a Item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ seccess: true })))
    .catch(err => res.status(404).json({ seccess: false }));
});

module.exports = router;
