/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

const prompt = require("prompt-sync")();

function receberEntradaDecimal(mensagem) {
  let decimal;
  while (true) {
    decimal = parseFloat(prompt(mensagem));
    if (!isNaN(decimal)) {
      break;
    }
    console.log("Informe um número decimal válido!");
  }
  return decimal;
}

function compactarVetor(A) {
  const B = A.filter((valor) => valor > 0); // Compacta o vetor removendo valores nulos (0) e negativos
  return B;
}

function preencherVetor(TAMANHO) {
  const vetor = [];
  for (let i = 0; i < TAMANHO; i++) {
    vetor.push(receberEntradaDecimal(`Informe o valor para a posição ${i}: `));
  }
  return vetor;
}

const TAMANHO = 100; // Define o tamanho do vetor
const VETOR = preencherVetor(TAMANHO);

const B = compactarVetor(VETOR);

console.log("Vetor original:", VETOR);
console.log("Vetor compactado:", B);
