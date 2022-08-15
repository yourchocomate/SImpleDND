'use strict';
const app = require("../server");
const express = require("express");
const router = express.Router();

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    app.use('/api',require(path.join(__dirname, file))(router));
  });
