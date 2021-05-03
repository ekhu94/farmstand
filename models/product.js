const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
    min: 0,
  },
  category: {
    type: String,
    required: [true, 'Product category is required.'],
    enum: ['fruit', 'vegetable', 'dairy'],
  },
  farm: {
    type: Schema.Types.ObjectId,
    ref: 'Farm',
  },
});

module.exports = mongoose.model('Product', productSchema);
