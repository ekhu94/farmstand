const mongoose = require('mongoose');

const Product = require('../models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const capitalizeCategory = (cat) => {
  return cat[0].toUpperCase() + cat.slice(1);
};

module.exports.getProducts = async (req, res, next) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render('products/index', {
      products,
      category: capitalizeCategory(category),
      title: capitalizeCategory(category),
    });
  } else {
    const products = await Product.find({});
    res.render('products/index', {
      products,
      category: 'all',
      title: 'Products',
    });
  }
};

module.exports.getProductShow = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.render('products/show', { product, title: product.name });
};

module.exports.newProduct = (req, res) => {
  res.render('products/new', { title: 'New Product' });
};

module.exports.createProduct = async (req, res, next) => {
  const product = new Product(req.body.product);
  await product.save();
  res.redirect(`/products/${product._id}`);
};

module.exports.editProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.render('products/edit', { product, title: 'Edit Product' });
};

module.exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, { ...req.body.product });
  res.redirect(`/products/${product._id}`);
};

module.exports.deleteProduct = async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
};
