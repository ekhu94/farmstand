const express = require('express');
const wrapAsync = require('../utilities/wrapAsync');
const {
  getFarms,
  getFarmShow,
  newFarm,
  newFarmProduct,
  createFarm,
  createFarmProduct,
  editFarm,
  updateFarm,
  deleteFarm,
} = require('../controllers/farms');
const router = express.Router();

router.get('/', wrapAsync(getFarms));
router.get('/new', newFarm);
router.get('/:id', wrapAsync(getFarmShow));
router.get('/:id/edit', wrapAsync(editFarm));
router.get('/:id/products/new', wrapAsync(newFarmProduct));
router.post('/', wrapAsync(createFarm));
router.post('/:id/products', wrapAsync(createFarmProduct));
router.patch('/:id', wrapAsync(updateFarm));
router.delete('/:id', wrapAsync(deleteFarm));

module.exports = router;
