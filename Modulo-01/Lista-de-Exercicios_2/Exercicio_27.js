/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/

const prompt = require("prompt-sync")();

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("	"));
  }
}

function receberEntradaInteira(mensagem, limite) {
  if (limite == undefined) {
    limite = Number.MAX_SAFE_INTEGER;
  }
  let inteiro = "a";
  do {
    try {
      inteiro = parseInt(prompt(mensagem));
    } catch (error) {
      console.log(
        "Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)"
      );
      inteiro = "a";
    }
    if (inteiro > limite) {
      console.log(
        "Informe um número inteiro, positivo válido menor ou igual a " +
          limite +
          "!"
      );
      inteiro = "a";
    } else if (isNaN(inteiro)) {
      inteiro = "a";
      console.log(
        "Informe um número inteiro, positivo válido menor ou igual a " +
          limite +
          "!"
      );
    }
  } while (inteiro == "a");
  return inteiro;
}

function criarMatriz(linhas, colunas) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = receberEntradaInteira(
        `Informe um inteiro para a posição ${i}, ${j}: `
      );
    }
  }
  return matriz;
}

function multiplicarMatrizPorInteiro(matrizA, inteiro) {
  const vetor = [];
  for (let i = 0; i < matrizA.length; i++) {
    for (let j = 0; j < matrizA[i].length; j++) {
      vetor.push(matrizA[i][j] * inteiro);
    }
  }
  return vetor;
}

const LINHAS = 6;
const COLUNAS = 6;

const MATRIZ = criarMatriz(LINHAS, COLUNAS);
const VALOR_A = receberEntradaInteira(
  "Informe o valor A pelo qual a matriz deve ser multiplicada: "
);
const VETOR = multiplicarMatrizPorInteiro(MATRIZ, VALOR_A);

console.log("Matriz original:");
imprimirMatriz(MATRIZ);
console.log("\nValor de A:", VALOR_A);
console.log("\nVetor resultante:");
console.log(VETOR);
