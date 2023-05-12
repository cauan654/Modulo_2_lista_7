const express = require("express");
const app = express();

app.get("/usuarios", (req, res) => {
  const usuarios = [
    {
      nomeUsuario: "Usuário 1",
      criadoEm: new Date().toISOString(),
      idade: 25,
      email: "usuario1@example.com",
      isAdmin: false,
      telefone: ["123456789", "987654321"],
      endereco: ["Rua 1", "Cidade 1", "Estado 1"]
    },
    {
      nomeUsuario: "Usuário 2",
      criadoEm: new Date().toISOString(),
      idade: 30,
      email: "usuario2@example.com",
      isAdmin: true,
      telefone: ["111111111", "222222222"],
      endereco: ["Rua 2", "Cidade 2", "Estado 2"]
    },
  ];

  res.json(usuarios);
});

app.get("/produtos", (req, res) => {
  const produtos = [
    {
      nomeProduto: "Produto 1",
      descricao: "Descrição do Produto 1",
      valor: 10.99,
      criadoEm: new Date().toISOString(),
      emEstoque: true
    },
    {
      nomeProduto: "Produto 2",
      descricao: "Descrição do Produto 2",
      valor: 20.99,
      criadoEm: new Date().toISOString(),
      emEstoque: false
    },
  ];

  res.json(produtos);
});

const port = 3000;

app.listen(port, () => {
  console.log("Servidor rodando em http://localhost:${port}");
});