const menu = require('../constants/navigation');

const express = require("express");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render('home', { menuLinks: menu.MENU_LINKS, activeLinkPath: _request.path, headTitle: "Shop - Home" });
});

module.exports = router;
