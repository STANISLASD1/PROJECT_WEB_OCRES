const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  });

module.exports = mongoose.model('Post', schema);