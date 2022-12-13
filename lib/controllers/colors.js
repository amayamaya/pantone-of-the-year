const { Router } = require('express');
const Color = require('../models/Color');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const colors = await Color.getAll();
      res.json(colors);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const color = await Color.getById(req.params.id);
      res.json(color);
    } catch (e) {
      next(e);
    }
  });
