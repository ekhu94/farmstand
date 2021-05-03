const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Farm name is required.'],
  },
  city: {
    type: String,
    required: [true, 'City is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email required.'],
  },
});

module.exports = mongoose.model('Farm', farmSchema);
