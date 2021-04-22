
const express = require('express');

const router = require('express').Router()

const accountsModel = require('./accounts-model');


router.get('/', (req, res, next) => {
  accountsModel.getAll()
  .then(account => res.status(200).json(account))

  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error ',
    });
  });
})

router.get('/:id', (req, res, next) => {
  accountsModel.getById(req.params.id)
  .then(account => res.status(200).json(account))

  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error ',
    });
  });

})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
