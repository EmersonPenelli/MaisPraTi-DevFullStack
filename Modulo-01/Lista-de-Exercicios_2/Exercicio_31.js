/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/

const prompt = require("prompt-sync")();

function numeroAleatorio() {
  return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
}

function receberEntradaInteira(mensagem, limite = Number.MAX_SAFE_INTEGER) {
  let inteiro;
  while (true) {
    inteiro = parseInt(prompt(mensagem));
    if (!isNaN(inteiro) && inteiro <= limite && inteiro >= 0) {
      break;
    }
    console.log(
      "Informe um número inteiro, positivo válido menor ou igual a " +
        limite +
        "!"
    );
  }
  return inteiro;
}

function criarMatriz(linhas, colunas) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = numeroAleatorio();
    }
  }
  return matriz;
}

function processarMatriz(valorA, matrizV) {
  let contador = 0;
  let matrizX = [];
  for (let i = 0; i < matrizV.length; i++) {
    let novaLinha = [];
    for (let j = 0; j < matrizV[i].length; j++) {
      if (matrizV[i][j] === valorA) {
        contador++;
      } else {
        novaLinha.push(matrizV[i][j]);
      }
    }
    matrizX.push(novaLinha);
  }
  return { contador, matrizX };
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"));
  }
}

const LINHAS = 30;
const COLUNAS = 30;
const A = 3;
// Se quiser ler "A" descomente o código abaixo:
// const A = receberEntradaInteira("Informe um valor inteiro: ");

const MATRIZ = criarMatriz(LINHAS, COLUNAS);
// Se quiser  ler a matriz descomente o código abaixo:
// const MATRIZ = criarMatriz2(LINHAS, COLUNAS);

const { contador, matrizX } = processarMatriz(A, MATRIZ);

console.log("Matriz V:");
imprimirMatriz(MATRIZ);
console.log("\n");

console.log(`Valor A a ser procurado: ${A}`);
console.log("\n");

console.log(`Contador: ${contador}`);
console.log("\n");

console.log("Matriz X:");
imprimirMatriz(matrizX);
