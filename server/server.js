const express = require("express");
const cors = require("cors");
const app = express();

const {corsConfig} = require("./config");
app.use(cors(corsConfig));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;


