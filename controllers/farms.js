const mongoose = require('mongoose');

const Farm = require('../models/farm');

mongoose.connect('mongodb://localhost:27017/farmStand2', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports.getFarms = async (req, res, next) => {
  const farms = await Farm.find({});
  res.render('farms/index', { farms, title: 'All Farms' });
};

module.exports.newFarm = (req, res) => {
  res.render('farms/new', { title: 'New Farm' });
};

module.exports.getFarmShow = async (req, res, next) => {
  const farm = await Farm.findById(req.params.id);
  res.render('farms/show', { farm, title: farm.name });
};

module.exports.createFarm = async (req, res, next) => {
  const farm = new Farm(req.body.farm);
  await farm.save();
  res.redirect(`/farms/${farm._id}`);
};

module.exports.editFarm = async (req, res, next) => {
  const farm = await Farm.findById(req.params.id);
  res.render('farms/edit', { farm, title: 'Edit Farm' });
};

module.exports.updateFarm = async (req, res, next) => {
  const { id } = req.params;
  const farm = await Farm.findByIdAndUpdate(id, { ...req.body.farm });
  res.redirect(`/farms/${farm._id}`);
};

module.exports.deleteFarm = async (req, res, next) => {
  await Farm.findByIdAndDelete(req.params.id);
  res.redirect('/farms');
};
