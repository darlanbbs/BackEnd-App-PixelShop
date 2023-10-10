const express = require("express");
const route = express();
const {
  atualizarProduto,
  cadastrarProduto,
  detalharProduto,
  listarProdutos,
  excluirProduto,
} = require("./../controllers/ProductsControllers");
const verificarProdutoExistente = require("../middleware/ProductsMiddleware");

route.get("/produto", listarProdutos);
route.get("/produto/:id", detalharProduto);
route.post("/produto", verificarProdutoExistente, cadastrarProduto);
route.put("/produto/:id", atualizarProduto);
route.delete("/produto/:id", excluirProduto);

module.exports = route;
