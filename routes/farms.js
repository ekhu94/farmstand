const express = require('express');
const wrapAsync = require('../utilities/wrapAsync');
const {
  getFarms,
  getFarmShow,
  newFarm,
  createFarm,
} = require('../controllers/farms');
const router = express.Router();

router.get('/', wrapAsync(getFarms));
router.get('/new', newFarm);
router.get('/:id', getFarmShow);
router.post('/', wrapAsync(createFarm));

module.exports = router;
