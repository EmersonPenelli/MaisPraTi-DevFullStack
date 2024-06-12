/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz

Escrever essas somas e a matriz.
*/

function calcularSomas(matriz) {
  let somaLinha4 = 0;
  let somaColuna2 = 0;
  let somaDiagonalPrincipal = 0;
  let somaTotal = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      somaTotal += matriz[i][j];

      if (i === 3) somaLinha4 += matriz[i][j];
      if (j === 1) somaColuna2 += matriz[i][j];
      if (i === j) somaDiagonalPrincipal += matriz[i][j];
    }
  }

  return {
    somaLinha4,
    somaColuna2,
    somaDiagonalPrincipal,
    somaTotal,
  };
}

const LINHAS = 5;
const COLUNAS = 5;
const MATRIZ = criarMatriz(LINHAS, COLUNAS);

const { somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTotal } =
  calcularSomas(MATRIZ);

imprimirMatriz(MATRIZ);
console.log("Soma dos elementos da linha 4 de M: ", somaLinha4);
console.log("Soma dos elementos da coluna 2 de M: ", somaColuna2);
console.log(
  "Soma dos elementos da diagonal principal: ",
  somaDiagonalPrincipal
);
console.log("Soma de todos os elementos da matriz da matriz M: ", somaTotal);
