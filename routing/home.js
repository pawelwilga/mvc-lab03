const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render('home');
});

module.exports = router;
