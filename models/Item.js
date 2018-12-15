const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema 
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
    //date is default, not required
  }
});

module.exports = item = mongoose.model('item', ItemSchema);
