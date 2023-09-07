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
  const Item = mongoose.model('Item', itemSchema)
  module.exports = Item

// const itemSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: Number,
//   quantity: Number,
// });

// const Item = mongoose.model('Item', itemSchema);

// module.exports = Item