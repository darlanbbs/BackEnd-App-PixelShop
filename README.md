# BackEnd-App-PixelShop

Este projeto é uma aplicação para gerenciar produtos em um banco de dados PostgreSQL. Ele fornece funcionalidades para listar, detalhar, cadastrar, atualizar e excluir produtos.

# Executando o Projeto

Siga as instruções abaixo para executar o projeto:

# 1.Configuração do Banco de Dados:
 - Nota: Por ser um banco de dados online hospedado em Oregon, pode haver um leve delay ao executar as funções. Se preferir, você também pode configurar um banco de dados local para evitar esse atraso.
 - Crie uma conta no Render(https://render.com/).
 - Crie um novo banco de dados PostgreSQL no Render.
 - Obtenha as credenciais (usuário, senha, host, porta e nome do banco de dados) do banco de dados no Render e configure as variáveis de ambiente no arquivo .env.
  ```
USERNAME=<seu_usuario_render> (Geralmente é 'postgre')
PASS=<sua_senha_render>
EXTERNALLINK=<seu_link_do_banco_de_dados_render> (Geralmente é a regiao + postgres.render.com no meu caso é oregon-postgres.render.com por estar mais perto do Brasil)
PORT=<sua_porta_do_banco_de_dados_render>(Geralmente é 5432)
DATABASE=<seu_nome_de_banco_de_dados_render>
DBNAME=<seu_nome_de_banco_de_dados_render>
```

# 2.Instale as Dependências:

- No diretório do projeto, execute o comando:
  ```
  npm install
  ```
# 3.Inicie o Servidor:
- Execute o comando:
  ```
  npm run dev
  ```
- O servidor estará disponível em http://localhost:5000.

# Funcionalidades

Listar Produtos:

- Endpoint: GET /produto
- Descrição: Retorna uma lista de todos os produtos cadastrados.
  
Detalhar Produto:

- Endpoint: GET /produto/:id
- Descrição: Retorna detalhes específicos de um produto com base no id fornecido.
  
Cadastrar Produto:

- Endpoint: POST /produto
- Descrição: Permite cadastrar um novo produto com os seguintes campos no corpo da requisição:
```
quantidade_estoque
nome
preco
descricao(Não é obrigatório passar)
```

Editar Produto:

- Endpoint: PUT /produto/:id
- Descrição: Permite atualizar os dados de um produto existente com os seguintes campos no corpo da requisição:
```
quantidade_estoque
nome
preco
descricao
```

Excluir Produto:

Endpoint: DELETE /produto/:id<br>
Descrição: Permite excluir um produto com base no id fornecido.

# Dificuldade 

Durante o desenvolvimento, encontrei a seguinte dificuldade:

Dificuldade na Edição de Valores:

Ao implementar a função de edição de valores, encontrei um desafio relacionado à validação e atualização correta dos campos. Para resolver esse problema, revisei a lógica de atualização e adicionei verificações adicionais para garantir que os dados fossem atualizados de forma precisa e segura.
