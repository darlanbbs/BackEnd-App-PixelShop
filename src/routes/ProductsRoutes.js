const express = require("express");
const route = express();
const {
  atualizarProduto,
  cadastrarProduto,
  detalharProduto,
  listarProdutos,
  deletarProduto,
} = require("./../controllers/ProductsControllers");

route.post("/cadastro", (req, res) => {});
route.post("/login", (req, res) => {});

module.exports = route;
