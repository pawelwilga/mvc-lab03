const menu = require('../constants/navigation');
const { STATUS_CODE } = require("../constants/statusCode");

const path = require("path");

const express = require("express");

const renderNewProductPage = require("../views/renderNewProductPage");

const router = express.Router();

router.get("/add", (_request, response) => {
  response.render('add-product', { menuLinks: menu.MENU_LINKS, activeLinkPath: _request.path, headTitle: 'Shop - add product' });
});

router.post("/add", (request, response) => {
  const { name, description } = request.body;

  fileSystem.writeFile(
    "product.txt",
    `Name: ${name}, Description: ${description}`,
    (error) => {
      if (error) {
        throw error;
      }

      response.status(STATUS_CODE.FOUND).redirect("/product/new");
    }
  );
});

router.get("/new", (_request, response) => {
  fileSystem.readFile("product.txt", "utf-8", (_error, data) => {
    response.send(renderNewProductPage(data));
  });
});

module.exports = router;
