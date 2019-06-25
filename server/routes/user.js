const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

router.post('/', function(req, res, next) {
  if (req.body.data) {
    UserController.create(req.body.data).then((data) => {
        res.status(200);
        res.json(data);
    }).catch((err) => {
      next(err);
    });
  } else {
      res.status(400).send({type: 'error', message: 'Missing Body'});
  }
});

router.put('/', function(req, res, next) {
  if(req.body.data) {
      const findQuery = {_id: req.body.data._id}, updateQuery = req.body.data;
      UserController.update(findQuery, updateQuery).then((data) => {
        res.status(200);
        res.json(data);
      }).catch((err) => {
        next(err);
      });
  } else {
      res.status(400).send({type: 'error', message: 'Missing Body'});
  }
});

router.get('/', function(req, res, next) {
  UserController.find().then((data) => {
      res.status(200);
      res.json(data);
    }).catch((err) => {
      next(err);
    });
});

module.exports = router;