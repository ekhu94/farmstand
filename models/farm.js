const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = require('./product');

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
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

farmSchema.post('findOneAndDelete', async function (farm) {
  if (farm.products.length) {
    await Product.deleteMany({ _id: { $in: farm.products } });
  }
});

module.exports = mongoose.model('Farm', farmSchema);
