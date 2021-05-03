const express = require('express');
const wrapAsync = require('../utilities/wrapAsync');
const {
  getFarms,
  getFarmShow,
  newFarm,
  createFarm,
  editFarm,
  updateFarm,
  deleteFarm,
} = require('../controllers/farms');
const router = express.Router();

router.get('/', wrapAsync(getFarms));
router.get('/new', newFarm);
router.get('/:id', wrapAsync(getFarmShow));
router.get('/:id/edit', wrapAsync(editFarm));
router.post('/', wrapAsync(createFarm));
router.patch('/:id', wrapAsync(updateFarm));
router.delete('/:id', wrapAsync(deleteFarm));

module.exports = router;
