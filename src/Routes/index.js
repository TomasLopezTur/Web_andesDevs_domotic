const express = require('express');
const router = express.Router();
const {home} = require('../Controllers/indexController');

router
    .get("/", home)


module.exports = router;