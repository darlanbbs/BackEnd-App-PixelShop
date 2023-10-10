const pool = require("./../connection/Connection");

const listarProdutos = async (req, res) => {
  try {
    const { rows } = await pool.query("select * from produtos");

    return res.json(rows);
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

const detalharProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows, rowCount } = await pool.query(
      "select * from produtos where id = $1",
      [id]
    );

    if (rowCount < 1) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

const cadastrarProduto = async (req, res) => {
  const { quantidade_estoque, nome, preco, descricao } = req.body;

  try {
    const { rows } = await pool.query(
      "insert into produtos (nome,preco,quantidade_estoque,descricao) values ($1, $2, $3, $4)",
      [nome, preco, quantidade_estoque, descricao]
    );
    return res.status(201).json({ message: "Produto criado com sucesso" });
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

const atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { quantidade_estoque, nome, preco, descricao } = req.body;

  try {
    const { rows, rowCount } = await pool.query(
      "select * from produtos where id = $1",
      [id]
    );

    if (rowCount < 1) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    const camposAtualizacao = {};

    if (quantidade_estoque)
      camposAtualizacao.quantidade_estoque = quantidade_estoque;
    if (nome) camposAtualizacao.nome = nome;
    if (preco) camposAtualizacao.preco = preco;
    if (descricao) camposAtualizacao.descricao = descricao;

    if (Object.keys(camposAtualizacao).length === 0) {
      return res
        .status(400)
        .json({ mensagem: "Nenhum campo de atualização fornecido" });
    }

    const query = {
      text:
        "update produtos set " +
        Object.keys(camposAtualizacao)
          .map((campo, index) => `${campo} = $${index + 1}`)
          .join(", ") +
        ` where id = $${Object.keys(camposAtualizacao).length + 1}`,
      values: [...Object.values(camposAtualizacao), id],
    };

    await pool.query(query);

    return res.status(201).json({ message: "Produto atualizado com sucesso" });
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

const excluirProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows, rowCount } = await pool.query(
      "select * from produtos where id = $1",
      [id]
    );

    if (rowCount < 1) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    await pool.query("delete from produtos where id = $1", [id]);

    return res.status(204).json({ mensagem: "Produto excluído com sucesso" });
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

module.exports = {
  listarProdutos,
  detalharProduto,
  cadastrarProduto,
  atualizarProduto,
  excluirProduto,
};
