var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;

router.get('/', function(req, res, next) {
  Day.findAll( )
  .then(days => {
  	console.log('Getting all days', days)
    res.json(days)
  })
  .catch(next)
})

router.get('/:id', function(req, res, next) {
  Day.findById(req.params.id)
  .then(foundDay => {
    res.json(foundDay)
  })
  .catch(next)
})

router.post('/', function(req, res, next) {
  Day.create()
  .then(createdDay => {
    res.json(createdDay)
  })
  .catch(next)
})

router.delete('/:id', function(req, res, next) {
  Day.destroy({where: {id: req.params.id}})
  .then(deletedDay => {
    res.json(deletedDay)
  })
  .catch(next)
})

router.post('/:id/hotels', function(req, res, next) {
  Day.findOne({where: {id: req.params.id}, include: [{model: Hotel}]})
  .then(foundDay => {
    res.json(foundDay)
  })
  .catch(next)
})

router.post('/:id/restaurants', function(req, res, next) {
  Day.findOne({where: {id: req.params.id}, include: [{model: Restaurant}]})
  .then(foundDay => {
    res.json(foundDay)
  })
  .catch(next)
})

router.post('/:id/activities', function(req, res, next) {
  Day.findOne({where: {id: req.params.id}, include: [{model: Activity}]})
  .then(foundDay => {
    res.json(foundDay)
  })
  .catch(next)
})

module.exports = router