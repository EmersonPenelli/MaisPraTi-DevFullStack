/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

const prompt = require("prompt-sync")();

let somaSalario = 0;
let somaFilhos = 0;
let maiorSalario = 0;
let contadorSalarioAbaixo350 = 0;
let contador = 0;

do {
  let salario = receberEntradaDecimal("Informe o salário: ");
  let filhos = receberEntradaInteira("Informe o número de filhos: ");

  somaSalario += salario;
  somaFilhos += filhos;

  if (salario > maiorSalario) {
    maiorSalario = salario;
  }

  if (salario <= 350) {
    contadorSalarioAbaixo350++;
  }

  contador++;
} while (confirmarContinuacao());

console.log(`Média de salários: R$ ${somaSalario / contador}`);
console.log(`Média do número de filhos: ${somaFilhos / contador}`);
console.log(`Maior salário: R$ ${maiorSalario}`);
console.log(
  `Percentual de pessoas com salário abaixo de R$ 350: ${(
    (contadorSalarioAbaixo350 / contador) *
    100
  ).toFixed(2)}%`
);

function receberEntradaDecimal(mensagem) {
  let decimal;
  do {
    decimal = parseFloat(prompt(mensagem));
    if (isNaN(decimal) || decimal < 0) {
      console.log("Informe um número decimal positivo válido!");
    }
  } while (isNaN(decimal) || decimal < 0);
  return decimal;
}

function receberEntradaInteira(mensagem) {
  let inteiro;
  do {
    inteiro = parseInt(prompt(mensagem));
    if (isNaN(inteiro) || inteiro < 0) {
      console.log("Informe um número inteiro positivo válido!");
    }
  } while (isNaN(inteiro) || inteiro < 0);
  return inteiro;
}

function confirmarContinuacao() {
  const resposta = prompt("Deseja continuar? (S/N): ");
  return resposta.toUpperCase() === "S";
}
