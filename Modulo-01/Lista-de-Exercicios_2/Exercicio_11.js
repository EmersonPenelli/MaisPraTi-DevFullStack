/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

const prompt = require("prompt-sync")();

function receberEntradaDecimal(mensagem) {
  let decimal;
  do {
    try {
      decimal = parseFloat(prompt(mensagem));
    } catch (error) {
      console.log("Informe um número decimal, positivo válido!");
      decimal = NaN;
    }
    if (isNaN(decimal)) {
      console.log("Informe um número decimal válido!");
    }
  } while (isNaN(decimal));
  return decimal;
}

let primeiroTermo = receberEntradaDecimal("Informe o primeiro termo da PA: ");
let razao = receberEntradaDecimal("Informe a razão da PA: ");

let soma = 0;
let termoAtual;

console.log("Os 10 primeiros elementos da PA são:");
for (let i = 0; i < 10; i++) {
  termoAtual = primeiroTermo + i * razao;
  console.log(termoAtual);
  soma += termoAtual;
}

console.log("Soma: " + soma);
