const pool = require("../connection/Connection");

const verificarProdutoExistente = async (req, res, next) => {
  const { nome } = req.body;

  try {
    const { rows, rowCount } = await pool.query(
      "select * from produtos where nome = $1",
      [nome]
    );

    if (rowCount > 0) {
      return res.status(400).json({ mensagem: "Produto já existe" });
    }

    next();
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

const verificarQuantidadeEstoque = async (req, res, next) => {
  const { id } = req.params;
  const { quantidade_estoque } = req.body;

  try {
    const { rows } = await pool.query(
      "select quantidade_estoque from produtos where nome = $1",
      [id]
    );

    if (quantidade_estoque >= 0) {
      next();
    }
    return res.status(400).json({ mensagem: "Quantidade inválida" });
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

module.exports = {
  verificarQuantidadeEstoque,
  verificarProdutoExistente,
};
