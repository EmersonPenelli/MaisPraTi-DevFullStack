/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

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

function calcularSomas(matriz) {
  let SL = [];
  let SC = [];

  for (let i = 0; i < matriz.length; i++) {
    let somaLinha = 0;
    let somaColuna = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      somaLinha += matriz[i][j];
      somaColuna += matriz[j][i];
    }
    SL.push(somaLinha);
    SC.push(somaColuna);
  }

  return [SL, SC];
}

const LINHAS = 5;
const COLUNAS = 5;
const MATRIZ = criarMatriz(LINHAS, COLUNAS);

const [somaLinha, somaColuna] = calcularSomas(MATRIZ);

imprimirMatriz(MATRIZ);

console.log("Vetor SL (somas das linhas):", somaLinha);
console.log("Vetor SC (somas das colunas):", somaColuna);
