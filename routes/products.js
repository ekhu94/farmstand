const express = require('express');
const wrapAsync = require('../utilities/wrapAsync');
const {
  getProducts,
  getProductShow,
  newProduct,
  createProduct,
  editProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

const router = express.Router();

router.get('/', wrapAsync(getProducts));
router.get('/new', newProduct);
router.get('/:id', wrapAsync(getProductShow));
router.get('/:id/edit', wrapAsync(editProduct));
router.post('/', wrapAsync(createProduct));
router.patch('/:id', wrapAsync(updateProduct));
router.delete('/:id', wrapAsync(deleteProduct));

module.exports = router;
