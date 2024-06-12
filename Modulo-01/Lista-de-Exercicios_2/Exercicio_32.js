/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/

const prompt = require("prompt-sync")();

function numeroAleatorio() {
  return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
}

function receberEntradaInteira(mensagem, limite = Number.MAX_SAFE_INTEGER) {
  let inteiro;
  while (true) {
    inteiro = parseInt(prompt(mensagem));
    if (!isNaN(inteiro) && inteiro >= 0 && inteiro <= limite) {
      break;
    }
    console.log(
      `Informe um número inteiro, positivo válido menor ou igual a ${limite}!`
    );
  }
  return inteiro;
}

function criarMatriz(linhas, colunas, random = true) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = random
        ? numeroAleatorio()
        : receberEntradaInteira(
            `Informe um inteiro para a posição ${i}, ${j}: `
          );
    }
  }
  return matriz;
}

function encontrarMaiorElementoModulo(linha) {
  return Math.max(...linha.map(Math.abs));
}

function dividirPorMaiorElementoModulo(linha, maior) {
  return linha.map((elemento) => (elemento / maior).toFixed(2));
}

function imprimirMatriz(matriz) {
  matriz.forEach((linha) => console.log(linha.join("\t")));
}

function gerarMatrizDivididaModulo(matriz) {
  return matriz.map((linha) =>
    dividirPorMaiorElementoModulo(linha, encontrarMaiorElementoModulo(linha))
  );
}

const LINHAS = 12;
const COLUNAS = 13;

// Use 'true' para valores random ou 'false' para entrada manual
const MATRIZ = criarMatriz(LINHAS, COLUNAS, true);
// const MATRIZ = criarMatriz(LINHAS, COLUNAS, false); // Use esta linha para entrada manual

const MATRIZMODIFICADA = gerarMatrizDivididaModulo(MATRIZ);

console.log("Matriz Original:");
imprimirMatriz(MATRIZ);
console.log("\nMatriz Modificada:");
imprimirMatriz(MATRIZMODIFICADA);
