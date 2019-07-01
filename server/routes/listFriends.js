const express = require('express');
const FriendController = require('../controllers/listFriends');
const router = express.Router();

router.post('/', function(req, res, next) {
  if (req.body.data) {
    FriendController.create(req.body.data).then((data) => {
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
      FriendController.update(findQuery, updateQuery).then((data) => {
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
  FriendController.find().then((data) => {
      res.status(200);
      console.log(data);
      res.json(data);
    }).catch((err) => {
      next(err);
    });
});

module.exports = router;