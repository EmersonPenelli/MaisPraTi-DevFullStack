/*
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
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

function calcularMediaDiagonalSecundaria(matriz) {
  const soma = matriz.reduce(
    (acc, linha, i) => acc + linha[matriz.length - 1 - i],
    0
  );
  return (soma / matriz.length).toFixed(2);
}

function multiplicarDiagonalPrincipal(matriz, media) {
  for (let i = 0; i < matriz.length; i++) {
    matriz[i][i] *= media;
  }
}

function imprimirMatriz(matriz) {
  matriz.forEach((linha) => console.log(linha.join("\t")));
}

const LINHAS = 3;
const COLUNAS = 3;

// Use 'true' para valores aleatórios ou 'false' para entrada manual
const MATRIZ = criarMatriz(LINHAS, COLUNAS, true);
// const MATRIZ = criarMatriz(LINHAS, COLUNAS, false); // Use esta linha para entrada manual

const MEDIA = calcularMediaDiagonalSecundaria(MATRIZ);

console.log("Matriz Original:");
imprimirMatriz(MATRIZ);

console.log(`\nA média da diagonal secundária é: ${MEDIA}\n`);

multiplicarDiagonalPrincipal(MATRIZ, MEDIA);

console.log("Matriz Modificada:");
imprimirMatriz(MATRIZ);
