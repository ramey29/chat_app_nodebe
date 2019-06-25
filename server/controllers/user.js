const express = require('express');
const User = require('../models/user');

const create = function(data) {
  return User.create(data);
};

const find = function() {
  return User.find();
};

const update = function(findQuery, updateQuery) {
  return User.update(findQuery, updateQuery);
};

const findByQuery = function(query) {
  return User.find(query);
};

module.exports = {
    create: create,
    find: find,
    update: update,
    findByQuery: findByQuery
};