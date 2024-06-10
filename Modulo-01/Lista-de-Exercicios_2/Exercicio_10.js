/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

const prompt = require("prompt-sync")();

function receberEntradaInteira(mensagem, limite) {
  let inteiro;
  do {
    inteiro = parseInt(prompt(mensagem));
    if (
      isNaN(inteiro) ||
      inteiro < 0 ||
      (limite !== undefined && inteiro > limite)
    ) {
      console.log(
        `Informe um número inteiro, positivo válido${
          limite !== undefined ? " menor ou igual a " + limite : ""
        }!`
      );
    }
  } while (
    isNaN(inteiro) ||
    inteiro < 0 ||
    (limite !== undefined && inteiro > limite)
  );
  return inteiro;
}

const SIM = "Sim";
const NAO = "Não";

let menorValor = Infinity;
let soma = 0;
let contadorPares = 0;
let contador = 0;

do {
  const valor = receberEntradaInteira("Informe o valor: ");
  soma += valor;
  menorValor = Math.min(menorValor, valor);
  if (valor % 2 === 0) {
    contadorPares++;
  }
  contador++;

  const continuar = receberEntradaInteira(
    "Deseja continuar? (0 - Sim, 1 - Não): ",
    1
  );
  if (continuar !== 0) {
    break;
  }
} while (true);

const media = soma / contador;

console.log(`Somatório: ${soma}`);
console.log(`Menor valor: ${menorValor}`);
console.log(`Média: ${media}`);
console.log(`Quantidade de valores pares: ${contadorPares}`);
