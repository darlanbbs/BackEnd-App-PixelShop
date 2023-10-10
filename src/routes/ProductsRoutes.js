const express = require("express");
const route = express();
const {
  atualizarProduto,
  cadastrarProduto,
  detalharProduto,
  listarProdutos,
  excluirProduto,
} = require("./../controllers/ProductsControllers");
const {
  verificarProdutoExistente,
  verificarQuantidadeEstoque,
} = require("../middleware/ProductsMiddleware");

route.get("/produto", listarProdutos);
route.get("/produto/:id", detalharProduto);
route.delete("/produto/:id", excluirProduto);
route.post("/produto", verificarProdutoExistente, cadastrarProduto);
route.put("/produto/:id", verificarQuantidadeEstoque, atualizarProduto);

module.exports = route;
