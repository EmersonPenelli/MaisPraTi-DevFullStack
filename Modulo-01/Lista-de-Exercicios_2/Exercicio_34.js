/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/

const prompt = require("prompt-sync")();

function numeroAleatorio() {
  return (Math.random() * 20 - 10).toFixed(2); // Gera números decimais entre -10 e 10
}

function receberEntradaDecimal(mensagem) {
  let decimal;
  while (true) {
    try {
      decimal = parseFloat(prompt(mensagem));
      if (!isNaN(decimal) && decimal >= 0) {
        break;
      }
    } catch (error) {
      // Continue loop
    }
    console.log("Informe um número decimal positivo válido!");
  }
  return decimal;
}

function criarMatriz(linhas, colunas, random = true) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = random
        ? numeroAleatorio()
        : receberEntradaDecimal(
            `Informe um número real para a posição ${i}, ${j}: `
          );
    }
  }
  return matriz;
}

function multiplicarMatrizpelaDiagonal(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    const elementoDiagonalPrincipal = matriz[i][i];
    for (let j = 0; j < matriz[i].length; j++) {
      matriz[i][j] = (matriz[i][j] * elementoDiagonalPrincipal).toFixed(2);
    }
  }
}

function imprimirMatriz(matriz) {
  for (let linha of matriz) {
    console.log(linha.join("\t"));
  }
}

const LINHAS = 50;
const COLUNAS = 50;

let matriz = criarMatriz(LINHAS, COLUNAS);
// Se quiser entrada manual, comente a linha acima e descomente a linha abaixo:
// let matriz = criarMatriz(LINHAS, COLUNAS, false);

console.log("Matriz Original:");
imprimirMatriz(matriz);

console.log("\n");

multiplicarMatrizpelaDiagonal(matriz);

console.log("Matriz Modificada:");
imprimirMatriz(matriz);
