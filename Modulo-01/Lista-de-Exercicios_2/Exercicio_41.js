/*
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

const PESSOA = {
  nome: "Elon",
  idade: 27,
};

console.log(`${PESSOA.idade}`);

PESSOA.email = "elon@gmail.com";

console.log(`${PESSOA.email}`);
