'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const objects = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const object = require(path.join(__dirname, file));
    objects[object.name] = object;
  });

module.exports = objects;
