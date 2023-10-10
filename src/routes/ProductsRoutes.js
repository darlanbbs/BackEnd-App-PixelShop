const express = require("express");
const route = express();
const {
  atualizarProduto,
  cadastrarProduto,
  detalharProduto,
  listarProdutos,
  excluirProduto,
} = require("./../controllers/ProductsControllers");

rotas.get("/produto", listarProdutos);
rotas.get("/produto/:id", detalharProduto);
rotas.post("/produto", cadastrarProduto);
rotas.put("/produto/:id", atualizarProduto);
rotas.delete("/produto/:id", excluirProduto);

module.exports = route;
