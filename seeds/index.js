const mongoose = require('mongoose');

const Product = require('../models/product');
const springProducts = require('./springProducts');
const summerProducts = require('./summerProducts');
const fallProducts = require('./fallProducts');
const animalProducts = require('./animalProducts');

mongoose.connect('mongodb://localhost:27017/farmStand2', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const createProducts = async () => {
  await Product.deleteMany({});
  for (let i = 0; i < 4; i++) {
    const springProduct = new Product(springProducts[i]);
    const summerProduct = new Product(summerProducts[i]);
    const fallProduct = new Product(fallProducts[i]);
    const animalProduct = new Product(animalProducts[i]);
    await springProduct.save();
    await summerProduct.save();
    await fallProduct.save();
    await animalProduct.save();
  }
};

createProducts().then(() => mongoose.connection.close());
