const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
 
  }, { timestamps: true })
  
  module.exports = mongoose.model('Item', itemSchema)