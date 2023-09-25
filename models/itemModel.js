 const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: number,
      required: true
    },
    quantity: {
      type: number,
      required: true
    },
    image: {
      type: url,
      required: true
    },
 
  }, { timestamps: true })

  module.exports = mongoose.model('Item', itemSchema)
