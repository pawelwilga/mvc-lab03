const menu = require('../constants/navigation');

const express = require("express");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render('logout', { menuLinks: menu.LOGOUT_LINKS, activeLinkPath: _request.path, headTitle: "Shop - Logout" });
});

module.exports = router;
