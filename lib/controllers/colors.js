const { Router } = require('express');
const Color = require('../models/Color');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const colors = await Color.getAll();
    res.json(colors);
  } catch (e) {
    next(e);
  }
});
//
