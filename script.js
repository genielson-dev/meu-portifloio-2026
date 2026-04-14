const projetos = [
  {
    nome: "Site de Vendas",
    descricao: "Projeto de e-commerce simples"
  },
  {
    nome: "Sistema de Cadastro",
    descricao: "Cadastro de usuários com JS"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(div);
});