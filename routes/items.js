const express = require('express');

const {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
  
  } = require('../controllers/itemController');
  
  
  const router = express.Router()
  
  // require auth for all Item routes
  router.use(requireAuth)
  
  // GET all Items
  router.get('/', getItems)
  
  //GET a single Item
  router.get('/:id', getItem)
  
  // POST a new Item
  router.post('/', createItem)
  
  // DELETE a Item
  router.delete('/:id', deleteItem)
  
  // UPDATE a Item
  router.patch('/:id', updateItem)
  
  
  module.exports = router