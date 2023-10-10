const express = require("express");
const route = express();
const {
  atualizarProduto,
  cadastrarProduto,
  detalharProduto,
  listarProdutos,
  excluirProduto,
} = require("./../controllers/ProductsControllers");

route.get("/produto", listarProdutos);
route.get("/produto/:id", detalharProduto);
route.post("/produto", cadastrarProduto);
route.put("/produto/:id", atualizarProduto);
route.delete("/produto/:id", excluirProduto);

module.exports = route;
