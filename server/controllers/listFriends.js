const express = require('express');
const listFriends = require('../models/listFriends');

const create = function(data) {
  return listFriends.create(data);
};

const find = function() {
  return listFriends.find();
};

const update = function(findQuery, updateQuery) {
  return listFriends.update(findQuery, updateQuery);
};

const findByQuery = function(query) {
  return listFriends.find(query);
};

module.exports = {
    create: create,
    find: find,
    update: update,
    findByQuery: findByQuery
};