const menu = require('../constants/navigation');
const productsSlice = require('../store/products');
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

  productsSlice.newestProduct = { name: name, description: description };
  productsSlice.products.push(productsSlice.newestProduct);
  response.status(STATUS_CODE.FOUND).redirect("/products/new");
});

router.get("/new", (_request, response) => {
  response.render('newest-product', { menuLinks: menu.MENU_LINKS, activeLinkPath: _request.path, headTitle: 'Shop - newest product', newestProduct: productsSlice.newestProduct })
});

module.exports = router;
